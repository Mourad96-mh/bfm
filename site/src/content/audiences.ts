/**
 * Entrées par public plutôt que par métier.
 *
 * Raison d'être (cf. ARCHITECTURE.md §4.1) : un président de conseil syndical ne cherche pas
 * « nettoyage », il cherche « qui s'occupe de ma résidence ». Ces pages recomposent les 10 métiers
 * en offres lisibles et captent la longue traîne que les fiches métier ne peuvent pas porter.
 */

export type Audience = {
  slug: string;
  label: string;
  heading: string;
  lead: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  /** Les problèmes concrets, formulés avec les mots du client. */
  pains: { title: string; text: string }[];
  /** Ce que BFM met en face. */
  answers: { title: string; text: string }[];
  /** Slugs de services, dans l'ordre de pertinence pour ce public. */
  services: string[];
  faq: { q: string; a: string }[];
};

export const audiences: Audience[] = [
  {
    slug: 'coproprietes',
    label: 'Copropriétés',
    heading: 'BFM pour les copropriétés',
    lead: 'Un seul prestataire pour la gestion, l’entretien et les interventions techniques de votre résidence.',
    intro:
      "Une copropriété fait travailler un syndic, une société de nettoyage, un jardinier, un ascensoriste, parfois un pisciniste et un dératiseur. Autant de contrats, de factures et d'interlocuteurs — et autant d'endroits où l'information se perd. BFM réunit ces métiers sous une seule coordination, avec un responsable qui connaît votre résidence.",
    seoTitle: 'Gestion et entretien de copropriété au Maroc | BFM',
    seoDescription:
      "Syndic, parties communes, espaces verts, piscine, maintenance : BFM coordonne les prestations de votre copropriété avec un interlocuteur unique.",
    image: '/media/audience-coproprietes.webp',
    imageAlt: "Résidence en copropriété avec parties communes entretenues",
    pains: [
      { title: 'Trop d’interlocuteurs', text: "Chaque métier a son contrat, son contact et son calendrier. Personne n'a la vue d'ensemble." },
      { title: 'Des comptes difficiles à suivre', text: "Les copropriétaires demandent où passent les charges, et la réponse prend des jours à reconstituer." },
      { title: 'Des interventions qui traînent', text: "Une fuite signalée en semaine 1 est traitée en semaine 4, faute de coordination." },
      { title: 'Un patrimoine qui se dévalorise', text: "Hall défraîchi, façade sale, espaces verts laissés à l'abandon : cela se voit et se paie à la revente." },
    ],
    answers: [
      { title: 'Un interlocuteur unique', text: "Un responsable BFM pilote l'ensemble des prestations et répond au conseil syndical." },
      { title: 'Des comptes lisibles', text: "Budget, appels de fonds, comptabilité et suivi des impayés tenus selon la loi 18-00." },
      { title: 'Des interventions coordonnées', text: "Une demande, un circuit de traitement, un compte rendu — et un suivi des actions correctives." },
      { title: 'Une valorisation continue', text: "L'entretien régulier des parties communes et des extérieurs protège la valeur des lots." },
    ],
    services: [
      'syndic-de-copropriete',
      'nettoyage-et-proprete',
      'espaces-exterieurs',
      'conciergerie',
      'maintenance-et-services-techniques',
      'entretien-des-piscines',
      'traitement-des-nuisibles',
      'nettoyage-de-facades',
    ],
    faq: [
      { q: 'Faut-il tout confier à BFM ?', a: "Non. BFM peut n'assurer qu'une mission précise — le nettoyage des parties communes, par exemple — ou coordonner plusieurs métiers. Beaucoup de copropriétés commencent par une prestation, puis élargissent." },
      { q: 'Comment change-t-on de syndic ?', a: "La décision se prend en assemblée générale, à la majorité des trois quarts des voix des copropriétaires présents ou représentés. Nous vous accompagnons sur la préparation du dossier et la reprise des archives et des contrats." },
      { q: 'Intervenez-vous sur les petites copropriétés ?', a: "Oui. Nous dimensionnons les moyens selon le nombre de lots et les équipements présents. Une résidence de 20 lots n'a pas les mêmes besoins qu'un ensemble de 200." },
    ],
  },

  {
    slug: 'entreprises',
    label: 'Entreprises',
    heading: 'BFM pour les entreprises',
    lead: 'Des locaux propres, des installations fiables, et un seul contact pour tous vos moyens généraux.',
    intro:
      "Pour un responsable des moyens généraux, la réussite est invisible : personne ne remarque un bureau propre ou une climatisation qui fonctionne. BFM prend en charge l'exploitation quotidienne de vos sites — propreté, maintenance, hygiène, travaux — pour que vos équipes n'aient à penser qu'à leur métier.",
    seoTitle: 'Facility management pour entreprises au Maroc | BFM',
    seoDescription:
      "Nettoyage de bureaux, maintenance multitechnique, hygiène 3D/4D, travaux et façades : BFM pilote l'exploitation de vos sites professionnels au Maroc.",
    image: '/media/audience-entreprises.webp',
    imageAlt: "Plateau de bureaux entretenu par les équipes BFM",
    pains: [
      { title: 'Des prestataires à gérer', text: "Le temps passé à coordonner cinq fournisseurs n'est pas du temps passé sur votre métier." },
      { title: 'Des interventions qui gênent l’activité', text: "Un nettoyage en plein horaire de bureau, une coupure non annoncée : le service devient une nuisance." },
      { title: 'Des pannes évitables', text: "Faute de maintenance préventive, on répare dans l'urgence et on paie plus cher." },
      { title: 'Aucune visibilité', text: "Impossible de savoir ce qui a été fait, ni de le justifier en interne." },
    ],
    answers: [
      { title: 'Un contrat, un contact', text: "Propreté, maintenance, hygiène et travaux pilotés sous une seule coordination." },
      { title: 'Des horaires adaptés', text: "Interventions tôt le matin, en soirée ou le week-end, calées sur votre activité." },
      { title: 'Du préventif, pas que du curatif', text: "Un plan de maintenance qui réduit le nombre d'incidents plutôt que de les subir." },
      { title: 'Un reporting exploitable', text: "Planning, checklist, anomalies signalées et compte rendu au responsable désigné." },
    ],
    services: [
      'nettoyage-et-proprete',
      'maintenance-et-services-techniques',
      'traitement-des-nuisibles',
      'conciergerie',
      'nettoyage-de-facades',
      'petits-travaux',
      'espaces-exterieurs',
    ],
    faq: [
      { q: 'Intervenez-vous sur plusieurs sites ?', a: "Oui. Le multi-sites est précisément le cas où un interlocuteur unique prend tout son sens : un cahier des charges commun, un niveau de service homogène, une facturation consolidée." },
      { q: 'Pouvez-vous répondre à un cahier des charges ?', a: "Oui. Adressez-nous votre CPS ou votre expression de besoin : nous étudions le périmètre et proposons les moyens humains et matériels correspondants." },
      { q: 'Travaillez-vous en dehors des heures ouvrées ?', a: "Oui, c'est même le cas le plus fréquent pour les sites tertiaires. Les créneaux sont fixés au contrat." },
    ],
  },

  {
    slug: 'collectivites',
    label: 'Collectivités',
    heading: 'BFM pour les collectivités',
    lead: 'Des établissements et des infrastructures entretenus avec méthode, traçabilité et respect des normes.',
    intro:
      "Un établissement public doit être irréprochable et pouvoir le prouver. BFM intervient sur les bâtiments, les espaces extérieurs et les installations techniques des collectivités, avec la traçabilité qu'exige la commande publique.",
    seoTitle: 'Entretien de bâtiments publics et infrastructures | BFM Maroc',
    seoDescription:
      "Nettoyage, maintenance, espaces verts et hygiène pour les collectivités et établissements publics au Maroc, avec traçabilité et respect des normes.",
    image: '/media/audience-collectivites.webp',
    imageAlt: "Abords et voiries d'un établissement entretenus",
    pains: [
      { title: 'Des exigences de conformité', text: "Chaque prestation doit être documentée et justifiable en cas de contrôle." },
      { title: 'Des sites très fréquentés', text: "Le niveau de propreté se dégrade vite quand le passage est intense." },
      { title: 'Des surfaces extérieures étendues', text: "Espaces verts, allées, voiries et mobilier demandent un entretien suivi." },
      { title: 'Des budgets à justifier', text: "Il faut démontrer que la dépense produit un résultat mesurable." },
    ],
    answers: [
      { title: 'Traçabilité complète', text: "Planning, checklists, rapports d'intervention et suivi des actions correctives." },
      { title: 'Des moyens dimensionnés', text: "Effectifs, fréquences et matériel calés sur la fréquentation réelle du site." },
      { title: 'Une couverture étendue', text: "Du bâtiment aux voiries, un seul prestataire pour l'ensemble du périmètre." },
      { title: 'Respect des normes', text: "Interventions menées dans le respect des normes en vigueur et des procédures de sécurité." },
    ],
    services: [
      'nettoyage-et-proprete',
      'espaces-exterieurs',
      'maintenance-et-services-techniques',
      'traitement-des-nuisibles',
      'nettoyage-de-facades',
      'syndic-de-copropriete',
    ],
    faq: [
      { q: 'Répondez-vous aux appels d’offres publics ?', a: "Adressez-nous le dossier de consultation : nous étudions le cahier des charges et vous indiquons notre capacité à y répondre dans les délais impartis." },
      { q: 'Quels justificatifs fournissez-vous ?', a: "Planning des interventions, checklists d'exécution, rapports par passage et relevé des anomalies constatées, adressés au responsable désigné." },
    ],
  },

  {
    slug: 'particuliers',
    label: 'Particuliers',
    heading: 'BFM pour les particuliers',
    lead: 'Quelqu’un de fiable pour votre maison : ménage, petits travaux, jardin, piscine.',
    intro:
      "Trouver une personne de confiance pour entrer chez soi est la vraie difficulté. BFM vous apporte le cadre d'une société — des intervenants sélectionnés et encadrés, un responsable joignable, un remplacement organisé en cas d'absence — pour des prestations à domicile régulières ou ponctuelles.",
    seoTitle: 'Services à domicile à Casablanca : ménage, jardin | BFM',
    seoDescription:
      "Ménage à domicile, petits travaux, entretien du jardin et de la piscine à Casablanca. Des intervenants sélectionnés, encadrés par un responsable BFM.",
    image: '/media/audience-particuliers.webp',
    imageAlt: "Intervenante BFM assurant l'entretien d'un domicile",
    pains: [
      { title: 'La question de la confiance', text: "Laisser entrer quelqu'un chez soi suppose des garanties, pas une simple recommandation." },
      { title: 'L’absence de remplacement', text: "Avec un indépendant, une absence signifie une semaine sans service." },
      { title: 'Des besoins dispersés', text: "Ménage, fuite d'eau, haie à tailler, piscine verte : quatre prestataires différents à trouver." },
      { title: 'Un cadre flou', text: "Sans prestation écrite, le périmètre se discute à chaque passage." },
    ],
    answers: [
      { title: 'Des intervenants sélectionnés', text: "Retenus sur leurs compétences et leur sérieux, puis encadrés par un responsable." },
      { title: 'La continuité du service', text: "En cas d'absence, un remplacement est organisé — vous n'êtes pas laissé sans solution." },
      { title: 'Plusieurs métiers, un contact', text: "Ménage, petits travaux, jardin et piscine avec le même interlocuteur." },
      { title: 'Un périmètre écrit', text: "Ce qui est fait, à quelle fréquence et à quel prix : c'est défini avant de commencer." },
    ],
    services: [
      'menage-chez-les-particuliers',
      'petits-travaux',
      'entretien-des-piscines',
      'espaces-exterieurs',
      'traitement-des-nuisibles',
      'nettoyage-et-proprete',
    ],
    faq: [
      { q: 'Proposez-vous des prestations ponctuelles ?', a: "Oui : grand ménage, remise en état après déménagement, ouverture de piscine en début de saison ou intervention de petits travaux à la demande." },
      { q: 'Comment obtenir un prix ?', a: "Décrivez-nous votre besoin — surface, fréquence, prestations attendues — par WhatsApp ou via le formulaire. Nous revenons vers vous avec une proposition adaptée." },
      { q: 'Intervenez-vous pour les locations courte durée ?', a: "Oui, pour les rotations entre deux séjours, avec une checklist adaptée et des horaires calés sur vos arrivées et départs." },
    ],
  },
];

export const getAudience = (slug: string) => audiences.find((a) => a.slug === slug);
