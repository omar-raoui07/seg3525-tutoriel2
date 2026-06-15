# Rapport — Devoir 2 : CCU pour le développement d'un site de service

**Cours :** SEG3525 – Conception et analyse d'interfaces usagers  
**Université d'Ottawa**

---

## 1. Concepteur

| Champ | Valeur |
|---|---|
| **Nom** | Omar Raoui |
| **Numéro étudiant** | 300409570| 
**Courriel universitaire** | oraou075@uottawa.ca |
| **Cours** | SEG3525, Université d'Ottawa |

---

## 2. Service choisi

**Nom de l'entreprise :** Orion Physio Studio  
**Type :** Clinique de physiothérapie moderne  

Orion Physio Studio est une clinique de physiothérapie fictive premium spécialisée dans la rééducation musculaire, la gestion des douleurs chroniques, la correction posturale et la réhabilitation sportive. La clinique est positionnée comme une solution moderne et accessible pour les patients d'Ottawa.

**Services offerts :**
- Consultation initiale (60 min, 95 $)
- Rééducation sportive (45 min, 85 $)
- Thérapie douleurs au dos (50 min, 90 $)
- Correction posturale (45 min, 80 $)

---

## 3. Personas

### Persona 1 — Adam Benali

- **Âge :** 24 ans
- **Profil :** Étudiant universitaire et joueur de soccer amateur à Ottawa
- **Objectif :** Prendre rapidement un rendez-vous pour une douleur au genou après un entraînement
- **3 caractéristiques intrinsèques :**
  1. Orienté action — veut accomplir la tâche rapidement (moins de 2 minutes)
  2. Confiant numériquement — très à l'aise avec les interfaces web modernes
  3. Sensible à l'urgence — douleur récente, cherche une solution immédiate
- **Relation à la technologie :** Très confortable. Utilise des apps mobiles quotidiennement. S'attend à une expérience rapide et sans friction.
- **Relation au domaine :** Connaît un peu la physiothérapie grâce au sport. Veut aller directement à la réservation.

### Persona 2 — Marc Tremblay

- **Âge :** 46 ans
- **Profil :** Comptable senior en bureau, souffrant de douleurs chroniques au dos
- **Objectif :** Comprendre les services, comparer les prix et choisir le bon traitement avant de réserver
- **3 caractéristiques intrinsèques :**
  1. Analyste prudent — compare les options avant de décider
  2. Sensible à la confiance — a besoin de signaux de crédibilité
  3. Orienté valeur — veut comprendre ce qu'il obtient pour son argent
- **Relation à la technologie :** Régulière mais prudente. Préfère les interfaces simples et guidées.
- **Relation au domaine :** Ne connaît pas bien la physiothérapie. A besoin d'explications claires et d'être rassuré.

---

## 4. Scénarimages

### Scénarimage 1 — Adam Benali

**Persona :** Adam Benali  
**Objectif :** Réservation rapide pour rééducation sportive  
**Direction visuelle :** Dynamique, orientée action, fond sombre bleu médical  
**Couleurs :** Bleu médical (#2F6F73) + blanc + accents verts (#7AA889)

| Étape | Titre | Description de la maquette |
|---|---|---|
| 01 | Arrivée sur l'accueil | Fond bleu profond, titre Playfair Display en blanc, bouton "Prendre rendez-vous" blanc proéminent, statistiques visibles (1200+ patients, 97% satisfaction). Navigation minimaliste. |
| 02 | Sélection du service | Grille de 4 cartes de services sur fond bleu. La carte "Rééducation sportive" est mise en évidence (bordure blanche, fond semi-transparent plus clair). Prix et durée visibles. Bouton "Choisir ce service" en blanc. |
| 03 | Formulaire et confirmation | Formulaire de réservation avec service pré-rempli. Champs nom, courriel, date, heure. Bouton de confirmation blanc. Message de succès en vert : "Votre demande a été reçue. Orion Physio Studio vous contactera sous peu." |

### Scénarimage 2 — Marc Tremblay

**Persona :** Marc Tremblay  
**Objectif :** Exploration informée et réservation réfléchie  
**Direction visuelle :** Calme, rassurante, informative, tons neutres et chauds  
**Couleurs :** Beige clair (#F5F0E8) + bleu profond (#2F6F73) + gris doux (#9CA3AF)

| Étape | Titre | Description de la maquette |
|---|---|---|
| 01 | Consultation des services | Fond beige clair, section Services avec cartes blanches détaillées. Descriptions longues visibles, durée et prix affichés. Bouton "Voir les détails" pour chaque service. Espace blanc généreux. |
| 02 | Comparaison et sélection | Cartes comparatives côte à côte avec prix et durées. Carte "Thérapie douleurs au dos" sélectionnée (bordure bleu teal). Section À propos visible en parallèle avec statistiques de confiance. |
| 03 | Formulaire de réservation | Formulaire structuré sur fond beige. Champs bien espacés et clairement étiquetés. Service pré-sélectionné visible. Message de confirmation professionnel et rassurant après soumission. |

---

## 5. Prototype haute fidélité

Le prototype final combine les objectifs des deux personas dans une interface cohérente et professionnelle.

**Du scénarimage 1 (Adam) :**
- CTA "Prendre rendez-vous" en hero section
- Pré-sélection automatique du service depuis les cartes
- Formulaire concis avec validation rapide
- Confirmation instantanée

**Du scénarimage 2 (Marc) :**
- Descriptions détaillées des services avec durée et prix
- Modal de détails par service
- Section À propos rassurante
- Statistiques de confiance

**Interactions implémentées :**
- Navbar sticky avec scroll listener
- Menu hamburger responsive
- Sélection de service avec état visuel actif
- Modal de détails (animation)
- Validation de formulaire côté client
- Animation de chargement
- Message de confirmation
- Routing multi-pages (Rapport, Personas, Scénarimages)

---

## 6. Choix de conception visuelle

| Élément | Choix | Justification |
|---|---|---|
| **Couleur principale** | Bleu sarcelle #2F6F73 | Professionnalisme médical, confiance |
| **Fond** | Beige chaud #F7F5F0 | Accueil rassurant, différenciation |
| **Accent** | Vert doux #7AA889 | Note naturelle et positive |
| **Titre** | Playfair Display (serif) | Premium, éditorial, mémorable |
| **Corps** | Jost (sans-serif) | Lisibilité optimale sur écran |
| **Espace blanc** | Généreux | Clarté, luxe, respiration |
| **Contraste** | Élevé (WCAG AA) | Accessibilité, lisibilité |
| **Layout** | Grille asymétrique | Équilibre dynamique |
| **Responsive** | Mobile-first | Adapté à Adam (mobile) |

---

## 7. Liens

| Ressource | Lien |
|---|---|
| Portfolio Devoir 1 | [Lien Netlify du portfolio — à compléter avant la remise] |
| Prototype Devoir 2 | [Lien Netlify du prototype Orion Physio Studio — à compléter après déploiement] |
| Code source GitHub | [Lien GitHub du dépôt — à compléter] |

---

## 8. Reconnaissance de l'IA générative

L'IA générative (Claude par Anthropic) a été utilisée comme outil d'assistance pour :

- **Structurer les personas :** Aide à la formulation des caractéristiques intrinsèques et objectifs utilisateurs
- **Formuler les scénarimages :** Description des étapes de parcours et directions visuelles
- **Générer la base de code :** Code React/TypeScript pour le prototype (composants, CSS, interactions)
- **Améliorer la rédaction :** Assistance à la rédaction claire et professionnelle du rapport en français
- **Proposer des choix visuels :** Palette de couleurs, typographie, layout, système de design

Les décisions finales de conception, les corrections, l'adaptation aux exigences du Devoir 2 SEG3525, la validation de l'interface et la supervision de l'ensemble du projet ont été réalisées par **Omar Raoui**.

---

*Conçu par Omar Raoui — SEG3525, Université d'Ottawa — oraou075@uottawa.ca*
