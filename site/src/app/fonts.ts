import localFont from 'next/font/local';

/**
 * Polices auto-hébergées.
 *
 * Les fichiers sont les variables Google (sous-ensembles latin et latin-ext) téléchargés dans
 * src/fonts : aucune requête vers fonts.gstatic.com au chargement de la page, et un build qui
 * n'a pas besoin du réseau. `display: swap` évite le texte invisible pendant le chargement.
 */

export const archivo = localFont({
  src: [
    { path: '../fonts/Archivo-latin.woff2', weight: '500 800', style: 'normal' },
    { path: '../fonts/Archivo-latin-ext.woff2', weight: '500 800', style: 'normal' },
  ],
  variable: '--font-archivo',
  display: 'swap',
  fallback: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
  // Réduit le décalage entre la police de secours et Archivo pendant le swap.
  adjustFontFallback: 'Arial',
});

export const plex = localFont({
  src: [
    { path: '../fonts/IBMPlexSans-latin.woff2', weight: '400 700', style: 'normal' },
    { path: '../fonts/IBMPlexSans-latin-ext.woff2', weight: '400 700', style: 'normal' },
  ],
  variable: '--font-plex',
  display: 'swap',
  fallback: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
});
