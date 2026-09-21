import Link from 'next/link';
import { commitments, method, site } from '@/content/site';
import { services } from '@/content/services';
import { guides } from '@/content/guides';
import { pageMeta } from '@/lib/seo';
import { itemListLd } from '@/lib/jsonld';
import { img } from '@/lib/media';
import { whatsappUrl } from '@/lib/contact';
import JsonLd from '@/components/JsonLd';
import ServiceIndex from '@/components/ServiceIndex';
import { AudienceCards, GuideCards } from '@/components/Cards';
import Cta from '@/components/Cta';
import { UiIcon } from '@/components/Icon';
import styles from './home.module.css';

export const metadata = pageMeta({
  title: 'Facility management à Casablanca : syndic et entretien | BFM',
  description:
    "Un seul interlocuteur pour gérer et entretenir votre patrimoine : syndic, conciergerie, maintenance, nettoyage, espaces verts, piscines et 3D/4D.",
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={itemListLd(services.map((s) => ({ name: s.title, path: `/services/${s.slug}` })))}
      />

      <section className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className="eyebrow">Facility management · {site.city}</p>
            <h1>
              Un seul partenaire pour <em>gérer, entretenir et valoriser</em> votre patrimoine
            </h1>
            <p className={styles.heroLead}>
              Syndic de copropriété, conciergerie, maintenance, nettoyage, espaces extérieurs,
              piscines, hygiène 3D/4D et façades. Dix métiers coordonnés par une même équipe,
              avec un responsable qui connaît votre site.
            </p>
            <ul className={styles.heroPoints}>
              <li>
                <UiIcon name="arrow" size={16} />
                Copropriétés, entreprises, collectivités et particuliers
              </li>
              <li>
                <UiIcon name="arrow" size={16} />
                {site.city} et partout au {site.countryName}
              </li>
            </ul>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <a
                href={whatsappUrl()}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UiIcon name="whatsapp" size={18} />
                Écrire sur WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <img
              {...img('/media/hero-residence.webp')}
              alt="Résidence contemporaine entretenue par les équipes BFM à Casablanca"
              // Visuel d'en-tête : c'est le LCP, il ne doit être ni différé ni décodé en asynchrone.
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Les quatre publics — l'entrée « par client » plutôt que « par métier ». */}
      <section className="section-tight bg-cream">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>À qui s’adresse BFM</h2>
            <p>
              Une copropriété, un plateau de bureaux, un établissement public et une villa
              n’attendent pas la même chose. Chaque profil a sa page, avec les prestations
              qui le concernent.
            </p>
          </div>
          <AudienceCards />
        </div>
      </section>

      {/* Le sommaire 01 → 10, signature reprise de la plaquette. */}
      <section className="section">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Nos prestations</p>
              <h2>Dix métiers, un seul contrat</h2>
            </div>
            <p>
              Vous n’avez plus à coordonner un syndic, une société de nettoyage, un jardinier,
              un pisciniste et un dératiseur : BFM assure ces prestations et en répond devant
              vous.
            </p>
          </div>
          <ServiceIndex />
        </div>
      </section>

      {/* La promesse différenciante. */}
      <section className="section bg-cream">
        <div className={`wrap ${styles.split}`}>
          <div>
            <p className="eyebrow">Notre différence</p>
            <h2>Un interlocuteur unique, responsable de l’ensemble</h2>
            <p className="lead">
              La plupart des prestataires font une chose. Quand un problème touche deux métiers,
              c’est vous qui arbitrez. BFM a été construite pour éviter exactement cela.
            </p>
            <ul className={styles.args}>
              <li>
                <strong>Un responsable, pas un standard</strong>
                <span>
                  Un contact identifié, qui connaît votre site, vos contraintes et l’historique
                  des interventions.
                </span>
              </li>
              <li>
                <strong>Des interventions coordonnées</strong>
                <span>
                  Une demande, un circuit de traitement, un compte rendu — et le suivi des
                  actions correctives jusqu’à leur clôture.
                </span>
              </li>
              <li>
                <strong>Une gestion documentée</strong>
                <span>
                  Plannings, checklists, rapports d’intervention et pièces justificatives :
                  ce qui est fait est écrit, donc vérifiable.
                </span>
              </li>
              <li>
                <strong>Des dirigeants du terrain</strong>
                <span>
                  Plus de vingt ans d’expérience cumulée en logistique, finance, transport,
                  sécurité, bâtiment, maintenance et nettoyage.
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.splitMedia}>
            <img
              {...img('/media/about-residence.webp')}
              alt="Résidence et espaces extérieurs suivis par BFM"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* La méthode en cinq étapes. */}
      <section className="section">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Notre méthode</p>
              <h2>De la première visite au compte rendu</h2>
            </div>
            <p>
              La même séquence sur chaque site, quel que soit le métier : c’est ce qui rend le
              niveau de service constant et vérifiable.
            </p>
          </div>
          <div className={styles.steps}>
            {method.map((m) => (
              <div key={m.n} className={styles.step}>
                <span className={styles.stepNum}>{m.n.padStart(2, '0')}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les engagements — aucun chiffre invérifiable, conformément au parti pris éditorial. */}
      <section className="section bg-navy zellige">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Nos engagements</p>
              <h2>{site.tagline}</h2>
            </div>
            <p>
              BFM est une société récente, portée par des dirigeants expérimentés. Nous
              préférons annoncer ce sur quoi nous nous engageons plutôt qu’afficher des
              compteurs que personne ne peut vérifier.
            </p>
          </div>
          <div className={styles.commitments}>
            {commitments.map((c) => (
              <div key={c.title} className={styles.commitment}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les guides — la brèche éditoriale (ARCHITECTURE.md §2.3). */}
      <section className="section">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Comprendre</p>
              <h2>Les guides BFM</h2>
            </div>
            <p>
              La copropriété marocaine est régie par la loi 18-00, que presque personne
              n’explique clairement. Nos guides le font, sans jargon.
            </p>
          </div>
          <GuideCards items={guides.slice(0, 3)} />
          <div className="btn-row">
            <Link href="/guides" className="btn btn-outline">
              Tous les guides
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
