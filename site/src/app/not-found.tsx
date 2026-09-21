import Link from 'next/link';
import ServiceIndex from '@/components/ServiceIndex';
import { pageMeta } from '@/lib/seo';
import styles from './page.module.css';

export const metadata = pageMeta({
  title: 'Page introuvable | BFM',
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez les dix métiers de BFM : syndic, nettoyage, maintenance, espaces verts, piscines et hygiène 3D/4D.",
  path: '/404',
  noindex: true,
});

export default function NotFound() {
  return (
    <>
      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <p className="eyebrow">Erreur 404</p>
          <h1>Cette page n’existe pas</h1>
          <p className="lead">
            Le lien est peut-être ancien, ou l’adresse comporte une faute de frappe. Voici les
            dix métiers de BFM — l’un d’eux correspond sans doute à ce que vous cherchiez.
          </p>
          <div className="btn-row">
            <Link href="/" className="btn btn-primary">
              Retour à l’accueil
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ServiceIndex withExcerpt={false} />
        </div>
      </section>
    </>
  );
}
