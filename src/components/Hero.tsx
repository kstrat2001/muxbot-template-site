export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="eyebrow">Welcome</p>
        <h1 id="hero-title">A home for your next idea</h1>
        <p className="lede">
          This is your new website. Tell your bot what it should say, how it should look,
          and what pages it needs, and watch it change here.
        </p>
        <div className="actions">
          <a className="button primary" href="#features">
            See what's inside
          </a>
          <a className="button" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
