import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { audiences } from '@/content/audiences';
import { guides } from '@/content/guides';
import { canonical } from '@/lib/seo';

/**
 * Plan de site, construit depuis le contenu : ajouter un service ou un guide suffit à l'y
 * faire apparaître, il n'y a pas de seconde liste à tenir à jour.
 *
 * Les priorités sont hiérarchisées (accueil > métiers > publics > guides > pages légales),
 * et `lastModified` reste honnête : la date de révision réelle pour les guides, la date de
 * génération pour les pages dont le contenu suit celui de la plaquette.
 */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: canonical('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: canonical('/services'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: canonical('/solutions'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: canonical('/a-propos'), lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: canonical('/guides'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    {
      url: canonical('/zones-d-intervention'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    { url: canonical('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
    {
      url: canonical('/mentions-legales'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: canonical('/politique-de-confidentialite'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  for (const s of services) {
    pages.push({
      url: canonical(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  for (const a of audiences) {
    pages.push({
      url: canonical(`/solutions/${a.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  for (const g of guides) {
    pages.push({
      url: canonical(`/guides/${g.slug}`),
      lastModified: new Date(g.updated),
      changeFrequency: 'yearly',
      priority: 0.7,
    });
  }

  return pages;
}
