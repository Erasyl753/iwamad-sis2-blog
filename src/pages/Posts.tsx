import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export default function Posts() {
  return (
    <section className="section">
      <div className="page-title">
        <h1>All posts</h1>
        <p>{posts.length} short reads, newest first.</p>
      </div>
      <div className="grid">
        {[...posts].reverse().map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  )
}
