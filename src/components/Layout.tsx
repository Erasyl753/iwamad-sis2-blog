import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/posts', label: 'Posts', end: false },
  { to: '/contact', label: 'Contact', end: false },
  { to: '/dashboard', label: 'Reader desk', end: false },
]

export default function Layout() {
  const { signedIn, signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <div className="shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-dot" aria-hidden="true" />
          Loop &amp; Render
        </Link>
        <nav aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav-link">
              {l.label}
            </NavLink>
          ))}
        </nav>
        {signedIn ? (
          <button type="button" className="btn btn-ghost" onClick={handleSignOut}>
            Sign out
          </button>
        ) : (
          <Link to="/signin" className="btn btn-solid">
            Sign in
          </Link>
        )}
      </header>

      <main className="page">
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer-brand">Loop &amp; Render</p>
        <p>A student blog about learning React, TypeScript and testing. SIS 2, 2026.</p>
      </footer>
    </div>
  )
}
