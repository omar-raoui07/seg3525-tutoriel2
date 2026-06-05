# Orion Physio Studio — Devoir 2 SEG3525

Prototype haute fidélité interactif d'un site de service développé dans le cadre du **Devoir 2 — CCU** du cours SEG3525 (Conception et analyse d'interfaces usagers) à l'Université d'Ottawa.

**Concepteur :** Omar Raoui — oraou075@uottawa.ca

---

## Description

**Orion Physio Studio** est une clinique de physiothérapie fictive moderne à Ottawa. Le prototype présente :

- Une page d'accueil avec hero section, statistiques et navigation
- Section services avec 4 traitements (description, durée, prix, sélection)
- Modal de détails par service
- Section "À propos" présentant la mission de la clinique
- Formulaire de réservation interactif avec validation
- Section contact avec adresse, téléphone et heures d'ouverture
- Pages documentaires : Rapport, Personas, Scénarimages

---

## Technologies

- **React 19** + **TypeScript**
- **TanStack Start** (framework full-stack)
- **TanStack Router** (routing type-safe)
- **Tailwind CSS v4** (utilitaires)
- **CSS personnalisé** (design system complet)
- **Google Fonts** : Playfair Display + Jost
- **Vite** (bundler)
- **Netlify** (hébergement)

---

## Lancer le projet localement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (port 3000)
npm run dev
```

Visiter `http://localhost:3000`

---

## Déployer sur Netlify

### Option 1 — Déploiement automatique via Git
1. Pousser le code sur GitHub
2. Connecter le dépôt à Netlify
3. Commandes de build :
   - **Build command :** `npm run build`
   - **Publish directory :** `.output/public`

### Option 2 — Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## Fichiers inclus

| Fichier / Dossier | Description |
|---|---|
| `src/routes/index.tsx` | Page principale du site (toutes les sections) |
| `src/routes/rapport.tsx` | Rapport complet du Devoir 2 (en ligne) |
| `src/routes/personas.tsx` | Personas Adam Benali et Marc Tremblay |
| `src/routes/storyboards.tsx` | Scénarimages visuels interactifs |
| `src/styles.css` | Design system complet (variables, composants) |
| `src/routes/__root.tsx` | Layout racine (HTML, fonts, meta) |
| `rapport-devoir2.md` | Rapport en format Markdown |
| `portfolio-update-instructions.md` | Instructions pour lier au portfolio Devoir 1 |

---

## Éléments à modifier avant la remise

1. **Numéro étudiant** — Dans `src/routes/rapport.tsx`, remplacer `[À compléter avant la remise]`
2. **Lien portfolio Devoir 1** — Remplacer le placeholder dans le rapport et le footer
3. **Lien Netlify Devoir 2** — Ajouter l'URL après déploiement
4. **Lien GitHub** — Ajouter l'URL du dépôt

---

## Interactions JavaScript implémentées

- Navbar sticky avec ombre au défilement (scroll listener)
- Menu hamburger responsive (toggle state)
- Sélection de service avec mise en évidence et pré-remplissage du formulaire
- Modal de détails de service (animation fadeIn/slideUp)
- Validation de formulaire côté client (champs requis, format email)
- Animation de chargement lors de la soumission
- Message de confirmation après soumission
- Navigation entre pages (Rapport, Personas, Scénarimages)

---

*Conçu par Omar Raoui — SEG3525, Université d'Ottawa*
