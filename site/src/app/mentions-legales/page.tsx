import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from '../page.module.css';

const trail = [
  { name: 'Accueil', path: '/' },
  { name: 'Mentions légales', path: '/mentions-legales' },
];

export const metadata = pageMeta({
  title: 'Mentions légales | BFM Best Facility Management',
  description:
    "Mentions légales du site bfm.co.ma : éditeur, directeur de publication, hébergement et propriété intellectuelle.",
  path: '/mentions-legales',
  // Une page de mentions légales n'a aucune raison de capter du trafic de recherche.
  noindex: true,
});

/** Champ non communiqué par le client : marqué visuellement plutôt que laissé vide ou inventé. */
function Todo({ children }: { children: string }) {
  return <span className={styles.todo}>{children}</span>;
}

export default function MentionsPage() {
  const { legal } = site;

  return (
    <>
      <JsonLd data={breadcrumbLd(trail)} />
      <Breadcrumbs trail={trail} />

      <section className={styles.head}>
        <div className={`wrap ${styles.headInner}`}>
          <h1>Mentions légales</h1>
          <p className="lead">
            Informations relatives à l’éditeur et à l’hébergement du site {site.baseUrl.replace('https://', '')}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.legalPage}`}>
          <h2>Éditeur du site</h2>
          <ul>
            <li>
              Dénomination : {legal.raisonSociale ?? <Todo>à compléter</Todo>} — {site.legalName}
            </li>
            <li>Forme juridique : {legal.formeJuridique ?? <Todo>à compléter</Todo>}</li>
            <li>Capital social : {legal.capital ?? <Todo>à compléter</Todo>}</li>
            <li>
              Siège social : {legal.siege ?? <Todo>à compléter</Todo>} — {site.city},{' '}
              {site.countryName}
            </li>
            <li>Registre du commerce (RC) : {legal.rc ?? <Todo>à compléter</Todo>}</li>
            <li>Identifiant Commun de l’Entreprise (ICE) : {legal.ice ?? <Todo>à compléter</Todo>}</li>
            <li>
              Téléphone : <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              E-mail : <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              Directeur de la publication : {legal.directeurPublication ?? <Todo>à compléter</Todo>}
            </li>
          </ul>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par {legal.hebergeur} — {legal.hebergeurSite}.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des éléments composant ce site — textes, visuels, identité graphique,
            structure et code — est la propriété de {site.legalName} ou de ses partenaires, et
            protégé par la législation marocaine et internationale relative à la propriété
            intellectuelle. Toute reproduction, représentation ou adaptation, totale ou
            partielle, sans autorisation écrite préalable, est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations publiées sur ce site sont fournies à titre indicatif et actualisées
            avec soin. Les guides consacrés au cadre légal de la copropriété présentent le droit
            en vigueur de façon accessible ; ils ne constituent pas un conseil juridique et ne
            sauraient engager la responsabilité de {site.name} pour une décision prise sur leur
            seule base. Les descriptions de prestations ne valent pas offre contractuelle : seul
            le devis signé fixe le périmètre, les délais et les prix.
          </p>

          <h2>Liens externes</h2>
          <p>
            Ce site peut renvoyer vers des sites tiers, dont le contenu n’engage que leurs
            éditeurs respectifs.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site et ses mentions sont soumis au droit marocain. Tout litige relatif à
            son utilisation relève de la compétence des tribunaux de {site.city}.
          </p>
        </div>
      </section>
    </>
  );
}
