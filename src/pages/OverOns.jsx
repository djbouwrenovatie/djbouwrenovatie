import { Link } from 'react-router-dom'
import './OverOns.css'

const team = [
  {
    naam: 'D. Kaur',
    functie: 'Oprichter & Uitvoerder',
    bio: 'Met meer dan 10 jaar ervaring in renovatie en bouw leidt D. elk project persoonlijk in goede banen.',
    initialen: 'DK',
  },
  {
    naam: 'J. Kaur',
    functie: 'Projectcoördinator',
    bio: 'J. zorgt voor een vlekkeloze planning en communicatie met klanten. Uw aanspreekpunt voor vragen.',
    initialen: 'JK',
  },
]

const waarden = [
  {
    icon: '🏆',
    titel: 'Kwaliteit',
    tekst: 'Wij werken alleen met goede materialen en vakkundige uitvoering. Geen compromissen op kwaliteit.',
  },
  {
    icon: '🤝',
    titel: 'Betrouwbaarheid',
    tekst: 'Afspraken nakomen, eerlijke prijzen en transparante communicatie. Dat is onze belofte.',
  },
  {
    icon: '⚡',
    titel: 'Efficiëntie',
    tekst: 'Wij werken snel en georganiseerd zodat uw renovatie zo min mogelijk overlast geeft.',
  },
  {
    icon: '💬',
    titel: 'Communicatie',
    tekst: 'U weet altijd wat er speelt. Wij houden u op de hoogte tijdens het gehele project.',
  },
]

export default function OverOns() {
  return (
    <>
      <div style={{ paddingTop: '4.5rem' }} />
      <section className="page-hero">
        <div className="container">
          <h1>Over Ons</h1>
          <p>Maak kennis met D&J Bouw & Renovatie — uw betrouwbare renovatiepartner in Den Haag en omgeving.</p>
        </div>
      </section>

      {/* VERHAAL */}
      <section className="section over-verhaal">
        <div className="container over-verhaal__inner">
          <div className="over-verhaal__content">
            <span className="section-label">Ons Verhaal</span>
            <h2 className="section-title">Vakmanschap met een Persoonlijke Touch</h2>
            <p>
              D&J Bouw & Renovatie is opgericht vanuit een passie voor vakmanschap en de overtuiging dat
              renovatiewerk anders kan. Persoonlijker. Betrouwbaarder. Met meer aandacht voor de wensen van de klant.
            </p>
            <p>
              Gevestigd in Den Haag, zijn wij al meer dan 10 jaar actief in de regio Den Haag, Delft,
              Zoetermeer, Rijswijk, Voorburg en omstreken. In al die jaren hebben wij honderden projecten
              succesvol afgerond — van kleine toiletrenovaties tot complete verbouwingen.
            </p>
            <p>
              Wij werken met een vast team van vakkundige uitvoerders. Geen wisselende zzp'ers, maar mensen
              die wij kennen en vertrouwen. Zo weet u wie er bij u thuis werkt en kunt u rekenen op consistente
              kwaliteit bij elk project.
            </p>
          </div>
          <div className="over-verhaal__stats">
            <div className="verhaal-stat">
              <span className="verhaal-stat__number">200+</span>
              <span className="verhaal-stat__label">Afgeronde projecten</span>
            </div>
            <div className="verhaal-stat">
              <span className="verhaal-stat__number">10+</span>
              <span className="verhaal-stat__label">Jaar ervaring</span>
            </div>
            <div className="verhaal-stat">
              <span className="verhaal-stat__number">6</span>
              <span className="verhaal-stat__label">Diensten</span>
            </div>
            <div className="verhaal-stat">
              <span className="verhaal-stat__number">100%</span>
              <span className="verhaal-stat__label">Klanttevredenheid</span>
            </div>
          </div>
        </div>
      </section>

      {/* WAARDEN */}
      <section className="section over-waarden">
        <div className="container">
          <div className="over-waarden__header">
            <span className="section-label">Onze Waarden</span>
            <h2 className="section-title">Waar Wij Voor Staan</h2>
          </div>
          <div className="waarden-grid">
            {waarden.map((w, i) => (
              <div key={i} className="waarde-card">
                <div className="waarde-card__icon">{w.icon}</div>
                <h3>{w.titel}</h3>
                <p>{w.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section over-team">
        <div className="container">
          <div className="over-team__header">
            <span className="section-label">Ons Team</span>
            <h2 className="section-title">Wie Zijn Wij?</h2>
            <p className="section-subtitle">Een hecht team van ervaren vaklieden die samen staan voor elk project.</p>
          </div>
          <div className="team-grid">
            {team.map((lid, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar">
                  <span>{lid.initialen}</span>
                </div>
                <h3>{lid.naam}</h3>
                <span className="team-card__functie">{lid.functie}</span>
                <p>{lid.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="section over-werkgebied">
        <div className="container over-werkgebied__inner">
          <div>
            <span className="section-label">Werkgebied</span>
            <h2 className="section-title">Actief in Den Haag & Omgeving</h2>
            <p>
              Wij zijn voornamelijk actief in Den Haag en de directe omgeving. Steden en dorpen
              waar wij regelmatig werkzaam zijn:
            </p>
            <div className="werkgebied-steden">
              {['Den Haag', 'Rijswijk', 'Delft', 'Zoetermeer', 'Voorburg', 'Leidschendam', 'Wateringen', 'Pijnacker', 'Nootdorp', 'Scheveningen', 'Wassenaar', 'Monster'].map(stad => (
                <span key={stad} className="werkgebied-stad">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {stad}
                </span>
              ))}
            </div>
            <p className="werkgebied-note">Woont u buiten dit gebied? Neem dan contact op — in overleg is meer mogelijk.</p>
          </div>
          <div className="over-cta-card">
            <h3>Interesse in een samenwerking?</h3>
            <p>Vraag een gratis en vrijblijvende offerte aan. Wij nemen binnen 24 uur contact met u op.</p>
            <Link to="/contact" className="btn btn-primary">Contact Opnemen</Link>
            <a href="tel:+31627526007" className="btn btn-outline over-cta-card__tel">
              +31 6 27 52 60 07
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
