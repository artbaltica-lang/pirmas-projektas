import jsLogo from '../../assets/javascript.svg'
import viteLogo from '../../assets/vite.svg'
import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <section id="dokumentacija">
        <h2>Dokumentacija</h2>
        <p>Jūsų klausimai, atsakymai</p>
        <ul>
          <li>
            <a className="button button--ghost" href="https://vite.dev/" target="_blank" rel="noreferrer">
              <img src={viteLogo} alt="" />
              Vite dokumentacija
            </a>
          </li>
          <li>
            <a className="button button--ghost" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
              <img src={jsLogo} alt="" />
              Sužinoti daugiau
            </a>
          </li>
        </ul>
      </section>
      <section id="bendruomene">
        <h2>Susisiekite su mumis</h2>
        <p>Prisijunkite prie Vite bendruomenės</p>
        <ul>
          <li>
            <a className="button button--ghost" href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="button button--ghost" href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
              Discord
            </a>
          </li>
        </ul>
      </section>
      <p className="site-footer__year">© {new Date().getFullYear()}</p>
    </footer>
  )
}
