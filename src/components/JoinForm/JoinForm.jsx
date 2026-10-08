import { useState } from 'react'
import './JoinForm.css'

const AUTH_API = 'https://testapi.io/api/artbaltica-lang/resource/auth'

export default function JoinForm({ onProgressChange }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [busy, setBusy] = useState(false)

  function updateProgress(nextName, nextPassword) {
    let next = 0
    if (nextName.trim()) next += 50
    if (nextPassword.length >= 4) next += 50
    onProgressChange?.(next)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const trimmedName = name.trim()

    if (!trimmedName || !password) {
      setError('Įveskite vardą ir slaptažodį.')
      setSuccess('')
      return
    }

    setBusy(true)
    setError('')
    try {
      const response = await fetch(AUTH_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          auth1: JSON.stringify({ name: trimmedName, password }),
        }),
      })
      if (!response.ok) throw new Error('save')
      setSuccess(`Sveiki, ${trimmedName}! Jūs sėkmingai prisijungėte.`)
      onProgressChange?.(100)
    } catch {
      setError('Nepavyko išsaugoti duomenų.')
    } finally {
      setBusy(false)
    }
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

      <button className="button button--purple" type="submit" disabled={busy}>
        Prisijungti
      </button>
    </form>
  )
}
