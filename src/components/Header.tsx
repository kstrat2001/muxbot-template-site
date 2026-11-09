import { nav, site } from '../site.ts'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <a className="brand" href="/">
          {site.name}
        </a>
        <nav aria-label="Main">
          {nav.map((link) => (
            <a key={link.path} href={link.path}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
