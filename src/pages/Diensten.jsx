import { Link } from 'react-router-dom'
import './Diensten.css'

const diensten = [
  {
    icon: '🚽',
    title: 'Toiletrenovatie',
    to: '/diensten/toilet',
    description: 'Complete renovatie van uw toilet. Nieuwe tegels, sanitair, installatie en afwerking naar wens. Wij verzorgen het complete werk van sloopwerk tot oplevering.',
    punten: ['Plaatsen nieuw toilet en fonteintje', 'Wandtegels en vloertegels', 'Leidingwerk en installatie', 'Nette afwerking en sauswerk'],
  },
  {
    icon: '🛁',
    title: 'Badkamerrenovatie',
    to: '/diensten/badkamer',
    description: 'Van ontwerp tot oplevering renoveren wij uw badkamer. Professionele installatie van douche, bad, tegels en sanitair.',
    punten: ['Douche of bad plaatsing', 'Badkamertegels', 'Complete installatie', 'Ventilatie en verlichting'],
  },
  {
    icon: '🍳',
    title: 'Keukenrenovatie',
    to: '/diensten/keuken',
    description: 'Uw droomkeuken realiseren. Plaatsing van nieuwe keukens, tegelen van achterwanden en complete aansluiting.',
    punten: ['Keukenplaatsing', 'Tegelwerk achterwand', 'Gas en wateraansluiting', 'Elektrische aansluiting'],
  },
  {
    icon: '🖌️',
    title: 'Schilderwerk',
    to: '/diensten/schilderwerk',
    description: 'Professioneel schilderwerk voor binnen en buiten. Strakke uitvoering met duurzame verf voor een mooi en lang resultaat.',
    punten: ['Binnenschilderwerk', 'Buitenschilderwerk', 'Behangwerk', 'Plamuren en voorbehandelen'],
  },
  {
    icon: '🪵',
    title: 'Vloeren',
    to: '/diensten/vloeren',
    description: 'Leggen van laminaat, parket, pvc vloeren of tegels. Strak en stijlvol resultaat voor elke kamer.',
    punten: ['Laminaat en parket', 'PVC en vinyl vloeren', 'Tegelvloeren', 'Ondervloer en egalisatie'],
  },
  {
    icon: '🏠',
    title: 'Dakwerk',
    to: '/diensten/dakwerk',
    description: 'Dakreparaties, dakgoten, voegwerk en waterdichting. Uw dak in goede handen, snel en vakkundig uitgevoerd.',
    punten: ['Dakreparatie en -renovatie', 'Dakgoten reinigen en vervangen', 'Voegwerk', 'Waterdichting en isolatie'],
  },
]

export default function Diensten() {
  return (
    <>
      <div style={{ paddingTop: '4.5rem' }} />
      <section className="page-hero">
        <div className="container">
          <h1>Onze Diensten</h1>
          <p>Vakkundige renovatie en bouw in Den Haag & omgeving. Wij bieden een compleet pakket aan diensten voor uw woning.</p>
        </div>
      </section>

      <section className="section diensten-page">
        <div className="container">
          <div className="diensten-page__intro">
            <p>
              D&J Bouw & Renovatie is uw all-in renovatiepartner. Of u nu een toilet wilt renoveren,
              een complete badkamer wilt verbouwen, of schilderwerk nodig heeft — wij verzorgen het van A tot Z.
              Vraag vrijblijvend een gratis offerte aan.
            </p>
          </div>

          <div className="diensten-page__grid">
            {diensten.map((d, i) => (
              <div key={i} className="dienst-page-card">
                <div className="dienst-page-card__icon">{d.icon}</div>
                <div className="dienst-page-card__content">
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <ul>
                    {d.punten.map((p, j) => (
                      <li key={j}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to={d.to} className="btn btn-primary">
                    Meer over {d.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="diensten-page__cta">
            <h2>Niet gevonden wat u zoekt?</h2>
            <p>Wij doen meer dan bovenstaande diensten. Neem contact op voor al uw vragen over renovatie en bouw.</p>
            <Link to="/contact" className="btn btn-primary">Neem Contact Op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
