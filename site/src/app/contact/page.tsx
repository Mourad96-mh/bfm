import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd } from '@/lib/jsonld';
import { telUrl, whatsappUrl } from '@/lib/contact';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { UiIcon } from '@/components/Icon';
import styles from '../page.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export const metadata = pageMeta({
  title: 'Contact et devis — BFM Best Facility Management, Casablanca',
  description:
    "Demandez un devis à BFM : syndic, nettoyage, maintenance, espaces verts, piscines, nuisibles ou façades. Réponse par WhatsApp, téléphone ou e-mail.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(trail)} />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <p className="eyebrow">Contact</p>
          <h1>Demander un devis</h1>
          <p className="lead">
            Dites-nous ce dont vous avez besoin. Nous vous rappelons pour préciser le périmètre,
            organiser une visite si nécessaire, et vous adresser une proposition chiffrée.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.contactGrid}`}>
          <div>
            <h2>Votre demande</h2>
            <p className="lead">
              Ce formulaire n’envoie rien tout seul : il compose votre message et vous choisissez
              de le transmettre par WhatsApp ou par e-mail.
            </p>
            <div className={styles.gridGap}>
              <QuoteForm />
            </div>
          </div>

          <div className={styles.contactCard}>
            <h2>Nous joindre directement</h2>
            <div className={styles.contactLines}>
              <div className={styles.contactLine}>
                <UiIcon name="phone" size={18} />
                <span>
                  <a href={telUrl()}>{site.phoneDisplay}</a>
                  <br />
                  Téléphone et WhatsApp
                </span>
              </div>
              <div className={styles.contactLine}>
                <UiIcon name="mail" size={18} />
                <span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </div>
              <div className={styles.contactLine}>
                <UiIcon name="pin" size={18} />
                <span>
                  {site.city}, {site.countryName}
                  <br />
                  Interventions dans tout le Royaume
                </span>
              </div>
              <div className={styles.contactLine}>
                <UiIcon name="clock" size={18} />
                <span>{site.hours}</span>
              </div>
            </div>

            <div className={styles.contactActions}>
              <a
                href={whatsappUrl()}
                className="btn btn-wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UiIcon name="whatsapp" size={18} />
                Écrire sur WhatsApp
              </a>
              <a href={telUrl()} className="btn btn-outline">
                <UiIcon name="phone" size={18} />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
