export type Comment = { author: string; text: string }

export type Post = {
  id: number
  title: string
  excerpt: string
  body: string[]
  tag: string
  date: string
  readTime: number
  likes: number
  color: string
  comments: Comment[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Why my app finally feels like one page',
    excerpt: 'A layout route keeps the header and footer in place while only the middle of the page changes.',
    body: [
      'Before React Router, every page of my practice site was a separate HTML file. Clicking a link meant a full reload and a flash of white.',
      'A layout route changed that. The header and footer are rendered once, and an Outlet marks the spot where the current page appears.',
      'NavLink was the nice surprise: it knows which link matches the address bar and marks it for me, so I never write an "active" class by hand.',
    ],
    tag: 'Routing',
    date: '12 Oct 2026',
    readTime: 3,
    likes: 24,
    color: '#5b3df5',
    comments: [
      { author: 'Aigerim', text: 'The Outlet idea finally clicked for me here.' },
      { author: 'Dias', text: 'Did you try nested layouts too?' },
    ],
  },
  {
    id: 2,
    title: 'useState in one picture',
    excerpt: 'State is a value React remembers between renders. Change it, and the screen follows.',
    body: [
      'A normal variable forgets itself every time a component runs again. State does not: React keeps it for you.',
      'When you call the setter, React runs the component again with the new value and updates only what changed on the screen.',
      'My like button is the smallest example I know: one boolean, one click handler, one number that reacts.',
    ],
    tag: 'State',
    date: '14 Oct 2026',
    readTime: 4,
    likes: 41,
    color: '#ff6f91',
    comments: [{ author: 'Madina', text: 'Boolean plus a click handler. That is all it takes!' }],
  },
  {
    id: 3,
    title: 'Typing props so mistakes show up early',
    excerpt: 'With TypeScript, a wrong prop is a red underline in the editor instead of a bug in the browser.',
    body: [
      'I used to find out about typos when the page looked broken. Now the editor tells me before I save the file.',
      'Each component gets a small type that lists its props. If I forget one or pass a string instead of a number, TypeScript stops the build.',
      'The post data has its own Post type, so every card and every page agrees on what a post looks like.',
    ],
    tag: 'TypeScript',
    date: '16 Oct 2026',
    readTime: 3,
    likes: 18,
    color: '#1fa37a',
    comments: [
      { author: 'Nurlan', text: 'Never reaching for any was the hardest rule for me.' },
      { author: 'Aigerim', text: 'A shared Post type is a great idea.' },
    ],
  },
  {
    id: 4,
    title: 'Three tests that let me sleep',
    excerpt: 'A click, a list and a locked page: small tests with Vitest and Testing Library that cover the big promises.',
    body: [
      'Tests felt like homework until I wrote one that failed for a real reason. It caught a typo in my router before I did.',
      'I test what a reader sees: the like count grows after a click, the posts page shows one card per post, and a locked page asks for sign-in.',
      'MemoryRouter lets a test start at any address, so I can check the protected page without clicking through the app.',
    ],
    tag: 'Testing',
    date: '18 Oct 2026',
    readTime: 5,
    likes: 33,
    color: '#f2a516',
    comments: [{ author: 'Dias', text: 'MemoryRouter saved me so much time.' }],
  },
  {
    id: 5,
    title: 'Locking a page without a server',
    excerpt: 'Route protection is a layout route that checks one boolean and either shows the page or sends the reader to sign in.',
    body: [
      'Real sign-in needs a server, and that comes later. For now, "signed in" is one boolean kept in React Context.',
      'The protected route reads that boolean. If it is true, it renders its Outlet. If not, it sends the reader to the sign-in page.',
      'Hiding a link is not protection. The real test is typing the address by hand while signed out.',
    ],
    tag: 'Routing',
    date: '20 Oct 2026',
    readTime: 4,
    likes: 29,
    color: '#2b7fff',
    comments: [
      { author: 'Madina', text: 'Typing the URL by hand is a great check.' },
      { author: 'Nurlan', text: 'Context made this very tidy.' },
    ],
  },
  {
    id: 6,
    title: 'Shipping to GitHub Pages from /docs',
    excerpt: 'Set the base path, build into docs, push, and let Pages serve the result. Refreshing a post needs one extra trick.',
    body: [
      'The app lives at a sub-path, so Vite needs a base and the router needs a basename. Both point to the repository name.',
      'The build writes into the docs folder, and Pages serves that folder from the main branch.',
      'Refreshing /posts/3 would normally give GitHub a 404. A copy of index.html named 404.html hands the address back to the router.',
    ],
    tag: 'Deploy',
    date: '21 Oct 2026',
    readTime: 4,
    likes: 15,
    color: '#8a5cf6',
    comments: [{ author: 'Aigerim', text: 'The 404.html trick is clever.' }],
  },
]
