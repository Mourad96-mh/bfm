import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/**
 * robots.txt — tout est indexable : le site ne comporte ni espace privé ni page de recherche
 * interne qui produirait des URL dupliquées.
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.baseUrl}/sitemap.xml`,
    host: site.baseUrl,
  };
}
