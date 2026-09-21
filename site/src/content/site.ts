/**
 * Source unique des constantes de marque, coordonnées et réglages SEO.
 *
 * ⚠ Points en attente de validation client (cf. ARCHITECTURE.md §7) :
 *  - téléphone : la plaquette indique 06 88 95 19 77, le site actuel +212 7 00 39 69 39.
 *    On retient celui du site, aligné sur le domaine. Une seule ligne à changer ici.
 *  - e-mail : plaquette bfm.contact.ma@gmail.com vs contact@bfm.co.ma. On retient le domaine.
 *  - mentions légales (RC, ICE, capital, siège) : non communiquées à ce jour.
 */

export const site = {
  name: 'BFM',
  legalName: 'BFM — Best Facility Management',
  fullName: 'Best Facility Management',
  tagline: 'La rigueur au service de nos clients',
  baseUrl: 'https://bfm.co.ma',
  locale: 'fr_MA',

  /** Ligne principale, au format international (requis par les liens tel: et WhatsApp). */
  phone: '+212700396939',
  phoneDisplay: '+212 7 00 39 69 39',
  /** Numéro figurant sur la plaquette imprimée — à arbitrer avec le client. */
  phoneAlt: '+212688951977',
  phoneAltDisplay: '06 88 95 19 77',

  email: 'contact@bfm.co.ma',

  city: 'Casablanca',
  region: 'Casablanca-Settat',
  country: 'MA',
  countryName: 'Maroc',
  /** Adresse postale non communiquée — indispensable pour Google Business Profile. */
  street: null as string | null,

  hours: 'Du lundi au samedi',

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },

  /** Mentions légales : valeurs à renseigner par le client. */
  legal: {
    raisonSociale: null as string | null,
    formeJuridique: null as string | null,
    capital: null as string | null,
    siege: null as string | null,
    rc: null as string | null,
    ice: null as string | null,
    directeurPublication: null as string | null,
    hebergeur: 'Cap Connect',
    hebergeurSite: 'client.capconnect.com',
  },
} as const;

export const audiencesShort = [
  { label: 'Copropriétés', detail: 'Résidences et patrimoines immobiliers', slug: 'coproprietes' },
  { label: 'Entreprises', detail: 'Bureaux, commerces et sites professionnels', slug: 'entreprises' },
  { label: 'Collectivités', detail: 'Établissements et infrastructures', slug: 'collectivites' },
  { label: 'Particuliers', detail: 'Maisons, appartements et résidences', slug: 'particuliers' },
] as const;

/** Les 5 étapes de la méthode BFM, reprises de la plaquette et du site existant. */
export const method = [
  {
    n: '1',
    title: 'Écoute',
    text: 'Nous prenons le temps de comprendre le site, ses contraintes et vos priorités réelles.',
  },
  {
    n: '2',
    title: 'Diagnostic',
    text: 'Nous évaluons les moyens, les fréquences et le niveau de service que la situation demande.',
  },
  {
    n: '3',
    title: 'Plan d’action',
    text: 'Vous recevez une proposition détaillée, un calendrier et le nom de votre interlocuteur.',
  },
  {
    n: '4',
    title: 'Intervention',
    text: 'Des équipes qualifiées interviennent sur consignes précises, coordonnées par un responsable.',
  },
  {
    n: '5',
    title: 'Contrôle',
    text: 'Nous vérifions, nous rendons compte, et nous corrigeons ce qui doit l’être.',
  },
] as const;

/** Les engagements de la marque — aucun chiffre, aucune promesse invérifiable. */
export const commitments = [
  { title: 'Rigueur', text: 'Une organisation méthodique, du premier échange au compte rendu.' },
  { title: 'Proximité', text: 'Un interlocuteur unique, joignable, qui connaît votre site.' },
  { title: 'Réactivité', text: 'Des réponses rapides et des interventions organisées sans délai inutile.' },
  { title: 'Qualité', text: 'Des prestations menées dans le respect des normes et du cahier des charges.' },
  { title: 'Confiance', text: 'Une relation transparente, documentée, qui s’inscrit dans la durée.' },
] as const;
