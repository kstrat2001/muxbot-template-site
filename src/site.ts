// The site's name, contact address and menu. The header, footer and contact
// section read these, so a change here shows up everywhere.
export const site = {
  name: 'My Site',
  tagline: 'Made with Mux Bot',
  email: 'hello@example.com',
}

export type PageLink = { path: string; label: string }

// The menu, in order. '/#about' jumps to a section of the home page; a new
// page is a plain path like '/about' (add it here and in src/App.tsx).
export const nav: PageLink[] = [
  { path: '/#about', label: 'About' },
  { path: '/#services', label: 'Services' },
  { path: '/#contact', label: 'Contact' },
]
