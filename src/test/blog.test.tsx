import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import App from '../App'
import LikeButton from '../components/LikeButton'
import { AuthProvider } from '../context/AuthContext'
import { posts } from '../data/posts'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>,
  )
}

describe('Loop & Render blog', () => {
  it('increases the like count when the like button is clicked', async () => {
    render(<LikeButton initialLikes={5} />)
    expect(screen.getByTestId('like-count')).toHaveTextContent('5')
    await userEvent.click(screen.getByRole('button', { name: /like this post/i }))
    expect(screen.getByTestId('like-count')).toHaveTextContent('6')
  })

  it('shows one card per post on the posts page', () => {
    renderAt('/posts')
    expect(screen.getAllByRole('article')).toHaveLength(posts.length)
  })

  it('shows the sign-in page when a signed-out reader opens the protected page', () => {
    renderAt('/dashboard')
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('shows the custom 404 page for an unknown address', () => {
    renderAt('/banana')
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
  })
})
