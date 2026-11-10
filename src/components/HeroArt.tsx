// The picture beside the headline: simple shapes drawn in the site's own
// colors (see .hero-art in src/styles.css), so it follows the look. Replace
// it with a photo or drawing of your own when you have one.
export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className="art-ground" width="400" height="480" />
      <circle className="art-accent" cx="262" cy="176" r="104" />
      <path className="art-ink" d="M48 480V318a86 86 0 0 1 172 0v162z" />
      <path className="art-soft" d="M220 480a90 90 0 0 1 180 0z" />
      <circle className="art-line" cx="262" cy="176" r="136" />
      <path className="art-line" d="M0 404h400" />
    </svg>
  )
}
