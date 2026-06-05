import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/personas')({
  component: PersonasPage,
})

function PersonasPage() {
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
            <Link to="/storyboards" style={{fontSize:'.85rem',color:'var(--teal)',fontWeight:600}}>Scénarimages</Link>
            <Link to="/rapport" style={{fontSize:'.85rem',color:'var(--teal)',fontWeight:600}}>Rapport</Link>
          </div>
        </div>
      </nav>

      <div className="doc-page">
        <div className="doc-inner">
          <div className="doc-meta" style={{paddingBottom:0,borderBottom:'none',marginBottom:'12px'}}>
            <span style={{fontSize:'.8rem',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal)'}}>SEG3525 — Devoir 2</span>
          </div>
          <h1 className="doc-title">Personas utilisateurs</h1>
          <p style={{color:'var(--gray-dark)',marginBottom:'48px',paddingBottom:'24px',borderBottom:'2px solid var(--teal)',fontSize:'.95rem'}}>
            Deux personas ont été développés pour guider la conception du prototype Orion Physio Studio. Ils représentent les besoins, comportements et objectifs des utilisateurs cibles.
          </p>

          {/* Persona 1 */}
          <div className="persona-card" style={{borderTop:'3px solid var(--teal)'}}>
            <div className="persona-header">
              <div className="persona-avatar adam" style={{fontSize:'2.2rem',width:'72px',height:'72px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(47,111,115,.1)',flexShrink:0}}>
                ⚽
              </div>
              <div>
                <div className="persona-name">Adam Benali</div>
                <div className="persona-role">24 ans · Étudiant universitaire · Joueur de soccer amateur</div>
                <div style={{marginTop:'8px',display:'flex',flexWrap:'wrap',gap:'6px'}}>
                  <span className="persona-tag">Pressé</span>
                  <span className="persona-tag">Tech-savvy</span>
                  <span className="persona-tag">Sportif actif</span>
                </div>
              </div>
            </div>

            <div className="persona-grid">
              <div className="persona-field">
                <label>Objectif principal</label>
                <p>Prendre rapidement un rendez-vous pour une douleur au genou après un entraînement de soccer. Il veut une solution rapide et sans friction.</p>
              </div>
              <div className="persona-field">
                <label>Relation à la technologie</label>
                <p>Très confortable avec les sites web et les formulaires en ligne. Il utilise quotidiennement des applications mobiles et s'attend à une expérience fluide et rapide.</p>
              </div>
              <div className="persona-field">
                <label>Relation au domaine</label>
                <p>Il connaît un peu la physiothérapie grâce à son environnement sportif, mais veut surtout aller vite. Il n'a pas besoin de longues explications.</p>
              </div>
              <div className="persona-field">
                <label>Frustrations potentielles</label>
                <p>Trop d'étapes pour réserver. Absence d'information rapide sur les prix et disponibilités. Interface peu intuitive ou lente.</p>
              </div>
              <div className="persona-field" style={{gridColumn:'span 2'}}>
                <label>3 caractéristiques intrinsèques</label>
                <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginTop:'8px'}}>
                  {[
                    { t: 'Orienté action', d: 'Il veut accomplir sa tâche en moins de 3 minutes, sans lire de contenu superflu.' },
                    { t: 'Confiant numériquement', d: 'Il explore naturellement l\'interface et comprend les conventions UX modernes.' },
                    { t: 'Sensible à l\'urgence', d: 'Sa douleur est récente et il veut un rendez-vous le plus tôt possible.' },
                  ].map(c => (
                    <div key={c.t} style={{flex:'1',minWidth:'160px',background:'rgba(47,111,115,.06)',border:'1px solid rgba(47,111,115,.12)',borderRadius:'10px',padding:'14px'}}>
                      <div style={{fontWeight:700,fontSize:'.85rem',color:'var(--teal)',marginBottom:'4px'}}>{c.t}</div>
                      <div style={{fontSize:'.8rem',color:'var(--gray-dark)'}}>{c.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{marginTop:'20px',padding:'16px',background:'rgba(47,111,115,.06)',borderRadius:'10px',borderLeft:'3px solid var(--teal)'}}>
              <strong style={{fontSize:'.85rem',color:'var(--teal)'}}>Scénario typique :</strong>
              <p style={{fontSize:'.85rem',color:'var(--gray-dark)',marginTop:'6px',lineHeight:1.6}}>
                Adam est rentré d'un entraînement avec une douleur au genou gauche. Depuis son téléphone, il cherche une clinique à Ottawa. Il arrive sur le site Orion Physio, clique directement sur "Prendre rendez-vous", choisit "Rééducation sportive", sélectionne le lendemain matin et soumet sa demande en moins de 2 minutes.
              </p>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="persona-card" style={{borderTop:'3px solid var(--green)'}}>
            <div className="persona-header">
              <div style={{fontSize:'2.2rem',width:'72px',height:'72px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(122,168,137,.15)',flexShrink:0}}>
                💼
              </div>
              <div>
                <div className="persona-name">Marc Tremblay</div>
                <div className="persona-role">46 ans · Employé de bureau · Comptable senior</div>
                <div style={{marginTop:'8px',display:'flex',flexWrap:'wrap',gap:'6px'}}>
                  <span className="persona-tag" style={{background:'rgba(122,168,137,.15)',color:'#3d6b4f'}}>Prudent</span>
                  <span className="persona-tag" style={{background:'rgba(122,168,137,.15)',color:'#3d6b4f'}}>Cherche l'information</span>
                  <span className="persona-tag" style={{background:'rgba(122,168,137,.15)',color:'#3d6b4f'}}>Veut être rassuré</span>
                </div>
              </div>
            </div>

            <div className="persona-grid">
              <div className="persona-field">
                <label>Objectif principal</label>
                <p>Comprendre les services et les prix disponibles, puis choisir une consultation adaptée à ses douleurs chroniques au dos avant de prendre rendez-vous.</p>
              </div>
              <div className="persona-field">
                <label>Relation à la technologie</label>
                <p>Utilise les sites web régulièrement mais préfère les interfaces simples, guidées et bien structurées. Il lit attentivement avant d'agir et n'apprécie pas les interfaces surchargées.</p>
              </div>
              <div className="persona-field">
                <label>Relation au domaine</label>
                <p>Il ne connaît pas bien la physiothérapie et veut comprendre les traitements disponibles. Il a besoin d'être rassuré sur la légitimité et le professionnalisme de la clinique.</p>
              </div>
              <div className="persona-field">
                <label>Frustrations potentielles</label>
                <p>Informations sur les prix absentes ou peu claires. Descriptions de services trop techniques. Absence de signaux de confiance (accréditations, expérience). Navigation confuse.</p>
              </div>
              <div className="persona-field" style={{gridColumn:'span 2'}}>
                <label>3 caractéristiques intrinsèques</label>
                <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginTop:'8px'}}>
                  {[
                    { t: 'Analyste prudent', d: 'Il compare les options avant de décider et lit attentivement les descriptions de services.' },
                    { t: 'Sensible à la confiance', d: 'Il a besoin de signaux de crédibilité (expérience, certifications, avis) pour se sentir en sécurité.' },
                    { t: 'Orienté valeur', d: 'Il veut comprendre ce qu\'il obtient pour son argent avant de confirmer une réservation.' },
                  ].map(c => (
                    <div key={c.t} style={{flex:'1',minWidth:'160px',background:'rgba(122,168,137,.08)',border:'1px solid rgba(122,168,137,.2)',borderRadius:'10px',padding:'14px'}}>
                      <div style={{fontWeight:700,fontSize:'.85rem',color:'#3d6b4f',marginBottom:'4px'}}>{c.t}</div>
                      <div style={{fontSize:'.8rem',color:'var(--gray-dark)'}}>{c.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{marginTop:'20px',padding:'16px',background:'rgba(122,168,137,.08)',borderRadius:'10px',borderLeft:'3px solid var(--green)'}}>
              <strong style={{fontSize:'.85rem',color:'#3d6b4f'}}>Scénario typique :</strong>
              <p style={{fontSize:'.85rem',color:'var(--gray-dark)',marginTop:'6px',lineHeight:1.6}}>
                Marc souffre de maux de dos depuis plusieurs semaines suite à son travail de bureau. Il arrive sur le site Orion Physio depuis un moteur de recherche. Il consulte la section services, lit les descriptions et compare les prix. Il choisit "Thérapie douleurs au dos", lit la section À propos pour se rassurer sur le professionnalisme de la clinique, puis remplit le formulaire de réservation avec soin.
              </p>
            </div>
          </div>

          <div style={{marginTop:'48px',padding:'24px',background:'var(--white)',border:'1px solid var(--gray)',borderRadius:'var(--radius-lg)',fontSize:'.88rem',color:'var(--gray-dark)',lineHeight:1.7}}>
            <strong style={{color:'var(--text)',display:'block',marginBottom:'8px'}}>Note sur les personas :</strong>
            Ces deux personas représentent des profils utilisateurs complémentaires. Adam représente l'utilisateur pressé et technophile, tandis que Marc représente l'utilisateur prudent qui cherche l'information. Le prototype final intègre des éléments pour satisfaire les deux : un accès rapide à la réservation (Adam) et des descriptions détaillées des services avec les prix (Marc).
          </div>
        </div>
      </div>
    </>
  )
}
