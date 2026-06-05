import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/storyboards')({
  component: StoryboardsPage,
})

function StoryboardsPage() {
  return (
    <>
      <nav style={{position:'sticky',top:0,background:'rgba(247,245,240,.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid var(--gray)',zIndex:100,padding:'12px 24px'}}>
        <div style={{maxWidth:'1000px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Link to="/" className="back-link" style={{margin:0}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Orion Physio Studio
          </Link>
          <div style={{display:'flex',gap:'16px'}}>
            <Link to="/personas" style={{fontSize:'.85rem',color:'var(--teal)',fontWeight:600}}>Personas</Link>
            <Link to="/rapport" style={{fontSize:'.85rem',color:'var(--teal)',fontWeight:600}}>Rapport</Link>
          </div>
        </div>
      </nav>

      <div className="doc-page">
        <div style={{maxWidth:'1000px',margin:'0 auto'}}>
          <div style={{marginBottom:'12px'}}>
            <span style={{fontSize:'.8rem',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal)'}}>SEG3525 — Devoir 2</span>
          </div>
          <h1 className="doc-title">Scénarimages</h1>
          <p style={{color:'var(--gray-dark)',marginBottom:'48px',paddingBottom:'24px',borderBottom:'2px solid var(--teal)',fontSize:'.95rem'}}>
            Deux scénarimages illustrant les parcours utilisateurs des personas Adam Benali et Marc Tremblay. Chaque scénarimage présente 3 étapes clés avec des maquettes visuelles représentatives.
          </p>

          {/* ── Storyboard 1: Adam ── */}
          <div style={{marginBottom:'72px'}}>
            <div style={{display:'flex',alignItems:'flex-start',gap:'20px',marginBottom:'32px'}}>
              <div style={{width:'52px',height:'52px',background:'var(--teal)',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,color:'white',fontSize:'1.3rem'}}>
                ⚽
              </div>
              <div>
                <div style={{fontSize:'.75rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal)',marginBottom:'4px'}}>Scénarimage 1</div>
                <h2 style={{fontSize:'1.6rem',color:'var(--text)',margin:0,marginBottom:'6px'}}>Adam Benali — Réservation rapide</h2>
                <p style={{fontSize:'.88rem',color:'var(--gray-dark)',fontStyle:'italic',margin:0}}>
                  Direction visuelle : dynamique, orientée action · Palette : bleu médical + blanc + accents verts
                </p>
              </div>
            </div>

            <div className="storyboard-steps">
              {/* Étape 1 Adam */}
              <div className="sb-step adam">
                <div className="sb-mockup adam">
                  <div>
                    <div style={{height:'4px',background:'rgba(255,255,255,.2)',borderRadius:'2px',marginBottom:'6px',width:'60%'}}/>
                    <div style={{height:'4px',background:'rgba(255,255,255,.1)',borderRadius:'2px',width:'40%'}}/>
                  </div>
                  <div className="sb-mockup-content">
                    <span className="sb-mockup-tag">Clinique certifiée</span>
                    <div className="sb-mock-title">Retrouvez votre mobilité</div>
                    <div className="sb-mock-line" style={{width:'80%',marginTop:'4px'}}/>
                    <div className="sb-mock-line" style={{width:'60%'}}/>
                    <div style={{display:'flex',gap:'6px',marginTop:'8px'}}>
                      <span className="sb-mock-btn">Prendre RDV</span>
                      <span style={{padding:'7px 10px',borderRadius:'6px',fontSize:'.7rem',border:'1px solid rgba(255,255,255,.3)',color:'rgba(255,255,255,.8)'}}>Services</span>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'16px',paddingTop:'8px',borderTop:'1px solid rgba(255,255,255,.1)'}}>
                    {['1 200+\nPatients','8 ans\nExp.','97%\nSatisf.'].map(s => (
                      <div key={s} style={{fontSize:'.6rem',color:'rgba(255,255,255,.7)',whiteSpace:'pre',lineHeight:1.3}}>{s}</div>
                    ))}
                  </div>
                </div>
                <div className="sb-step-body">
                  <div className="sb-step-num">Étape 01</div>
                  <div className="sb-step-title">Arrivée sur la page d'accueil</div>
                  <div className="sb-step-desc">Adam arrive depuis une recherche Google. Il voit immédiatement le bouton "Prendre rendez-vous" en évidence. L'interface est claire et orientée action.</div>
                </div>
              </div>

              {/* Étape 2 Adam */}
              <div className="sb-step adam">
                <div className="sb-mockup adam">
                  <div>
                    <div style={{height:'3px',background:'rgba(255,255,255,.15)',borderRadius:'2px',marginBottom:'4px',width:'80%'}}/>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:'6px',flex:1,justifyContent:'center'}}>
                    {[
                      {name:'Consultation initiale',price:'95 $',active:false},
                      {name:'Rééducation sportive',price:'85 $',active:true},
                      {name:'Thérapie dos',price:'90 $',active:false},
                    ].map(s => (
                      <div key={s.name} style={{background:s.active?'rgba(255,255,255,.25)':'rgba(255,255,255,.1)',border:s.active?'1px solid rgba(255,255,255,.5)':'1px solid rgba(255,255,255,.1)',borderRadius:'6px',padding:'6px 8px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <span style={{fontSize:'.65rem',color:s.active?'white':'rgba(255,255,255,.7)',fontWeight:s.active?700:400}}>{s.name}</span>
                        <span style={{fontSize:'.65rem',color:s.active?'rgba(122,168,137,1)':'rgba(255,255,255,.5)',fontWeight:700}}>{s.price}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:'6px'}}>
                    <span className="sb-mock-btn" style={{display:'block',textAlign:'center'}}>Choisir ce service</span>
                  </div>
                </div>
                <div className="sb-step-body">
                  <div className="sb-step-num">Étape 02</div>
                  <div className="sb-step-title">Sélection du service</div>
                  <div className="sb-step-desc">Adam choisit "Rééducation sportive" directement depuis la liste. Il voit le prix (85 $) et la durée. Il clique sur "Choisir ce service" sans hésitation.</div>
                </div>
              </div>

              {/* Étape 3 Adam */}
              <div className="sb-step adam">
                <div className="sb-mockup adam">
                  <div style={{flex:1,display:'flex',flexDirection:'column',gap:'6px',justifyContent:'center'}}>
                    <div style={{background:'rgba(255,255,255,.12)',borderRadius:'6px',padding:'6px 10px',fontSize:'.65rem',color:'rgba(255,255,255,.8)'}}>
                      Jean Martin · jean@exemple.ca
                    </div>
                    <div style={{background:'rgba(255,255,255,.12)',borderRadius:'6px',padding:'6px 10px',fontSize:'.65rem',color:'var(--green)',fontWeight:600}}>
                      Rééducation sportive
                    </div>
                    <div style={{display:'flex',gap:'6px'}}>
                      <div style={{flex:1,background:'rgba(255,255,255,.12)',borderRadius:'6px',padding:'6px 8px',fontSize:'.6rem',color:'rgba(255,255,255,.8)'}}>2025-06-15</div>
                      <div style={{flex:1,background:'rgba(255,255,255,.12)',borderRadius:'6px',padding:'6px 8px',fontSize:'.6rem',color:'rgba(255,255,255,.8)'}}>09:00</div>
                    </div>
                    <div style={{marginTop:'4px',background:'rgba(255,255,255,.9)',borderRadius:'6px',padding:'8px',textAlign:'center',fontSize:'.65rem',color:'var(--teal)',fontWeight:700}}>
                      Confirmer le rendez-vous
                    </div>
                    <div style={{background:'rgba(122,168,137,.3)',border:'1px solid rgba(122,168,137,.4)',borderRadius:'8px',padding:'8px',textAlign:'center',marginTop:'4px'}}>
                      <div style={{fontSize:'.6rem',color:'white',fontWeight:700}}>Demande envoyee !</div>
                      <div style={{fontSize:'.55rem',color:'rgba(255,255,255,.7)',marginTop:'2px'}}>Vous serez contacte sous peu</div>
                    </div>
                  </div>
                </div>
                <div className="sb-step-body">
                  <div className="sb-step-num">Étape 03</div>
                  <div className="sb-step-title">Formulaire et confirmation</div>
                  <div className="sb-step-desc">Adam sélectionne le lendemain à 9h00, remplit son nom et courriel, et soumet. Un message de confirmation apparaît instantanément. Durée totale : moins de 2 minutes.</div>
                </div>
              </div>
            </div>

            <div style={{marginTop:'20px',padding:'16px 20px',background:'rgba(47,111,115,.06)',border:'1px solid rgba(47,111,115,.12)',borderRadius:'10px',fontSize:'.85rem',color:'var(--gray-dark)',lineHeight:1.6}}>
              <strong style={{color:'var(--teal)'}}>Direction visuelle : </strong>
              Ton sombre et dynamique avec fond bleu profond (#2F6F73). Hiérarchie visuelle forte avec CTA blanc contrasté. Actions immédiates, pas de contenu superflu. Adapté à la navigation mobile rapide. Accents verts pour signaler les sélections actives.
            </div>
          </div>

          {/* ── Storyboard 2: Marc ── */}
          <div>
            <div style={{display:'flex',alignItems:'flex-start',gap:'20px',marginBottom:'32px'}}>
              <div style={{width:'52px',height:'52px',background:'rgba(122,168,137,.2)',border:'2px solid var(--green)',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'1.3rem'}}>
                💼
              </div>
              <div>
                <div style={{fontSize:'.75rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#3d6b4f',marginBottom:'4px'}}>Scénarimage 2</div>
                <h2 style={{fontSize:'1.6rem',color:'var(--text)',margin:0,marginBottom:'6px'}}>Marc Tremblay — Exploration informée</h2>
                <p style={{fontSize:'.88rem',color:'var(--gray-dark)',fontStyle:'italic',margin:0}}>
                  Direction visuelle : calme, rassurante, informative · Palette : beige clair + bleu profond + gris doux
                </p>
              </div>
            </div>

            <div className="storyboard-steps">
              {/* Étape 1 Marc */}
              <div className="sb-step marc">
                <div className="sb-mockup marc">
                  <div>
                    <div style={{height:'3px',background:'rgba(47,111,115,.15)',borderRadius:'2px',marginBottom:'4px',width:'70%'}}/>
                    <div style={{height:'3px',background:'rgba(47,111,115,.08)',borderRadius:'2px',width:'50%'}}/>
                  </div>
                  <div style={{flex:1,display:'flex',flexDirection:'column',gap:'7px',justifyContent:'center'}}>
                    <div style={{fontSize:'.65rem',fontWeight:600,color:'var(--teal)',letterSpacing:'.06em',textTransform:'uppercase'}}>NOS SERVICES</div>
                    {[
                      {name:'Consultation initiale',desc:'Évaluation complète...'},
                      {name:'Rééducation sportive',desc:'Programme de récup...'},
                      {name:'Thérapie douleurs au dos',desc:'Traitement ciblé...'},
                    ].map(s => (
                      <div key={s.name} style={{background:'white',border:'1px solid var(--gray)',borderRadius:'6px',padding:'7px 8px'}}>
                        <div style={{fontSize:'.63rem',fontWeight:700,color:'var(--text)'}}>{s.name}</div>
                        <div style={{fontSize:'.58rem',color:'var(--gray-dark)',marginTop:'2px'}}>{s.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sb-step-body">
                  <div className="sb-step-num" style={{color:'#3d6b4f'}}>Étape 01</div>
                  <div className="sb-step-title">Consultation des services</div>
                  <div className="sb-step-desc">Marc navigue vers la section Services. Il lit attentivement les descriptions de chaque traitement pour comprendre ce qui correspond à sa douleur chronique au dos.</div>
                </div>
              </div>

              {/* Étape 2 Marc */}
              <div className="sb-step marc">
                <div className="sb-mockup marc">
                  <div>
                    <div style={{height:'3px',background:'rgba(47,111,115,.12)',borderRadius:'2px',marginBottom:'6px',width:'60%'}}/>
                  </div>
                  <div style={{flex:1,display:'flex',flexDirection:'column',gap:'6px',justifyContent:'center'}}>
                    <div style={{fontSize:'.6rem',color:'var(--gray-dark)',fontStyle:'italic'}}>Comparer les services :</div>
                    {[
                      {name:'Rééducation sportive',price:'85 $',dur:'45 min',sel:false},
                      {name:'Thérapie douleurs au dos',price:'90 $',dur:'50 min',sel:true},
                      {name:'Correction posturale',price:'80 $',dur:'45 min',sel:false},
                    ].map(s => (
                      <div key={s.name} style={{background:s.sel?'rgba(47,111,115,.08)':'white',border:s.sel?'1.5px solid rgba(47,111,115,.3)':'1px solid var(--gray)',borderRadius:'6px',padding:'6px 8px'}}>
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                          <span style={{fontSize:'.6rem',fontWeight:s.sel?700:400,color:s.sel?'var(--teal)':'var(--text)'}}>{s.name}</span>
                          <span style={{fontSize:'.6rem',fontWeight:700,color:s.sel?'var(--teal)':'var(--gray-dark)'}}>{s.price}</span>
                        </div>
                        <div style={{fontSize:'.55rem',color:'var(--gray-dark)',marginTop:'2px'}}>{s.dur} · {s.sel ? 'Sélectionné' : ''}</div>
                      </div>
                    ))}
                    <div className="sb-mock-btn" style={{display:'block',textAlign:'center',marginTop:'4px'}}>Choisir ce service</div>
                  </div>
                </div>
                <div className="sb-step-body">
                  <div className="sb-step-num" style={{color:'#3d6b4f'}}>Étape 02</div>
                  <div className="sb-step-title">Comparaison et sélection</div>
                  <div className="sb-step-desc">Marc compare les prix et durées des services. Il choisit "Thérapie douleurs au dos" (90 $, 50 min) après avoir lu la description complète via "Voir les détails".</div>
                </div>
              </div>

              {/* Étape 3 Marc */}
              <div className="sb-step marc">
                <div className="sb-mockup marc">
                  <div style={{flex:1,display:'flex',flexDirection:'column',gap:'6px',justifyContent:'center'}}>
                    <div style={{fontSize:'.6rem',fontWeight:700,color:'var(--teal)',marginBottom:'4px'}}>Formulaire de réservation</div>
                    <div style={{background:'white',border:'1px solid var(--gray)',borderRadius:'5px',padding:'5px 8px',fontSize:'.58rem',color:'var(--text)'}}>Marc Tremblay</div>
                    <div style={{background:'white',border:'1px solid var(--gray)',borderRadius:'5px',padding:'5px 8px',fontSize:'.58rem',color:'var(--text)'}}>marc@exemple.ca</div>
                    <div style={{background:'rgba(47,111,115,.08)',border:'1px solid rgba(47,111,115,.2)',borderRadius:'5px',padding:'5px 8px',fontSize:'.58rem',color:'var(--teal)',fontWeight:600}}>Thérapie douleurs au dos</div>
                    <div style={{display:'flex',gap:'5px'}}>
                      <div style={{flex:1,background:'white',border:'1px solid var(--gray)',borderRadius:'5px',padding:'5px 6px',fontSize:'.55rem',color:'var(--text)'}}>2025-06-18</div>
                      <div style={{flex:1,background:'white',border:'1px solid var(--gray)',borderRadius:'5px',padding:'5px 6px',fontSize:'.55rem',color:'var(--text)'}}>14:30</div>
                    </div>
                    <div className="sb-mock-btn" style={{display:'block',textAlign:'center',background:'var(--teal)',color:'white',marginTop:'4px'}}>Confirmer</div>
                    <div style={{background:'rgba(47,111,115,.1)',border:'1px solid rgba(47,111,115,.2)',borderRadius:'6px',padding:'8px',marginTop:'4px'}}>
                      <div style={{fontSize:'.6rem',color:'var(--teal)',fontWeight:700,textAlign:'center'}}>Demande envoyee</div>
                      <div style={{fontSize:'.55rem',color:'var(--gray-dark)',textAlign:'center',marginTop:'2px',lineHeight:1.4}}>Orion Physio Studio vous contactera sous peu</div>
                    </div>
                  </div>
                </div>
                <div className="sb-step-body">
                  <div className="sb-step-num" style={{color:'#3d6b4f'}}>Étape 03</div>
                  <div className="sb-step-title">Formulaire et confirmation</div>
                  <div className="sb-step-desc">Marc remplit soigneusement le formulaire — nom, courriel, service, date, heure. Il valide et reçoit le message de confirmation. Il se sent rassuré par le ton professionnel.</div>
                </div>
              </div>
            </div>

            <div style={{marginTop:'20px',padding:'16px 20px',background:'rgba(122,168,137,.06)',border:'1px solid rgba(122,168,137,.2)',borderRadius:'10px',fontSize:'.85rem',color:'var(--gray-dark)',lineHeight:1.6}}>
              <strong style={{color:'#3d6b4f'}}>Direction visuelle : </strong>
              Tons chauds et rassurants avec fond beige clair (#F5F0E8). Interface structurée avec beaucoup d'espace blanc. Typographie lisible et information hiérarchisée. Comparaison de prix visible. Signaux de confiance intégrés. Parcours guidé et sans ambiguïté.
            </div>
          </div>

          <div style={{marginTop:'48px',padding:'24px',background:'var(--white)',border:'1px solid var(--gray)',borderRadius:'var(--radius-lg)',fontSize:'.88rem',color:'var(--gray-dark)',lineHeight:1.7}}>
            <strong style={{color:'var(--text)',display:'block',marginBottom:'8px'}}>Différences visuelles entre les deux scénarimages :</strong>
            Le scénarimage d'Adam utilise un fond sombre (bleu profond), des couleurs vives, une hiérarchie très condensée et des CTAs dominants en blanc. Le scénarimage de Marc utilise des tons neutres et chauds (beige/blanc), une présentation plus aérée, plus de contenu textuel et une navigation informative progressive. Ces deux directions visuelles distinctes ont été intégrées dans le prototype final en créant un équilibre : des actions rapides accessibles (Adam) dans un environnement clair et informatif (Marc).
          </div>
        </div>
      </div>
    </>
  )
}
