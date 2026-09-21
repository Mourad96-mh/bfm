/**
 * Génère les visuels du site à partir des planches de la plaquette client.
 *
 * Pourquoi découper la plaquette plutôt que piocher dans une banque d'images : les visuels
 * BFM montrent des équipes en polo BFM, avec une direction artistique homogène. Une photo
 * de banque générique aurait l'effet inverse de celui recherché (cf. ARCHITECTURE.md §5.2).
 *
 * Les rectangles sont exprimés en fractions de l'image source [x0, y0, x1, y1],
 * pour rester lisibles et indépendants des dimensions exactes de chaque planche.
 *
 *   node scripts/images.mjs            → génère tout
 *   node scripts/images.mjs --sheet    → génère aussi une planche-contact de vérification
 */

import sharp from 'sharp';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const SRC = path.resolve(ROOT, '..', 'brand', 'brochure');
const OUT = path.resolve(ROOT, 'public', 'media');

const P = (n) => `WhatsApp Image 2026-09-19 at 13.45.${n}.jpeg`;

/** Planche de la plaquette → fichier source. */
const PLATE = {
  flyerWide: P('56'),
  flyerTall: P('56 (1)'),
  p03_syndic: P('56 (2)'),
  p02_about: P('56 (3)'),
  p01_cover: P('56 (4)'),
  p12_why: P('56 (5)'),
  p11_facades: P('57'),
  p10_nuisibles: P('57 (1)'),
  p09_piscines: P('57 (2)'),
  p08_menage: P('57 (3)'),
  p07_exterieurs: P('58'),
  p06_nettoyage: P('58 (1)'),
  p05_maintenance: P('58 (2)'),
  p04_conciergerie: P('58 (3)'),
};

/**
 * [nom de sortie, planche, [x0,y0,x1,y1], largeur cible, hauteur cible]
 *
 * Chaque planche est bâtie pareil : le texte à gauche, la photo à droite derrière un liseré
 * doré courbe, et un encadré navy « Notre priorité » posé sur le bas de la photo. Les boîtes
 * commencent donc après le liseré (x0 ≈ 0,55–0,66, le creux de la courbe) et s'arrêtent avant
 * l'encadré (y1). Les cadrages ont été validés à l'œil sur planche-contact : tout ce qui laisse
 * apparaître une lettre du titre ou un bout de courbe a été resserré.
 *
 * Les tailles de sortie restent proches du natif (× 1,3 au plus) : les planches sont des JPEG
 * WhatsApp, agrandir davantage n'ajouterait aucun détail et alourdirait les pages.
 */
const CROPS = [
  // — Fiches de service ———————————————————————————————————————
  ['syndic-de-copropriete', 'p03_syndic', [0.66, 0.04, 1.0, 0.55], 480, 950],
  ['conciergerie', 'p04_conciergerie', [0.55, 0.02, 1.0, 0.5], 640, 900],
  ['maintenance-et-services-techniques', 'p05_maintenance', [0.6, 0.02, 1.0, 0.44], 590, 762],
  // Aucune planche dédiée aux petits travaux, et les vignettes de la double page plafonnent à
  // ~200 px : on reprend la planche maintenance en gros plan sur les mains et l'outil, cadrage
  // assez différent de la fiche 03 pour ne pas donner l'impression d'une image répétée.
  ['petits-travaux', 'p05_maintenance', [0.7, 0.1, 1.0, 0.4], 440, 548],
  ['nettoyage-et-proprete', 'p06_nettoyage', [0.57, 0.04, 1.0, 0.5], 625, 837],
  ['menage-chez-les-particuliers', 'p08_menage', [0.53, 0.03, 1.0, 0.46], 684, 783],
  ['espaces-exterieurs', 'p07_exterieurs', [0.6, 0.03, 1.0, 0.49], 582, 837],
  ['entretien-des-piscines', 'p09_piscines', [0.57, 0.03, 1.0, 0.41], 625, 691],
  // Bord droit de la planche 10 : une bande blanche déborde, d'où le x1 à 0,955.
  ['traitement-des-nuisibles', 'p10_nuisibles', [0.56, 0.03, 0.955, 0.46], 524, 857],
  ['nettoyage-de-facades', 'p11_facades', [0.59, 0.03, 1.0, 0.57], 543, 1078],

  // — Pages « publics » ———————————————————————————————————————
  ['audience-coproprietes', 'p02_about', [0.63, 0.04, 1.0, 0.55], 538, 928],
  ['audience-entreprises', 'p06_nettoyage', [0.68, 0.05, 1.0, 0.42], 465, 673],
  ['audience-collectivites', 'p07_exterieurs', [0.6, 0.3, 1.0, 0.49], 582, 344],
  ['audience-particuliers', 'p08_menage', [0.55, 0.03, 0.85, 0.35], 437, 582],

  // — Accueil & à propos ————————————————————————————————————————
  ['hero-residence', 'p01_cover', [0.62, 0.06, 1.0, 0.7], 553, 1165],
  ['hero-secondaire', 'p03_syndic', [0.66, 0.06, 1.0, 0.36], 480, 545],
  ['about-residence', 'p01_cover', [0.5, 0.44, 1.0, 0.77], 729, 600],
  ['methode-visuel', 'p11_facades', [0.59, 0.3, 1.0, 0.57], 543, 500],
];

const clamp01 = (v) => Math.min(1, Math.max(0, v));

async function cropOne(name, plateKey, box, w, h) {
  const file = PLATE[plateKey];
  const src = path.join(SRC, file);
  const img = sharp(src, { failOn: 'none' });
  const meta = await img.metadata();

  const [fx0, fy0, fx1, fy1] = box.map(clamp01);
  const left = Math.round(fx0 * meta.width);
  const top = Math.round(fy0 * meta.height);
  const width = Math.max(1, Math.round((fx1 - fx0) * meta.width) - 1);
  const height = Math.max(1, Math.round((fy1 - fy0) * meta.height) - 1);

  await sharp(src)
    .extract({ left, top, width, height })
    .resize(w, h, { fit: 'cover', position: 'attention', kernel: 'lanczos3' })
    .webp({ quality: 80, effort: 5 })
    .toFile(path.join(OUT, `${name}.webp`));

  return { name, from: `${plateKey} (${width}×${height})`, to: `${w}×${h}` };
}

/** Le logo, isolé sur son fond crème — sert au balisage et au pied de page. */
async function makeLogo() {
  const src = path.join(SRC, PLATE.p12_why);
  const meta = await sharp(src).metadata();
  const left = Math.round(0.05 * meta.width);
  const top = Math.round(0.06 * meta.height);
  const width = Math.round(0.44 * meta.width);
  const height = Math.round(0.115 * meta.height);

  await sharp(src)
    .extract({ left, top, width, height })
    .resize(760, null, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, 'bfm-logo.png'));

  return { name: 'bfm-logo.png', from: `p12_why (${width}×${height})`, to: '760×auto' };
}

/** L'image de partage (Open Graph), 1200×630. */
async function makeOg() {
  const src = path.join(SRC, PLATE.p01_cover);
  const meta = await sharp(src).metadata();

  const photo = await sharp(src)
    .extract({
      left: Math.round(0.02 * meta.width),
      top: Math.round(0.42 * meta.height),
      width: Math.round(0.96 * meta.width),
      height: Math.round(0.34 * meta.height),
    })
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .toBuffer();

  const overlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stop-color="#0B1D3A" stop-opacity="0.97"/>
          <stop offset="52%"  stop-color="#0B1D3A" stop-opacity="0.86"/>
          <stop offset="100%" stop-color="#0B1D3A" stop-opacity="0.32"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <rect x="0" y="0" width="1200" height="8" fill="#C9A227"/>
      <rect x="72" y="214" width="46" height="4" fill="#C9A227"/>
      <text x="72" y="196" font-family="Archivo, Arial, sans-serif" font-size="25"
            font-weight="700" letter-spacing="5" fill="#C9A227">BEST FACILITY MANAGEMENT</text>
      <text x="72" y="304" font-family="Archivo, Arial, sans-serif" font-size="78"
            font-weight="800" letter-spacing="-2.5" fill="#FFFFFF">Un seul partenaire</text>
      <text x="72" y="382" font-family="Archivo, Arial, sans-serif" font-size="78"
            font-weight="800" letter-spacing="-2.5" fill="#3FBF86">pour votre patrimoine</text>
      <text x="72" y="452" font-family="Arial, sans-serif" font-size="27" fill="#C8D3E2">
        Syndic · Conciergerie · Maintenance · Nettoyage · Espaces extérieurs
      </text>
      <text x="72" y="546" font-family="Archivo, Arial, sans-serif" font-size="25"
            font-weight="700" letter-spacing="1" fill="#FFFFFF">bfm.co.ma</text>
      <text x="252" y="546" font-family="Arial, sans-serif" font-size="25" fill="#9FB0C6">
        Casablanca — interventions partout au Maroc
      </text>
    </svg>`);

  await sharp(photo)
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(OUT, 'og-bfm.jpg'));

  return { name: 'og-bfm.jpg', from: 'p01_cover + calque', to: '1200×630' };
}

/** Planche-contact : permet de vérifier d'un coup d'œil que les cadrages sont bons. */
async function contactSheet() {
  const files = (await readdir(OUT)).filter((f) => f.endsWith('.webp')).sort();
  const COLS = 5;
  const CELL = 260;
  const rows = Math.ceil(files.length / COLS);

  const tiles = await Promise.all(
    files.map(async (f, i) => ({
      input: await sharp(path.join(OUT, f))
        .resize(CELL - 8, CELL - 8, { fit: 'cover' })
        .png()
        .toBuffer(),
      left: (i % COLS) * CELL + 4,
      top: Math.floor(i / COLS) * CELL + 4,
    })),
  );

  await sharp({
    create: {
      width: COLS * CELL,
      height: rows * CELL,
      channels: 3,
      background: { r: 24, g: 32, b: 48 },
    },
  })
    .composite(tiles)
    .jpeg({ quality: 82 })
    .toFile(path.resolve(ROOT, 'planche-contact.jpg'));

  console.log(`\nPlanche-contact : ${files.length} visuels → site/planche-contact.jpg`);
  files.forEach((f, i) => console.log(`  ${String(i + 1).padStart(2)} ${f}`));
}

/**
 * Écrit src/lib/media.ts : les dimensions réelles de chaque visuel.
 *
 * L'export statique se passe de next/image ; les `width`/`height` doivent donc être posés à la
 * main sur chaque balise. Les générer ici évite qu'ils dérivent des fichiers après un recadrage,
 * et un CLS se serait vu tout de suite sur la fiche de service.
 */
async function writeMediaMap() {
  const files = (await readdir(OUT)).filter((f) => /\.(webp|png|jpg)$/.test(f)).sort();
  const entries = [];
  for (const f of files) {
    const { width, height } = await sharp(path.join(OUT, f)).metadata();
    entries.push(`  '/media/${f}': { w: ${width}, h: ${height} },`);
  }

  const out = `/**
 * Dimensions des visuels — fichier GÉNÉRÉ par \`npm run images\`, à ne pas modifier à la main.
 */

export const mediaSize = {
${entries.join('\n')}
} as const;

export type MediaPath = keyof typeof mediaSize;

/** Les attributs d'une image : \`<img {...img('/media/x.webp')} alt="…" />\`. */
export function img(src: MediaPath) {
  const { w, h } = mediaSize[src];
  return { src, width: w, height: h };
}
`;
  await writeFile(path.resolve(ROOT, 'src', 'lib', 'media.ts'), out, 'utf8');
  return { name: 'src/lib/media.ts', from: `${files.length} fichiers mesurés`, to: 'généré' };
}

async function main() {
  await mkdir(OUT, { recursive: true });

  const report = [];
  for (const [name, plate, box, w, h] of CROPS) {
    report.push(await cropOne(name, plate, box, w, h));
  }
  report.push(await makeLogo());
  report.push(await makeOg());
  report.push(await writeMediaMap());

  console.log(`${report.length} visuels générés dans public/media :\n`);
  for (const r of report) {
    console.log(`  ${r.name.padEnd(38)} ← ${r.from.padEnd(30)} → ${r.to}`);
  }

  if (process.argv.includes('--sheet')) await contactSheet();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
