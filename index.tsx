import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

// ─── Data ───────────────────────────────────────────────
const SERVICES = [
  {
    id: 'consultation',
    name: 'Consultation initiale',
    desc: 'Évaluation complète de votre condition physique par un physiothérapeute certifié. Bilan postural, analyse des mouvements et élaboration d\'un plan de traitement personnalisé.',
    duration: '60 min',
    price: 95,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 'sport',
    name: 'Rééducation sportive',
    desc: 'Programme de récupération spécialement conçu pour les athlètes et sportifs actifs. Retour progressif à la performance après une blessure musculaire, ligamentaire ou articulaire.',
    duration: '45 min',
    price: 85,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M4.93 4.93 19.07 19.07"/>
        <path d="m14.12 9.88-2.22 2.22"/>
      </svg>
    ),
  },
  {
    id: 'dos',
    name: 'Thérapie douleurs au dos',
    desc: 'Traitement ciblé des douleurs lombaires, cervicales et thoraciques. Techniques manuelles, exercices thérapeutiques et conseils ergonomiques pour soulager durablement.',
    duration: '50 min',
    price: 90,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: 'posture',
    name: 'Correction posturale',
    desc: 'Programme de rééducation posturale adapté aux douleurs liées au travail de bureau. Analyse biomécanique, exercices de renforcement et de mobilisation pour une posture optimale.',
    duration: '45 min',
    price: 80,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20"/>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    ),
  },
]

const TIME_SLOTS = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30']

// ─── Navbar ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#accueil">
            <div className="nav-logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <span className="nav-logo-name">Orion Physio Studio</span>
              <span className="nav-logo-sub">Clinique de physiothérapie</span>
            </div>
          </a>

          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
            <li><a href="#reservation" className="nav-cta">Prendre rendez-vous</a></li>
          </ul>

          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(l => <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href="#reservation" onClick={() => setMenuOpen(false)} style={{color:'var(--teal)', fontWeight:600}}>Prendre rendez-vous</a>
      </div>
    </>
  )
}

// ─── Hero ────────────────────────────────────────────────
function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"/>
          Clinique certifiée à Ottawa
        </div>

        <h1>
          Retrouvez votre <em>mobilité</em> avec confiance
        </h1>

        <p className="hero-desc">
          Orion Physio Studio vous accompagne dans votre rétablissement avec des soins personnalisés, des thérapeutes certifiés et une approche centrée sur vos objectifs.
        </p>

        <div className="hero-actions">
          <a href="#reservation">
            <button className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Prendre rendez-vous
            </button>
          </a>
          <a href="#services">
            <button className="btn-secondary">
              Voir les services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">1 200+</div>
            <div className="stat-label">Patients traités</div>
          </div>
          <div>
            <div className="stat-num">8 ans</div>
            <div className="stat-label">D'expérience clinique</div>
          </div>
          <div>
            <div className="stat-num">97 %</div>
            <div className="stat-label">Satisfaction patient</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-shape-1"/>
        <div className="hero-shape-2"/>
        <div className="hero-visual-overlay"/>
        <div className="hero-visual-card">
          <div className="hero-visual-title">Nos spécialités</div>
          <ul className="specialty-list">
            {['Douleurs musculaires et articulaires','Rééducation sportive','Blessures liées au travail','Correction posturale','Mobilité et prévention'].map(s => (
              <li key={s} className="specialty-item">
                <span className="specialty-dot"/>
                {s}
              </li>
            ))}
          </ul>
          <div className="hero-visual-badge">
            <strong>Consultation disponible</strong>
            Lun à Ven · 8h à 18h
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────
function Services({ onSelectService }: { onSelectService: (id: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [modal, setModal] = useState<(typeof SERVICES)[0] | null>(null)

  const handleChoose = (service: (typeof SERVICES)[0]) => {
    setSelected(service.id)
    onSelectService(service.id)
    setTimeout(() => {
      document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Nos traitements</span>
          <h2 className="section-title">Services de physiothérapie</h2>
          <p className="section-subtitle">
            Des soins adaptés à chaque besoin, dispensés par des thérapeutes certifiés dans un environnement moderne et accueillant.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map(s => (
            <div key={s.id} className={`service-card${selected === s.id ? ' active' : ''}`}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc.substring(0, 110)}...</p>
              <div className="service-meta">
                <span className="service-tag">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {s.duration}
                </span>
              </div>
              <div className="service-price">{s.price} $<span>/ séance</span></div>
              <div style={{display:'flex', gap:'8px', flexDirection:'column'}}>
                <button className="btn-service" onClick={() => handleChoose(s)}>
                  Choisir ce service
                </button>
                <button
                  onClick={() => setModal(s)}
                  style={{
                    background:'transparent',
                    border:'1.5px solid var(--gray)',
                    borderRadius:'8px',
                    padding:'9px',
                    fontFamily:'Jost,sans-serif',
                    fontSize:'.85rem',
                    fontWeight:600,
                    cursor:'pointer',
                    color:'var(--gray-dark)',
                    transition:'border-color .2s,color .2s',
                  }}
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="service-modal-overlay" onClick={() => setModal(null)}>
          <div className="service-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div style={{display:'flex',gap:'16px',alignItems:'flex-start',marginBottom:'20px'}}>
              <div className="service-icon">{modal.icon}</div>
              <div>
                <div className="service-name">{modal.name}</div>
                <div style={{fontSize:'.82rem',color:'var(--gray-dark)'}}>Durée : {modal.duration} — {modal.price} $ / séance</div>
              </div>
            </div>
            <p style={{color:'var(--gray-dark)',lineHeight:1.7,marginBottom:'24px',fontSize:'.92rem'}}>{modal.desc}</p>
            <button
              className="btn-primary"
              style={{width:'100%',justifyContent:'center'}}
              onClick={() => { handleChoose(modal); setModal(null) }}
            >
              Prendre rendez-vous pour ce service
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

// ─── About ───────────────────────────────────────────────
function About() {
  return (
    <section id="apropos" className="section about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-card-main">
              <p className="about-mission">
                Aider chaque patient à retrouver sa mobilité, réduire la douleur et reprendre ses activités avec confiance.
              </p>
              <ul className="about-list">
                {[
                  'Thérapeutes certifiés avec plus de 8 ans d\'expérience',
                  'Équipements de réhabilitation de dernière génération',
                  'Approche individualisée pour chaque patient',
                  'Environnement moderne, calme et rassurant',
                ].map(item => (
                  <li key={item}>
                    <span className="about-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{marginTop:'20px',background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.2)',borderRadius:'10px',padding:'12px 16px',color:'rgba(255,255,255,.9)',fontSize:'.85rem'}}>
                <strong style={{fontFamily:'Playfair Display,serif',fontStyle:'italic',display:'block',marginBottom:'2px'}}>Orion Physio Studio</strong>
                Clinique de physiothérapie — Ottawa, ON
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-eyebrow" style={{textAlign:'left',display:'block'}}>Notre mission</span>
            <h2>Une clinique pensée pour <em style={{fontStyle:'italic',color:'var(--teal)'}}>votre bien-être</em></h2>
            <p>
              Fondée avec la conviction que chaque personne mérite des soins de physiothérapie de qualité, Orion Physio Studio réunit une équipe de thérapeutes passionnés et expérimentés.
            </p>
            <p>
              Notre approche combine techniques manuelles éprouvées, exercices thérapeutiques progressifs et accompagnement personnalisé pour vous aider à récupérer durablement.
            </p>

            <div className="about-values">
              {[
                { icon: '◎', title: 'Excellence clinique', desc: 'Formation continue et standards élevés' },
                { icon: '♡', title: 'Soins bienveillants', desc: 'Écoute active et accompagnement humain' },
                { icon: '◈', title: 'Approche globale', desc: 'Corps, posture et mode de vie' },
                { icon: '◷', title: 'Disponibilité', desc: 'Rendez-vous flexibles en semaine' },
              ].map(v => (
                <div key={v.title} className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Booking ─────────────────────────────────────────────
function Booking({ selectedServiceId }: { selectedServiceId: string }) {
  const [form, setForm] = useState({
    nom: '', courriel: '', service: selectedServiceId || '',
    date: '', heure: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const prevRef = useRef(selectedServiceId)

  useEffect(() => {
    if (selectedServiceId && selectedServiceId !== prevRef.current) {
      setForm(f => ({ ...f, service: selectedServiceId }))
      prevRef.current = selectedServiceId
    }
  }, [selectedServiceId])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nom.trim()) e.nom = 'Le nom est requis'
    if (!form.courriel.trim()) e.courriel = 'Le courriel est requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.courriel)) e.courriel = 'Courriel invalide'
    if (!form.service) e.service = 'Veuillez choisir un service'
    if (!form.date) e.date = 'La date est requise'
    if (!form.heure) e.heure = "L'heure est requise"
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const set = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => { const n = {...e}; delete n[k]; return n })
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="reservation" className="section booking">
      <div className="section-inner">
        <div className="booking-wrapper">
          <div className="booking-info">
            <span className="section-eyebrow">Réservation en ligne</span>
            <h2>Prenez rendez-vous <em style={{fontStyle:'italic',color:'var(--teal)'}}>facilement</em></h2>
            <p>
              Réservez votre séance en quelques étapes. Notre équipe vous confirmera le rendez-vous dans les plus brefs délais.
            </p>
            <ol className="booking-steps">
              {[
                { n:'01', t:'Choisissez votre service', d:'Sélectionnez le traitement adapté à vos besoins' },
                { n:'02', t:'Sélectionnez une disponibilité', d:"Choisissez la date et l'heure qui vous conviennent" },
                { n:'03', t:'Confirmez votre demande', d:'Nous vous contactons pour confirmer votre rendez-vous' },
              ].map(s => (
                <li key={s.n} className="booking-step">
                  <div className="step-num">{s.n}</div>
                  <div className="step-text">
                    <strong>{s.t}</strong>
                    <span>{s.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            {submitted ? (
              <div className="confirmation-card">
                <div className="confirmation-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="confirmation-title">Demande envoyée !</div>
                <p className="confirmation-msg">
                  Votre demande de rendez-vous a été reçue. Orion Physio Studio vous contactera sous peu pour confirmer votre séance.
                </p>
                <p style={{fontSize:'.82rem',color:'rgba(255,255,255,.65)',marginBottom:'24px'}}>
                  Un courriel de confirmation sera envoyé à <strong style={{color:'rgba(255,255,255,.85)'}}>{form.courriel}</strong>
                </p>
                <button
                  className="btn-reset"
                  onClick={() => { setSubmitted(false); setForm({nom:'',courriel:'',service:'',date:'',heure:''}) }}
                >
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <div className="booking-form-card">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Nom complet *</label>
                      <input
                        className={`form-input${errors.nom ? ' error' : ''}`}
                        type="text"
                        placeholder="Jean Martin"
                        value={form.nom}
                        onChange={e => set('nom', e.target.value)}
                      />
                      {errors.nom && <span className="form-error">{errors.nom}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Courriel *</label>
                      <input
                        className={`form-input${errors.courriel ? ' error' : ''}`}
                        type="email"
                        placeholder="jean@exemple.ca"
                        value={form.courriel}
                        onChange={e => set('courriel', e.target.value)}
                      />
                      {errors.courriel && <span className="form-error">{errors.courriel}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service souhaité *</label>
                    <select
                      className={`form-select${errors.service ? ' error' : ''}`}
                      value={form.service}
                      onChange={e => set('service', e.target.value)}
                    >
                      <option value="">— Sélectionnez un service —</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.name} — {s.price} $ ({s.duration})
                        </option>
                      ))}
                    </select>
                    {errors.service && <span className="form-error">{errors.service}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Date souhaitée *</label>
                      <input
                        className={`form-input${errors.date ? ' error' : ''}`}
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={e => set('date', e.target.value)}
                      />
                      {errors.date && <span className="form-error">{errors.date}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Heure préférée *</label>
                      <select
                        className={`form-select${errors.heure ? ' error' : ''}`}
                        value={form.heure}
                        onChange={e => set('heure', e.target.value)}
                      >
                        <option value="">— Sélectionnez —</option>
                        {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.heure && <span className="form-error">{errors.heure}</span>}
                    </div>
                  </div>

                  <button className="btn-submit" type="submit" disabled={loading}>
                    {loading ? (
                      <span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                        <svg
                          width="16" height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          style={{animation:'spin 1s linear infinite'}}
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : 'Confirmer la demande de rendez-vous'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────
function Contact() {
  const items = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Adresse',
      value: '245 rue Laurier Ouest, bureau 310',
      sub: 'Ottawa, Ontario K1P 5J9',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.57 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.72 6.72l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
        </svg>
      ),
      label: 'Téléphone',
      value: '(613) 555-0192',
      sub: 'Du lundi au vendredi',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Courriel',
      value: 'info@orionphysio.ca',
      sub: 'Réponse sous 24h',
    },
  ]

  const hours = [
    { day: 'Lundi - Vendredi', h: '8h00 - 18h00' },
    { day: 'Samedi', h: '9h00 - 14h00' },
    { day: 'Dimanche', h: 'Fermé' },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Nous joindre</span>
          <h2 className="section-title">Coordonnées</h2>
          <p className="section-subtitle">Nous sommes disponibles pour répondre à toutes vos questions.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            {items.map(item => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                  <div className="contact-value-small">{item.sub}</div>
                </div>
              </div>
            ))}

            <div style={{marginTop:'24px'}}>
              <div className="contact-label" style={{marginBottom:'12px'}}>Heures d'ouverture</div>
              <div className="hours-grid">
                {hours.map(h => (
                  <div key={h.day} className="hours-row">
                    <strong>{h.day}</strong>
                    <span>{h.h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="map-placeholder">
              <div style={{position:'relative',zIndex:2,textAlign:'center'}}>
                <div className="map-pin">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div style={{color:'rgba(255,255,255,.9)',fontWeight:600,fontSize:'.95rem',marginBottom:'4px'}}>245 rue Laurier Ouest</div>
                <div>Ottawa, Ontario · K1P 5J9</div>
              </div>
            </div>
            <div style={{background:'var(--white)',border:'1px solid var(--gray)',borderRadius:'var(--radius)',padding:'20px',marginTop:'16px'}}>
              <p style={{fontSize:'.85rem',color:'var(--gray-dark)',lineHeight:1.6,margin:0}}>
                <strong style={{color:'var(--text)'}}>Accès facile :</strong> Proche de la rue Laurier. Stationnement disponible. Accessible en fauteuil roulant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo-name">Orion Physio Studio</div>
          <div style={{fontSize:'.78rem',marginTop:'4px'}}>Clinique de physiothérapie · Ottawa, ON</div>
        </div>

        <div className="footer-credit">
          Conçu par <strong style={{color:'rgba(255,255,255,.85)'}}>Omar Raoui</strong> – SEG3525, Université d'Ottawa
        </div>

        <div className="footer-links">
          <Link to="/rapport">Rapport</Link>
          <Link to="/personas">Personas</Link>
          <Link to="/storyboards">Scénarimages</Link>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────
function Home() {
  const [selectedService, setSelectedService] = useState('')

  return (
    <>
      <Navbar />
      <Hero />
      <Services onSelectService={setSelectedService} />
      <About />
      <Booking selectedServiceId={selectedService} />
      <Contact />
      <Footer />
    </>
  )
}
