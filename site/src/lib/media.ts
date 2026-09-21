/**
 * Dimensions des visuels — fichier GÉNÉRÉ par `npm run images`, à ne pas modifier à la main.
 */

export const mediaSize = {
  '/media/about-residence.webp': { w: 729, h: 600 },
  '/media/audience-collectivites.webp': { w: 582, h: 344 },
  '/media/audience-coproprietes.webp': { w: 538, h: 928 },
  '/media/audience-entreprises.webp': { w: 465, h: 673 },
  '/media/audience-particuliers.webp': { w: 437, h: 582 },
  '/media/bfm-logo.png': { w: 760, h: 248 },
  '/media/conciergerie.webp': { w: 640, h: 900 },
  '/media/entretien-des-piscines.webp': { w: 625, h: 691 },
  '/media/espaces-exterieurs.webp': { w: 582, h: 837 },
  '/media/hero-residence.webp': { w: 553, h: 1165 },
  '/media/hero-secondaire.webp': { w: 480, h: 545 },
  '/media/maintenance-et-services-techniques.webp': { w: 590, h: 762 },
  '/media/menage-chez-les-particuliers.webp': { w: 684, h: 783 },
  '/media/methode-visuel.webp': { w: 543, h: 500 },
  '/media/nettoyage-de-facades.webp': { w: 543, h: 1078 },
  '/media/nettoyage-et-proprete.webp': { w: 625, h: 837 },
  '/media/og-bfm.jpg': { w: 1200, h: 630 },
  '/media/petits-travaux.webp': { w: 440, h: 548 },
  '/media/syndic-de-copropriete.webp': { w: 480, h: 950 },
  '/media/traitement-des-nuisibles.webp': { w: 524, h: 857 },
} as const;

export type MediaPath = keyof typeof mediaSize;

/** Les attributs d'une image : `<img {...img('/media/x.webp')} alt="…" />`. */
export function img(src: MediaPath) {
  const { w, h } = mediaSize[src];
  return { src, width: w, height: h };
}
