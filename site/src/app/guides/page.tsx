import { guides } from '@/content/guides';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd, itemListLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { GuideCards } from '@/components/Cards';
import Cta from '@/components/Cta';
import styles from '../page.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'Guides', path: '/guides' },
];

export const metadata = pageMeta({
  title: 'Guides copropriété : loi 18-00, charges, AG | BFM',
  description:
    "La copropriété marocaine expliquée : loi 18-00, changement de syndic, répartition des charges, assemblée générale et traitements 3D/4D.",
  path: '/guides',
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(trail),
          itemListLd(guides.map((g) => ({ name: g.title, path: `/guides/${g.slug}` }))),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <p className="eyebrow">Comprendre</p>
          <h1>Les guides BFM</h1>
          <p className="lead">
            La copropriété marocaine est encadrée par un texte que peu de copropriétaires ont
            lu. Ces guides l’expliquent en termes clairs, du point de vue de ceux qui vivent
            dans l’immeuble — et de ceux qui l’entretiennent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <GuideCards items={guides} />
        </div>
      </section>

      <Cta
        title="Une question sur votre copropriété ?"
        text="Nous répondons aux conseils syndicaux et aux copropriétaires, même sans mandat en cours."
      />
    </>
  );
}
