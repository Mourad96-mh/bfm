import type { ReactElement } from 'react';
import type { IconName } from '@/content/services';

/**
 * Jeu d'icônes dessiné à la main — trait 1,5 px, grille 24, bouts arrondis.
 *
 * Pourquoi pas d'emojis ni de bibliothèque tierce (cf. ARCHITECTURE.md §5.2) : les emojis sont
 * le marqueur n°1 d'un site généré, et une bibliothèque importerait un style qui n'est pas celui
 * de la plaquette. Un jeu maison, homogène, pèse ici moins de 2 ko une fois inliné.
 */

const P: Record<IconName, ReactElement> = {
  building: (
    <>
      <path d="M4 20V6l7-2v16" />
      <path d="M11 10h9v10" />
      <path d="M2.5 20h19" />
      <path d="M7 8.5v.01M7 12v.01M7 15.5v.01M15 13.5v.01M15 17v.01" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="6.5" rx="5.5" ry="2.5" />
      <path d="M3.5 6.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4" />
      <path d="M14.5 12.2c3 .2 6 1.3 6 2.8v3c0 1.4-2.5 2.5-5.5 2.5s-5.5-1.1-5.5-2.5v-2.3" />
    </>
  ),
  wrench: (
    <>
      <path d="M15.5 3.5a5.5 5.5 0 0 0-5 7.8L3.8 18a2 2 0 0 0 2.8 2.8l6.7-6.7a5.5 5.5 0 0 0 7-6.9l-2.9 2.9-3-.6-.6-3 2.7-2.9Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.4a3.2 3.2 0 0 1 0 6.1" />
      <path d="M17.5 14.9c2.1.6 3.5 2.3 3.5 5.1" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12.3c0 3.9-3.8 7-8.5 7-1.1 0-2.2-.2-3.2-.5L3.5 20.5l1.7-3.6a6.6 6.6 0 0 1-1.7-4.6c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z" />
      <path d="M8.5 11.5v.01M12 11.5v.01M15.5 11.5v.01" />
    </>
  ),
  bell: (
    <>
      <path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" />
      <path d="M10 19.5a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  parcel: (
    <>
      <path d="M3.5 7.8 12 3.5l8.5 4.3v8.4L12 20.5l-8.5-4.3V7.8Z" />
      <path d="m3.5 7.8 8.5 4.3 8.5-4.3M12 12.1v8.4" />
      <path d="m7.75 5.65 8.5 4.3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 9.8h17M8 3.5V7M16 3.5V7" />
      <path d="M7.5 13.3h3v3h-3z" />
    </>
  ),
  heart: (
    <path d="M12 20.2S3.5 15.4 3.5 9.6a4.4 4.4 0 0 1 8.5-1.6 4.4 4.4 0 0 1 8.5 1.6c0 5.8-8.5 10.6-8.5 10.6Z" />
  ),
  shield: (
    <>
      <path d="M12 3.2 4.5 6v6.2c0 4 3.1 7.3 7.5 8.6 4.4-1.3 7.5-4.6 7.5-8.6V6L12 3.2Z" />
      <path d="m8.8 11.9 2.3 2.3 4.1-4.4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5 13.6 9 19 10.6 13.6 12.2 12 17.7 10.4 12.2 5 10.6 10.4 9 12 3.5Z" />
      <path d="M18 16.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-9 0-14 3.2-14 9a5.4 5.4 0 0 0 5.4 5.4C17 18.4 20 13.2 20 4Z" />
      <path d="M4.5 20.5C6 16 9.5 11.8 14.5 9" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3.2c3.4 4 6.2 7 6.2 10.2a6.2 6.2 0 0 1-12.4 0C5.8 10.2 8.6 7.2 12 3.2Z" />
      <path d="M9.2 14.4a2.9 2.9 0 0 0 2.4 3.2" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3.5h5M10.5 3.5v6L5.4 17.6A2 2 0 0 0 7.1 20.5h9.8a2 2 0 0 0 1.7-2.9L13.5 9.5v-6" />
      <path d="M7.6 14.3h8.8" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.8 17.5a9 9 0 1 1 16.4 0" />
      <path d="m12 13.5 4-4" />
      <circle cx="12" cy="14.6" r="1.6" />
    </>
  ),
  broom: (
    <>
      <path d="m20 4-8.2 8.2" />
      <path d="M13.3 10.3 7 16.6c-1.5 1.5-1.9 2.6-2.4 4.2 1.7-.5 2.8-.9 4.3-2.4l6.3-6.3-1.9-1.8Z" />
      <path d="m8.2 14.2 1.9 1.9M6.4 16.1l1.9 1.9" />
    </>
  ),
  window: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
      <path d="M12 3.5v17M4 12h16" />
      <path d="M6.5 6.8 9.5 9.8" />
    </>
  ),
  bed: (
    <>
      <path d="M3 20v-9M3 15.5h18V20M21 15.5v-3a2 2 0 0 0-2-2h-8v5" />
      <circle cx="7" cy="12.6" r="2" />
    </>
  ),
  home: (
    <>
      <path d="M3.5 10.3 12 3.5l8.5 6.8V20a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-9.7Z" />
      <path d="M9.5 20.5v-6h5v6" />
    </>
  ),
  tree: (
    <>
      <path d="M12 3.5 6.5 11h3L5.5 17h13L14.5 11h3L12 3.5Z" />
      <path d="M12 17v3.5" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="6.5" cy="6" r="2.5" />
      <path d="m8.7 7.3 11 9.4M8.7 16.7l11-9.4" />
    </>
  ),
  road: (
    <>
      <path d="M8.5 3.5 4 20.5M15.5 3.5 20 20.5" />
      <path d="M12 4.5v3M12 10.5v3M12 16.5v3" />
    </>
  ),
  bug: (
    <>
      <rect x="7.5" y="7.5" width="9" height="12" rx="4.5" />
      <path d="M9 7.5a3 3 0 0 1 6 0" />
      <path d="M7.5 11H4M7.5 15H4M16.5 11H20M16.5 15H20M9.5 5 8 3.2M14.5 5 16 3.2" />
    </>
  ),
  rat: (
    <>
      <path d="M13.5 9.8a4.5 4.5 0 1 0-6.8 3.9c-1.5.8-2.2 2-2.2 3.4v3.4h11v-3.4c0-2.3 1.4-3.5 3.5-4.2" />
      <circle cx="6" cy="8" r="2" />
      <path d="M18.5 12.3c1.6-.6 2.5-1.6 2.5-3.1 0-1.4-1-2.4-2.4-2.4" />
      <path d="M10.4 9.6v.01" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.4 15.4 5.1 5.1" />
    </>
  ),
  spray: (
    <>
      <path d="M8 8h6.5a1.5 1.5 0 0 1 1.5 1.5v10a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V9.5A1.5 1.5 0 0 1 8 8Z" />
      <path d="M9.5 8V5.2h4.3" />
      <path d="M18 4.5v.01M20.5 6.5v.01M18 9v.01M20.5 11v.01" />
      <path d="M10 12.5h3.5" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.5H6.5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1H15" />
      <rect x="9" y="2.8" width="6" height="3.4" rx="1" />
      <path d="M8.8 11.5h6.4M8.8 15.5h4.4" />
    </>
  ),
  lift: (
    <>
      <path d="M3.5 20.5h17M6 20.5V9.5h6l6 6" />
      <path d="M6 13.5h6" />
      <rect x="16.5" y="13.5" width="4.5" height="3.5" rx="1" />
      <path d="M6 9.5 12 4l3 3" />
    </>
  ),
  rope: (
    <>
      <path d="M12 3.5v7" />
      <circle cx="12" cy="12.8" r="2.3" />
      <path d="M9.8 14.4 7 20.5M14.2 14.4 17 20.5" />
      <path d="M8.5 3.5h7" />
    </>
  ),
  bolt: <path d="M13.5 3 5.5 13.3h5.2L10 21l8.3-10.6h-5.2L13.5 3Z" />,
  lightbulb: (
    <>
      <path d="M9 17.2a6 6 0 1 1 6 0v1.8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8Z" />
      <path d="M10 21.5h4" />
    </>
  ),
  plug: (
    <>
      <path d="M8.5 3.5v5M15.5 3.5v5" />
      <path d="M6 8.5h12v2.8a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8.5Z" />
      <path d="M12 17.3v3.2" />
    </>
  ),
  ruler: (
    <>
      <rect x="1.8" y="8" width="20.4" height="8" rx="1.2" transform="rotate(-45 12 12)" />
      <path d="m9.5 7.2 1.8 1.8M7 9.7l1.8 1.8M12 4.7l1.8 1.8" />
    </>
  ),
  paint: (
    <>
      <rect x="4" y="3.5" width="13" height="5" rx="1" />
      <path d="M17 6h2.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H12" />
      <path d="M10.5 11.5h3v3.5h-3z" />
      <path d="M12 15v5.5" />
    </>
  ),
  door: (
    <>
      <path d="M5.5 20.5V4.3a.8.8 0 0 1 .9-.8l10 .9a.8.8 0 0 1 .7.8v14.5a.8.8 0 0 1-.8.8H5.5Z" />
      <path d="M3.5 20.5h17" />
      <path d="M14 12.3v.01" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {P[name]}
    </svg>
  );
}

/** Icônes de l'interface (hors catalogue métier) : flèche, téléphone, WhatsApp… */
export function UiIcon({
  name,
  size = 20,
  className,
}: {
  name: 'arrow' | 'phone' | 'mail' | 'whatsapp' | 'pin' | 'clock' | 'menu' | 'close' | 'plus';
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
    focusable: 'false' as const,
    className,
  };

  // WhatsApp garde son glyphe officiel (plein), les autres suivent le trait du jeu métier.
  if (name === 'whatsapp') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M12.04 2c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.94 9.94 0 0 0 4.87 1.24h.01c5.5 0 9.97-4.47 9.97-9.97 0-2.66-1.04-5.17-2.92-7.05A9.9 9.9 0 0 0 12.04 2Zm0 18.2h-.01a8.3 8.3 0 0 1-4.22-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.26 8.26 0 0 1-1.27-4.41c0-4.57 3.72-8.29 8.3-8.29a8.23 8.23 0 0 1 8.28 8.3c0 4.57-3.72 8.28-8.29 8.28Zm4.55-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.12-.17.25-.64.81-.79.98-.14.16-.29.19-.54.06a6.8 6.8 0 0 1-2-1.23 7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.86-.87 2.09s.9 2.43 1.02 2.6c.12.16 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
    );
  }

  const paths: Record<string, ReactElement> = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    phone: (
      <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4 1.5v3a1.6 1.6 0 0 1-1.7 1.6C11.3 19 5 12.7 4.6 5.2A1.6 1.6 0 0 1 6.2 3.5Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m3.6 6 8.4 6.4L20.4 6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s6.5-6 6.5-11a6.5 6.5 0 1 0-13 0c0 5 6.5 11 6.5 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5.2l3.2 2" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
  };

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
