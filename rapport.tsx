import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/rapport')({
  component: RapportPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="doc-section">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

function RapportPage() {
  return (
    <>
      <nav style={{position:'sticky',top:0,background:'rgba(247,245,240,.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid var(--gray)',zIndex:100,padding:'12px 24px'}}>
        <div style={{maxWidth:'860px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Link to="/" className="back-link" style={{margin:0}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Orion Physio Studio
          </Link>
          <div style={{display:'flex',gap:'16px'}}>
            <Link to="/personas" style={{fontSize:'.85rem',color:'var(--teal)',fontWeight:600}}>Personas</Link>
            <Link to="/storyboards" style={{fontSize:'.85rem',color:'var(--teal)',fontWeight:600}}>Scénarimages</Link>
          </div>
        </div>
      </nav>

      <div className="doc-page">
        <div className="doc-inner">
          <h1 className="doc-title">Rapport — Devoir 2</h1>
          <div className="doc-meta">
            Conception Centrée sur l'Usager (CCU) — Prototype haute fidélité d'un site de service<br/>
            SEG3525 – Conception et analyse d'interfaces usagers · Université d'Ottawa
          </div>

          <Section title="1. Concepteur">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
              {[
                {label:'Nom', value:'Omar Raoui'},
                {label:'Numéro étudiant', value:'[À compléter avant la remise]'},
                {label:'Courriel universitaire', value:'oraou075@uottawa.ca'},
                {label:'Cours', value:'SEG3525 — Université d\'Ottawa'},
              ].map(f => (
                <div key={f.label} style={{background:'var(--white)',border:'1px solid var(--gray)',borderRadius:'10px',padding:'16px'}}>
                  <div style={{fontSize:'.75rem',fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--teal)',marginBottom:'4px'}}>{f.label}</div>
                  <div style={{fontSize:'.95rem',color:'var(--text)',fontWeight:500}}>{f.value}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="2. Service choisi">
            <p><strong>Nom de l'entreprise :</strong> Orion Physio Studio</p>
            <p><strong>Type :</strong> Clinique de physiothérapie moderne</p>
            <p>
              Orion Physio Studio est une clinique de physiothérapie fictive premium, spécialisée dans la rééducation musculaire, la gestion des douleurs chroniques, la correction posturale et la réhabilitation sportive. La clinique est positionnée comme une solution moderne et accessible pour les patients d'Ottawa qui cherchent des soins de qualité dans un environnement professionnel et rassurant.
            </p>
            <p>
              L'objectif du site est d'aider les utilisateurs à comprendre les services offerts, à choisir le traitement adapté à leurs besoins, et à prendre rendez-vous facilement via un formulaire interactif en ligne.
            </p>
          </Section>

          <Section title="3. Personas">
            <h3>Persona 1 — Adam Benali</h3>
            <ul>
              <li><strong>Âge :</strong> 24 ans</li>
              <li><strong>Profil :</strong> Étudiant universitaire et joueur de soccer amateur à Ottawa</li>
              <li><strong>Objectif :</strong> Prendre rapidement un rendez-vous pour une douleur au genou survenue après un entraînement</li>
              <li><strong>Caractéristiques intrinsèques :</strong> (1) Orienté action — veut accomplir sa tâche rapidement ; (2) Confiant numériquement — à l'aise avec les interfaces web modernes ; (3) Sensible à l'urgence — sa douleur est récente et il cherche une solution immédiate</li>
              <li><strong>Relation à la technologie :</strong> Très confortable avec les sites web et formulaires en ligne. Utilise des applications mobiles quotidiennement. S'attend à une expérience rapide et sans friction.</li>
              <li><strong>Relation au domaine :</strong> Connaît un peu la physiothérapie grâce à son environnement sportif. Veut aller directement à la réservation sans lire beaucoup de contenu.</li>
            </ul>

            <h3 style={{marginTop:'24px'}}>Persona 2 — Marc Tremblay</h3>
            <ul>
              <li><strong>Âge :</strong> 46 ans</li>
              <li><strong>Profil :</strong> Comptable senior travaillant en bureau à Ottawa, souffrant de douleurs chroniques au dos</li>
              <li><strong>Objectif :</strong> Comprendre les services disponibles et leurs prix, puis choisir le traitement le plus adapté avant de réserver</li>
              <li><strong>Caractéristiques intrinsèques :</strong> (1) Analyste prudent — compare les options avant de décider ; (2) Sensible à la confiance — a besoin de signaux de crédibilité ; (3) Orienté valeur — veut comprendre ce qu'il obtient pour son argent</li>
              <li><strong>Relation à la technologie :</strong> Utilise les sites web régulièrement mais préfère les interfaces simples, guidées et claires. Lit attentivement avant d'agir.</li>
              <li><strong>Relation au domaine :</strong> Ne connaît pas bien la physiothérapie. A besoin d'explications claires sur les traitements et d'être rassuré sur le professionnalisme de la clinique.</li>
            </ul>
          </Section>

          <Section title="4. Scénarimages">
            <h3>Scénarimage 1 — Adam Benali</h3>
            <p><strong>Persona :</strong> Adam Benali | <strong>Objectif :</strong> Réservation rapide pour rééducation sportive</p>
            <p><strong>Direction visuelle :</strong> Dynamique, orientée action, fond sombre bleu médical, CTA blanc contrasté</p>
            <p><strong>Couleurs :</strong> Bleu médical (#2F6F73) + blanc + accents verts (#7AA889)</p>
            <ul>
              <li><strong>Étape 1 — Page d'accueil :</strong> Adam arrive sur le site depuis une recherche mobile. Il voit immédiatement le titre accrocheur et le bouton "Prendre rendez-vous" bien visible. Les statistiques (1 200+ patients, 97% satisfaction) renforcent rapidement la confiance. Il clique sur "Prendre rendez-vous".</li>
              <li><strong>Étape 2 — Sélection du service :</strong> Il arrive sur la section Services. Les 4 services sont présentés en cartes avec prix visible. Il clique sur "Choisir ce service" pour la Rééducation sportive (85 $, 45 min). Le service sélectionné est mis en évidence visuellement et le formulaire est pré-rempli.</li>
              <li><strong>Étape 3 — Formulaire et confirmation :</strong> Il arrive directement sur le formulaire de réservation avec le service déjà sélectionné. Il entre son nom, courriel, choisit le lendemain à 9h00. Après soumission, un message de confirmation apparaît : "Votre demande de rendez-vous a été reçue. Orion Physio Studio vous contactera sous peu."</li>
            </ul>

            <h3 style={{marginTop:'24px'}}>Scénarimage 2 — Marc Tremblay</h3>
            <p><strong>Persona :</strong> Marc Tremblay | <strong>Objectif :</strong> Exploration informée et réservation réfléchie</p>
            <p><strong>Direction visuelle :</strong> Calme, rassurante, informative, beige clair et tons neutres</p>
            <p><strong>Couleurs :</strong> Beige clair (#F5F0E8) + bleu profond (#2F6F73) + gris doux (#9CA3AF)</p>
            <ul>
              <li><strong>Étape 1 — Consultation des services :</strong> Marc navigue vers la section "Services". Il lit attentivement les descriptions de chaque traitement. Il clique sur "Voir les détails" pour la Thérapie douleurs au dos afin d'obtenir plus d'information avant de décider.</li>
              <li><strong>Étape 2 — Comparaison et sélection :</strong> Marc compare les services disponibles (prix, durées, descriptions). Il est rassuré par la section "À propos" qui présente les qualifications de l'équipe. Il choisit "Thérapie douleurs au dos" (90 $, 50 min) et clique sur "Choisir ce service".</li>
              <li><strong>Étape 3 — Formulaire et confirmation :</strong> Marc remplit soigneusement le formulaire — nom complet, courriel, service, date (mercredi à 14h30). Il vérifie ses informations avant de soumettre. La confirmation le rassure avec un message professionnel et clair indiquant que la clinique le contactera.</li>
            </ul>
          </Section>

          <Section title="5. Prototype haute fidélité">
            <p>
              Le prototype final d'Orion Physio Studio a été conçu pour répondre simultanément aux besoins des deux personas identifiés. Il intègre des éléments issus des deux scénarimages dans une interface cohérente et professionnelle.
            </p>
            <h3>Éléments issus du scénarimage 1 (Adam)</h3>
            <ul>
              <li>Bouton "Prendre rendez-vous" proéminent en hero section</li>
              <li>Navigation rapide avec lien direct vers le formulaire de réservation</li>
              <li>Présélection automatique du service lorsqu'on clique "Choisir ce service" depuis la liste</li>
              <li>Formulaire concis avec validation en temps réel</li>
              <li>Message de confirmation instantané après soumission</li>
            </ul>
            <h3 style={{marginTop:'16px'}}>Éléments issus du scénarimage 2 (Marc)</h3>
            <ul>
              <li>Descriptions détaillées de chaque service avec durée et prix clairement affichés</li>
              <li>Bouton "Voir les détails" ouvrant une fenêtre modale avec description complète</li>
              <li>Section "À propos" rassurante présentant la mission et les valeurs de la clinique</li>
              <li>Section contact avec adresse, téléphone et heures d'ouverture</li>
              <li>Statistiques de confiance (1200+ patients, 8 ans d'expérience, 97% satisfaction)</li>
            </ul>
            <h3 style={{marginTop:'16px'}}>Interactions implémentées</h3>
            <ul>
              <li>Navigation scrollante avec effet de fixation (navbar sticky avec ombre au défilement)</li>
              <li>Sélection de service avec mise en évidence visuelle et pré-remplissage du formulaire</li>
              <li>Fenêtre modale de détails de service avec animation</li>
              <li>Formulaire de réservation avec validation côté client (champs requis, format courriel)</li>
              <li>Sélection de date (min = date du jour) et d'heure via liste déroulante</li>
              <li>Animation de chargement lors de la soumission du formulaire</li>
              <li>Message de confirmation avec animation après soumission réussie</li>
              <li>Menu hamburger responsive pour mobile</li>
            </ul>
          </Section>

          <Section title="6. Choix de conception visuelle">
            <h3>Couleurs</h3>
            <p>La palette choisie reflète le positionnement premium et médical de la clinique. Le bleu sarcelle (#2F6F73) évoque le professionnalisme médical et la confiance. Le fond beige chaud (#F7F5F0) crée un environnement accueillant et rassurant, contrairement au blanc pur clinique. Le vert doux (#7AA889) apporte une note naturelle et positive. Le gris clair (#E5E7EB) structure l'interface sans alourdir.</p>

            <h3>Typographie</h3>
            <p>Playfair Display (serif, pour les titres) apporte une qualité éditoriale et premium, différenciant Orion Physio Studio des sites médicaux génériques. Jost (sans-serif, pour le corps) assure une lisibilité optimale sur tous les écrans. La combinaison serif/sans-serif crée une hiérarchie visuelle claire et une personnalité de marque distinctive.</p>

            <h3>Iconographie</h3>
            <p>Des icônes SVG linéaires minimalistes, cohérentes avec le style Lucide, sont utilisées pour représenter les services et les informations de contact. Ce choix évite la surcharge visuelle tout en maintenant la clarté communicative.</p>

            <h3>Layout et espace négatif</h3>
            <p>L'interface utilise généreusement l'espace blanc pour aérer le contenu et faciliter la lecture. La hero section est divisée en deux colonnes (contenu + visuel), créant un équilibre asymétrique dynamique. Les cartes de services en grille permettent une comparaison facile.</p>

            <h3>Contraste et accessibilité</h3>
            <p>Le texte principal (#1F2933 sur #F7F5F0) offre un ratio de contraste élevé. Les boutons primaires (blanc sur bleu sarcelle) respectent les standards WCAG AA. Les états focus et hover sont clairement définis pour l'accessibilité au clavier.</p>

            <h3>Hiérarchie visuelle</h3>
            <p>Établie via la taille typographique, le poids des polices, la couleur et l'espacement. Les CTA principaux se distinguent nettement du contenu secondaire. Les prix et durées sont mis en évidence visuellement pour Marc.</p>

            <h3>Responsive et mobile</h3>
            <p>L'interface s'adapte aux petits écrans avec un layout en colonne unique, un menu hamburger, et des boutons pleine largeur. Le formulaire de réservation est optimisé pour la saisie mobile.</p>
          </Section>

          <Section title="7. Lien avec le portfolio du Devoir 1">
            <p>
              Ce prototype Orion Physio Studio est directement lié au portfolio personnel développé dans le cadre du Devoir 1 (SEG3525). Le portfolio du Devoir 1 contient une section "Projets" ou "Travaux" dans laquelle un lien vers ce prototype a été ajouté.
            </p>
            <div style={{display:'grid',gap:'12px',marginTop:'16px'}}>
              {[
                {label:'Portfolio Devoir 1 (Netlify)', value:'[Lien Netlify du portfolio — à compléter avant la remise]'},
                {label:'Prototype Devoir 2 (Netlify)', value:'[Lien Netlify du prototype Orion Physio Studio — à compléter après déploiement]'},
                {label:'Code source (GitHub)', value:'[Lien GitHub du dépôt — à compléter]'},
              ].map(l => (
                <div key={l.label} style={{background:'var(--white)',border:'1px solid var(--gray)',borderRadius:'10px',padding:'16px'}}>
                  <div style={{fontSize:'.75rem',fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--teal)',marginBottom:'4px'}}>{l.label}</div>
                  <div style={{fontSize:'.88rem',color:'var(--gray-dark)',fontStyle:'italic'}}>{l.value}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="8. Reconnaissance de l'IA générative">
            <div style={{background:'rgba(47,111,115,.06)',border:'1px solid rgba(47,111,115,.15)',borderRadius:'12px',padding:'24px'}}>
              <p>
                Dans le cadre de la réalisation de ce devoir, l'IA générative (Claude par Anthropic) a été utilisée comme outil d'assistance pour les tâches suivantes :
              </p>
              <ul>
                <li><strong>Structuration des personas :</strong> L'IA a proposé une structure et aidé à formuler les caractéristiques intrinsèques, les relations à la technologie et les objectifs des deux personas (Adam Benali et Marc Tremblay).</li>
                <li><strong>Formulation des scénarimages :</strong> L'IA a aidé à décrire les étapes des parcours utilisateurs et à choisir des directions visuelles distinctes pour chaque scénarimage.</li>
                <li><strong>Génération de la base de code :</strong> L'IA a généré une base de code React/TypeScript pour le prototype haute fidélité, incluant les composants de navigation, de services, de formulaire et de confirmation.</li>
                <li><strong>Amélioration de la rédaction :</strong> L'IA a contribué à la rédaction claire et professionnelle du présent rapport en français.</li>
                <li><strong>Choix visuels :</strong> L'IA a proposé des options de palette de couleurs, de typographie et de layout en accord avec les exigences du devoir.</li>
              </ul>
              <p style={{marginTop:'12px'}}>
                <strong>Responsabilité du concepteur :</strong> Les décisions finales de conception, les corrections, l'adaptation aux exigences spécifiques du devoir SEG3525, la validation de l'interface et la supervision de l'ensemble du projet ont été réalisées par <strong>Omar Raoui</strong>. L'IA a servi d'outil d'assistance et d'accélération, et non de substitut au jugement de conception.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </>
  )
}
