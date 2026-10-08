import { useState } from 'react'
import './JoinForm.css'

export default function JoinForm({ onProgressChange }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function updateProgress(nextName, nextPassword) {
    let next = 0
    if (nextName.trim()) next += 50
    if (nextPassword.length >= 4) next += 50
    onProgressChange?.(next)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim() || !password) {
      setError('Įveskite vardą ir slaptažodį.')
      setSuccess('')
      return
    }

    setError('')
    setSuccess(`Sveiki, ${name.trim()}! Jūs sėkmingai prisijungėte.`)
    onProgressChange?.(100)
  }

  function disconnect() {
    setName('')
    setPassword('')
    setError('')
    setSuccess('')
    onProgressChange?.(0)
  }

  if (success) {
    return (
      <div className="join-form join-form--done">
        <p className="join-form__success">{success}</p>
        <button className="button button--purple" type="button" onClick={disconnect}>
          Atsijungti
        </button>
      </div>
    )
  }

  return (
    <form className="join-form" onSubmit={handleSubmit} noValidate>
      <h2>Prisijunkite</h2>
      <p className="join-form__subtitle">
        Užpildykite formą, kad prisijungtumėte prie svetainės
      </p>

      <label htmlFor="name">Vardas</label>
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
        placeholder="Įveskite savo vardą"
        value={name}
        onChange={(event) => {
          const value = event.target.value
          setName(value)
          updateProgress(value, password)
        }}
      />

      <label htmlFor="password">Slaptažodis</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        minLength={4}
        placeholder="Įveskite slaptažodį"
        value={password}
        onChange={(event) => {
          const value = event.target.value
          setPassword(value)
          updateProgress(name, value)
        }}
      />

      {error ? <p className="join-form__error">{error}</p> : null}

      <button className="button button--purple" type="submit">
        Prisijungti
      </button>
    </form>
  )
}
