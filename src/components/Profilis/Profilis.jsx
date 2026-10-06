import './Profilis.css'

export default function Profilis() {
  return (
    <main className="profilis" id="profilis">
      <h1>Profilis</h1>
      <p>Esu dailininkė. Tapau paveikslus ir rašau ikonas.</p>
      <div className="profilis__actions">
        <a className="button button--purple" href="#paveikslai">
          Paveikslai
        </a>
        <a className="button button--purple" href="#ikonos">
          Ikonos
        </a>
      </div>
      <a className="profilis__link" href="#kontaktai">
        Kontaktai
      </a>
    </main>
  )
}
