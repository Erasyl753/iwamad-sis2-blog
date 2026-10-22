import { useState } from 'react'

type LikeButtonProps = { initialLikes: number }

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)
  const count = initialLikes + (liked ? 1 : 0)

  return (
    <button
      type="button"
      className={liked ? 'like is-liked' : 'like'}
      aria-pressed={liked}
      aria-label={liked ? 'Unlike this post' : 'Like this post'}
      onClick={() => setLiked((v) => !v)}
    >
      <span className="like-heart" aria-hidden="true">
        {liked ? '♥' : '♡'}
      </span>
      <span data-testid="like-count">{count}</span>
    </button>
  )
}
