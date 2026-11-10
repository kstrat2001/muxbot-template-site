import HeroArt from './HeroArt.tsx'

// The top of the home page: headline, intro, two links and a picture.
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Welcome</p>
          <h1 id="hero-title">
            A good place to <em>begin</em>
          </h1>
          <p className="lede">
            This is your new website. Tell your bot what it is for and how it should feel,
            and watch it take shape here.
          </p>
          <div className="actions">
            <a className="button" href="#contact">
              Get in touch
            </a>
            <a className="text-link" href="#about">
              Learn more
            </a>
          </div>
        </div>
        <HeroArt />
      </div>
    </section>
  )
}
