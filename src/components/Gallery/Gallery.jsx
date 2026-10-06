import './Gallery.css'

export default function Gallery() {
  return (
    <div className="gallery">
      <section className="gallery__room" id="paveikslai">
        <h2>Paveikslai</h2>
        <p>Čia bus rodomi paveikslai.</p>
      </section>
      <section className="gallery__room" id="ikonos">
        <h2>Ikonos</h2>
        <p>Čia bus rodomos ikonos.</p>
      </section>
    </div>
  )
}
