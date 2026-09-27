import { Link } from 'react-router-dom'
import './Projecten.css'

const projecten = [
  {
    id: 1,
    titel: 'Toiletrenovatie Rijswijk',
    categorie: 'Toiletrenovatie',
    locatie: 'Rijswijk',
    beschrijving: 'Complete renovatie van het toilet inclusief nieuwe tegels, toilet en fonteintje. Klaar in 2 dagen.',
    kleur: '#8b6914',
  },
  {
    id: 2,
    titel: 'Badkamer Verbouwing Den Haag',
    categorie: 'Badkamerrenovatie',
    locatie: 'Den Haag',
    beschrijving: 'Volledige badkamer vernieuwd met inloopdouche, grote formaatstegels en moderne sanitair.',
    kleur: '#3d6b8b',
  },
  {
    id: 3,
    titel: 'Keuken Plaatsing Delft',
    categorie: 'Keukenrenovatie',
    locatie: 'Delft',
    beschrijving: 'Nieuwe keuken gemonteerd inclusief tegelen van de spatwand en aansluiting gas, water en elektra.',
    kleur: '#6b3d8b',
  },
  {
    id: 4,
    titel: 'Schilderwerk Woonhuis Voorburg',
    categorie: 'Schilderwerk',
    locatie: 'Voorburg',
    beschrijving: 'Volledige binnenschildering van een rijtjeswoning. Muren, plafonds, kozijnen en deuren.',
    kleur: '#3d8b3d',
  },
  {
    id: 5,
    titel: 'Laminaatvloer Pijnacker',
    categorie: 'Vloeren',
    locatie: 'Pijnacker',
    beschrijving: 'Leggen van laminaatvloer in woonkamer en slaapkamers inclusief plinten en overgangsprofielen.',
    kleur: '#8b5a3d',
  },
  {
    id: 6,
    titel: 'Dakreparatie Scheveningen',
    categorie: 'Dakwerk',
    locatie: 'Scheveningen',
    beschrijving: 'Reparatie van lekkende dakgoot en vervanging van beschadigde dakpannen na storm.',
    kleur: '#3d3d8b',
  },
  {
    id: 7,
    titel: 'Toiletrenovatie Wateringen',
    categorie: 'Toiletrenovatie',
    locatie: 'Wateringen',
    beschrijving: 'Toilet volledig gerenoveerd met moderne zwarte sanitair en grote formaat wandtegels.',
    kleur: '#8b6914',
  },
  {
    id: 8,
    titel: 'Badkamer Renovatie Zoetermeer',
    categorie: 'Badkamerrenovatie',
    locatie: 'Zoetermeer',
    beschrijving: 'Kleine badkamer optimaal ingedeeld met inloopdouche, dubbele wastafel en vloerverwarming.',
    kleur: '#3d6b8b',
  },
  {
    id: 9,
    titel: 'PVC Vloer Restaurant Den Haag',
    categorie: 'Vloeren',
    locatie: 'Den Haag',
    beschrijving: 'Leggen van commerciële PVC vloer in een restaurant — snel, stijlvol en gemakkelijk te reinigen.',
    kleur: '#8b5a3d',
  },
]

const categories = ['Alle', 'Toiletrenovatie', 'Badkamerrenovatie', 'Keukenrenovatie', 'Schilderwerk', 'Vloeren', 'Dakwerk']

import { useState } from 'react'

export default function Projecten() {
  const [actief, setActief] = useState('Alle')

  const gefilterd = actief === 'Alle' ? projecten : projecten.filter(p => p.categorie === actief)

  return (
    <>
      <div style={{ paddingTop: '4.5rem' }} />
      <section className="page-hero">
        <div className="container">
          <h1>Onze Projecten</h1>
          <p>Een selectie van onze uitgevoerde renovaties in Den Haag en omgeving. Vakwerk dat voor zichzelf spreekt.</p>
        </div>
      </section>

      <section className="section projecten-page">
        <div className="container">
          {/* FILTER */}
          <div className="projecten-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${actief === cat ? 'active' : ''}`}
                onClick={() => setActief(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="projecten-grid">
            {gefilterd.map(project => (
              <div key={project.id} className="project-card">
                <div
                  className="project-card__image"
                  style={{ backgroundColor: project.kleur + '22', borderBottom: `4px solid ${project.kleur}` }}
                >
                  <div className="project-card__placeholder" style={{ color: project.kleur }}>
                    {project.categorie === 'Toiletrenovatie' && '🚽'}
                    {project.categorie === 'Badkamerrenovatie' && '🛁'}
                    {project.categorie === 'Keukenrenovatie' && '🍳'}
                    {project.categorie === 'Schilderwerk' && '🖌️'}
                    {project.categorie === 'Vloeren' && '🪵'}
                    {project.categorie === 'Dakwerk' && '🏠'}
                  </div>
                  <span className="project-card__badge">{project.categorie}</span>
                </div>
                <div className="project-card__body">
                  <div className="project-card__locatie">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {project.locatie}
                  </div>
                  <h3>{project.titel}</h3>
                  <p>{project.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>

          {gefilterd.length === 0 && (
            <div className="projecten-empty">
              <p>Geen projecten gevonden in deze categorie.</p>
            </div>
          )}

          {/* CTA */}
          <div className="projecten-cta">
            <h2>Uw project laten uitvoeren?</h2>
            <p>Vraag vandaag nog een gratis offerte aan. Wij nemen binnen 24 uur contact met u op.</p>
            <Link to="/contact" className="btn btn-primary">Offerte Aanvragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
