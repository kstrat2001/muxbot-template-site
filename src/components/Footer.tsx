import { site } from '../site.ts'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  )
}
