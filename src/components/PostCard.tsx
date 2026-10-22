import { Link } from 'react-router'
import type { Post } from '../data/posts'
import LikeButton from './LikeButton'

type PostCardProps = { post: Post }

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <Link to={`/posts/${post.id}`} className="card-cover" style={{ background: post.color }} aria-hidden="true" tabIndex={-1}>
        <span className="cover-shape cover-a" />
        <span className="cover-shape cover-b" />
        <span className="cover-tag">{post.tag}</span>
      </Link>
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="card-excerpt">{post.excerpt}</p>
        <div className="card-foot">
          <span className="meta">
            {post.date}, {post.readTime} min read
          </span>
          <LikeButton initialLikes={post.likes} />
        </div>
      </div>
    </article>
  )
}
