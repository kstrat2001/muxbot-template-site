const features = [
  {
    title: 'Fast',
    text: 'Built with Vite and React, so changes show up in the preview right away.',
  },
  {
    title: 'Works on phones',
    text: 'The layout adapts from a small phone to a wide desktop screen.',
  },
  {
    title: 'Yours to shape',
    text: 'Colors, fonts and words all live in a few plain files your bot can change.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title">What you get</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <article key={f.title} className="feature">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
