# AGENTS.md — Orion Physio Studio

Prototype haute fidélité interactif — Devoir 2 SEG3525, Université d'Ottawa  
**Concepteur :** Omar Raoui (oraou075@uottawa.ca)

## Project Overview

An interactive high-fidelity prototype for **Orion Physio Studio**, a fictional physiotherapy clinic in Ottawa. Built as part of the SEG3525 (User Interface Design and Analysis) course assignment using a User-Centred Design (UCD) approach.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React SSR) |
| Frontend | React 19, TypeScript |
| Router | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Custom CSS design system + Tailwind CSS 4 |
| Fonts | Playfair Display (titles) + Jost (body) via Google Fonts |
| Deployment | Netlify |

## Directory Structure

```
src/
├── routes/
│   ├── __root.tsx        # Root layout: HTML lang="fr", Google Fonts, meta tags
│   ├── index.tsx         # Main page: Navbar, Hero, Services, About, Booking, Contact, Footer
│   ├── rapport.tsx       # French report page (SEG3525 Devoir 2 report)
│   ├── personas.tsx      # User personas: Adam Benali & Marc Tremblay
│   └── storyboards.tsx   # Visual storyboards for both personas
├── styles.css            # Complete design system (CSS variables, all component styles)
└── router.tsx            # TanStack Router setup

rapport-devoir2.md                 # Markdown version of the report
portfolio-update-instructions.md   # Instructions to link to Devoir 1 portfolio
README.md                          # Project documentation
```

## Design System (styles.css)

All styling is in a single `styles.css` file using CSS custom properties:

```css
--bg: #F7F5F0        /* warm off-white background */
--text: #1F2933      /* near-black text */
--teal: #2F6F73      /* primary brand color */
--teal-dark: #235456 /* hover state */
--green: #7AA889     /* accent green */
--white: #FFFFFF
--gray: #E5E7EB      /* borders */
```

## Key Pages

### `/` (index.tsx)
Single-page app with scrollable sections:
- `Navbar` — sticky nav with scroll shadow effect and mobile hamburger
- `Hero` — two-column layout with CTA buttons
- `Services` — 4 service cards with modal details; "Choisir ce service" pre-fills booking form
- `About` — mission statement and clinic values
- `Booking` — interactive reservation form with client-side validation and confirmation state
- `Contact` — address, phone, email, hours

### `/rapport` — Full French UCD report
### `/personas` — Visual persona cards
### `/storyboards` — Illustrated user journey storyboards

## Interactions

All interactive behavior is in `src/routes/index.tsx`:
- Scroll listener for navbar shadow
- Service selection state + cross-component communication via props
- Modal open/close with CSS animations
- Form validation (required fields, email regex)
- Fake async submission with loading spinner
- Confirmation message display

## Conventions

- All UI copy is in **French**
- No external UI libraries — pure custom CSS + React
- Inline SVG icons (no icon library dependency)
- CSS classes named semantically (`.service-card`, `.booking-form-card`, etc.)
- Responsive breakpoints at 900px and 600px

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
```
