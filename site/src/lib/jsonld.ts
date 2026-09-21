import { site } from '@/content/site';
import { abs, canonical } from './seo';

/**
 * Données structurées schema.org.
 *
 * Règle tenue partout ici : on ne balise que ce qui est vrai et vérifiable.
 * Pas d'`aggregateRating` (aucun avis réel), pas d'`award`, pas de `numberOfEmployees`
 * inventé — un balisage mensonger est une faute, et Google sanctionne les faux avis.
 */

const ORG_ID = `${site.baseUrl}/#organization`;
const WEBSITE_ID = `${site.baseUrl}/#website`;

type Json = Record<string, unknown>;

/** L'organisation : émis une seule fois, dans le layout racine. */
export function organizationLd(): Json {
  const sameAs = Object.values(site.social).filter((u): u is string => Boolean(u));

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: site.legalName,
    alternateName: site.name,
    url: `${site.baseUrl}/`,
    description:
      "Entreprise marocaine de facility management basée à Casablanca : syndic de copropriété, conciergerie, maintenance, nettoyage, espaces extérieurs, piscines, hygiène 3D/4D et façades.",
    slogan: site.tagline,
    image: abs('/media/og-bfm.jpg'),
    logo: abs('/media/bfm-logo.png'),
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      // La voie reste absente tant que le client ne l'a pas communiquée :
      // mieux vaut une adresse incomplète qu'une adresse inventée.
      ...(site.street ? { streetAddress: site.street } : {}),
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: { '@type': 'Country', name: 'Maroc' },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.baseUrl}/`,
    name: site.legalName,
    inLanguage: 'fr-MA',
    publisher: { '@id': ORG_ID },
  };
}

export function serviceLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: canonical(path),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Maroc' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: canonical('/contact'),
      servicePhone: site.phone,
    },
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function faqLd(faq: { q: string; a: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleLd({
  headline,
  description,
  path,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    inLanguage: 'fr-MA',
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical(path) },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

export function itemListLd(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: canonical(item.path),
    })),
  };
}
