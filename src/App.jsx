import Header from './components/Header/Header.jsx'
import GalleryDoors from './components/GalleryDoors/GalleryDoors.jsx'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import JoinForm from './components/JoinForm/JoinForm.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import SiteFooter from './components/SiteFooter/SiteFooter.jsx'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [progress, setProgress] = useState(0)

  return (
    <div className="app">
      <Header />
      <GalleryDoors />
      <ProgressBar value={progress} />
      <main className="app__main" id="prisijungimas">
        <JoinForm onProgressChange={setProgress} />
      </main>
      <Gallery />
      <SiteFooter />
    </div>
  )
}
