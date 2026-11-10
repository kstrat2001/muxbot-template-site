import type { ReactNode } from 'react'
import { theme } from '../site.ts'

// The picture in the hero. Each design has its own, drawn with simple shapes
// in the site's colors (the art-* classes in src/styles.css and src/themes/), so it follows
// the look. Replace one with a photo or drawing of your own when you have it.
const art: Record<string, ReactNode> = {
  // A sun, an arch and a horizon.
  editorial: (
    <svg className="hero-art" viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className="art-ground" width="400" height="480" />
      <circle className="art-accent" cx="262" cy="176" r="104" />
      <path className="art-ink" d="M48 480V318a86 86 0 0 1 172 0v162z" />
      <path className="art-soft" d="M220 480a90 90 0 0 1 180 0z" />
      <circle className="art-line" cx="262" cy="176" r="136" />
      <path className="art-line" d="M0 404h400" />
    </svg>
  ),

  // A wide strip of tiles: circles, quarters and squares.
  modern: (
    <svg className="hero-art" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className="art-ground" width="1200" height="400" />
      <path className="art-accent" d="M0 0a200 200 0 0 1 200 200H0z" />
      <circle className="art-ink" cx="300" cy="100" r="100" />
      <path className="art-soft" d="M600 200a100 100 0 0 1 200 0z" />
      <rect className="art-accent" x="800" width="200" height="200" />
      <circle className="art-ground" cx="900" cy="100" r="50" />
      <path className="art-ink" d="M1200 0a200 200 0 0 0-200 200h200z" />
      <rect className="art-soft" y="200" width="200" height="200" />
      <path className="art-accent" d="M200 200a100 100 0 0 0 200 0z" />
      <path className="art-ink" d="M400 400a200 200 0 0 1 200-200v200z" />
      <circle className="art-accent" cx="700" cy="300" r="100" />
      <path className="art-soft" d="M800 200a200 200 0 0 0 200 200H800z" />
      <circle className="art-soft" cx="1100" cy="300" r="100" />
      <circle className="art-ink" cx="1100" cy="300" r="34" />
    </svg>
  ),

  // A poster band: rings, a disc and stripes.
  bold: (
    <svg className="hero-art" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className="art-accent" width="1200" height="360" />
      <path className="art-ink" d="M40 360a280 280 0 0 1 560 0z" />
      <path className="art-accent" d="M96 360a224 224 0 0 1 448 0z" />
      <path className="art-ink" d="M152 360a168 168 0 0 1 336 0z" />
      <path className="art-accent" d="M208 360a112 112 0 0 1 224 0z" />
      <path className="art-ink" d="M264 360a56 56 0 0 1 112 0z" />
      <circle className="art-ink" cx="790" cy="150" r="104" />
      <path className="art-ink" d="M960 0h40v360h-40zM1040 0h40v360h-40zM1120 0h40v360h-40z" />
    </svg>
  ),

  // Soft shapes: a sun, a leaf, a pill and a few dots.
  friendly: (
    <svg className="hero-art" viewBox="0 0 480 480" aria-hidden="true">
      <circle className="art-third" cx="300" cy="170" r="140" />
      <rect className="art-second" x="40" y="220" width="230" height="230" rx="80" transform="rotate(-10 155 335)" />
      <rect className="art-accent" x="250" y="300" width="200" height="96" rx="48" transform="rotate(-18 350 348)" />
      <circle className="art-accent" cx="96" cy="120" r="30" />
      <circle className="art-ink" cx="408" cy="64" r="12" />
      <circle className="art-ink" cx="60" cy="210" r="8" />
      <path className="art-squiggle" d="M150 60q20-28 40 0t40 0 40 0" />
    </svg>
  ),

  // A row of fine arches with one filled in.
  luxe: (
    <svg className="hero-art" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path className="art-accent" d="M540 400V190a60 60 0 0 1 120 0v210z" />
      <path className="art-line" d="M60 400V190a60 60 0 0 1 120 0v210M220 400V190a60 60 0 0 1 120 0v210M380 400V190a60 60 0 0 1 120 0v210M540 400V190a60 60 0 0 1 120 0v210M700 400V190a60 60 0 0 1 120 0v210M860 400V190a60 60 0 0 1 120 0v210M1020 400V190a60 60 0 0 1 120 0v210" />
      <circle className="art-line" cx="600" cy="62" r="34" />
      <path className="art-line" d="M0 399.5h1200" />
    </svg>
  ),

  // A striped sunset.
  retro: (
    <svg className="hero-art" viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className="art-ground" width="400" height="480" />
      <circle className="art-second" cx="200" cy="232" r="150" />
      <path className="art-ground" d="M0 236h400v8H0zM0 268h400v14H0zM0 306h400v20H0zM0 350h400v50H0z" />
      <rect className="art-accent" y="400" width="400" height="28" />
      <rect className="art-third" y="428" width="400" height="26" />
      <rect className="art-ink" y="454" width="400" height="26" />
    </svg>
  ),

  // Hills under a low sun.
  natural: (
    <svg className="hero-art" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect className="art-third" width="400" height="500" />
      <circle className="art-second" cx="262" cy="212" r="74" />
      <path className="art-soft" d="M0 300c70-56 150-60 230-14s120 40 170 4v210H0z" />
      <path className="art-accent" d="M0 372c60-40 130-46 200-12s140 30 200-16v156H0z" />
      <path className="art-ink" d="M0 446c80-34 150-30 220-6s130 16 180-14v74H0z" />
      <path className="art-stem" d="M96 372V250M96 330c-26-6-38-22-40-46 24 2 38 18 40 46zM96 300c24-6 36-22 38-44-24 2-36 18-38 44z" />
    </svg>
  ),

  // A technical drawing of a cube.
  terminal: (
    <svg className="hero-art" viewBox="0 0 400 400" aria-hidden="true">
      <circle className="art-dash" cx="200" cy="200" r="150" />
      <path className="art-dash" d="M200 20v360M20 200h360" />
      <path className="art-accent" d="M200 110l78 45-78 45-78-45z" />
      <path className="art-line" d="M200 110l78 45v90l-78 45-78-45v-90zM122 155l78 45 78-45M200 200v90" />
      <path className="art-line" d="M12 40V12h28M360 12h28v28M388 360v28h-28M40 388H12v-28" />
      <path className="art-line" d="M122 316h156M122 310v12M278 310v12" />
    </svg>
  ),

  // Stickers: a star, a ball, a block and a smile.
  playful: (
    <svg className="hero-art" viewBox="0 0 480 480" aria-hidden="true">
      <circle className="art-third" cx="318" cy="188" r="128" />
      <rect className="art-accent" x="60" y="250" width="210" height="170" rx="28" transform="rotate(-8 165 335)" />
      <path className="art-fourth" d="M290 440a80 80 0 0 1 160 0z" />
      <polygon className="art-second" points="150,28 171,63 206,43 207,83 247,84 227,119 262,140 227,161 247,196 207,197 206,237 171,217 150,252 129,217 94,237 93,197 53,196 73,161 38,140 73,119 53,84 93,83 94,43 129,63" />
      <circle className="art-ink" cx="284" cy="168" r="10" />
      <circle className="art-ink" cx="352" cy="168" r="10" />
      <path className="art-smile" d="M272 214q46 44 92 0" />
    </svg>
  ),

  // Type only: this design has no picture.
  minimal: null,
}

export default function HeroArt() {
  return art[theme] ?? null
}
