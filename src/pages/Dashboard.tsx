import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { posts } from '../data/posts'

export default function Dashboard() {
  const { name, signOut } = useAuth()
  const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0)

  return (
    <section className="section">
      <div className="page-title">
        <h1>Welcome back, {name}</h1>
        <p>This page is protected: you only see it because you are signed in.</p>
      </div>
      <div className="stats">
        <div className="stat">
          <strong>{posts.length}</strong>
          <span>posts published</span>
        </div>
        <div className="stat">
          <strong>{totalLikes}</strong>
          <span>likes across the blog</span>
        </div>
        <div className="stat">
          <strong>{posts.reduce((s, p) => s + p.comments.length, 0)}</strong>
          <span>reader comments</span>
        </div>
      </div>
      <div className="hero-actions">
        <Link to="/posts" className="btn btn-solid">
          Continue reading
        </Link>
        <button type="button" className="btn btn-ghost" onClick={signOut}>
          Sign out
        </button>
      </div>
    </section>
  )
}
