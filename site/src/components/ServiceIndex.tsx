import Link from 'next/link';
import { services as allServices, type Service } from '@/content/services';
import { UiIcon } from './Icon';
import styles from './ServiceIndex.module.css';

/** Sommaire numéroté des métiers — repris de la numérotation de la plaquette. */
export default function ServiceIndex({
  services = allServices,
  withExcerpt = true,
}: {
  services?: Service[];
  withExcerpt?: boolean;
}) {
  return (
    <div className={styles.list}>
      {services.map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className={styles.row}>
          <span className={styles.num}>{s.num}</span>
          <h3 className={styles.title}>{s.title}</h3>
          <UiIcon name="arrow" size={18} className={styles.arrow} />
          {withExcerpt && <p className={styles.excerpt}>{s.excerpt}</p>}
        </Link>
      ))}
    </div>
  );
}
