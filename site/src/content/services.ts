/**
 * Les 10 métiers de BFM.
 *
 * Le contenu reprend fidèlement la plaquette client (planches 01→12) et le site existant.
 * Rien n'est inventé : aucune certification, aucun chiffre, aucun délai qui ne soit
 * déjà annoncé par le client lui-même.
 */

export type Capability = {
  title: string;
  text: string;
  icon: IconName;
};

export type Faq = { q: string; a: string };

export type Service = {
  /** Numéro de planche dans la plaquette — devient un élément de design. */
  num: string;
  slug: string;
  /** Titre court pour la navigation et les cartes. */
  title: string;
  /** Titre long, utilisé en H1 quand il diffère. */
  heading: string;
  /** Accroche d'une phrase. */
  lead: string;
  /** Paragraphe d'introduction. */
  intro: string;
  /** Résumé d'une ligne pour les cartes et l'index. */
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  /** 3 à 4 mots-clés indicatifs pour la rédaction, non injectés en meta keywords. */
  keywords: string[];
  image: string;
  imageAlt: string;
  capabilities: Capability[];
  /** L'encadré « Notre priorité » de la plaquette. */
  priority: { title: string; text: string };
  /** Publics concernés → /solutions/<slug>. */
  audiences: string[];
  /** Bandeau d'engagements propre au métier. */
  engagements: { title: string; text: string }[];
  faq: Faq[];
  related: string[];
};

export type IconName =
  | 'building' | 'coins' | 'wrench' | 'users' | 'chat' | 'bell' | 'parcel'
  | 'calendar' | 'heart' | 'shield' | 'spark' | 'leaf' | 'droplet' | 'flask'
  | 'gauge' | 'broom' | 'window' | 'bed' | 'home' | 'tree' | 'scissors'
  | 'road' | 'bug' | 'rat' | 'search' | 'spray' | 'clipboard' | 'lift'
  | 'rope' | 'bolt' | 'lightbulb' | 'plug' | 'ruler' | 'paint' | 'door';

export const services: Service[] = [
  {
    num: '01',
    slug: 'syndic-de-copropriete',
    title: 'Syndic de copropriété',
    heading: 'Syndic de copropriété',
    lead: 'Une gestion structurée et transparente, pour préserver la qualité de vie des occupants et la valeur de votre patrimoine.',
    intro:
      "Gérer une copropriété, c'est tenir trois registres en même temps : l'administratif, le financier et le technique. BFM prend l'ensemble en charge avec une règle simple — vous devez pouvoir, à tout moment, savoir où en sont vos comptes et vos travaux. Notre mission s'exerce dans le cadre de la loi 18-00 relative au statut de la copropriété des immeubles bâtis, modifiée et complétée par la loi 106-12.",
    excerpt:
      'Gestion administrative, financière et technique de votre copropriété, dans le cadre de la loi 18-00.',
    seoTitle: 'Syndic de copropriété à Casablanca | BFM',
    seoDescription:
      "BFM assure la gestion administrative, financière et technique de votre copropriété à Casablanca et au Maroc, dans le cadre de la loi 18-00. Demandez une étude.",
    keywords: ['syndic de copropriété Casablanca', 'société de syndic Maroc', 'gestion de copropriété', 'loi 18-00'],
    image: '/media/syndic-de-copropriete.webp',
    imageAlt: "Résidence contemporaine avec parties communes paysagées, gérée en copropriété",
    capabilities: [
      {
        icon: 'building',
        title: 'Gestion administrative',
        text: "Convocation et tenue des assemblées générales, relation avec le conseil syndical, contrats, assurances et suivi des obligations légales.",
      },
      {
        icon: 'coins',
        title: 'Gestion financière',
        text: "Élaboration du budget prévisionnel, appels de fonds, tenue de la comptabilité et suivi des impayés.",
      },
      {
        icon: 'wrench',
        title: 'Gestion technique',
        text: "Suivi des travaux, entretien courant des parties communes et mises en conformité des équipements.",
      },
      {
        icon: 'users',
        title: 'Suivi des prestataires',
        text: "Sélection, coordination et contrôle des intervenants : ascensoriste, gardiennage, nettoyage, espaces verts.",
      },
      {
        icon: 'chat',
        title: 'Relation avec les copropriétaires',
        text: "Écoute, conseil et communication claire et régulière, pour que chacun sache ce qui est fait et pourquoi.",
      },
      {
        icon: 'clipboard',
        title: 'Traçabilité des décisions',
        text: "Procès-verbaux, comptes rendus et pièces justificatives classés et accessibles au conseil syndical.",
      },
    ],
    priority: {
      title: 'Notre priorité',
      text: "La sérénité de votre copropriété et la valorisation durable de votre bien.",
    },
    audiences: ['coproprietes', 'collectivites'],
    engagements: [
      { title: 'Transparence', text: 'Une gestion claire et des comptes accessibles.' },
      { title: 'Rigueur', text: 'Des processus maîtrisés et un suivi précis au quotidien.' },
      { title: 'Réactivité', text: 'Une équipe disponible et des interventions rapides.' },
      { title: 'Confiance', text: 'Un partenaire de proximité engagé sur le long terme.' },
    ],
    faq: [
      {
        q: 'Quel est le cadre légal du syndic au Maroc ?',
        a: "La loi 18-00 relative au statut de la copropriété des immeubles bâtis, promulguée par le dahir n° 1-02-298 du 3 octobre 2002 et modifiée par la loi 106-12. Elle regroupe les copropriétaires en un syndicat doté de la personnalité morale, administré par une assemblée générale et géré par un syndic.",
      },
      {
        q: 'Comment un syndic est-il désigné ?',
        a: "Le syndic et son adjoint sont désignés par l'assemblée générale à la majorité des trois quarts des voix des copropriétaires présents ou représentés, pour un mandat de deux ans renouvelable.",
      },
      {
        q: 'Pouvez-vous reprendre la gestion d’une copropriété déjà constituée ?',
        a: "Oui. Le changement de syndic se décide en assemblée générale. Nous vous accompagnons sur la préparation du dossier, la reprise des archives, des comptes et des contrats en cours, afin que la transition ne crée pas de rupture de service.",
      },
      {
        q: 'À quelle fréquence l’assemblée générale doit-elle se réunir ?',
        a: "Au moins une fois par an, pour approuver les comptes, voter le budget, décider des travaux et désigner le syndic. Les documents comptables doivent être mis à disposition de chaque copropriétaire quinze jours avant la réunion.",
      },
      {
        q: 'Comment les charges sont-elles réparties ?',
        a: "Les charges générales — conservation, entretien et administration des parties communes — sont réparties proportionnellement à la quote-part de chaque copropriétaire, telle que définie par le règlement de copropriété.",
      },
      {
        q: 'Intervenez-vous en dehors de Casablanca ?',
        a: "BFM est basée à Casablanca et étudie chaque demande au Maroc pour proposer les moyens et l'organisation adaptés au lieu d'intervention. Contactez-nous pour vérifier notre disponibilité sur votre secteur.",
      },
    ],
    related: ['conciergerie', 'maintenance-et-services-techniques', 'nettoyage-et-proprete'],
  },

  {
    num: '02',
    slug: 'conciergerie',
    title: 'Conciergerie',
    heading: 'Conciergerie',
    lead: 'Un service de proximité qui simplifie le quotidien des occupants et assure un accueil professionnel.',
    intro:
      "Une conciergerie bien tenue change la perception d'un immeuble : un visiteur orienté, un colis remis en main propre, une panne signalée avant qu'elle ne s'aggrave. BFM met en place une présence humaine formée, discrète et constante, dimensionnée selon le site.",
    excerpt:
      "Accueil, gestion des livraisons et des occupants, coordination des interventions au quotidien.",
    seoTitle: 'Conciergerie de résidence et d’immeuble au Maroc | BFM',
    seoDescription:
      "Service de conciergerie pour résidences, immeubles et sites professionnels : accueil, livraisons, relation aux occupants et coordination des interventions.",
    keywords: ['conciergerie résidence Maroc', 'conciergerie immeuble Casablanca', 'accueil résidence'],
    image: '/media/conciergerie.webp',
    imageAlt: "Comptoir de conciergerie d'une résidence, agent d'accueil au téléphone",
    capabilities: [
      { icon: 'bell', title: 'Accueil et assistance', text: "Accueil des visiteurs, information et orientation, dans le respect des consignes du site." },
      { icon: 'parcel', title: 'Gestion des livraisons', text: "Réception, enregistrement et remise des colis en toute sécurité." },
      { icon: 'users', title: 'Gestion des occupants', text: "Relation de proximité et coordination avec les résidents et les locataires." },
      { icon: 'calendar', title: 'Réservations et prestations', text: "Réservation de salles, de taxis, et prestations diverses à la demande." },
      { icon: 'wrench', title: 'Interventions et dépannages', text: "Coordination des interventions techniques et suivi des demandes jusqu'à leur clôture." },
      { icon: 'heart', title: 'Services personnalisés', text: "Des attentions sur mesure, définies avec vous, pour répondre à chaque besoin." },
    ],
    priority: {
      title: 'Notre engagement',
      text: "Être à l'écoute, réactifs et disponibles pour offrir un service de qualité et une expérience sereine à tous les occupants.",
    },
    audiences: ['coproprietes', 'entreprises'],
    engagements: [
      { title: 'Proximité', text: 'Une présence humaine et bienveillante au quotidien.' },
      { title: 'Réactivité', text: 'Des réponses rapides et des solutions efficaces.' },
      { title: 'Discrétion', text: 'Confidentialité et respect dans toutes nos interventions.' },
      { title: 'Satisfaction', text: 'La satisfaction des occupants au cœur de nos priorités.' },
    ],
    faq: [
      { q: 'La conciergerie est-elle assurée en continu ?', a: "L'amplitude horaire se définit avec vous selon le site et le budget : présence en journée, en soirée, ou couverture élargie. Nous dimensionnons l'équipe en conséquence." },
      { q: 'Peut-on combiner conciergerie et syndic ?', a: "Oui, et c'est le cas le plus fréquent. Vous avez alors un seul interlocuteur pour la gestion et pour la présence sur site, ce qui raccourcit nettement les délais de traitement." },
      { q: 'Comment sont sélectionnés les agents ?', a: "Les intervenants sont retenus sur leurs compétences et leur sérieux, puis encadrés par un responsable BFM qui assure le suivi et le remplacement en cas d'absence." },
      { q: 'Intervenez-vous pour des sites professionnels ?', a: "Oui. L'accueil en entreprise relève de la même logique : orientation des visiteurs, gestion des flux, coordination des prestataires et remontée d'information." },
    ],
    related: ['syndic-de-copropriete', 'nettoyage-et-proprete', 'maintenance-et-services-techniques'],
  },

  {
    num: '03',
    slug: 'maintenance-et-services-techniques',
    title: 'Maintenance & services techniques',
    heading: 'Maintenance et services techniques',
    lead: 'L’entretien et le dépannage de vos bâtiments et équipements, pour leur fiabilité et leur durabilité.',
    intro:
      "Un bâtiment coûte toujours moins cher à entretenir qu'à réparer. BFM assure la maintenance préventive et curative de vos installations techniques, avec des techniciens qualifiés en électricité, plomberie, peinture et menuiserie, et un suivi écrit de ce qui a été fait.",
    excerpt:
      'Maintenance préventive et curative, tous corps d’état, contrôles et mises en conformité.',
    seoTitle: 'Maintenance multitechnique de bâtiment à Casablanca | BFM',
    seoDescription:
      "Maintenance préventive et curative de vos bâtiments : électricité, plomberie, peinture, menuiserie, contrôles et mises en conformité. Devis sur étude.",
    keywords: ['maintenance multitechnique immeuble Casablanca', 'maintenance bâtiment Maroc', 'travaux tous corps d’état'],
    image: '/media/maintenance-et-services-techniques.webp',
    imageAlt: "Technicien BFM intervenant sur une armoire électrique",
    capabilities: [
      { icon: 'building', title: 'Maintenance des bâtiments', text: "Entretien régulier et préventif des parties communes et des locaux." },
      { icon: 'wrench', title: 'Travaux tous corps d’état', text: "Interventions en électricité, plomberie, peinture, menuiserie et second œuvre." },
      { icon: 'gauge', title: 'Dépannage rapide', text: "Une équipe réactive pour intervenir dans les meilleurs délais en cas de panne." },
      { icon: 'clipboard', title: 'Contrôles et vérifications', text: "Suivi des installations techniques et de leur conformité réglementaire." },
      { icon: 'shield', title: 'Sécurité et conformité', text: "Mise en conformité des équipements et respect des normes en vigueur." },
      { icon: 'lightbulb', title: 'Amélioration continue', text: "Optimisation des équipements pour plus de performance et d'économies." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Garantir la fiabilité et la durabilité de vos installations, pour votre tranquillité au quotidien.",
    },
    audiences: ['entreprises', 'coproprietes', 'collectivites'],
    engagements: [
      { title: 'Réactivité', text: 'Des interventions rapides, 7j/7 si nécessaire.' },
      { title: 'Expertise', text: 'Des techniciens qualifiés et expérimentés.' },
      { title: 'Qualité', text: 'Des prestations durables et soignées.' },
      { title: 'Confiance', text: 'Un partenaire fiable à vos côtés.' },
    ],
    faq: [
      { q: 'Quelle différence entre maintenance préventive et curative ?', a: "La préventive est planifiée : on contrôle et on remplace avant la panne. La curative répond à un incident déjà survenu. Un bon contrat combine les deux, la préventive réduisant mécaniquement le nombre d'interventions curatives." },
      { q: 'Quels corps de métier couvrez-vous ?', a: "Électricité, plomberie, peinture, menuiserie et les travaux de second œuvre associés. Pour les lots spécialisés — ascenseurs, groupes froid — nous coordonnons les prestataires agréés et contrôlons leurs interventions." },
      { q: 'Intervenez-vous en urgence ?', a: "Nos équipes interviennent rapidement et, si nécessaire, 7j/7. Les modalités d'astreinte sont fixées au contrat, selon la criticité de votre site." },
      { q: 'Recevons-nous un compte rendu après intervention ?', a: "Oui. Chaque intervention donne lieu à un compte rendu adressé au responsable désigné : ce qui a été contrôlé, ce qui a été fait, et les anomalies éventuellement constatées." },
    ],
    related: ['petits-travaux', 'syndic-de-copropriete', 'espaces-exterieurs'],
  },

  {
    num: '04',
    slug: 'petits-travaux',
    title: 'Petits travaux',
    heading: 'Petits travaux et interventions diverses',
    lead: 'Des solutions rapides et soignées pour vos réparations, installations et améliorations du quotidien.',
    intro:
      "Ce sont les chantiers que personne ne veut prendre : une porte qui ferme mal, une prise à déplacer, une étagère à fixer, une fuite sous l'évier. BFM les traite avec le même sérieux qu'un contrat annuel — parce que c'est souvent là que se juge un prestataire.",
    excerpt: 'Réparations, installations, fixations, retouches et petite plomberie.',
    seoTitle: 'Petits travaux et dépannage à Casablanca | BFM',
    seoDescription:
      "Petits travaux et interventions diverses : réparations, fixations, retouches, petite plomberie et électricité. Une équipe qualifiée, un devis clair.",
    keywords: ['petits travaux Casablanca', 'dépannage bricolage Maroc', 'homme toutes mains entreprise'],
    image: '/media/petits-travaux.webp',
    imageAlt: "Intervenant BFM réalisant des travaux de finition dans un local",
    capabilities: [
      { icon: 'wrench', title: 'Petites réparations', text: "Reprises et remises en état des éléments du quotidien qui se dégradent avec l'usage." },
      { icon: 'ruler', title: 'Installation et fixation', text: "Pose de mobilier, fixations murales, équipements et accessoires." },
      { icon: 'paint', title: 'Retouches et finitions', text: "Reprises de peinture, rebouchage, joints et finitions soignées." },
      { icon: 'droplet', title: 'Petite plomberie', text: "Robinetterie, siphons, chasses d'eau et fuites localisées." },
      { icon: 'plug', title: 'Petite électricité', text: "Remplacement d'appareillage, points lumineux et interventions simples." },
      { icon: 'door', title: 'Menuiserie et serrurerie', text: "Réglage de portes et fenêtres, quincaillerie et ajustements." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Traiter vite et proprement, sans laisser derrière nous un chantier à reprendre.",
    },
    audiences: ['particuliers', 'entreprises', 'coproprietes'],
    engagements: [
      { title: 'Rapidité', text: 'Des interventions planifiées sans délai inutile.' },
      { title: 'Propreté', text: 'Un chantier laissé net après chaque passage.' },
      { title: 'Devis clair', text: 'Le périmètre et le prix annoncés avant de commencer.' },
      { title: 'Polyvalence', text: 'Plusieurs corps de métier, un seul interlocuteur.' },
    ],
    faq: [
      { q: 'Y a-t-il un montant minimum d’intervention ?', a: "Les modalités sont précisées dans le devis. Pour les besoins récurrents, un contrat d'intervention à la demande est souvent plus avantageux qu'une succession de petites commandes." },
      { q: 'Fournissez-vous les fournitures ?', a: "Nous pouvons les fournir ou travailler avec celles que vous avez déjà. Le devis distingue toujours main-d'œuvre et fournitures." },
      { q: 'Intervenez-vous chez les particuliers ?', a: "Oui, chez les particuliers comme en entreprise et en copropriété." },
    ],
    related: ['maintenance-et-services-techniques', 'menage-chez-les-particuliers', 'nettoyage-et-proprete'],
  },

  {
    num: '05',
    slug: 'nettoyage-et-proprete',
    title: 'Nettoyage & propreté',
    heading: 'Nettoyage et propreté',
    lead: 'Des prestations adaptées à chaque environnement, pour des espaces propres, sains et accueillants.',
    intro:
      "Un hall d'immeuble, un open space et un entrepôt n'appellent ni les mêmes produits, ni les mêmes fréquences, ni les mêmes horaires. BFM construit un cahier des charges par site, puis s'y tient — et vous donne les moyens de le vérifier.",
    excerpt:
      'Bureaux, parties communes, fin de chantier, locaux industriels et locations courte durée.',
    seoTitle: 'Société de nettoyage à Casablanca — bureaux et immeubles | BFM',
    seoDescription:
      "Nettoyage de bureaux, parties communes, locaux industriels et fin de chantier à Casablanca. Cahier des charges établi site par site.",
    keywords: ['société de nettoyage Casablanca', 'nettoyage parties communes immeuble', 'nettoyage fin de chantier Casablanca', 'nettoyage bureaux Maroc'],
    image: '/media/nettoyage-et-proprete.webp',
    imageAlt: "Agents BFM en tenue assurant le nettoyage d'un plateau de bureaux",
    capabilities: [
      { icon: 'building', title: 'Bureaux et locaux professionnels', text: "Nettoyage régulier des bureaux, salles de réunion, open spaces et locaux administratifs." },
      { icon: 'home', title: 'Copropriétés et parties communes', text: "Entretien des halls, escaliers, ascenseurs, parkings et espaces communs." },
      { icon: 'spark', title: 'Fin de chantier', text: "Nettoyage après travaux pour livrer des espaces immédiatement utilisables." },
      { icon: 'building', title: 'Entrepôts et locaux industriels', text: "Nettoyage des entrepôts, ateliers et zones de stockage." },
      { icon: 'bed', title: 'Ménage et locations courte durée', text: "Prestations pour résidences, locations saisonnières et logements meublés." },
      { icon: 'window', title: 'Vitrerie intérieure', text: "Nettoyage des vitrages accessibles, cloisons vitrées et surfaces intérieures." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Offrir des prestations de nettoyage irréprochables, pour des espaces toujours propres, sains et agréables.",
    },
    audiences: ['entreprises', 'coproprietes', 'collectivites', 'particuliers'],
    engagements: [
      { title: 'Propreté', text: 'Des résultats visibles et durables.' },
      { title: 'Hygiène', text: 'Respect des protocoles et des normes.' },
      { title: 'Réactivité', text: 'Des interventions rapides et efficaces.' },
      { title: 'Équipe qualifiée', text: 'Un personnel formé, fiable et discret.' },
      { title: 'Produits responsables', text: "Des produits respectueux de l'environnement." },
    ],
    faq: [
      { q: 'À quelle fréquence intervenez-vous ?', a: "De plusieurs passages par jour à un passage hebdomadaire, selon la fréquentation du site. La fréquence est fixée au cahier des charges après diagnostic sur place." },
      { q: 'Intervenez-vous en dehors des heures de bureau ?', a: "Oui. Pour les sites tertiaires, l'intervention tôt le matin ou en soirée évite de gêner l'activité. Les horaires sont définis avec vous." },
      { q: 'Le nettoyage de fin de chantier est-il un service distinct ?', a: "Oui. Il demande des moyens différents — évacuation des gravats fins, décollage des protections, traitement des sols neufs — et se traite en prestation ponctuelle avec un devis dédié." },
      { q: 'Comment contrôlez-vous la qualité ?', a: "Par une checklist adaptée au site, des points de contrôle réguliers et un compte rendu adressé à votre responsable désigné, incluant les anomalies constatées." },
      { q: 'Fournissez-vous les produits et le matériel ?', a: "Oui, nos équipes interviennent avec leur matériel et des produits adaptés à chaque type de surface." },
    ],
    related: ['menage-chez-les-particuliers', 'nettoyage-de-facades', 'traitement-des-nuisibles'],
  },

  {
    num: '06',
    slug: 'menage-chez-les-particuliers',
    title: 'Ménage chez les particuliers',
    heading: 'Ménage chez les particuliers',
    lead: 'Un intérieur propre, sain et agréable, pour plus de confort au quotidien.',
    intro:
      "Faire entrer quelqu'un chez soi demande de la confiance. BFM met à votre disposition des intervenantes expérimentées, sélectionnées avec soin et encadrées par un responsable, pour entretenir votre domicile avec discrétion et régularité.",
    excerpt: 'Entretien du domicile, repassage, vitres, rangement — avec discrétion et régularité.',
    seoTitle: 'Ménage à domicile à Casablanca — service encadré | BFM',
    seoDescription:
      "Service de ménage à domicile à Casablanca : entretien complet, repassage, vitres et rangement. Des intervenantes sélectionnées et encadrées par un responsable.",
    keywords: ['femme de ménage Casablanca', 'ménage à domicile Maroc', 'service de ménage Airbnb Casablanca'],
    image: '/media/menage-chez-les-particuliers.webp',
    imageAlt: "Intervenante BFM assurant l'entretien d'un séjour",
    capabilities: [
      { icon: 'home', title: 'Entretien complet du domicile', text: "Nettoyage des sols, poussières, surfaces, salles de bain, cuisine et pièces à vivre." },
      { icon: 'spark', title: 'Repassage et linge', text: "Repassage soigné et pliage du linge, avec attention et organisation." },
      { icon: 'window', title: 'Vitres et surfaces', text: "Nettoyage des vitres, miroirs et surfaces pour un intérieur lumineux." },
      { icon: 'bed', title: 'Chambres et rangement', text: "Changement des draps, rangement et réorganisation des espaces." },
      { icon: 'leaf', title: 'Produits et méthodes adaptés', text: "Des produits efficaces et respectueux de votre santé et de l'environnement." },
      { icon: 'shield', title: 'Discrétion et confiance', text: "Des intervenantes sélectionnées avec soin, pour un service en toute sérénité." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Vous offrir un intérieur impeccable pour votre bien-être et celui de votre famille, grâce à un service fiable, régulier et personnalisé.",
    },
    audiences: ['particuliers'],
    engagements: [
      { title: 'Qualité', text: 'Un nettoyage soigné et minutieux.' },
      { title: 'Régularité', text: 'Des interventions ponctuelles ou régulières selon vos besoins.' },
      { title: 'Confiance', text: 'Des intervenantes sélectionnées avec rigueur.' },
      { title: 'Respect', text: 'Produits adaptés et respect de votre intérieur.' },
      { title: 'Service client', text: 'Un interlocuteur à votre écoute, réactif.' },
    ],
    faq: [
      { q: 'Quelle différence avec une intervenante indépendante ?', a: "Passer par une société vous apporte un cadre : un responsable joignable, un remplacement organisé en cas d'absence, du matériel et des produits fournis, et une prestation définie par écrit." },
      { q: 'Puis-je avoir toujours la même personne ?', a: "C'est ce que nous cherchons à assurer : la régularité de l'intervenante fait une grande partie de la qualité du service. En cas d'absence, un remplacement est organisé." },
      { q: 'Proposez-vous des prestations ponctuelles ?', a: "Oui : grand ménage de printemps, remise en état après déménagement, ou entretien entre deux locations courte durée." },
      { q: 'Intervenez-vous pour les locations Airbnb ?', a: "Oui. Les rotations entre deux séjours relèvent de notre service de nettoyage, avec une checklist adaptée et des horaires calés sur vos arrivées." },
    ],
    related: ['nettoyage-et-proprete', 'petits-travaux', 'entretien-des-piscines'],
  },

  {
    num: '07',
    slug: 'espaces-exterieurs',
    title: 'Espaces extérieurs',
    heading: 'Espaces extérieurs',
    lead: 'Des espaces verts et extérieurs entretenus avec soin, pour un cadre agréable et valorisé.',
    intro:
      "Les abords d'un immeuble sont la première chose que voient les visiteurs et les acheteurs potentiels. BFM prend en charge l'entretien et l'aménagement de vos espaces verts, allées et voiries, en tenant compte du climat et des essences locales.",
    excerpt: 'Espaces verts, élagage, nettoyage extérieur, allées et voiries.',
    seoTitle: 'Entretien des espaces verts et extérieurs au Maroc | BFM',
    seoDescription:
      "Entretien des espaces verts, élagage et abattage, nettoyage des extérieurs, allées et voiries pour copropriétés, entreprises et collectivités au Maroc.",
    keywords: ['contrat entretien espaces verts copropriété', 'entretien jardin Casablanca', 'élagage Maroc'],
    image: '/media/espaces-exterieurs.webp',
    imageAlt: "Allée paysagée et massifs entretenus au pied d'une résidence",
    capabilities: [
      { icon: 'leaf', title: 'Entretien des espaces verts', text: "Tonte, taille, désherbage, arrosage et entretien régulier des plantations." },
      { icon: 'scissors', title: 'Élagage et abattage', text: "Taille des arbres, élagage sécurisé et abattage en toute sécurité." },
      { icon: 'broom', title: 'Nettoyage des extérieurs', text: "Balayage, enlèvement des déchets, feuilles mortes et salissures." },
      { icon: 'road', title: 'Maintenance des allées et voiries', text: "Entretien des allées, parkings, bordures, mobiliers et équipements extérieurs." },
      { icon: 'shield', title: 'Sécurité et mise en conformité', text: "Contrôle et entretien pour garantir la sécurité et le respect des normes." },
      { icon: 'tree', title: 'Création et aménagement', text: "Conception et plantation de nouveaux massifs et espaces paysagers." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Offrir des espaces extérieurs propres, sécurisés et esthétiques, pour le bien-être de tous et la valorisation de votre site.",
    },
    audiences: ['coproprietes', 'collectivites', 'entreprises'],
    engagements: [
      { title: 'Environnement', text: 'Respect de la nature et pratiques responsables.' },
      { title: 'Qualité', text: 'Des prestations soignées pour des résultats durables.' },
      { title: 'Réactivité', text: 'Des interventions rapides et adaptées à vos besoins.' },
      { title: 'Professionnalisme', text: 'Des équipes formées, équipées et à votre écoute.' },
      { title: 'Valorisation', text: 'Des espaces entretenus qui valorisent votre patrimoine.' },
    ],
    faq: [
      { q: 'Proposez-vous des contrats annuels ?', a: "Oui, c'est la formule la plus adaptée aux espaces verts : le calendrier suit les saisons, avec des passages renforcés au printemps et une fréquence réduite en hiver." },
      { q: 'Gérez-vous l’arrosage ?', a: "Oui, y compris le contrôle et l'entretien des systèmes d'arrosage automatique, un poste sensible au Maroc où chaque fuite se paie en eau perdue." },
      { q: 'L’élagage des grands arbres est-il inclus ?', a: "Il fait l'objet d'une intervention spécifique, planifiée avec les moyens d'accès adaptés et les mesures de sécurisation de la zone." },
    ],
    related: ['entretien-des-piscines', 'nettoyage-et-proprete', 'syndic-de-copropriete'],
  },

  {
    num: '08',
    slug: 'entretien-des-piscines',
    title: 'Entretien des piscines',
    heading: 'Entretien des piscines',
    lead: 'Une eau propre, saine et cristalline toute l’année.',
    intro:
      "Une piscine mal suivie devient très vite un problème sanitaire et un poste de dépenses. BFM prend en charge l'entretien complet du bassin et de ses équipements, avec un contrôle régulier de l'équilibre de l'eau.",
    excerpt: "Nettoyage du bassin, traitement de l'eau, contrôle des équipements et maintenance.",
    seoTitle: 'Entretien de piscine à Casablanca — contrat régulier | BFM',
    seoDescription:
      "Entretien de piscine à Casablanca : nettoyage du bassin, traitement de l'eau, contrôle des équipements, mise en service et hivernage.",
    keywords: ['entretien piscine Casablanca', 'contrat maintenance piscine Maroc', 'hivernage piscine Maroc'],
    image: '/media/entretien-des-piscines.webp',
    imageAlt: "Bassin entretenu et matériel de nettoyage de piscine au bord de l'eau",
    capabilities: [
      { icon: 'droplet', title: 'Nettoyage complet', text: "Nettoyage du bassin, de la ligne d'eau, des parois, du fond et des skimmers." },
      { icon: 'flask', title: "Traitement de l'eau", text: "Contrôle et réglage du pH, du chlore, du TAC et du stabilisant pour une eau équilibrée." },
      { icon: 'gauge', title: 'Contrôle des équipements', text: "Vérification et entretien des filtres, pompes, skimmers et systèmes de traitement." },
      { icon: 'broom', title: 'Élimination des déchets', text: "Retrait des feuilles, insectes et impuretés pour une eau toujours propre." },
      { icon: 'wrench', title: 'Maintenance technique', text: "Inspection régulière et maintenance préventive pour éviter les pannes." },
      { icon: 'shield', title: 'Sécurité et conformité', text: "Vérification des dispositifs de sécurité et respect des normes en vigueur." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Vous garantir une piscine toujours propre, saine et sécurisée, pour des moments de détente en toute tranquillité.",
    },
    audiences: ['coproprietes', 'particuliers', 'entreprises'],
    engagements: [
      { title: 'Eau saine', text: 'Une eau claire et équilibrée pour votre santé et votre confort.' },
      { title: 'Gain de temps', text: 'Nous nous occupons de tout, vous profitez pleinement.' },
      { title: 'Sécurité', text: 'Respect des normes et contrôle des équipements.' },
      { title: 'Expertise', text: 'Équipe qualifiée et matériel professionnel.' },
      { title: 'Environnement', text: 'Des méthodes économes en eau et en ressources.' },
    ],
    faq: [
      { q: 'À quelle fréquence faut-il entretenir une piscine ?', a: "Nous proposons des passages hebdomadaires, bimensuels ou mensuels. En été et sous le climat marocain, un passage hebdomadaire est généralement nécessaire pour tenir l'équilibre de l'eau." },
      { q: 'Que comprend la mise en service et l’hivernage ?', a: "La mise en service prépare le bassin pour la saison : nettoyage complet, remise en route de la filtration et rééquilibrage de l'eau. L'hivernage protège le bassin et les équipements pendant la période d'inutilisation." },
      { q: 'Intervenez-vous sur les piscines collectives ?', a: "Oui, notamment pour les résidences et les copropriétés, où les exigences de sécurité et de qualité de l'eau sont plus strictes." },
      { q: 'Que se passe-t-il si l’eau devient verte ?', a: "C'est un déséquilibre chimique, presque toujours rattrapable. Nous intervenons en dépannage : analyse, traitement choc, filtration renforcée puis rééquilibrage." },
    ],
    related: ['espaces-exterieurs', 'maintenance-et-services-techniques', 'nettoyage-et-proprete'],
  },

  {
    num: '09',
    slug: 'traitement-des-nuisibles',
    title: 'Traitement des nuisibles 3D & 4D',
    heading: 'Traitement des nuisibles — 3D et 4D',
    lead: 'Dératisation, désinsectisation, désinfection et désodorisation de vos locaux.',
    intro:
      "Les nuisibles ne sont pas qu'une gêne : dans un commerce ou un établissement recevant du public, ils engagent votre réputation et votre conformité. BFM intervient avec des produits homologués, de façon discrète, et documente chaque passage.",
    excerpt: 'Dératisation, désinsectisation, désinfection, diagnostic, prévention et traçabilité.',
    seoTitle: 'Dératisation et désinsectisation à Casablanca — 3D et 4D | BFM',
    seoDescription:
      "Traitement des nuisibles 3D et 4D à Casablanca : dératisation, désinsectisation, désinfection, diagnostic et rapports d'intervention.",
    keywords: ['dératisation Casablanca', 'désinsectisation Maroc', 'désinfection locaux professionnels Maroc', 'traitement 3D 4D'],
    image: '/media/traitement-des-nuisibles.webp',
    imageAlt: "Technicien BFM équipé réalisant un traitement anti-nuisibles dans un local professionnel",
    capabilities: [
      { icon: 'rat', title: 'Dératisation', text: "Élimination des rongeurs et prévention des infestations." },
      { icon: 'bug', title: 'Désinsectisation', text: "Élimination des insectes rampants et volants de tous types." },
      { icon: 'spray', title: 'Désinfection des locaux', text: "Assainissement des surfaces et de l'air pour un environnement sain." },
      { icon: 'search', title: 'Diagnostic et prévention', text: "Inspection approfondie et identification des risques de nuisibles." },
      { icon: 'flask', title: 'Traitements adaptés', text: "Solutions professionnelles ciblées, respectueuses et conformes." },
      { icon: 'clipboard', title: 'Suivi et traçabilité', text: "Suivi régulier, rapports d'intervention et traçabilité complète." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Protéger durablement vos locaux, vos occupants et votre activité grâce à des interventions efficaces, discrètes et sécurisées.",
    },
    audiences: ['entreprises', 'coproprietes', 'particuliers', 'collectivites'],
    engagements: [
      { title: 'Efficacité', text: 'Des interventions rapides et des résultats durables.' },
      { title: 'Sécurité', text: 'Méthodes et produits conformes, sûrs pour les personnes et les lieux.' },
      { title: 'Discrétion', text: 'Des interventions discrètes et respectueuses de votre environnement.' },
      { title: 'Prévention', text: 'Conseils et actions préventives pour éviter les réinfestations.' },
      { title: 'Service client', text: 'Une écoute attentive et un accompagnement réactif.' },
    ],
    faq: [
      { q: 'Que signifient 3D et 4D ?', a: "La 3D regroupe la Dératisation, la Désinsectisation et la Désinfection. La 4D y ajoute la Désodorisation, qui traite les odeurs persistantes après une infestation ou un sinistre." },
      { q: 'Faut-il quitter les locaux pendant l’intervention ?', a: "Cela dépend du traitement et du produit employé. Le délai de réintégration vous est indiqué avant l'intervention, avec les précautions à respecter." },
      { q: 'Combien de passages sont nécessaires ?', a: "Une infestation installée demande généralement plusieurs passages : le traitement initial, puis un contrôle pour vérifier l'efficacité et traiter les nouvelles éclosions. Le diagnostic le précise." },
      { q: 'Recevons-nous un document d’intervention ?', a: "Oui. Chaque passage donne lieu à un rapport : zones traitées, produits utilisés, constats et recommandations — pièce utile en cas de contrôle sanitaire." },
      { q: 'Intervenez-vous en copropriété ?', a: "Oui. Les parties communes, vide-ordures, caves et parkings sont des zones sensibles où un traitement collectif est bien plus efficace que des actions individuelles." },
    ],
    related: ['nettoyage-et-proprete', 'syndic-de-copropriete', 'maintenance-et-services-techniques'],
  },

  {
    num: '10',
    slug: 'nettoyage-de-facades',
    title: 'Nettoyage de façades',
    heading: 'Nettoyage de façades — nacelle et cordistes',
    lead: 'Des façades propres, valorisées et durables, même en zones difficiles d’accès.',
    intro:
      "Le travail en hauteur ne s'improvise pas. BFM intervient sur les façades, vitrages et surfaces extérieures avec des équipements adaptés et des intervenants expérimentés, en organisant l'accès selon les contraintes réelles du site.",
    excerpt: 'Intervention avec nacelle, accès sur cordes, vitrages et bardages, sécurisation.',
    seoTitle: 'Nettoyage de façades et vitres en hauteur à Casablanca | BFM',
    seoDescription:
      "Nettoyage de façades, vitrages et bardages en hauteur à Casablanca : intervention avec nacelle ou accès sur cordes, avec sécurisation de la zone.",
    keywords: ['nettoyage façade Casablanca', 'cordiste Casablanca', 'nettoyage vitres en hauteur Maroc'],
    image: '/media/nettoyage-de-facades.webp',
    imageAlt: "Intervenants BFM nettoyant une façade vitrée en nacelle et sur cordes",
    capabilities: [
      { icon: 'lift', title: 'Nettoyage avec nacelle', text: "Intervention sécurisée sur façades, vitrages et bardages en hauteur." },
      { icon: 'rope', title: 'Cordistes expérimentés', text: "Accès sur cordes pour les zones complexes ou inaccessibles aux engins." },
      { icon: 'window', title: 'Vitres et façades extérieures', text: "Élimination des salissures, traces, poussières et dépôts." },
      { icon: 'shield', title: 'Sécurité et matériel adapté', text: "Équipements professionnels, balisage et respect strict des procédures." },
      { icon: 'building', title: 'Bardages et surfaces', text: "Traitement des bardages métalliques, composites et parements extérieurs." },
      { icon: 'spark', title: 'Remise en valeur', text: "Une façade nettoyée qui restitue l'aspect d'origine du bâtiment." },
    ],
    priority: {
      title: 'Notre priorité',
      text: "Garantir un résultat impeccable tout en assurant la sécurité des intervenants et des occupants.",
    },
    audiences: ['entreprises', 'coproprietes', 'collectivites'],
    engagements: [
      { title: 'Sécurité', text: 'Procédures strictes et balisage de la zone.' },
      { title: 'Matériel adapté', text: 'Nacelles et équipements professionnels.' },
      { title: 'Réactivité', text: 'Interventions rapides et planifiées.' },
      { title: 'Cordistes qualifiés', text: 'Personnel formé et expérimenté.' },
      { title: 'Résultat durable', text: 'Des façades propres et valorisées.' },
    ],
    faq: [
      { q: 'Nacelle ou cordistes : comment choisit-on ?', a: "C'est la configuration du site qui décide. La nacelle demande un sol porteur et un dégagement suffisant. Là où l'engin ne passe pas — cour intérieure, décrochés, rue étroite — l'accès sur cordes prend le relais. Le choix se fait lors de la visite technique." },
      { q: 'Une visite préalable est-elle nécessaire ?', a: "Oui, systématiquement. Elle permet d'évaluer les accès, les points d'ancrage, la nature des surfaces et les contraintes de voisinage, donc d'établir un devis juste et un plan de sécurisation." },
      { q: 'Faut-il interrompre l’activité du bâtiment ?', a: "Rarement. Nous balisons les zones concernées et organisons l'intervention par tranches, le plus souvent sans arrêt de l'activité. Les créneaux sont calés avec vous." },
      { q: 'À quelle fréquence nettoyer une façade ?', a: "Cela dépend de l'exposition : proximité d'un axe routier, embruns marins, chantier voisin. Pour un immeuble tertiaire, un à deux passages par an sur les vitrages est courant." },
    ],
    related: ['nettoyage-et-proprete', 'maintenance-et-services-techniques', 'espaces-exterieurs'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
