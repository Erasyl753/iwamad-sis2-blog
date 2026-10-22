import { useState } from 'react'
import { Link, useParams } from 'react-router'
import LikeButton from '../components/LikeButton'
import { posts } from '../data/posts'

export default function PostPage() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))
  const [showComments, setShowComments] = useState(false)

  if (!post) {
    return (
      <section className="notice">
        <h1>No post with the id &ldquo;{id}&rdquo;</h1>
        <p>This post does not exist or was removed. Pick one from the list instead.</p>
        <Link to="/posts" className="btn btn-solid">
          Back to all posts
        </Link>
      </section>
    )
  }

  return (
    <article className="article">
      <div className="article-head" style={{ background: post.color }}>
        <span className="cover-tag">{post.tag}</span>
        <h1>{post.title}</h1>
        <p className="meta-light">
          {post.date}, {post.readTime} min read
        </p>
      </div>

      <div className="article-body">
        <p className="lead">{post.excerpt}</p>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <div className="article-actions">
          <LikeButton initialLikes={post.likes} />
          <button type="button" className="btn btn-ghost" aria-expanded={showComments} onClick={() => setShowComments((v) => !v)}>
            {showComments ? 'Hide comments' : `Show comments (${post.comments.length})`}
          </button>
        </div>

        {showComments && (
          <ul className="comments">
            {post.comments.map((c, i) => (
              <li key={i}>
                <strong>{c.author}</strong>
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
        )}

        <Link to="/posts" className="text-link">
          Back to all posts
        </Link>
      </div>
    </article>
  )
}
