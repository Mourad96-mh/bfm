import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from '../page.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
];

export const metadata = pageMeta({
  title: 'Politique de confidentialité | BFM',
  description:
    "Comment BFM traite les données transmises via le site bfm.co.ma : aucune collecte automatique, aucun cookie de mesure, et vos droits au titre de la loi 09-08.",
  path: '/politique-de-confidentialite',
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(trail)} />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <h1>Politique de confidentialité</h1>
          <p className="lead">
            Ce site est volontairement sobre : il ne dépose aucun cookie publicitaire et
            n’enregistre aucune donnée sur un serveur.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.legalPage}`}>
          <h2>Quelles données sont collectées</h2>
          <p>
            Le site {site.baseUrl.replace('https://', '')} est un site statique. Il ne comporte
            ni compte utilisateur, ni base de données, ni formulaire enregistré côté serveur.
          </p>
          <p>
            Le formulaire de devis fonctionne différemment de ce à quoi on s’attend : les
            informations que vous saisissez restent dans votre navigateur et servent uniquement à
            composer un message. En cliquant sur « Envoyer », c’est <strong>vous</strong> qui
            transmettez ce message, via WhatsApp ou votre logiciel de messagerie. Rien n’est
            envoyé tant que vous ne validez pas, et rien n’est conservé par le site.
          </p>

          <h2>Ce que nous recevons</h2>
          <p>
            Lorsque vous nous écrivez — par WhatsApp, e-mail ou téléphone —, nous recevons les
            informations que vous nous communiquez : nom, coordonnées, nature du besoin et
            adresse du site concerné. Elles servent exclusivement à traiter votre demande,
            établir un devis et assurer le suivi de la prestation.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les échanges commerciaux sont conservés le temps de la relation, puis pendant la
            durée légale de conservation des documents comptables et contractuels applicable au
            {' '}{site.countryName}.
          </p>

          <h2>Destinataires</h2>
          <p>
            Vos données ne sont ni vendues, ni louées, ni transmises à des tiers à des fins de
            prospection. Elles peuvent être communiquées aux intervenants de {site.name} chargés
            de l’exécution de la prestation, dans la limite de ce qui leur est nécessaire.
          </p>

          <h2>Cookies et mesure d’audience</h2>
          <p>
            Aucun cookie de mesure d’audience ni traceur publicitaire n’est déposé par ce site.
            Les polices de caractères sont hébergées sur notre propre serveur : votre navigateur
            n’émet donc aucune requête vers un service tiers pour les afficher.
          </p>
          <p>
            Les liens WhatsApp renvoient vers le service de Meta Platforms, qui applique sa
            propre politique de confidentialité dès lors que vous ouvrez la conversation.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément à la loi n° 09-08 relative à la protection des personnes physiques à
            l’égard du traitement des données à caractère personnel, vous disposez d’un droit
            d’accès, de rectification et d’opposition sur les données vous concernant. Pour
            l’exercer, écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative à cette politique :{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> ou{' '}
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
