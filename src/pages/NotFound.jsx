import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      paddingTop: '4.5rem',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div>
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔨</div>
        <h1 style={{ fontSize: '4rem', color: 'var(--color-border)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Pagina niet gevonden</h2>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Terug naar Home</Link>
          <Link to="/contact" className="btn btn-outline">Contact Opnemen</Link>
        </div>
      </div>
    </div>
  )
}
