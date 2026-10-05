import './ProgressBar.css'

const MARKS = [0, 25, 50, 75, 100]

export default function ProgressBar({ value = 0 }) {
  const percent = Math.min(100, Math.max(0, Math.round(value)))

  return (
    <section className="progress" aria-label="Progreso juosta">
      <div className="progress__top">
        <h2>Progresas</h2>
        <span className="progress__value">{percent}%</span>
      </div>

      <div
        className="progress__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div className="progress__fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="progress__scale">
        {MARKS.map((mark) => (
          <span
            key={mark}
            className={percent >= mark ? 'is-active' : ''}
          >
            {mark}%
          </span>
        ))}
      </div>
    </section>
  )
}
