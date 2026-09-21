import type { Metadata, Viewport } from 'next';
import '@/styles/global.css';
import { archivo, plex } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { organizationLd, websiteLd } from '@/lib/jsonld';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: 'Facility management à Casablanca : syndic et entretien | BFM',
    // Chaque page fournit son propre titre ; le suffixe garde la marque visible dans l'onglet
    // et dans les résultats de recherche sans la répéter dans le titre rédigé.
    template: '%s',
  },
  description:
    "Syndic de copropriété, conciergerie, nettoyage, maintenance, espaces verts, piscines et hygiène 3D/4D : un seul interlocuteur à Casablanca et au Maroc.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: false, email: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1D3A',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${archivo.variable} ${plex.variable}`}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
