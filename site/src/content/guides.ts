/**
 * Les guides — le contenu qui creuse l'écart (cf. ARCHITECTURE.md §2.3, brèche n°1).
 *
 * Aucun concurrent prestataire marocain ne publie de contenu sérieux sur la loi 18-00 :
 * ce terrain est occupé par des éditeurs de logiciels et des avocats.
 *
 * ⚠ RIGUEUR JURIDIQUE — règles suivies pour la rédaction :
 *  - on n'affirme que ce qui a été recoupé sur plusieurs sources concordantes ;
 *  - les sources secondaires se contredisent sur certains seuils de majorité : quand c'est le cas,
 *    on renvoie au règlement de copropriété et au texte de loi plutôt que de trancher ;
 *  - le régime applicable est la loi 18-00 telle que modifiée par la loi 106-12 (2016) ;
 *  - la loi 30-24, adoptée le 9 juillet 2024, est présentée comme une évolution à surveiller,
 *    sans affirmer une date d'entrée en vigueur non vérifiée ;
 *  - le décret n° 2.23.700 (B.O. n° 7391 du 31 mars 2025) est confirmé publié.
 *  → Ces pages portent une mention d'information juridique (composant <LegalNote />).
 *  → À faire relire par le client, et à réviser si la loi 30-24 est promulguée.
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'table'; head: string[]; rows: string[][] };

export type Guide = {
  slug: string;
  title: string;
  heading: string;
  lead: string;
  seoTitle: string;
  seoDescription: string;
  /** Date de publication / dernière révision (ISO). */
  updated: string;
  readingTime: number;
  /** Signale les pages à faire relire juridiquement. */
  legal: boolean;
  category: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
  relatedServices: string[];
};

export const guides: Guide[] = [
  {
    slug: 'loi-18-00-copropriete-maroc',
    title: 'La loi 18-00 expliquée',
    heading: 'La copropriété au Maroc : comprendre la loi 18-00',
    lead: "Le cadre légal qui régit votre immeuble, ce qu'il impose au syndic, et ce qu'il vous donne comme droits.",
    seoTitle: 'Loi 18-00 copropriété Maroc : le guide clair | BFM',
    seoDescription:
      "Loi 18-00 modifiée par la loi 106-12 : rôle du syndic, assemblée générale, charges, conseil syndical. Le cadre de la copropriété au Maroc, expliqué simplement.",
    updated: '2026-09-21',
    readingTime: 8,
    legal: true,
    category: 'Copropriété',
    blocks: [
      {
        type: 'p',
        text: "Presque tous les immeubles collectifs du Maroc sont régis par un texte que peu de copropriétaires ont lu : la loi n° 18-00 relative au statut de la copropriété des immeubles bâtis. C'est elle qui décide qui peut voter quoi, qui paie quelles charges, et ce que votre syndic a le droit — ou le devoir — de faire.",
      },
      {
        type: 'p',
        text: "Ce guide en donne une lecture pratique, du point de vue de ceux qui vivent dans l'immeuble.",
      },
      { type: 'h2', text: 'Trois textes qui se superposent', id: 'textes' },
      {
        type: 'p',
        text: "Le droit marocain de la copropriété ne tient pas dans une seule loi. Trois textes se sont empilés, et aucun n'a abrogé le précédent :",
      },
      {
        type: 'table',
        head: ['Texte', 'Date', 'Ce qu’il apporte'],
        rows: [
          [
            'Loi 18-00',
            'Dahir n° 1-02-298 du 3 octobre 2002',
            'Le socle : séparation des parties privatives et communes, quotes-parts, organes de gestion.',
          ],
          [
            'Loi 106-12',
            '2016',
            'La professionnalisation : rôle renforcé du conseil syndical, clarification des majorités, durcissement du recouvrement.',
          ],
          [
            'Loi 30-24',
            'Adoptée le 9 juillet 2024',
            'Prévention des conflits : conciliation préalable, convocation d’AG par les copropriétaires, notification rapide des décisions.',
          ],
        ],
      },
      {
        type: 'callout',
        title: 'Le régime applicable aujourd’hui',
        text: "C'est la loi 18-00 telle que modifiée et complétée par la loi 106-12. La loi 30-24, adoptée en juillet 2024, est une évolution à suivre : vérifiez son état de promulgation avant de vous en prévaloir. S'y ajoute le décret n° 2.23.700, publié au Bulletin Officiel n° 7391 du 31 mars 2025, qui impose des annexes comptables normalisées au syndic.",
      },
      { type: 'h2', text: 'Le syndicat des copropriétaires', id: 'syndicat' },
      {
        type: 'p',
        text: "Dès la première inscription d'un lot au registre foncier, tous les copropriétaires sont automatiquement regroupés en un syndicat. Ce n'est pas une formalité : ce syndicat a la personnalité morale et l'autonomie financière. Il peut détenir un compte bancaire, contracter, et agir en justice.",
      },
      {
        type: 'p',
        text: "Vous n'adhérez pas au syndicat, vous en faites partie du seul fait d'être propriétaire d'un lot. Et vous ne pouvez pas en sortir en refusant de payer.",
      },
      { type: 'h2', text: 'Qui décide quoi', id: 'organes' },
      { type: 'h3', text: "L'assemblée générale" },
      {
        type: 'p',
        text: "C'est l'organe souverain. Elle se réunit au moins une fois par an pour approuver les comptes, voter le budget, décider des travaux et désigner le syndic. Les documents comptables doivent être mis à la disposition de chaque copropriétaire quinze jours avant la réunion — ce délai n'est pas indicatif, il conditionne la validité de votre information.",
      },
      { type: 'h3', text: 'Le syndic' },
      {
        type: 'p',
        text: "Il exécute, il ne décide pas. Le syndic et son adjoint sont désignés par l'assemblée générale pour un mandat de deux ans renouvelable. La désignation et la révocation du syndic relèvent d'une majorité qualifiée des trois quarts des voix des copropriétaires présents ou représentés.",
      },
      { type: 'h3', text: 'Le conseil syndical' },
      {
        type: 'p',
        text: "Émanation des copropriétaires, il assiste le syndic et contrôle son action. La loi 106-12 a renforcé son rôle. C'est lui, en pratique, qui fait la différence entre une copropriété bien tenue et une copropriété subie.",
      },
      { type: 'h2', text: 'Les obligations du syndic', id: 'obligations' },
      {
        type: 'p',
        text: "L'article 26 de la loi lui assigne des devoirs précis. Les principaux :",
      },
      {
        type: 'ul',
        items: [
          "Exécuter les décisions de l'assemblée générale.",
          "Gérer les fonds du syndicat et ouvrir un compte bancaire au nom de la copropriété, distinct de ses propres fonds.",
          "Souscrire l'assurance de l'immeuble.",
          "Représenter le syndicat en justice.",
          "Assurer l'entretien courant des parties communes.",
          "Convoquer l'assemblée générale annuelle.",
        ],
      },
      {
        type: 'p',
        text: "Le compte bancaire séparé mérite qu'on s'y arrête : c'est la garantie la plus simple contre la confusion entre l'argent de la copropriété et celui du gestionnaire. Si votre syndic n'en a pas ouvert un au nom du syndicat, c'est un signal d'alerte.",
      },
      { type: 'h2', text: 'Les charges', id: 'charges' },
      {
        type: 'p',
        text: "Les charges générales couvrent la conservation, l'entretien et l'administration des parties communes : nettoyage, éclairage, entretien de l'ascenseur, assurance de l'immeuble, honoraires du syndic. Elles sont réparties proportionnellement à la quote-part de chaque copropriétaire, telle que fixée par le règlement de copropriété.",
      },
      {
        type: 'p',
        text: "En cas d'impayés, l'article 42, renforcé par la loi 106-12, permet au syndic d'engager une action en recouvrement, y compris par l'inscription d'une hypothèque légale sur le lot du débiteur. L'impayé d'un copropriétaire est en effet payé, de fait, par tous les autres.",
      },
      { type: 'h2', text: 'Les obligations comptables depuis 2025', id: 'comptabilite' },
      {
        type: 'p',
        text: "Le décret n° 2.23.700, publié au Bulletin Officiel du 31 mars 2025, impose au syndic des annexes comptables normalisées, présentées à l'assemblée générale annuelle. Le nombre d'annexes varie selon la taille de la copropriété, mesurée à ses recettes annuelles. C'est un changement concret : la tenue de comptes approximative n'est plus défendable.",
      },
      { type: 'h2', text: 'Ce qu’il faut retenir', id: 'retenir' },
      {
        type: 'ol',
        items: [
          "Le syndicat existe de plein droit ; vous en faites partie et vous lui devez vos charges.",
          "L'assemblée générale décide, le syndic exécute.",
          "Vos comptes doivent être consultables quinze jours avant l'AG.",
          "Les fonds de la copropriété doivent vivre sur un compte dédié.",
          "La désignation et la révocation du syndic passent par une majorité qualifiée.",
          "Depuis mars 2025, la comptabilité du syndic est normalisée par décret.",
        ],
      },
    ],
    faq: [
      {
        q: 'Le syndic peut-il être un copropriétaire ?',
        a: "Oui. Le syndic peut être un copropriétaire élu ou un professionnel. Le syndic professionnel apporte la disponibilité, la méthode et la responsabilité contractuelle que le bénévolat ne peut pas toujours offrir, particulièrement depuis que la comptabilité est normalisée.",
      },
      {
        q: 'Que faire si le syndic ne convoque pas l’assemblée générale ?',
        a: "C'est précisément l'une des situations que la loi 30-24 entend débloquer, en permettant aux copropriétaires de convoquer eux-mêmes l'assemblée avec un préavis de quinze jours. En attendant, le conseil syndical doit mettre le syndic en demeure, et le recours judiciaire reste ouvert.",
      },
      {
        q: 'Puis-je refuser de payer mes charges si je conteste la gestion ?',
        a: "Non. La contestation de la gestion et le paiement des charges sont deux choses distinctes. Cesser de payer vous expose à une action en recouvrement et, le cas échéant, à une hypothèque légale sur votre lot, sans faire avancer votre contestation.",
      },
      {
        q: 'Où trouver le texte de la loi ?',
        a: "La loi 18-00 a été promulguée par le dahir n° 1-02-298 du 3 octobre 2002. Le ministère chargé de l'Habitat et de la Politique de la Ville en publie le texte, ainsi qu'un guide du syndic de copropriété.",
      },
    ],
    relatedServices: ['syndic-de-copropriete', 'conciergerie', 'maintenance-et-services-techniques'],
  },

  {
    slug: 'changer-de-syndic-maroc',
    title: 'Changer de syndic',
    heading: 'Changer de syndic au Maroc : la marche à suivre',
    lead: "Le changement se décide en assemblée générale. Voici comment le préparer pour qu'il se passe proprement.",
    seoTitle: 'Comment changer de syndic de copropriété au Maroc | BFM',
    seoDescription:
      "Changer de syndic au Maroc : la majorité requise, la préparation de l'assemblée générale et la reprise des archives et des comptes.",
    updated: '2026-09-21',
    readingTime: 6,
    legal: true,
    category: 'Copropriété',
    blocks: [
      {
        type: 'p',
        text: "Changer de syndic n'est ni un drame ni une formalité. C'est une décision d'assemblée générale qui, bien préparée, se règle en une réunion — et qui, mal préparée, laisse une copropriété sans comptes et sans archives pendant des mois.",
      },
      { type: 'h2', text: 'Quand le changement se justifie', id: 'quand' },
      {
        type: 'p',
        text: "Le mandat du syndic est de deux ans, renouvelable. Le non-renouvellement à échéance est la voie la plus simple. Une révocation en cours de mandat suppose des motifs sérieux. Les signaux qui reviennent le plus souvent :",
      },
      {
        type: 'ul',
        items: [
          "Les comptes ne sont pas présentés, ou ne sont pas consultables quinze jours avant l'assemblée générale.",
          "Les fonds de la copropriété ne sont pas sur un compte bancaire ouvert au nom du syndicat.",
          "L'assemblée générale annuelle n'est pas convoquée.",
          "Les demandes d'intervention restent sans réponse, ou sans suite.",
          "Les impayés s'accumulent sans qu'aucune action de recouvrement ne soit engagée.",
          "Depuis mars 2025, les annexes comptables normalisées ne sont pas produites.",
        ],
      },
      { type: 'h2', text: 'La décision', id: 'decision' },
      {
        type: 'p',
        text: "La désignation comme la révocation du syndic relèvent de l'assemblée générale, à une majorité qualifiée des trois quarts des voix des copropriétaires présents ou représentés. Vérifiez les règles de représentation et de plafonnement des voix applicables à votre copropriété : la loi 106-12 encadre les délégations de vote, et votre règlement de copropriété peut préciser certains points.",
      },
      { type: 'h2', text: 'Préparer l’assemblée', id: 'preparer' },
      {
        type: 'ol',
        items: [
          "Réunir le conseil syndical et documenter les manquements constatés, pièces à l'appui.",
          "Consulter deux ou trois syndics candidats et obtenir des propositions écrites et comparables : périmètre, honoraires, fréquence des comptes rendus, interlocuteur dédié.",
          "Faire porter la question à l'ordre du jour de l'assemblée générale, en respectant les délais de convocation.",
          "Joindre à la convocation les éléments permettant aux copropriétaires de voter en connaissance de cause.",
          "Tenir l'assemblée, faire voter la désignation et consigner la décision au procès-verbal.",
          "Notifier la décision au syndic sortant et organiser la passation.",
        ],
      },
      { type: 'h2', text: 'La passation : le point sensible', id: 'passation' },
      {
        type: 'p',
        text: "C'est là que les changements de syndic se passent mal. Le syndic sortant détient les archives, les comptes et les contrats. La liste minimale à récupérer :",
      },
      {
        type: 'ul',
        items: [
          "Le règlement de copropriété et l'état descriptif de division.",
          "Les procès-verbaux des assemblées générales antérieures.",
          "Les pièces comptables, le solde du compte bancaire du syndicat et l'état des impayés par lot.",
          "Les contrats en cours : assurance, ascenseur, nettoyage, gardiennage, espaces verts.",
          "Les dossiers techniques : plans, rapports de contrôle, garanties en cours.",
          "Les coordonnées à jour des copropriétaires.",
        ],
      },
      {
        type: 'callout',
        title: 'Le conseil qui évite trois mois de blocage',
        text: "Ne laissez pas la passation à l'improvisation. Fixez, dans la décision d'assemblée, une date de remise des archives et désignez un membre du conseil syndical pour en accuser réception, pièce par pièce.",
      },
      { type: 'h2', text: 'Ce que BFM fait à ce moment-là', id: 'bfm' },
      {
        type: 'p',
        text: "Nous accompagnons la préparation du dossier, la reprise des archives, des comptes et des contrats en cours, afin que la transition ne crée pas de rupture de service : le nettoyage, l'ascenseur et les espaces verts continuent pendant que l'administratif se réorganise.",
      },
    ],
    faq: [
      {
        q: 'Le syndic sortant peut-il refuser de remettre les archives ?',
        a: "Les documents appartiennent au syndicat des copropriétaires, pas au syndic. Un refus de remise se traite par mise en demeure, puis par voie judiciaire si nécessaire. C'est aussi l'un des points que la loi 30-24 cherche à désamorcer par la conciliation préalable.",
      },
      {
        q: 'Combien de temps prend un changement de syndic ?',
        a: "La décision se prend en une assemblée générale. C'est la préparation — consultation des candidats, convocation dans les délais — et la passation qui déterminent le calendrier réel, généralement quelques semaines.",
      },
      {
        q: 'Faut-il attendre la fin du mandat ?',
        a: "Non, la révocation en cours de mandat est possible par décision de l'assemblée générale. Attendre l'échéance des deux ans reste la voie la moins conflictuelle quand la situation n'est pas urgente.",
      },
      {
        q: 'Comment comparer deux propositions de syndic ?',
        a: "Au-delà des honoraires, comparez ce qui est réellement inclus : nombre de visites sur site, fréquence des comptes rendus, existence d'un interlocuteur nommé, modalités de traitement des urgences et prestations facturées en supplément.",
      },
    ],
    relatedServices: ['syndic-de-copropriete', 'conciergerie', 'nettoyage-et-proprete'],
  },

  {
    slug: 'charges-de-copropriete-repartition',
    title: 'Les charges de copropriété',
    heading: 'Charges de copropriété : qui paie quoi, et pourquoi',
    lead: 'Comment les charges sont réparties, ce qu’elles couvrent, et comment lire un appel de fonds.',
    seoTitle: 'Charges de copropriété au Maroc : répartition et calcul | BFM',
    seoDescription:
      "Comment sont réparties les charges de copropriété au Maroc : quotes-parts, charges générales et spéciales, appels de fonds, budget prévisionnel et impayés.",
    updated: '2026-09-21',
    readingTime: 6,
    legal: true,
    category: 'Copropriété',
    blocks: [
      {
        type: 'p',
        text: "« Pourquoi est-ce que je paie plus que mon voisin du deuxième ? » C'est la question qui revient à chaque assemblée générale. La réponse tient en deux mots : la quote-part.",
      },
      { type: 'h2', text: 'La quote-part, clé de tout', id: 'quote-part' },
      {
        type: 'p',
        text: "Chaque lot se voit affecter une quote-part des parties communes, fixée par le règlement de copropriété et l'état descriptif de division. Elle reflète la consistance du lot — surface, situation, nature. Les charges générales sont réparties proportionnellement à cette quote-part.",
      },
      {
        type: 'p',
        text: "Autrement dit : la répartition n'est pas une décision du syndic, ni un vote annuel. Elle est inscrite dans un document opposable à tous. Si vous trouvez votre quote-part anormale, c'est le règlement de copropriété qu'il faut examiner, pas l'appel de fonds.",
      },
      { type: 'h2', text: 'Charges générales et charges spéciales', id: 'types' },
      {
        type: 'table',
        head: ['Type', 'Ce que cela couvre', 'Clé de répartition'],
        rows: [
          [
            'Charges générales',
            "Conservation, entretien et administration des parties communes : nettoyage, éclairage, assurance de l'immeuble, honoraires du syndic.",
            'Quote-part de chaque lot',
          ],
          [
            'Charges spéciales',
            "Services et équipements communs dont l'utilité varie selon les lots : ascenseur, chauffage collectif.",
            "Selon l'utilité pour chaque lot",
          ],
          [
            'Travaux votés',
            "Réfection de façade, mise aux normes, gros entretien décidés en assemblée générale.",
            'Quote-part, sauf disposition particulière',
          ],
        ],
      },
      {
        type: 'p',
        text: "La distinction compte. Un propriétaire de rez-de-chaussée peut légitimement discuter sa participation aux charges d'ascenseur, mais pas sa participation à l'assurance de l'immeuble.",
      },
      { type: 'h2', text: 'Du budget à l’appel de fonds', id: 'budget' },
      {
        type: 'ol',
        items: [
          "Le syndic établit un budget prévisionnel : ce que la copropriété devrait dépenser sur l'exercice.",
          "L'assemblée générale l'examine et le vote.",
          "Le budget est divisé en appels de fonds, généralement trimestriels, répartis selon les quotes-parts.",
          "En fin d'exercice, les comptes réels sont arrêtés et présentés à l'assemblée.",
          "L'écart entre le prévisionnel et le réel donne lieu à régularisation.",
        ],
      },
      {
        type: 'callout',
        title: 'Ce que vous pouvez exiger',
        text: "Les documents comptables et les pièces justificatives doivent être mis à votre disposition quinze jours avant l'assemblée générale. Depuis le décret n° 2.23.700 du 31 mars 2025, le syndic doit en outre présenter des annexes comptables normalisées.",
      },
      { type: 'h2', text: 'Les impayés', id: 'impayes' },
      {
        type: 'p',
        text: "Un impayé n'est jamais neutre : les charges de l'immeuble continuent de courir, donc le manque est comblé par la trésorerie commune — c'est-à-dire par les copropriétaires à jour. L'article 42 de la loi 18-00, renforcé par la loi 106-12, permet au syndic d'engager le recouvrement, y compris par inscription d'une hypothèque légale sur le lot du débiteur.",
      },
      {
        type: 'p',
        text: "Un syndic qui laisse filer les impayés ne rend service à personne. Le suivi des impayés fait partie intégrante de la gestion financière.",
      },
      { type: 'h2', text: 'Faire baisser les charges', id: 'baisser' },
      {
        type: 'ul',
        items: [
          "Remettre les contrats en concurrence : nettoyage, espaces verts, ascenseur, assurance.",
          "Passer du curatif au préventif : une maintenance planifiée coûte moins cher qu'une succession de dépannages.",
          "Traiter les fuites d'eau et l'arrosage : au Maroc, c'est souvent le premier poste d'économie réelle.",
          "Regrouper les prestations chez un prestataire unique pour réduire les frais de coordination.",
          "Suivre les impayés dès le premier retard plutôt qu'au bout d'un an.",
        ],
      },
    ],
    faq: [
      {
        q: 'Les charges peuvent-elles être réparties autrement qu’à la quote-part ?',
        a: "Les charges générales suivent la quote-part. Les charges liées à des services et équipements communs peuvent être réparties selon leur utilité pour chaque lot. Le règlement de copropriété fait foi.",
      },
      {
        q: 'Qui paie les charges, le propriétaire ou le locataire ?',
        a: "Vis-à-vis du syndicat, le copropriétaire est le débiteur. La répartition entre propriétaire et locataire relève du contrat de bail et ne se substitue pas à cette obligation.",
      },
      {
        q: 'Peut-on contester un appel de fonds ?',
        a: "Vous pouvez demander les pièces justificatives et contester une dépense devant l'assemblée générale ou, le cas échéant, en justice. En revanche, suspendre unilatéralement le paiement vous expose à une action en recouvrement.",
      },
      {
        q: 'Qu’est-ce que le fonds de travaux ?',
        a: "Une réserve alimentée par les copropriétaires pour financer les gros travaux à venir sans appel exceptionnel brutal. La loi 106-12 a renforcé cette logique d'anticipation.",
      },
    ],
    relatedServices: ['syndic-de-copropriete', 'maintenance-et-services-techniques', 'espaces-exterieurs'],
  },

  {
    slug: 'assemblee-generale-copropriete-maroc',
    title: "L'assemblée générale",
    heading: 'Assemblée générale de copropriété : comment ça se passe',
    lead: 'Convocation, ordre du jour, quorum, votes, procès-verbal : le déroulé d’une AG bien tenue.',
    seoTitle: 'Assemblée générale de copropriété au Maroc : déroulement | BFM',
    seoDescription:
      "Convocation, délai de quinze jours, ordre du jour, majorités, procès-verbal : comment se déroule une assemblée générale de copropriété au Maroc.",
    updated: '2026-09-21',
    readingTime: 6,
    legal: true,
    category: 'Copropriété',
    blocks: [
      {
        type: 'p',
        text: "L'assemblée générale est le seul moment où la copropriété décide. Tout le reste — le syndic, le conseil syndical, les prestataires — ne fait qu'exécuter. D'où l'importance de la tenir correctement.",
      },
      { type: 'h2', text: 'Au moins une fois par an', id: 'frequence' },
      {
        type: 'p',
        text: "L'assemblée générale doit se réunir au moins une fois par an pour approuver les comptes, voter le budget, décider des travaux et désigner le syndic. Des assemblées extraordinaires peuvent être convoquées en cours d'année lorsqu'une décision ne peut pas attendre.",
      },
      { type: 'h2', text: 'La convocation et le délai de quinze jours', id: 'convocation' },
      {
        type: 'p',
        text: "Quinze jours avant la date de la réunion, les états financiers et les documents de gestion des comptes doivent être mis à la disposition de chaque copropriétaire. Ce délai est la garantie que le vote se fera en connaissance de cause — un copropriétaire qui découvre les comptes en séance ne vote pas, il ratifie.",
      },
      {
        type: 'p',
        text: "La convocation doit porter les mentions utiles : date, heure, lieu et ordre du jour. Une question absente de l'ordre du jour ne peut pas valablement être mise au vote.",
      },
      { type: 'h2', text: "L'ordre du jour type", id: 'ordre-du-jour' },
      {
        type: 'ol',
        items: [
          "Émargement, vérification des pouvoirs et constatation du quorum.",
          "Désignation du président de séance et du secrétaire.",
          "Rapport de gestion du syndic sur l'exercice écoulé.",
          "Présentation et approbation des comptes, annexes comptables à l'appui.",
          "Vote du budget prévisionnel de l'exercice à venir.",
          "Travaux : présentation des devis et vote.",
          "Désignation ou renouvellement du syndic et du conseil syndical.",
          "Questions diverses, sans vote engageant.",
        ],
      },
      { type: 'h2', text: 'Les votes', id: 'votes' },
      {
        type: 'p',
        text: "Toutes les décisions ne se prennent pas à la même majorité. La gestion courante et l'entretien régulier relèvent d'une majorité simple. La désignation ou la révocation du syndic, ainsi que les travaux d'amélioration importants, relèvent d'une majorité qualifiée des trois quarts des voix des copropriétaires présents ou représentés. Les décisions touchant aux quotes-parts ou à la destination de l'immeuble exigent un accord bien plus large.",
      },
      {
        type: 'callout',
        title: 'Vérifiez votre règlement de copropriété',
        text: "Les seuils et les modalités de représentation peuvent être précisés par le règlement de copropriété de votre immeuble, et la loi 106-12 encadre les délégations de vote. En cas de décision importante ou contestée, faites valider le quorum et la majorité applicables avant de voter.",
      },
      { type: 'h2', text: 'Le procès-verbal', id: 'pv' },
      {
        type: 'p',
        text: "Le procès-verbal fait la preuve des décisions. Il doit mentionner les résolutions soumises au vote, le résultat de chaque vote et, idéalement, les positions exprimées. Sans procès-verbal correctement établi et diffusé, une décision d'assemblée est difficile à opposer.",
      },
      {
        type: 'p',
        text: "La loi 30-24, adoptée en juillet 2024, va dans le sens d'une notification plus rapide des décisions et des procès-verbaux — un point à suivre.",
      },
      { type: 'h2', text: 'Cinq erreurs qui invalident une AG', id: 'erreurs' },
      {
        type: 'ul',
        items: [
          "Convoquer sans respecter le délai de mise à disposition des documents.",
          "Mettre au vote une question absente de l'ordre du jour.",
          "Ne pas vérifier les pouvoirs et les plafonds de délégation de vote.",
          "Appliquer une majorité simple à une décision qui exige une majorité qualifiée.",
          "Ne pas établir, ou ne pas diffuser, le procès-verbal.",
        ],
      },
    ],
    faq: [
      {
        q: 'Que se passe-t-il si le quorum n’est pas atteint ?',
        a: "Une seconde convocation est organisée. Les modalités et les délais dépendent du règlement de copropriété et des dispositions applicables : faites-les vérifier plutôt que de présumer.",
      },
      {
        q: 'Puis-je me faire représenter ?',
        a: "Oui, par délégation de vote. La loi 106-12 encadre cette faculté, notamment par un plafonnement du nombre de délégations qu'un même copropriétaire peut détenir et de la part de voix correspondante.",
      },
      {
        q: 'Un copropriétaire peut-il convoquer l’assemblée ?',
        a: "C'est l'un des apports de la loi 30-24, adoptée en juillet 2024 : permettre aux copropriétaires de convoquer l'assemblée, avec un préavis de quinze jours, lorsque le syndic est défaillant. Vérifiez l'état d'application du texte avant de vous en prévaloir.",
      },
      {
        q: 'BFM organise-t-il les assemblées générales ?',
        a: "Oui. La convocation et la tenue des assemblées générales, ainsi que la relation avec le conseil syndical, font partie de notre mission de gestion administrative.",
      },
    ],
    relatedServices: ['syndic-de-copropriete', 'conciergerie', 'maintenance-et-services-techniques'],
  },

  {
    slug: 'traitement-3d-4d-difference',
    title: '3D ou 4D : la différence',
    heading: 'Traitement 3D et 4D : de quoi parle-t-on exactement ?',
    lead: "Dératisation, désinsectisation, désinfection — et la quatrième D. Ce que recouvre chaque prestation.",
    seoTitle: 'Traitement 3D et 4D : quelle différence ? | BFM Maroc',
    seoDescription:
      "3D = dératisation, désinsectisation, désinfection. La 4D y ajoute la désodorisation. Ce que chaque traitement recouvre et quand y recourir au Maroc.",
    updated: '2026-09-21',
    readingTime: 5,
    legal: false,
    category: 'Hygiène',
    blocks: [
      {
        type: 'p',
        text: "« 3D », « 4D », parfois « 5D » : le vocabulaire du secteur est devenu un argument commercial plus qu'une information. Voici ce que chaque lettre recouvre réellement.",
      },
      { type: 'h2', text: 'Les trois D', id: 'trois-d' },
      {
        type: 'table',
        head: ['Prestation', 'Cible', 'Quand y recourir'],
        rows: [
          [
            'Dératisation',
            'Rongeurs : rats, souris',
            "Traces de passage, déjections, câbles rongés, bruits dans les gaines et les faux plafonds.",
          ],
          [
            'Désinsectisation',
            'Insectes rampants et volants',
            "Cafards, fourmis, punaises, moustiques, mouches — en cuisine, en local technique, en partie commune.",
          ],
          [
            'Désinfection',
            'Micro-organismes sur les surfaces et dans l’air',
            "Après une infestation, dans les locaux sensibles, ou en protocole d'hygiène régulier.",
          ],
        ],
      },
      { type: 'h2', text: 'La quatrième D', id: 'quatrieme-d' },
      {
        type: 'p',
        text: "La 4D ajoute la désodorisation : le traitement des odeurs persistantes qui subsistent après une infestation, un dégât des eaux ou un sinistre. Elle ne remplace pas les trois premières — elle intervient après, une fois la cause traitée.",
      },
      {
        type: 'callout',
        title: 'Méfiez-vous du « 5D » vendu seul',
        text: "Les dénominations au-delà de la 4D ne correspondent à aucune norme partagée. Ce qui compte n'est pas le nombre de D annoncé, mais le diagnostic réalisé, les produits employés et le rapport d'intervention remis.",
      },
      { type: 'h2', text: 'Ce qui distingue un bon traitement', id: 'bon-traitement' },
      {
        type: 'ol',
        items: [
          "Un diagnostic avant le devis : on identifie l'espèce, les points d'entrée et les sources de nourriture.",
          "Des produits homologués, appliqués aux dosages prévus.",
          "Des consignes claires : délai de réintégration des locaux, précautions, protection des denrées.",
          "Un ou plusieurs passages de contrôle, pour traiter les nouvelles éclosions.",
          "Un rapport écrit : zones traitées, produits utilisés, constats et recommandations.",
          "Des mesures préventives : obturation des passages, gestion des déchets, hygiène des locaux.",
        ],
      },
      {
        type: 'p',
        text: "Sans le sixième point, le traitement se répète indéfiniment. Une infestation est presque toujours le symptôme d'une condition favorable — un local à poubelles mal fermé, une gaine non obturée, une fuite qui entretient l'humidité.",
      },
      { type: 'h2', text: 'Le cas de la copropriété', id: 'copropriete' },
      {
        type: 'p',
        text: "En immeuble collectif, un traitement appartement par appartement échoue presque toujours : les nuisibles circulent par les gaines techniques, les vide-ordures et les parkings. Le traitement doit être collectif, coordonné sur l'ensemble des parties communes, et simultané. C'est un cas où passer par le syndic fait gagner du temps et de l'argent.",
      },
    ],
    faq: [
      {
        q: 'Faut-il quitter les locaux pendant le traitement ?',
        a: "Cela dépend du produit et de la méthode. Le délai de réintégration vous est indiqué avant l'intervention, avec les précautions à respecter.",
      },
      {
        q: 'Combien de passages faut-il prévoir ?',
        a: "Une infestation installée demande généralement un traitement initial puis au moins un contrôle, pour traiter les éclosions postérieures au premier passage. Le diagnostic le précise.",
      },
      {
        q: 'Le traitement est-il dangereux pour les animaux domestiques ?',
        a: "Les produits professionnels imposent des précautions. Signalez la présence d'animaux et d'enfants avant l'intervention : le protocole et les zones traitées sont adaptés en conséquence.",
      },
      {
        q: 'Recevons-nous un justificatif ?',
        a: "Oui. Chaque passage donne lieu à un rapport d'intervention, pièce utile notamment en cas de contrôle sanitaire pour les commerces et les établissements recevant du public.",
      },
    ],
    relatedServices: ['traitement-des-nuisibles', 'nettoyage-et-proprete', 'syndic-de-copropriete'],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
