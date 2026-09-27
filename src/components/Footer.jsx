import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-main">D&J</span>
            <span className="footer__logo-sub">Bouw & Renovatie</span>
          </div>
          <p className="footer__tagline">
            Vakmanschap en betrouwbaarheid in Den Haag & omgeving.
            Uw renovatiespecialist voor toilet, badkamer, keuken en meer.
          </p>
          <div className="footer__contact-quick">
            <a href="tel:+31627526007" className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +31 6 27 52 60 07
            </a>
            <a href="mailto:d.jbouwrenovatie@gmail.com" className="footer__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              d.jbouwrenovatie@gmail.com
            </a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h3>Diensten</h3>
            <ul>
              <li><Link to="/diensten/toilet">Toiletrenovatie</Link></li>
              <li><Link to="/diensten/badkamer">Badkamerrenovatie</Link></li>
              <li><Link to="/diensten/keuken">Keukenrenovatie</Link></li>
              <li><Link to="/diensten/schilderwerk">Schilderwerk</Link></li>
              <li><Link to="/diensten/vloeren">Vloeren</Link></li>
              <li><Link to="/diensten/dakwerk">Dakwerk</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Navigatie</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/diensten">Alle Diensten</Link></li>
              <li><Link to="/projecten">Projecten</Link></li>
              <li><Link to="/over-ons">Over Ons</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Info</h3>
            <ul>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Den Haag & omgeving
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Ma–Vr: 07:00–18:00
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Za: 08:00–14:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} D&J Bouw & Renovatie. Alle rechten voorbehouden.</p>
          <p>KvK: 94421764 | BTW: NL005009736B76</p>
        </div>
      </div>
    </footer>
  )
}
