import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="split">
      <div className="page-title">
        <h1>Say hello</h1>
        <p>Found a bug in my explanation, or want to share a better way? Write to me.</p>
      </div>
      {sent ? (
        <div className="panel">
          <h2>Message received</h2>
          <p>Thanks for writing. I will answer within a few days.</p>
          <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
            Write another message
          </button>
        </div>
      ) : (
        <form className="panel" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" required placeholder="Aigerim" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required placeholder="What would you like to say?" />
          </label>
          <button type="submit" className="btn btn-solid">
            Send message
          </button>
        </form>
      )}
    </section>
  )
}
