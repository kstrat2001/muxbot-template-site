import { nav, site } from '../site.ts'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a className="brand" href="/">
          {site.name}
        </a>
        <nav aria-label="Footer">
          {nav.map((link) => (
            <a key={link.path} href={link.path}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className="footer-note">
          © {new Date().getFullYear()} {site.name}. {site.tagline}.
        </p>
      </div>
    </footer>
  )
}
