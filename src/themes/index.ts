// The designs this site can wear. The one in use is `theme` in src/site.ts.
// Each design is one CSS file in this folder, and its hero picture is in
// src/components/HeroArt.tsx.
//
// `active: false` takes a design off the list of choices. Its file can stay.
import './editorial.css'
import './modern.css'
import './bold.css'
import './friendly.css'
import './minimal.css'
import './luxe.css'
import './retro.css'
import './natural.css'
import './terminal.css'
import './playful.css'

export const themes = [
  { name: 'editorial', label: 'Editorial', fits: 'Warm paper and a classic serif: a shop, a cafe, a writer, a maker.', active: true },
  { name: 'modern', label: 'Modern', fits: 'Clean and bright with a vivid blue: an app, a product, a consultant.', active: true },
  { name: 'bold', label: 'Bold', fits: 'Dark with huge poster type: a band, a studio, an event, a gym.', active: true },
  { name: 'friendly', label: 'Friendly', fits: 'Soft, round and pastel: a bakery, a preschool, a community group.', active: true },
  { name: 'minimal', label: 'Minimal', fits: 'Quiet black and white: a portfolio, an architect, a freelancer.', active: true },
  { name: 'luxe', label: 'Luxe', fits: 'Elegant and airy with a fine serif: a salon, a jeweler, a hotel, a wedding.', active: true },
  { name: 'retro', label: 'Retro', fits: 'Seventies print colors and a chunky slab: a diner, a record shop, a barber.', active: true },
  { name: 'natural', label: 'Natural', fits: 'Earthy greens and clay: a garden, a farm, a yoga studio, a clinic.', active: true },
  { name: 'terminal', label: 'Terminal', fits: 'Typewriter type on a grid: a developer, a tool, a tech project.', active: true },
  { name: 'playful', label: 'Playful', fits: 'Bright blocks and sticker shapes: a toy shop, a party, a kids club.', active: true },
] as const

export type Theme = (typeof themes)[number]['name']
