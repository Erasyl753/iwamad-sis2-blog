import { Link } from 'react-router'
import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export default function Home() {
  const latest = posts.slice(-3).reverse()

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>
            I&rsquo;m learning React in public, one small app at a time.
          </h1>
          <p>
            Notes on routing, state, types and tests from a first-year project. Short, honest, and written
            right after the bug was fixed.
          </p>
          <div className="hero-actions">
            <Link to="/posts" className="btn btn-lime">
              Read the posts
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Say hello
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sticker">
            <strong>{posts.length}</strong>
            <span>posts and counting</span>
          </div>
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <pre className="code-chip">{`const [liked, setLiked]\n  = useState(false)`}</pre>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Latest from the notebook</h2>
          <Link to="/posts" className="text-link">
            See all posts
          </Link>
        </div>
        <div className="grid">
          {latest.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>
    </>
  )
}
