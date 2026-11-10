import { site } from '../site.ts'

// How to reach you. The email address comes from src/site.ts.
const details = [
  { label: 'Visit', lines: ['123 Main Street', 'Your Town'] },
  { label: 'Hours', lines: ['Monday to Friday', '9 am to 5 pm'] },
]

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Say hello</h2>
          <p className="lede">
            Questions, ideas or just a quick note: write any time and expect a reply within
            a day or two.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <dl className="contact-details">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              {detail.lines.map((line) => (
                <dd key={line}>{line}</dd>
              ))}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
