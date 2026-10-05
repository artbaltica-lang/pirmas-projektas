import Header from './components/Header/Header.jsx'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import JoinForm from './components/JoinForm/JoinForm.jsx'
import SiteFooter from './components/SiteFooter/SiteFooter.jsx'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [progress, setProgress] = useState(0)

  return (
    <div className="app">
      <Header />
      <ProgressBar value={progress} />
      <main className="app__main" id="prisijungimas">
        <JoinForm onProgressChange={setProgress} />
      </main>
      <SiteFooter />
    </div>
  )
}
