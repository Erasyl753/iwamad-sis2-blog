import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function SignIn() {
  const { signedIn, signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [name, setName] = useState('')
  const from = (location.state as { from?: string } | null)?.from ?? '/dashboard'

  if (signedIn) return <Navigate to="/dashboard" replace />

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signIn(name)
    navigate(from, { replace: true })
  }

  return (
    <section className="split">
      <div className="page-title">
        <h1>Sign in</h1>
        <p>The reader desk is for signed-in readers only. Type any name to continue. There is no password in this demo.</p>
      </div>
      <form className="panel" onSubmit={handleSubmit}>
        <label>
          Your name
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Aigerim" />
        </label>
        <button type="submit" className="btn btn-solid">
          Sign in
        </button>
      </form>
    </section>
  )
}
