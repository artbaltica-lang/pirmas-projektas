import banner from '../../assets/artbaltica-lt.jpg'
import './Header.css'

export default function Header({ home = true }) {
  return (
    <>
      <nav className="nav" aria-label="Pagrindinė navigacija">
        <a href="#pradzia">Pradžia</a>
        <a href="#paveikslai">Paveikslai</a>
        <a href="#ikonos">Ikonos</a>
        <a href="#uzduotys">Užduotys</a>
        <a href="#prisijungimas">Prisijungimas</a>
        <a href="#dokumentacija">Dokumentacija</a>
        <a href="#kontaktai" aria-current={home ? undefined : 'page'}>
          Kontaktai
        </a>
      </nav>
      {home ? (
        <header className="header" id="pradzia">
          <img className="header__banner" src={banner} alt="ArtBaltica.com" />
          <h1>Pirmas projektas</h1>
          <p className="header__slogan">Čia jūsų visada laukiame!</p>
        </header>
      ) : null}
    </>
  )
}
