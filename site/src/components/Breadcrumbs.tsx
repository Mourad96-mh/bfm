import Link from 'next/link';
import styles from './Blocks.module.css';

export type Crumb = { name: string; path: string };

/**
 * Fil d'Ariane visible. Le balisage BreadcrumbList correspondant est émis par la page,
 * à partir de la même liste — les deux ne peuvent donc pas diverger.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav className={styles.crumbs} aria-label="Fil d’Ariane">
      <div className="wrap">
        <ol>
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.path} {...(last ? { 'aria-current': 'page' as const } : {})}>
                {last ? c.name : <Link href={c.path}>{c.name}</Link>}
                {!last && (
                  <span className={styles.sep} aria-hidden="true">
                    ›
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
