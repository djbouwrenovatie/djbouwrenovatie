import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    dienst: '',
    stad: '',
    bericht: '',
  })
  const [verstuurd, setVerstuurd] = useState(false)
  const [laden, setLaden] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLaden(true)
    // Simuleer verzending (voor een echte form: gebruik Netlify Forms of een backend)
    await new Promise(r => setTimeout(r, 1200))
    setVerstuurd(true)
    setLaden(false)
  }

  return (
    <>
      <div style={{ paddingTop: '4.5rem' }} />
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>Neem contact op voor een gratis en vrijblijvende offerte. Wij reageren binnen 24 uur.</p>
        </div>
      </section>

      <section className="section contact-page">
        <div className="container contact-page__inner">
          {/* INFO */}
          <div className="contact-info">
            <h2>Directe Contactgegevens</h2>
            <p>Voorkeur voor direct contact? Bel of app ons gerust.</p>

            <div className="contact-items">
              <a href="tel:+31627526007" className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <span className="contact-item__label">Telefoon</span>
                  <span className="contact-item__value">+31 6 27 52 60 07</span>
                </div>
              </a>

              <a href="mailto:d.jbouwrenovatie@gmail.com" className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span className="contact-item__label">E-mail</span>
                  <span className="contact-item__value">d.jbouwrenovatie@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/31627526007?text=Hallo%2C%20ik%20heb%20interesse%20in%20uw%20diensten."
                className="contact-item contact-item--wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.736 5.46 2.024 7.753L0 32l8.486-2.025A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.08 22.453c-.334.941-1.963 1.8-2.693 1.915-.73.115-1.651.162-2.662-.166-.615-.2-1.403-.465-2.406-.912-4.221-1.823-6.979-6.087-7.193-6.369-.213-.281-1.738-2.311-1.738-4.408 0-2.097 1.1-3.127 1.49-3.552.388-.425.848-.531 1.13-.531l.81.016c.26.01.61-.099.955.729.345.828 1.172 2.863 1.276 3.07.104.208.173.452.035.729-.139.277-.208.449-.416.693-.208.243-.438.543-.625.729-.208.208-.425.433-.183.848.243.416 1.08 1.79 2.32 2.9 1.596 1.42 2.94 1.86 3.356 2.068.416.208.66.174.908-.104.248-.277 1.06-1.236 1.343-1.66.283-.425.566-.354.954-.213.388.14 2.464 1.163 2.888 1.374.425.208.708.313.812.486.104.173.104 1.01-.23 1.951z"/></svg>
                </div>
                <div>
                  <span className="contact-item__label">WhatsApp</span>
                  <span className="contact-item__value">Stuur een bericht</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span className="contact-item__label">Werkgebied</span>
                  <span className="contact-item__value">Den Haag & omgeving</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <span className="contact-item__label">Openingstijden</span>
                  <span className="contact-item__value">Ma–Vr: 07:00–18:00 | Za: 08:00–14:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrap">
            <h2>Offerte Aanvragen</h2>
            <p>Vul het formulier in en wij nemen binnen 24 uur contact met u op.</p>

            {verstuurd ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3>Uw aanvraag is verstuurd!</h3>
                <p>Bedankt voor uw interesse. Wij nemen zo snel mogelijk contact met u op, uiterlijk binnen 24 uur.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="naam">Naam *</label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      placeholder="Uw volledige naam"
                      value={form.naam}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefoon">Telefoonnummer *</label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      required
                      placeholder="+31 6 12 34 56 78"
                      value={form.telefoon}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mailadres *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="uw@emailadres.nl"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="dienst">Type Dienst</label>
                    <select id="dienst" name="dienst" value={form.dienst} onChange={handleChange}>
                      <option value="">Selecteer een dienst</option>
                      <option value="toilet">Toiletrenovatie</option>
                      <option value="badkamer">Badkamerrenovatie</option>
                      <option value="keuken">Keukenrenovatie</option>
                      <option value="schilderwerk">Schilderwerk</option>
                      <option value="vloeren">Vloeren</option>
                      <option value="dakwerk">Dakwerk</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="stad">Stad / Gemeente</label>
                    <input
                      type="text"
                      id="stad"
                      name="stad"
                      placeholder="Bijv. Den Haag"
                      value={form.stad}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bericht">Omschrijving Project</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows="5"
                    placeholder="Beschrijf uw project zo uitgebreid mogelijk..."
                    value={form.bericht}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={laden}
                >
                  {laden ? 'Versturen...' : 'Offerte Aanvragen'}
                </button>

                <p className="contact-form__note">
                  * Verplichte velden. Uw gegevens worden vertrouwelijk behandeld.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
