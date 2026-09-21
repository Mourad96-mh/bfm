# BFM — Best Facility Management · Architecture & stratégie du site

**Domaine :** bfm.co.ma
**Date :** 21 septembre 2026
**Statut :** document de conception — à valider avant/pendant le développement

---

## 1. Comprendre le métier

### 1.1 Ce qu'est BFM

BFM (Best Facility Management) est une **entreprise marocaine de facility management basée à
Casablanca**, intervenant dans tout le Royaume. C'est une **société récente** dont les dirigeants
cumulent plus de 20 ans d'expérience en logistique, finance, transport, sécurité, bâtiment,
maintenance et nettoyage.

Devise : **« La rigueur au service de nos clients. »**

Sa proposition de valeur réelle, telle qu'elle ressort de la plaquette : **un interlocuteur unique
pour dix métiers**. Le client n'a plus à jongler entre un syndic, une société de nettoyage, un
pisciniste, un dératiseur et un jardinier — BFM coordonne l'ensemble.

### 1.2 Le modèle économique

Trois natures de revenus, qui n'ont pas du tout le même cycle de vente :

| Nature | Services concernés | Cycle | Valeur |
|---|---|---|---|
| **Mandat récurrent** | Syndic de copropriété, conciergerie | Long (vote en AG, 3/4 des voix) | Très élevée, pluriannuelle |
| **Contrat d'entretien** | Nettoyage, espaces verts, piscines, maintenance, 3D/4D | Moyen (devis → contrat annuel) | Élevée, récurrente |
| **Intervention ponctuelle** | Petits travaux, fin de chantier, façades, ménage | Court (devis → intervention) | Faible unitaire, mais **porte d'entrée** vers le contrat |

**Conséquence directe pour le site :** le site doit servir deux vitesses. Une vitesse « décision
longue » (le syndic, où l'on doit rassurer un conseil syndical sur la méthode, la transparence et
la conformité à la loi 18-00) et une vitesse « besoin immédiat » (« j'ai des cafards dans mon
local », « ma façade est sale ») où seule compte la rapidité de mise en relation.

### 1.3 Les quatre publics

La plaquette les nomme explicitement : **Copropriétés · Entreprises · Collectivités ·
Particuliers**. Ils n'achètent pas la même chose et ne se posent pas les mêmes questions :

- **Copropriétés** — un conseil syndical, plusieurs décideurs, un vote. Cherche : transparence
  des comptes, respect de la loi 18-00, réactivité sur les parties communes, maîtrise des charges.
- **Entreprises** — un responsable des moyens généraux / office manager. Cherche : continuité
  d'activité, un seul prestataire, facturation propre, interventions hors heures ouvrées.
- **Collectivités** — achat public, cahier des charges, conformité. Cherche : capacité à répondre
  à un CPS, moyens humains et matériels, traçabilité.
- **Particuliers** — décision individuelle, rapide, émotionnelle (confiance, discrétion).
  Cherche : quelqu'un de fiable chez soi, un prix, une disponibilité.

### 1.4 Le catalogue réel (10 services)

Numérotation reprise de la plaquette client — elle devient un élément de design du site.

| N° | Service | Public dominant |
|---|---|---|
| 01 | Syndic de copropriété | Copropriétés |
| 02 | Conciergerie | Copropriétés, Entreprises |
| 03 | Maintenance & services techniques | Entreprises, Copropriétés, Collectivités |
| 04 | Petits travaux & interventions diverses | Particuliers, Entreprises |
| 05 | Nettoyage & propreté | Entreprises, Collectivités, Copropriétés |
| 06 | Ménage chez les particuliers | Particuliers |
| 07 | Espaces extérieurs | Copropriétés, Collectivités |
| 08 | Entretien des piscines | Copropriétés, Particuliers |
| 09 | Traitement des nuisibles 3D & 4D | Entreprises, Copropriétés, Particuliers |
| 10 | Nettoyage de façades — nacelle & cordistes | Entreprises, Copropriétés |

---

## 2. Analyse concurrentielle

### 2.1 Le terrain est fragmenté en trois familles

Point le plus important de cette étude : **personne au Maroc n'occupe la position que BFM
revendique**. Le marché est coupé en trois, et chaque famille laisse un flanc découvert.

**Famille A — Les syndics purs**
`spsyndic.ma` · `mancopservice.ma` · `cilimmo.com` · `gestis`

- Vendent uniquement la gestion de copropriété (parfois + gardiennage).
- SPS Syndic a une vraie force : un **espace copropriétaire** et une app mobile *Syndic Connect*.
  C'est leur différenciant, et il est crédible.
- MANCOP affiche « ~500 logements gérés » — un chiffre de preuve que BFM, société récente,
  ne peut pas égaler et **ne doit pas inventer**.
- **Faiblesse commune : zéro contenu éditorial.** Aucun n'explique la loi 18-00, le rôle du
  syndic, le calcul des charges, le déroulé d'une AG. Ils se contentent de pages « services ».

**Famille B — Les facility managers industriels**
`multechservices.ma` (Rabat) · `dmco.fr` · `elantec-facilities.com` · `samsic.ma` · `thais.ma`

- Visent le grand compte : sites industriels, plateformes logistiques, centres commerciaux.
- Multech revendique « 10+ ans », « 24/7 », « réponse en 48 h ». Samsic et DMCO ont la taille.
- **Faiblesse commune : ils ignorent la copropriété et le particulier.** Leur discours est
  corporate, froid, orienté appel d'offres. Une résidence de 40 lots n'est pas leur client.

**Famille C — Les mono-métiers hyper-locaux**
Dératisation (`sdsmaroc.ma`, `geclat.ma`, `deratisation-casablanca.com`, `ldhygiene-services.com`)
· Façades/cordistes (`soshauteur.net` — certifiés IRATA, `nettoyagevitrescasablanca.ma`)
· Piscines (`maaroufpiscines.com` — 16 ans) · Ménage (`o2maroc.com`, `chronomenage.com`,
`adom.ma`, `femmesdemenage.ma`)

- Très nombreux, très agressifs en SEO local, souvent un site par mot-clé exact.
- Beaucoup **affichent des prix** (ménage : 35–55 MAD/h, 250–700 MAD/jour selon indépendant ou
  agence). Le marché du particulier est donc un marché où le prix est public.
- **Faiblesse commune : aucune capacité de coordination.** Ils font une chose. Le client qui a
  besoin de trois métiers doit gérer trois prestataires.

### 2.2 Tableau de positionnement

| | Syndic | Multi-métiers | Copropriété | Particulier | Contenu SEO | Reporting client |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| SPS Syndic | ✅ | partiel | ✅ | ❌ | ❌ | ✅ (app) |
| MANCOP | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Multech | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Samsic / DMCO | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Mono-métiers | ❌ | ❌ | partiel | ✅ | partiel | ❌ |
| **BFM (cible)** | **✅** | **✅** | **✅** | **✅** | **✅** | **✅** |

### 2.3 Les quatre brèches exploitables

1. **La brèche éditoriale — la plus large.** Aucune société de services marocaine ne publie de
   contenu sérieux sur la loi 18-00. Ce terrain est occupé par des **éditeurs de logiciels**
   (`syndicconnect.ma`, `syndic.digital`, `syndy.ma`) et des avocats — pas par des prestataires.
   Un syndic qui explique clairement la loi gagne la confiance du conseil syndical **avant**
   le premier rendez-vous.
2. **La brèche « un seul interlocuteur ».** Personne ne construit son site autour de cette
   promesse. C'est pourtant la seule chose que BFM a de structurellement différent.
3. **La brèche « copropriété + particulier ».** Les FM industriels snobent ce segment, les
   syndics ne savent pas entretenir une piscine. BFM est au milieu.
4. **La brèche transparence.** Les concurrents promettent « qualité » ; aucun ne **montre** à quoi
   ressemble un compte rendu d'intervention. Montrer le livrable vaut mieux que le promettre.

### 2.4 Ce qu'il ne faut PAS copier

- Les compteurs d'années/clients/chantiers. BFM est récente ; la page « À propos » actuelle
  contient d'ailleurs des `[X]+` non remplis. **On supprime le principe même de ces compteurs**
  plutôt que d'inventer des chiffres. C'est aussi ce qui rend un site crédible.
- Les logos clients et témoignages fabriqués.
- Les pages-satellites « service + ville » dupliquées à la chaîne (Casablanca, Rabat, Tanger…)
  quand la société n'a pas d'implantation réelle : Google les traite en *doorway pages* et
  c'est commercialement malhonnête.

---

## 3. Stratégie de mots-clés

### 3.1 Principe

BFM est un **site neuf sur un domaine neuf**. Attaquer de front « société de nettoyage
Casablanca » (des dizaines de sites, certains depuis 10 ans, un site par mot-clé) est perdu
d'avance à court terme. La stratégie est donc en trois cercles concentriques.

### 3.2 Cercle 1 — Mots-clés de tête (ambition 12–24 mois)

Volume fort, concurrence forte. On les vise avec les pages de service, sans en dépendre.

| Mot-clé | Page cible |
|---|---|
| syndic de copropriété Casablanca | `/services/syndic-de-copropriete` |
| société de syndic Maroc | `/services/syndic-de-copropriete` |
| facility management Maroc | `/` |
| société de nettoyage Casablanca | `/services/nettoyage-et-proprete` |
| dératisation Casablanca | `/services/traitement-des-nuisibles` |
| entretien piscine Casablanca | `/services/entretien-des-piscines` |
| nettoyage façade cordiste Casablanca | `/services/nettoyage-de-facades` |

### 3.3 Cercle 2 — Longue traîne métier (ambition 3–9 mois) ← **la priorité**

Volume moyen, concurrence faible, intention d'achat élevée. C'est là que BFM peut gagner vite.

- `gestion des parties communes copropriété Maroc`
- `contrat d'entretien espaces verts copropriété`
- `nettoyage fin de chantier Casablanca`
- `entreprise multiservices copropriété Maroc`
- `désinfection locaux professionnels Maroc`
- `maintenance multitechnique immeuble Casablanca`
- `conciergerie résidence Maroc`
- `nettoyage parties communes immeuble`
- `hivernage piscine Maroc`
- `société de ménage Airbnb Casablanca`

### 3.4 Cercle 3 — Intention informationnelle (ambition 2–6 mois) ← **la brèche**

Faible concurrence réelle côté prestataires. Alimente la notoriété et capte le décideur en amont.

- `loi 18-00 copropriété Maroc` / `loi 106-12`
- `comment changer de syndic Maroc`
- `rôle et obligations du syndic de copropriété`
- `charges de copropriété : comment sont-elles réparties ?`
- `assemblée générale copropriété Maroc : déroulement`
- `combien coûte un syndic au Maroc`
- `3D ou 4D : quelle différence ?`
- `à quelle fréquence entretenir une piscine au Maroc`

### 3.5 Règle éditoriale

Chaque page cible **une** intention, avec un H1 unique, un titre `<title>` unique, une
méta-description rédigée (jamais auto-générée), et un maillage interne explicite vers les
services liés. Pas de bourrage : le mot-clé apparaît dans le H1, le `<title>`, l'URL et
naturellement dans le corps.

---

## 4. Architecture de l'information

```
/                                   Accueil — la promesse « un seul partenaire »
│
├── /a-propos                       Qui est BFM, la méthode, les engagements
│
├── /services                       Index des 10 métiers (sommaire numéroté 01→10)
│   ├── /syndic-de-copropriete              01
│   ├── /conciergerie                       02
│   ├── /maintenance-et-services-techniques 03
│   ├── /petits-travaux                     04
│   ├── /nettoyage-et-proprete              05
│   ├── /menage-chez-les-particuliers       06
│   ├── /espaces-exterieurs                 07
│   ├── /entretien-des-piscines             08
│   ├── /traitement-des-nuisibles           09
│   └── /nettoyage-de-facades               10
│
├── /solutions                      Entrées par public (≠ par métier)
│   ├── /coproprietes
│   ├── /entreprises
│   ├── /collectivites
│   └── /particuliers
│
├── /guides                         Le contenu qui creuse l'écart
│   ├── /loi-18-00-copropriete-maroc
│   ├── /changer-de-syndic-maroc
│   ├── /charges-de-copropriete-repartition
│   ├── /assemblee-generale-copropriete-maroc
│   └── /3d-4d-difference
│
├── /zones-d-intervention           Une seule page honnête (pas de pages-satellites)
├── /contact                        Devis — le point de conversion
├── /mentions-legales
└── /politique-de-confidentialite
```

**≈ 25 pages** contre 5 à 6 chez les concurrents directs.

### 4.1 Pourquoi cette double entrée (métier + public)

Un président de conseil syndical ne cherche pas « nettoyage » : il cherche « qui peut s'occuper
de ma résidence ». Un office manager ne cherche pas « syndic ». Les pages `/solutions/*` prennent
le problème par le client et recomposent les 10 métiers en offres lisibles. Elles captent aussi
la longue traîne du cercle 2, que les pages métier ne peuvent pas toutes porter.

### 4.2 Parcours de conversion

```
Entrée SEO (guide ou service)
        ↓
Page service — preuve de méthode + périmètre précis
        ↓
      ┌─────────────┬──────────────┐
  WhatsApp       Formulaire      Appel
 (immédiat)    (qualifié)     (immédiat)
```

WhatsApp est le canal dominant des PME marocaines — la plaquette elle-même le met en premier.
Il est donc présent sur **toutes** les pages, et doublé d'un bouton d'appel : deux pastilles
rondes flottantes (téléphone + WhatsApp, sans libellé) et un rappel dans chaque bloc CTA, avec
un message pré-rempli contextualisé par la page (« Bonjour BFM, je vous contacte au sujet
de : Entretien des piscines »).

---

## 5. Conception des gabarits

### 5.1 Gabarit « fiche de service » (×10)

Calqué sur la plaquette que le client a déjà payée — le site doit être reconnaissable comme
étant *le même* document.

```
[N° 01]  TITRE DU SERVICE
         Accroche en une phrase
         ────────────────────────────────  + photo pleine hauteur, débordante

CE QUE NOUS PRENONS EN CHARGE     6 prestations (icône + titre + description)

NOTRE PRIORITÉ                    encadré navy/or — la phrase d'engagement

POUR QUI ?                        3–4 publics concernés → liens /solutions/*

COMMENT NOUS INTERVENONS          rappel des 5 étapes de la méthode

QUESTIONS FRÉQUENTES              4–6 Q/R → balisage FAQPage

SERVICES ASSOCIÉS                 maillage interne (3 cartes)

CTA                               devis / WhatsApp
```

### 5.2 Direction artistique — « ne pas faire IA »

Le brief du client est explicite. Les marqueurs d'un site généré qu'on **s'interdit** :

| Interdit | Choix retenu |
|---|---|
| Dégradés violet/bleu, glassmorphism | Aplats de la charte, filets or 1 px |
| Ombres portées partout | Traits et règles typographiques ; ombre rare et courte |
| Trois cartes identiques à icône ronde centrée | Sommaire numéroté éditorial, grilles asymétriques |
| Emojis en guise d'icônes | Jeu d'icônes SVG dessiné, trait 1.5 px, cohérent |
| Tout centré, boutons pilule | Alignement à gauche, rayon 4 px, hiérarchie ferme |
| Compteurs animés « 500+ clients » | Aucun chiffre non vérifiable |
| `Inter` partout | **Archivo** (titres) + **IBM Plex Sans** (texte) |
| Photos de banque d'images génériques | **Les visuels de la plaquette BFM**, où les équipes portent le polo BFM |

**Signature visuelle :** le **zellige**. La plaquette et le site actuel l'utilisent déjà. On le
redessine en SVG (motif khatem à 8 branches) et on l'emploie avec retenue — texture à très faible
opacité sur deux bandeaux, et en séparateur. C'est le marqueur « marocain, haut de gamme » que
n'a aucun concurrent.

**Palette (issue de la charte existante) :**
`navy #0B1D3A` · `vert #0E7A53` · `vert profond #0B3D2C` · `or #C9A227` · `crème #F7F5EF` · `encre #17243A`

---

## 6. Architecture technique

### 6.1 Pile

| Couche | Choix | Raison |
|---|---|---|
| Framework | **Next.js 15, App Router, TypeScript** | SSG, métadonnées natives, routes typées |
| Rendu | **Export statique** (`output: 'export'`) | L'hébergeur actuel est Cap Connect (mutualisé). Du HTML statique se déploie partout, ne tombe jamais, et se charge en quelques dizaines de ms. |
| Styles | **CSS pur + variables** (CSS Modules) | Pas de Tailwind : les classes utilitaires poussent vers la mise en page générique qu'on veut éviter. Un système de tokens donne une identité tenue. |
| Contenu | **Fichiers TypeScript typés** (`src/content/*`) | Source unique, typée, vérifiée au build. Pas de CMS à maintenir pour un site de 25 pages. |
| Formulaire | Composition WhatsApp + `mailto`, endpoint HTTP optionnel | Aucun back-end à héberger, aucun spam, et c'est le canal réel des prospects marocains. |
| Images | `next/image` désactivé (export) + **WebP pré-générés** via `sharp` | Poids maîtrisé, `width`/`height` explicites (zéro CLS) |

### 6.2 Arborescence du dépôt

```
bfm/
├── ARCHITECTURE.md              ← ce document
├── brand/brochure/              14 planches sources du client
└── site/
    ├── next.config.mjs          output: 'export', trailingSlash
    ├── scripts/
    │   ├── build.mjs            build isolé hors OneDrive
    │   ├── images.mjs           découpe + WebP depuis brand/brochure, génère src/lib/media.ts
    │   └── logo.mjs             redessine le logo en SVG (voir §5.3)
    ├── public/
    │   ├── media/               visuels WebP + logos SVG générés
    │   ├── favicon.svg          symbole simplifié sur pastille navy
    │   └── apple-touch-icon.png
    └── src/
        ├── app/                 routes (App Router) + sitemap.ts, robots.ts
        ├── components/          Header, Footer, Icon, ServiceIndex, Cards, Faq, Cta…
        ├── content/
        │   ├── site.ts          NAP, réseaux, constantes de marque
        │   ├── services.ts      les 10 fiches
        │   ├── audiences.ts     les 4 publics
        │   └── guides.ts        les articles
        ├── fonts/               Archivo + IBM Plex Sans (woff2 auto-hébergés)
        ├── lib/                 seo.ts, jsonld.ts, contact.ts, media.ts (généré)
        └── styles/              tokens.css, global.css
```

### 5.3 Le logo — redessiné en vectoriel

Le client ne dispose que d'un logo en pixels, aplati dans les planches de la plaquette :
découpé, il se voyait immédiatement comme une image collée (bords sales, fond crème, flou dès
qu'on le réduisait). `scripts/logo.mjs` le reconstruit à l'identique en SVG — même maison à
double pignon, même lettrage tricolore, même baseline justifiée — avec deux gains :

- le dessin est géométrique : net à toutes les tailles, fond transparent, ~4 ko ;
- « BFM » et la baseline sont convertis en **tracés** depuis Archivo (via opentype.js), donc le
  logo ne dépend d'aucune police installée, ni dans le navigateur ni côté sharp.

Quatre sorties : le lockup clair, le lockup inversé (fond navy, pied de page), le symbole seul,
et le favicon — dont le dessin est volontairement simplifié, la skyline détaillée devenant une
tache à 16 px.

### 6.3 Build sous OneDrive

Le projet vit dans `OneDrive\Bureau`, où `.next` se corrompt (OneDrive déshydrate les fichiers en
cours de build). `scripts/build.mjs` recopie donc les sources dans `%TEMP%`, y jonctionne
`node_modules`, lance le build **là-bas**, puis rapatrie `out/`. Le `next dev` éventuellement
ouvert par l'utilisateur n'est jamais touché.

### 6.4 SEO technique — checklist appliquée

- `<html lang="fr">`, une `<h1>` unique par page, hiérarchie Hn continue
- `title` (≤ 60 car.) et `description` (≤ 155 car.) **rédigés à la main** pour chacune des 25 pages
- URL canoniques absolues, Open Graph + Twitter Card, image de partage dédiée
- **JSON-LD** : `Organization` + `ProfessionalService` (global), `Service` (fiches),
  `BreadcrumbList` (toutes), `FAQPage` (fiches + guides), `Article` (guides)
- `sitemap.xml` et `robots.txt` générés, priorités cohérentes
- Images en WebP, dimensions explicites, `loading="lazy"` sauf visuel d'en-tête
- Polices auto-hébergées via `next/font` (pas de requête vers Google au runtime)
- Objectif Core Web Vitals : LCP < 1,8 s · CLS < 0,05 · INP < 200 ms
- Accessibilité : contrastes AA vérifiés, focus visible, cibles tactiles ≥ 44 px, navigation clavier

---

## 7. Points en attente côté client

Ces informations ne sont pas inventées : elles restent en paramètre dans `src/content/site.ts`
et se corrigent en une ligne.

| # | Sujet | Détail |
|---|---|---|
| 1 | **Téléphone — contradiction** | La plaquette indique `06 88 95 19 77`, le site actuel `+212 7 00 39 69 39`. **Le site retient celui du domaine** (`+212 7 00 39 69 39`). À confirmer : lequel fait foi ? |
| 2 | **E-mail — contradiction** | Plaquette : `bfm.contact.ma@gmail.com` · site : `contact@bfm.co.ma`. Retenu : `contact@bfm.co.ma` (une adresse au domaine inspire nettement plus confiance qu'un Gmail). |
| 3 | **Mentions légales** | Raison sociale, forme juridique, capital, siège, RC, ICE, directeur de publication : tous `[à compléter]` sur le site actuel. Obligatoires au Maroc. |
| 4 | **Adresse du siège** | Casablanca, mais aucune adresse postale. Elle est indispensable pour la fiche Google Business Profile et le balisage `LocalBusiness`. |
| 5 | **Horaires** | Le site actuel annonce « du lundi au samedi » sans horaires précis. |
| 6 | **Zones réellement couvertes** | « Tout le Maroc » est annoncé. Quelles villes sont réellement opérables aujourd'hui ? |
| 7 | **Photographies** | Les visuels de la plaquette sont des images de synthèse. Des photos de chantiers réels, dès qu'elles existeront, feront plus pour la conversion que tout le reste. |
| 8 | **Réseaux sociaux** | Facebook / Instagram / LinkedIn sont cités sur la plaquette — URL à fournir. |

---

## 8. Après la mise en ligne

1. **Google Business Profile** à Casablanca — premier levier de visibilité locale, gratuit.
2. **Search Console + sitemap** dès le déploiement.
3. **Annuaires marocains** : Kompass, Charika, Maalam, Services-ma, Annuaire-gratuit.
4. **Publier un guide par mois** — c'est le cercle 3 qui fait la différence sur 6 mois.
5. **Espace copropriétaire** (v2) : SPS Syndic en a un. Quand BFM aura des mandats, ce sera
   l'évolution naturelle — documents d'AG, appels de fonds, signalement d'incident.
6. **Arabe (v2)** : pertinent pour les collectivités et une partie des particuliers. L'architecture
   prévoit le préfixe de langue sans refonte.
