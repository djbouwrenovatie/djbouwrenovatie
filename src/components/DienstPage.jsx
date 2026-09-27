import { Link } from 'react-router-dom'
import './DienstPage.css'

export default function DienstPage({
  title,
  subtitle,
  icon,
  intro,
  werkzaamheden = [],
  voordelen = [],
  stappenPlan = [],
  prijs,
  faq = [],
}) {
  return (
    <>
      <div style={{ paddingTop: '4.5rem' }} />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/diensten">Diensten</Link>
          <span>›</span>
          <span>{title}</span>
        </div>
      </div>

      {/* PAGE HERO */}
      <section className="dienst-hero">
        <div className="container dienst-hero__inner">
          <div className="dienst-hero__content">
            <span className="dienst-hero__icon">{icon}</span>
            <h1>{title}</h1>
            <p className="dienst-hero__subtitle">{subtitle}</p>
            <div className="dienst-hero__actions">
              <Link to="/contact" className="btn btn-primary">Gratis Offerte Aanvragen</Link>
              <a href="tel:+31627526007" className="btn btn-outline-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Bel Ons
              </a>
            </div>
          </div>
          <div className="dienst-hero__contact-card">
            <h3>Direct contact opnemen</h3>
            <p>Wij staan voor u klaar voor al uw vragen. Bel of mail ons voor een vrijblijvend gesprek.</p>
            <div className="contact-card__items">
              <a href="tel:+31627526007" className="contact-card__item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <span>+31 6 27 52 60 07</span>
              </a>
              <a href="mailto:d.jbouwrenovatie@gmail.com" className="contact-card__item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>d.jbouwrenovatie@gmail.com</span>
              </a>
              <a href="https://wa.me/31627526007" className="contact-card__item contact-card__item--wa" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.736 5.46 2.024 7.753L0 32l8.486-2.025A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.08 22.453c-.334.941-1.963 1.8-2.693 1.915-.73.115-1.651.162-2.662-.166-.615-.2-1.403-.465-2.406-.912-4.221-1.823-6.979-6.087-7.193-6.369-.213-.281-1.738-2.311-1.738-4.408 0-2.097 1.1-3.127 1.49-3.552.388-.425.848-.531 1.13-.531l.81.016c.26.01.61-.099.955.729.345.828 1.172 2.863 1.276 3.07.104.208.173.452.035.729-.139.277-.208.449-.416.693-.208.243-.438.543-.625.729-.208.208-.425.433-.183.848.243.416 1.08 1.79 2.32 2.9 1.596 1.42 2.94 1.86 3.356 2.068.416.208.66.174.908-.104.248-.277 1.06-1.236 1.343-1.66.283-.425.566-.354.954-.213.388.14 2.464 1.163 2.888 1.374.425.208.708.313.812.486.104.173.104 1.01-.23 1.951z"/></svg>
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section dienst-intro">
        <div className="container dienst-intro__inner">
          <div className="dienst-intro__text">
            <span className="section-label">Over deze dienst</span>
            <h2 className="section-title">Waarom kiezen voor D&J?</h2>
            {intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="dienst-intro__voordelen">
            <h3>Wat u van ons kunt verwachten</h3>
            <ul>
              {voordelen.map((v, i) => (
                <li key={i}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WERKZAAMHEDEN */}
      {werkzaamheden.length > 0 && (
        <section className="section dienst-werkzaamheden">
          <div className="container">
            <span className="section-label">Wat wij doen</span>
            <h2 className="section-title">Onze Werkzaamheden</h2>
            <div className="werkzaamheden-grid">
              {werkzaamheden.map((w, i) => (
                <div key={i} className="werkzaamheid-card">
                  <div className="werkzaamheid-card__number">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STAPPENPLAN */}
      {stappenPlan.length > 0 && (
        <section className="section dienst-stappen">
          <div className="container">
            <span className="section-label">Onze aanpak</span>
            <h2 className="section-title">Hoe Werkt Het?</h2>
            <div className="stappen-list">
              {stappenPlan.map((s, i) => (
                <div key={i} className="stap">
                  <div className="stap__number">{i + 1}</div>
                  <div className="stap__content">
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                  {i < stappenPlan.length - 1 && <div className="stap__line" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRIJS */}
      {prijs && (
        <section className="dienst-prijs-section">
          <div className="container">
            <div className="dienst-prijs">
              <div>
                <h2>Wat kost een {title.toLowerCase()}?</h2>
                <p>{prijs.tekst}</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Gratis Offerte Aanvragen</Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="section dienst-faq">
          <div className="container">
            <span className="section-label">Veelgestelde vragen</span>
            <h2 className="section-title">FAQ</h2>
            <div className="faq-list">
              {faq.map((f, i) => (
                <details key={i} className="faq-item">
                  <summary>{f.vraag}</summary>
                  <p>{f.antwoord}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="section dienst-bottom-cta">
        <div className="container dienst-bottom-cta__inner">
          <h2>Klaar om te starten?</h2>
          <p>Vraag vandaag nog uw gratis en vrijblijvende offerte aan. Wij nemen binnen 24 uur contact met u op.</p>
          <div className="dienst-bottom-cta__actions">
            <Link to="/contact" className="btn btn-primary">Offerte Aanvragen</Link>
            <Link to="/projecten" className="btn btn-outline">Bekijk Onze Projecten</Link>
          </div>
        </div>
      </section>
    </>
  )
}
