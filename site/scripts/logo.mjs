/**
 * Redessine le logo BFM en vectoriel.
 *
 * Le logo fourni par le client n'existe qu'en pixels, aplati dans les planches de la plaquette :
 * découpé, il se voit tout de suite comme une image collée (bords sales, fond crème, flou aux
 * petites tailles). On le reconstruit donc à l'identique en SVG — même maison stylisée, mêmes
 * couleurs de charte, même lockup — avec deux différences qui font le travail propre :
 *
 *  - le dessin est géométrique (traits nets à toutes les tailles, fond transparent) ;
 *  - « BFM » et la baseline sont convertis en TRACÉS depuis Archivo, pas laissés en <text> :
 *    le logo ne dépend donc d'aucune police installée, ni côté navigateur ni côté sharp.
 *
 * Les .woff Archivo servent uniquement ici, à la génération ; ils sont mis en cache dans %TEMP%
 * et re-téléchargés au besoin, pour ne pas alourdir le dépôt.
 *
 *   node scripts/logo.mjs        → public/media/bfm-logo.svg, -mark.svg, .png et public/favicon.svg
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import opentype from 'opentype.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const OUT = path.join(ROOT, 'public', 'media');
const CACHE = path.join(os.tmpdir(), 'bfm-fonts');

/** Charte (identique à src/styles/tokens.css). */
const NAVY = '#0B1D3A';
const GREEN = '#0B3D2C';
const GREEN_MID = '#0E7A53';
const GOLD = '#C9A227';

// ——————————————————————————————————————————————————————————————
// Polices → tracés
// ——————————————————————————————————————————————————————————————

const UA = 'Mozilla/5.0 (Windows NT 6.1; rv:30.0) Gecko/20100101 Firefox/30.0';

async function loadArchivo(weight) {
  const file = path.join(CACHE, `Archivo-${weight}.woff`);
  if (!fs.existsSync(file)) {
    fs.mkdirSync(CACHE, { recursive: true });
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}&display=swap`, {
        headers: { 'User-Agent': UA },
      })
    ).text();
    const url = /url\((https[^)]+)\)/.exec(css)[1];
    const buf = Buffer.from(await (await fetch(url, { headers: { 'User-Agent': UA } })).arrayBuffer());
    fs.writeFileSync(file, buf);
  }
  const b = fs.readFileSync(file);
  return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
}

/**
 * Texte → tracé SVG, glyphe par glyphe.
 *
 * On passe par `charToGlyph` plutôt que `getPath` : le moteur de shaping d'opentype.js refuse
 * les tables GSUB d'Archivo (« substFormat: 2 is not yet supported »), et nous n'avons de toute
 * façon besoin d'aucune ligature pour trois capitales et une baseline.
 */
function textPath(font, text, { size, x = 0, y = 0, tracking = 0 }) {
  const scale = size / font.unitsPerEm;
  const combined = new opentype.Path();
  let cursor = x;

  for (const ch of text) {
    const glyph = font.charToGlyph(ch);
    const p = glyph.getPath(cursor, y, size);
    combined.extend(p);
    cursor += glyph.advanceWidth * scale + tracking;
  }

  return { d: combined.toPathData(2), width: cursor - x - tracking };
}

// ——————————————————————————————————————————————————————————————
// La maison — dessin géométrique
// ——————————————————————————————————————————————————————————————

/**
 * Le symbole : une maison au toit à deux pignons décalés (le pignon droit plus haut, relié au
 * gauche par un ressaut vertical), renfermant une skyline à la ligne, un pavillon, deux cyprès
 * et une pelouse. Repère local 0 0 240 208.
 */
function mark(theme = 'light') {
  // Sur fond navy, la skyline navy disparaîtrait et le vert foncé s'éteint : on passe la
  // skyline en blanc et les arbres au vert clair, le reste de la charte ne bouge pas.
  const line = theme === 'dark' ? '#FFFFFF' : NAVY;
  const tree = theme === 'dark' ? '#2E9E6B' : GREEN;
  return `
    <g fill="none" stroke-linecap="butt" stroke-linejoin="miter">
      <!-- Pelouse : posée en premier pour passer derrière le pavillon. -->
      <path d="M138 192c9-12 25-19 43-19 10 0 20 2 28 5v14H138Z" fill="${GREEN_MID}" stroke="none" opacity="0.9"/>

      <!-- Cyprès gauche et droit -->
      <g fill="${tree}" stroke="none">
        <path d="M31 186c-7 0-11-5-11-18s5-30 11-30 11 17 11 30-4 18-11 18Z"/>
        <rect x="29" y="182" width="4" height="10"/>
        <path d="M211 186c-7 0-11-5-11-18s5-30 11-30 11 17 11 30-4 18-11 18Z"/>
        <rect x="209" y="182" width="4" height="10"/>
      </g>

      <!-- Skyline : trois volumes à la ligne, trait navy -->
      <g stroke="${line}" stroke-width="5.5" stroke-linejoin="round">
        <path d="M50 192v-58h32v58"/>
        <path d="M82 192V84h30v108"/>
        <path d="M112 192v-42h24v42"/>
        <path d="M97 84V66"/>
        <path d="M58 146h16M58 160h16M58 174h16"/>
        <path d="M120 162h8M120 176h8"/>
        <path d="M91 102h12M91 118h12M91 134h12M91 150h12"/>
      </g>
      <circle cx="97" cy="61" r="5" fill="${line}" stroke="none"/>

      <!-- Pavillon, en or -->
      <g stroke="${GOLD}" stroke-width="5.5" stroke-linejoin="round">
        <path d="M148 192v-46h38v46"/>
        <path d="M142 146h50"/>
        <path d="M142 134h50v12h-50z"/>
        <path d="M159 192v-24h16v24"/>
      </g>

      <!-- La maison englobante : deux pignons décalés, ouverte en bas. -->
      <path d="M12 192V74L96 24l44 42V12l83 62v118" stroke="${GOLD}" stroke-width="11"/>
      <path d="M6 192h223" stroke="${GOLD}" stroke-width="11"/>
    </g>`;
}

/**
 * Version réduite du symbole, pour le favicon : à 16 px, la skyline détaillée devient une
 * tache. On ne garde que la maison et deux volumes pleins, qui restent lisibles.
 */
function markSimple(houseColor, fillColor) {
  return `
    <g fill="none" stroke-linecap="butt" stroke-linejoin="miter">
      <rect x="56" y="118" width="52" height="74" fill="${fillColor}" stroke="none"/>
      <rect x="124" y="76" width="48" height="116" fill="${fillColor}" stroke="none"/>
      <path d="M14 192V72L96 22l46 44V10l82 62v120" stroke="${houseColor}" stroke-width="20"/>
      <path d="M4 192h232" stroke="${houseColor}" stroke-width="20"/>
    </g>`;
}

// ——————————————————————————————————————————————————————————————
// Composition
// ——————————————————————————————————————————————————————————————

/** Motif zellige (khatem) : le filet or posé sur la hampe du B, comme sur le logo d'origine. */
function zelligeDefs() {
  const R = 11;
  const r = (R * Math.cos(Math.PI / 4)) / Math.cos(Math.PI / 8);
  const pts = [];
  for (let i = 0; i < 8; i++) {
    const a1 = ((-90 + i * 45) * Math.PI) / 180;
    const a2 = ((-90 + i * 45 + 22.5) * Math.PI) / 180;
    pts.push([12 + R * Math.cos(a1), 12 + R * Math.sin(a1)]);
    pts.push([12 + r * Math.cos(a2), 12 + r * Math.sin(a2)]);
  }
  const d = `M${pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L')}Z`;

  return `
    <pattern id="zellige" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="${GOLD}"/>
      <path d="${d}" fill="none" stroke="#F7F5EF" stroke-width="1.6" opacity="0.85"/>
    </pattern>`;
}

async function build() {
  const bold = await loadArchivo(800);
  const semi = await loadArchivo(600);

  // « BFM » : chaque lettre est tracée séparément pour pouvoir les colorer différemment.
  const SIZE = 168;
  const TRACK = -3;
  const baseline = 176;
  let x = 306;
  const letters = [];
  for (const ch of ['B', 'F', 'M']) {
    const { d, width } = textPath(bold, ch, { size: SIZE, x, y: baseline, tracking: 0 });
    letters.push({ ch, d, x, width });
    x += width + TRACK;
  }
  const wordEnd = x - TRACK;

  /** Deux habillages : sur fond clair, et sur fond navy (pied de page, bandeaux). */
  const THEMES = {
    light: { file: 'bfm-logo.svg', B: GREEN, F: NAVY, M: GREEN, tag: NAVY },
    dark: { file: 'bfm-logo-inverse.svg', B: '#FFFFFF', F: GOLD, M: '#FFFFFF', tag: '#C3CFE0' },
  };

  /*
   * Baseline : on la dessine à une taille qui laisse de la place, puis on calcule
   * l'interlettrage qui l'amène EXACTEMENT à la largeur du mot au-dessus. C'est ce qui donne
   * le bloc typographique aligné des deux côtés, caractéristique du logo d'origine.
   */
  const TAG = 'BEST FACILITY MANAGEMENT';
  const TAG_SIZE = 25;
  const wordWidth = wordEnd - 306;
  const probe = textPath(semi, TAG, { size: TAG_SIZE, tracking: 0 });
  const tracking = (wordWidth - probe.width) / (TAG.length - 1);
  const tag = textPath(semi, TAG, { size: TAG_SIZE, x: 306, y: 228, tracking });

  const W = Math.ceil(wordEnd + 8);
  const H = 248;

  // Le zellige est détouré DANS la hampe du B (et non posé à côté), comme sur l'original.
  const stemW = SIZE * 0.2;

  const lockup = (theme) => {
    const c = THEMES[theme];
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="BFM — Best Facility Management">
  <defs>
    ${zelligeDefs()}
    <clipPath id="stem"><path d="${letters[0].d}"/></clipPath>
  </defs>
  <g transform="translate(0 14)">${mark(theme)}</g>
  ${letters.map((l) => `<path d="${l.d}" fill="${c[l.ch]}"/>`).join('\n  ')}
  <!-- Rappels de charte : zellige dans la hampe du B, losange or dans le creux du M, feuille verte. -->
  <g clip-path="url(#stem)">
    <rect x="${letters[0].x}" y="${baseline - SIZE * 0.73}" width="${stemW}" height="${SIZE * 0.73}" fill="url(#zellige)"/>
  </g>
  <path d="${diamond(letters[2], SIZE, baseline)}" fill="${GOLD}"/>
  <path d="${leaf(letters[2], baseline)}" fill="${GREEN_MID}"/>
  <path d="${tag.d}" fill="${c.tag}"/>
</svg>
`;
  };

  const svg = lockup('light');
  fs.writeFileSync(path.join(OUT, THEMES.light.file), svg);
  fs.writeFileSync(path.join(OUT, THEMES.dark.file), lockup('dark'));

  // Le symbole seul : en-têtes compacts, favicon, icône d'application.
  for (const theme of ['light', 'dark']) {
    const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 208" width="240" height="208" role="img" aria-label="BFM">
  ${mark(theme)}
</svg>
`;
    fs.writeFileSync(
      path.join(OUT, theme === 'light' ? 'bfm-logo-mark.svg' : 'bfm-logo-mark-inverse.svg'),
      markSvg,
    );
  }

  // Favicon : le symbole simplifié sur pastille navy, lisible à 16 px.
  const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="10" fill="${NAVY}"/>
  <g transform="translate(3.5 8.5) scale(0.2375)">
    ${markSimple(GOLD, '#FFFFFF')}
  </g>
</svg>
`;
  fs.writeFileSync(path.join(ROOT, 'public', 'favicon.svg'), favicon);

  // apple-touch-icon : iOS ne lit pas le SVG, il lui faut un PNG de 180 px.
  await sharp(Buffer.from(favicon), { density: 600 })
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(path.join(ROOT, 'public', 'apple-touch-icon.png'));

  // PNG : exigé par schema.org (`logo`) et par les partages qui ne lisent pas le SVG.
  await sharp(Buffer.from(svg), { density: 300 })
    .resize(760)
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, 'bfm-logo.png'));

  const meta = await sharp(path.join(OUT, 'bfm-logo.png')).metadata();
  console.log(`bfm-logo.svg        ${W}×${H}`);
  console.log(`bfm-logo-inverse.svg (fond navy) et les deux symboles seuls`);
  console.log(`bfm-logo.png        ${meta.width}×${meta.height}`);
  console.log(`favicon.svg         64×64`);
}

/** Le losange or logé dans le creux central du M. */
function diamond(m, size, baseline) {
  const cx = m.x + m.width / 2;
  const cy = baseline - size * 0.3;
  const r = size * 0.085;
  return `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;
}

/** La feuille verte au pied du M. */
function leaf(m, baseline) {
  const x = m.x + m.width * 0.62;
  const y = baseline + 6;
  return `M${x} ${y}c0-14 12-25 30-25 0 16-11 25-30 25Zm0 0c4-7 11-12 20-15`;
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
