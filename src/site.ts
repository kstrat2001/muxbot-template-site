// The site's name and its pages, in menu order. Add a page here and in
// src/pages/ (see PLAYBOOK.md).
export const site = {
  name: 'My Site',
  tagline: 'Made with Mux Bot',
}

export type PageLink = { path: string; label: string }

export const nav: PageLink[] = [{ path: '/', label: 'Home' }]
