import Link from 'next/link';
import { commitments, method, site } from '@/content/site';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd } from '@/lib/jsonld';
import { img } from '@/lib/media';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AudienceCards } from '@/components/Cards';
import Cta from '@/components/Cta';
import styles from '../page.module.css';
import home from '../home.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
];

export const metadata = pageMeta({
  title: 'À propos de BFM — Best Facility Management, Casablanca',
  description:
    "BFM, société marocaine de facility management à Casablanca, portée par des dirigeants cumulant plus de vingt ans d'expérience. Méthode et engagements.",
  path: '/a-propos',
  image: '/media/about-residence.webp',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(trail)} />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <p className="eyebrow">Qui sommes-nous</p>
          <h1>Une société jeune, des dirigeants du métier</h1>
          <p className="lead">
            {site.fullName} accompagne les copropriétés, les entreprises, les collectivités et
            les particuliers avec une offre complète de services de gestion, de maintenance et
            d’entretien.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${home.split}`}>
          <div>
            <h2>Ce que nous sommes — et ce que nous ne prétendons pas être</h2>
            <p>
              BFM est une société <strong>récente</strong>. Nous ne publions donc ni compteur de
              clients, ni nombre de lots gérés, ni logo de référence : ces chiffres se méritent,
              et nous préférons qu’ils arrivent quand ils seront vrais.
            </p>
            <p>
              Ce que nous apportons dès aujourd’hui, en revanche, est concret : nos dirigeants
              cumulent plus de vingt ans d’expérience en logistique, finance, transport,
              sécurité, bâtiment, maintenance et nettoyage. Ce sont des métiers d’exécution, où
              la qualité se joue sur l’organisation, le suivi et la capacité à répondre vite.
            </p>
            <p>
              Notre position tient en une phrase : <strong>un seul interlocuteur pour dix
              métiers</strong>. Là où un syndic ne sait pas entretenir une piscine et où une
              société de nettoyage ne gère pas une assemblée générale, BFM coordonne l’ensemble
              et en répond devant vous.
            </p>
          </div>
          <div className={home.splitMedia}>
            <img
              {...img('/media/about-residence.webp')}
              alt="Résidence suivie par les équipes BFM"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <div className={home.sectionHead}>
            <div>
              <p className="eyebrow">Notre méthode</p>
              <h2>Cinq étapes, sur chaque site</h2>
            </div>
            <p>
              C’est la répétition de cette séquence qui rend le niveau de service constant, quel
              que soit le métier concerné et quelle que soit l’équipe qui intervient.
            </p>
          </div>
          <div className={home.steps}>
            {method.map((m) => (
              <div key={m.n} className={home.step}>
                <span className={home.stepNum}>{m.n.padStart(2, '0')}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy zellige">
        <div className="wrap">
          <div className={home.sectionHead}>
            <div>
              <p className="eyebrow">Nos engagements</p>
              <h2>{site.tagline}</h2>
            </div>
            <p>
              Cinq engagements, que vous pouvez nous opposer à tout moment — c’est bien leur
              raison d’être.
            </p>
          </div>
          <div className={home.commitments}>
            {commitments.map((c) => (
              <div key={c.title} className={home.commitment}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Nos clients</p>
          <h2>Quatre publics, une même exigence</h2>
          <div className={styles.gridGap}>
            <AudienceCards />
          </div>
          <div className="btn-row">
            <Link href="/services" className="btn btn-outline">
              Voir les dix métiers
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
