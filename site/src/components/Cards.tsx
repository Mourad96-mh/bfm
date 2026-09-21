import Link from 'next/link';
import { getService, type Capability } from '@/content/services';
import { audiences as allAudiences, type Audience } from '@/content/audiences';
import type { Guide } from '@/content/guides';
import { img, type MediaPath } from '@/lib/media';
import { formatDate } from './LegalNote';
import Icon, { UiIcon } from './Icon';
import styles from './Cards.module.css';

/** Trois services liés — le maillage interne de bas de fiche. */
export function ServiceCards({ slugs }: { slugs: string[] }) {
  const items = slugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className={styles.grid3}>
      {items.map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className={styles.card}>
          <span className={styles.cardNum}>{s.num}</span>
          <h3 className={styles.cardTitle}>{s.title}</h3>
          <p className={styles.cardText}>{s.excerpt}</p>
          <span className={styles.cardMore}>
            Découvrir
            <UiIcon name="arrow" size={15} />
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Les quatre publics, avec leur vignette. */
export function AudienceCards({ items = allAudiences }: { items?: Audience[] }) {
  return (
    <div className={styles.grid4}>
      {items.map((a) => (
        <Link key={a.slug} href={`/solutions/${a.slug}`} className={`${styles.card} ${styles.audience}`}>
          <img
            {...img(a.image as MediaPath)}
            alt={a.imageAlt}
            className={styles.audienceImg}
            loading="lazy"
            decoding="async"
          />
          <div className={styles.audienceBody}>
            <h3 className={styles.cardTitle}>{a.label}</h3>
            <p className={styles.cardText}>{a.lead}</p>
            <span className={styles.cardMore}>
              Voir l’offre
              <UiIcon name="arrow" size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/** Cartes de guides. */
export function GuideCards({ items }: { items: Guide[] }) {
  return (
    <div className={styles.grid3}>
      {items.map((g) => (
        <Link key={g.slug} href={`/guides/${g.slug}`} className={`${styles.card} ${styles.guide}`}>
          <div className={styles.guideMeta}>
            <span className={styles.guideTag}>{g.category}</span>
            <span>{g.readingTime} min de lecture</span>
          </div>
          <h3 className={styles.cardTitle}>{g.title}</h3>
          <p className={styles.cardText}>{g.lead}</p>
          <span className={styles.cardMore}>
            Lire le guide
            <UiIcon name="arrow" size={15} />
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Date de révision, pour l'en-tête d'un guide. */
export function GuideDate({ iso }: { iso: string }) {
  return <time dateTime={iso}>{formatDate(iso)}</time>;
}

/** « Ce que nous prenons en charge » : les six prestations d'une fiche. */
export function Capabilities({ items }: { items: Capability[] }) {
  return (
    <div className={styles.capabilities}>
      {items.map((c) => (
        <div key={c.title} className={styles.capability}>
          <span className={styles.capIcon}>
            <Icon name={c.icon} size={26} />
          </span>
          <h3 className={styles.capTitle}>{c.title}</h3>
          <p className={styles.capText}>{c.text}</p>
        </div>
      ))}
    </div>
  );
}
