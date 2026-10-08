import Header from './components/Header/Header.jsx'
import GalleryDoors from './components/GalleryDoors/GalleryDoors.jsx'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import JoinForm from './components/JoinForm/JoinForm.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Uzduotys from './components/Uzduotys/Uzduotys.jsx'
import Kontaktai from './components/Kontaktai/Kontaktai.jsx'
import SiteFooter from './components/SiteFooter/SiteFooter.jsx'
import { useEffect, useState } from 'react'
import './App.css'

function pageFromHash() {
  return window.location.hash === '#kontaktai' ? 'kontaktai' : 'home'
}

export default function App() {
  const [progress, setProgress] = useState(0)
  const [page, setPage] = useState(pageFromHash)

  useEffect(() => {
    function syncPage() {
      setPage(pageFromHash())
    }

    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  useEffect(() => {
    if (page !== 'home') {
      window.scrollTo(0, 0)
      return
    }

    const id = window.location.hash.slice(1)
    if (!id) return

    document.getElementById(id)?.scrollIntoView()
  }, [page])

  return (
    <div className="app">
      <Header home={page === 'home'} />
      {page === 'kontaktai' ? (
        <Kontaktai />
      ) : (
        <>
          <GalleryDoors />
          <ProgressBar value={progress} />
          <main className="app__main" id="prisijungimas">
            <JoinForm onProgressChange={setProgress} />
          </main>
          <Gallery />
          <Uzduotys />
          <SiteFooter />
        </>
      )}
    </div>
  )
}
