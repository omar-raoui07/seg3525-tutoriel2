# Instructions — Lier le Devoir 2 au Portfolio du Devoir 1

**Auteur :** Omar Raoui — SEG3525, Université d'Ottawa

---

## Objectif

Ce fichier explique comment modifier votre portfolio du **Devoir 1** pour y ajouter un lien vers le prototype **Orion Physio Studio** développé dans le cadre du **Devoir 2**.

---

## Étape 1 — Déployer le Devoir 2 sur Netlify

1. Pousser ce projet sur GitHub
2. Connecter le dépôt à Netlify (ou utiliser `netlify deploy --prod`)
3. Copier l'URL de déploiement (ex : `https://orion-physio-studio.netlify.app`)

---

## Étape 2 — Modifier le portfolio du Devoir 1

Dans le portfolio du Devoir 1, localiser la section **Projets** ou la carte correspondant au site de service.

### Texte suggéré pour la carte du projet :

```
Orion Physio Studio — Prototype haute fidélité d'un site de service
développé dans le cadre du Devoir 2 SEG3525.
```

### Lien à ajouter :

Remplacer le lien actuel (ou le placeholder) par :

```
https://[votre-url-netlify-devoir2].netlify.app
```

### Exemple de HTML à insérer dans le portfolio :

```html
<div class="project-card">
  <h3>Orion Physio Studio</h3>
  <p>
    Prototype haute fidélité interactif d'un site de clinique de physiothérapie.
    Développé dans le cadre du Devoir 2 — CCU (SEG3525, Université d'Ottawa).
  </p>
  <p>
    <strong>Technologies :</strong> React, TanStack Start, CSS, Netlify
  </p>
  <a href="https://[votre-url-netlify-devoir2].netlify.app" target="_blank">
    Voir le prototype →
  </a>
</div>
```

---

## Étape 3 — Mentionner le lien dans le rapport

Dans le rapport du Devoir 2 (`rapport-devoir2.md` ou la page `/rapport` en ligne), la section **7. Liens** contient des placeholders. Remplacer :

- `[Lien Netlify du portfolio à ajouter]` → URL de votre portfolio Devoir 1
- `[Lien Netlify du site de service à ajouter]` → URL de votre prototype Devoir 2
- `[Lien GitHub à ajouter]` → URL de votre dépôt GitHub

---

## Note pour la remise

Le Devoir 2 doit être **accessible depuis le portfolio du Devoir 1**. Assurez-vous que :

1. Le lien fonctionne correctement dans les deux sens
2. Le portfolio mentionne clairement qu'il s'agit du Devoir 2 SEG3525
3. La mention "Conçu par Omar Raoui" est visible dans le footer du prototype

---

*Omar Raoui — oraou075@uottawa.ca — SEG3525, Université d'Ottawa*
