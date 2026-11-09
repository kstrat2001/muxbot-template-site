import type { ComponentType } from 'react'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/home.tsx'
import NotFound from './pages/not-found.tsx'

// Each path's page. A new page is a file in src/pages/ plus a line here and
// in `nav` (src/site.ts).
const pages: Record<string, ComponentType> = {
  '/': Home,
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const Page = pages[path] ?? NotFound
  return (
    <>
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  )
}
