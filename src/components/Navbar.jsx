import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const diensten = [
  { to: '/diensten/toilet', label: 'Toiletrenovatie' },
  { to: '/diensten/badkamer', label: 'Badkamerrenovatie' },
  { to: '/diensten/keuken', label: 'Keukenrenovatie' },
  { to: '/diensten/schilderwerk', label: 'Schilderwerk' },
  { to: '/diensten/vloeren', label: 'Vloeren' },
  { to: '/diensten/dakwerk', label: 'Dakwerk' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-main">D&J</span>
          <span className="navbar__logo-sub">Bouw & Renovatie</span>
        </Link>

        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__list">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>

            <li className="navbar__dropdown" ref={dropdownRef}>
              <button
                className={`navbar__dropdown-toggle ${dropdownOpen ? 'open' : ''} ${location.pathname.startsWith('/diensten') ? 'active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Diensten <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <ul className={`navbar__dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li><Link to="/diensten">Alle Diensten</Link></li>
                <li className="navbar__dropdown-divider" />
                {diensten.map(d => (
                  <li key={d.to}><Link to={d.to}>{d.label}</Link></li>
                ))}
              </ul>
            </li>

            <li><NavLink to="/projecten" className={({ isActive }) => isActive ? 'active' : ''}>Projecten</NavLink></li>
            <li><NavLink to="/over-ons" className={({ isActive }) => isActive ? 'active' : ''}>Over Ons</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>

          <Link to="/contact" className="btn btn-primary navbar__cta">Offerte Aanvragen</Link>
        </nav>
      </div>
    </header>
  )
}
