import Link from 'next/link';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import Cta from '@/components/Cta';
import styles from '../page.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'Zones d’intervention', path: '/zones-d-intervention' },
];

export const metadata = pageMeta({
  title: 'Zones d’intervention — Casablanca et tout le Maroc | BFM',
  description:
    "BFM est basée à Casablanca et intervient dans tout le Royaume. Dites-nous où se situe votre site : nous vérifions nos moyens avant de nous engager.",
  path: '/zones-d-intervention',
});

/**
 * Une seule page « zones », volontairement.
 *
 * Le réflexe du secteur est de dupliquer « service + ville » sur dix villes. Google traite ces
 * pages en doorway pages, et annoncer une agence là où il n'y en a pas est commercialement
 * malhonnête (cf. ARCHITECTURE.md §2.4). On dit donc ce qui est vrai : une base à Casablanca,
 * des interventions organisées ailleurs selon le chantier.
 */
const zones = [
  {
    name: 'Casablanca et sa région',
    detail:
      'Base de la société. Interventions régulières et contrats d’entretien sur Casablanca, Mohammedia, Bouskoura, Dar Bouazza et les environs.',
  },
  {
    name: 'Rabat · Salé · Témara',
    detail:
      'Prestations récurrentes et interventions ponctuelles, selon le volume et la fréquence demandés.',
  },
  {
    name: 'Marrakech, Tanger, Agadir…',
    detail:
      'Interventions étudiées au cas par cas : nous vérifions nos moyens avant de nous engager sur un délai.',
  },
  {
    name: 'Reste du Royaume',
    detail:
      'Pour les contrats multi-sites et les missions ponctuelles, nous dimensionnons l’équipe et la logistique selon le cahier des charges.',
  },
];

export default function ZonesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(trail)} />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <p className="eyebrow">Où nous intervenons</p>
          <h1>Basés à {site.city}, actifs dans tout le {site.countryName}</h1>
          <p className="lead">
            Nous préférons vous dire franchement ce que nous pouvons assurer près de chez vous
            plutôt que d’afficher une carte du Royaume où toutes les villes seraient identiques.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Nos zones</h2>
          <div className={styles.zones}>
            {zones.map((z) => (
              <div key={z.name} className={styles.zone}>
                <strong>{z.name}</strong>
                <span>{z.detail}</span>
              </div>
            ))}
          </div>

          <h2 className={styles.blockGap}>Comment nous vérifions notre disponibilité</h2>
          <p className="lead">
            Un contrat d’entretien suppose des équipes présentes chaque semaine ; une
            intervention ponctuelle — un nettoyage de fin de chantier, un traitement 3D, une
            façade — se déplace plus facilement. Indiquez-nous la ville, la nature de la
            prestation et la fréquence : nous vous répondons sous 48 heures ouvrées, y compris
            lorsque la réponse est non.
          </p>

          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Vérifier pour ma ville
            </Link>
            <Link href="/services" className="btn btn-outline">
              Voir les prestations
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
