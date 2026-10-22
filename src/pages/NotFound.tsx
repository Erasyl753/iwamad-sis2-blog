import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="notice">
      <p className="big-404" aria-hidden="true">
        404
      </p>
      <h1>Page not found</h1>
      <p>That address does not lead anywhere on this blog. Check the link, or head back to a page that exists.</p>
      <Link to="/" className="btn btn-solid">
        Go to the home page
      </Link>
    </section>
  )
}
