import { audiences } from '@/content/audiences';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd, itemListLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AudienceCards } from '@/components/Cards';
import Cta from '@/components/Cta';
import styles from '../page.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'Solutions', path: '/solutions' },
];

export const metadata = pageMeta({
  title: 'Solutions : copropriétés, entreprises, collectivités | BFM',
  description:
    "BFM recompose ses dix métiers selon votre situation : copropriété, entreprise, collectivité ou particulier. Chaque profil a ses priorités et ses prestations.",
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(trail),
          itemListLd(audiences.map((a) => ({ name: a.label, path: `/solutions/${a.slug}` }))),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <p className="eyebrow">Par profil</p>
          <h1>Quatre publics, quatre façons de travailler</h1>
          <p className="lead">
            Un conseil syndical, un responsable des moyens généraux, un acheteur public et un
            particulier ne cherchent pas la même chose. Ces pages partent de votre situation
            plutôt que de notre catalogue.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <AudienceCards />
        </div>
      </section>

      <Cta />
    </>
  );
}
