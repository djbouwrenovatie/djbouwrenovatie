import { Link } from 'react-router-dom'
import './Home.css'

const diensten = [
  {
    icon: '🚽',
    title: 'Toiletrenovatie',
    description: 'Complete renovatie van uw toilet. Nieuwe tegels, sanitair, installatie en afwerking naar wens.',
    to: '/diensten/toilet',
  },
  {
    icon: '🛁',
    title: 'Badkamerrenovatie',
    description: 'Van ontwerp tot oplevering. Wij renoveren uw badkamer compleet met vakkundige installatie.',
    to: '/diensten/badkamer',
  },
  {
    icon: '🍳',
    title: 'Keukenrenovatie',
    description: 'Uw droomkeuken realiseren. Plaatsing, tegelen, aansluiting en fraaie afwerking.',
    to: '/diensten/keuken',
  },
  {
    icon: '🖌️',
    title: 'Schilderwerk',
    description: 'Professioneel schilderwerk binnen en buiten. Nette uitvoering, duurzaam resultaat.',
    to: '/diensten/schilderwerk',
  },
  {
    icon: '🪵',
    title: 'Vloeren',
    description: 'Leggen van laminaat, parket, tegels of pvc vloeren. Strak en stijlvol resultaat.',
    to: '/diensten/vloeren',
  },
  {
    icon: '🏠',
    title: 'Dakwerk',
    description: 'Dakreparaties, dakgoten en waterdichting. Uw dak in goede handen.',
    to: '/diensten/dakwerk',
  },
]

const usp = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: '10+ jaar ervaring',
    description: 'Met ruim 10 jaar ervaring in renovatie en bouw leveren we consistent vakwerk.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Alles uit één hand',
    description: 'Van sloopwerk tot afwerking: wij verzorgen het volledige project zonder gedoe.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Altijd op tijd',
    description: 'We houden ons aan afspraken en leveren uw project op de afgesproken datum.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Persoonlijk contact',
    description: 'Direct contact met de uitvoerder. U weet altijd wie er bij u werkt.',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <span className="hero__badge">Den Haag & omgeving</span>
          <h1 className="hero__title">
            Vakkundige<br />Bouw & Renovatie
          </h1>
          <p className="hero__subtitle">
            D&J Bouw & Renovatie is uw betrouwbare partner voor toilet-, badkamer- en keukenrenovaties,
            schilderwerk, vloeren en dakwerk in Den Haag en omgeving.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary hero__btn">Gratis Offerte Aanvragen</Link>
            <Link to="/projecten" className="btn btn-white hero__btn">Bekijk Ons Werk</Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Projecten afgerond</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Jaar ervaring</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">Tevreden klanten</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USP STRIP ===== */}
      <section className="usp-strip">
        <div className="container usp-strip__inner">
          {usp.map((item, i) => (
            <div key={i} className="usp-strip__item">
              <div className="usp-strip__icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DIENSTEN ===== */}
      <section className="section home-diensten">
        <div className="container">
          <div className="home-diensten__header">
            <div>
              <span className="section-label">Onze Diensten</span>
              <h2 className="section-title">Wat Wij Voor U Kunnen Doen</h2>
              <p className="section-subtitle">
                Van kleine toiletrenovatie tot complete badkamer- of keukenrenovatie.
                Wij pakken elk project professioneel aan.
              </p>
            </div>
            <Link to="/diensten" className="btn btn-outline">Alle diensten bekijken</Link>
          </div>

          <div className="diensten-grid">
            {diensten.map((d, i) => (
              <Link to={d.to} key={i} className="dienst-card">
                <div className="dienst-card__icon">{d.icon}</div>
                <h3 className="dienst-card__title">{d.title}</h3>
                <p className="dienst-card__desc">{d.description}</p>
                <span className="dienst-card__link">
                  Meer informatie
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Klaar voor uw renovatie?</h2>
            <p>Vraag vrijblijvend een gratis offerte aan. Wij nemen binnen 24 uur contact met u op.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-white">Offerte Aanvragen</Link>
            <a href="tel:+31627526007" className="btn btn-outline-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Bel Ons Nu
            </a>
          </div>
        </div>
      </section>

      {/* ===== OVER ONS PREVIEW ===== */}
      <section className="section home-about">
        <div className="container home-about__inner">
          <div className="home-about__content">
            <span className="section-label">Over Ons</span>
            <h2 className="section-title">Uw Betrouwbare Renovatiepartner</h2>
            <p>
              D&J Bouw & Renovatie is een familiebedrijf gevestigd in Den Haag.
              Met meer dan 10 jaar ervaring in de renovatiebranche hebben wij honderden
              klanten geholpen met het realiseren van hun renovatiewensen.
            </p>
            <p>
              Wij werken met eigen vakkundige medewerkers en kiezen altijd voor kwaliteitsmateriaal.
              Van de eerste vrijblijvende offerte tot de uiteindelijke oplevering staan wij voor u klaar.
            </p>
            <ul className="home-about__list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Erkend aannemer
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Volledig verzekerd
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Ingeschreven KvK
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Gratis advies aan huis
              </li>
            </ul>
            <Link to="/over-ons" className="btn btn-primary">Meer Over Ons</Link>
          </div>
          <div className="home-about__info-cards">
            <div className="info-card">
              <div className="info-card__number">200+</div>
              <div className="info-card__label">Voltooide projecten</div>
            </div>
            <div className="info-card">
              <div className="info-card__number">10+</div>
              <div className="info-card__label">Jaar ervaring</div>
            </div>
            <div className="info-card info-card--contact">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <div>
                <div className="info-card__label">Direct contact</div>
                <a href="tel:+31627526007" className="info-card__phone">+31 6 27 52 60 07</a>
              </div>
            </div>
            <div className="info-card info-card--hours">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div>
                <div className="info-card__label">Openingstijden</div>
                <div className="info-card__hours">Ma–Vr: 07:00–18:00</div>
                <div className="info-card__hours">Za: 08:00–14:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
