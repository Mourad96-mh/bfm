import type { Metadata } from 'next';
import { site } from '@/content/site';

const OG_IMAGE = '/media/og-bfm.jpg';

/**
 * Fabrique les métadonnées d'une page.
 *
 * Toutes les pages passent par ici : c'est ce qui garantit qu'aucune ne parte en production
 * avec un titre dupliqué, une canonique relative ou une carte de partage manquante.
 */
export function pageMeta({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = 'website',
  publishedTime,
  noindex = false,
}: {
  title: string;
  description: string;
  /** Chemin absolu depuis la racine, ex. '/services/conciergerie'. */
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  noindex?: boolean;
}): Metadata {
  const url = canonical(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      title,
      description,
      url,
      siteName: site.legalName,
      locale: site.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: abs(image), width: 1200, height: 630, alt: site.legalName }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [abs(image)],
    },
  };
}

/** URL canonique absolue, avec slash final (cohérent avec trailingSlash: true). */
export function canonical(path: string): string {
  if (path === '/') return `${site.baseUrl}/`;
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return `${site.baseUrl}${clean}`;
}

export function abs(path: string): string {
  return path.startsWith('http') ? path : `${site.baseUrl}${path}`;
}
