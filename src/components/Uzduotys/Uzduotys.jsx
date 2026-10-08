import { useEffect, useState } from 'react'
import './Uzduotys.css'

const API = 'https://testapi.io/api/artbaltica-lang/resource/tasklistnata'

export default function Uzduotys() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')
  const [status, setStatus] = useState('loading')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [draft, setDraft] = useState('')

  useEffect(() => {
    let ignore = false

    async function load() {
      try {
        const response = await fetch(API)
        if (!response.ok) throw new Error('load')
        const body = await response.json()
        if (ignore) return
        setTasks(Array.isArray(body.data) ? body.data : [])
        setStatus('ready')
      } catch {
        if (ignore) return
        setStatus('error')
        setMessage('Nepavyko prisijungti prie sąrašo.')
      }
    }

    load()
    return () => {
      ignore = true
    }
  }, [])

  async function addTask(event) {
    event.preventDefault()
    const title = text.trim()
    if (!title) {
      setMessage('Įveskite užduotį.')
      return
    }

    setBusy(true)
    setMessage('')
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ tasklistnata1: title }),
      })
      const body = await response.json()
      if (!response.ok) throw new Error('save')
      setTasks((current) => [...current, body])
      setText('')
    } catch {
      setMessage('Nepavyko įrašyti užduoties.')
    } finally {
      setBusy(false)
    }
  }

  function startEdit(task) {
    setEditingId(task.id)
    setDraft(task.tasklistnata1 ?? '')
    setMessage('')
  }

  function cancelEdit() {
    setEditingId(null)
    setDraft('')
    setMessage('')
  }

  async function saveEdit(event) {
    event.preventDefault()
    const title = draft.trim()
    if (!title) {
      setMessage('Įveskite užduotį.')
      return
    }

    setBusy(true)
    setMessage('')
    try {
      const response = await fetch(`${API}/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ tasklistnata1: title }),
      })
      const body = await response.json()
      if (!response.ok) throw new Error('update')
      setTasks((current) => current.map((task) => (task.id === body.id ? body : task)))
      setEditingId(null)
      setDraft('')
    } catch {
      setMessage('Nepavyko atnaujinti užduoties.')
    } finally {
      setBusy(false)
    }
  }

  async function removeTask(id) {
    setBusy(true)
    setMessage('')
    try {
      const response = await fetch(`${API}/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('delete')
      setTasks((current) => current.filter((task) => task.id !== id))
    } catch {
      setMessage('Nepavyko pašalinti užduoties.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="uzduotys" id="uzduotys">
      <h2>Užduotys</h2>
      <p className="uzduotys__note">Užduotys saugomos serveryje.</p>
      <form className="uzduotys__form" onSubmit={addTask}>
        <label className="uzduotys__label" htmlFor="nauja-uzduotis">
          Nauja užduotis
        </label>
        <div className="uzduotys__row">
          <input
            id="nauja-uzduotis"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Įrašykite užduotį"
          />
          <button className="uzduotys__button" type="submit" disabled={busy}>
            Pridėti
          </button>
        </div>
      </form>
      {message ? <p className="uzduotys__message">{message}</p> : null}
      {status === 'loading' ? <p className="uzduotys__note">Kraunama...</p> : null}
      {status === 'ready' && tasks.length === 0 ? (
        <p className="uzduotys__note">Užduočių dar nėra.</p>
      ) : null}
      {status === 'ready' && tasks.length > 0 ? (
        <ul className="uzduotys__list">
          {tasks.map((task) => (
            <li className="uzduotys__item" key={task.id}>
              {editingId === task.id ? (
                <form className="uzduotys__edit-form" onSubmit={saveEdit}>
                  <input
                    className="uzduotys__edit"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    aria-label="Užduoties tekstas"
                  />
                  <div className="uzduotys__actions">
                    <button className="uzduotys__action" type="submit" disabled={busy}>
                      Išsaugoti
                    </button>
                    <button className="uzduotys__action" type="button" onClick={cancelEdit} disabled={busy}>
                      Atšaukti
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <span>{task.tasklistnata1}</span>
                  <div className="uzduotys__actions">
                    <button
                      className="uzduotys__action"
                      type="button"
                      onClick={() => startEdit(task)}
                      disabled={busy}
                    >
                      Atnaujinti
                    </button>
                    <button
                      className="uzduotys__action"
                      type="button"
                      onClick={() => removeTask(task.id)}
                      disabled={busy}
                    >
                      Šalinti
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
