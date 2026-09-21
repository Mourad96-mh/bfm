import { services } from '@/content/services';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd, itemListLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceIndex from '@/components/ServiceIndex';
import { AudienceCards } from '@/components/Cards';
import Cta from '@/components/Cta';
import styles from '../page.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
];

export const metadata = pageMeta({
  title: 'Nos services — 10 métiers du facility management | BFM',
  description:
    "Syndic, conciergerie, maintenance, nettoyage, ménage, espaces verts, piscines, 3D/4D et façades : les dix métiers que BFM coordonne au Maroc.",
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(trail),
          itemListLd(services.map((s) => ({ name: s.title, path: `/services/${s.slug}` }))),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <p className="eyebrow">Nos prestations</p>
          <h1>Dix métiers, un seul interlocuteur</h1>
          <p className="lead">
            La numérotation reprend celle de notre plaquette. Chaque fiche précise ce que nous
            prenons en charge, pour qui, et comment nous intervenons — sans promesse que nous ne
            pourrions pas tenir.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ServiceIndex />
        </div>
      </section>

      <section className="section-tight bg-cream">
        <div className="wrap">
          <p className="eyebrow">Autre entrée</p>
          <h2>Vous préférez partir de votre situation ?</h2>
          <p className="lead">
            Les pages « solutions » recomposent ces dix métiers selon le profil : copropriété,
            entreprise, collectivité ou particulier.
          </p>
          <div className={styles.gridGap}>
            <AudienceCards />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
