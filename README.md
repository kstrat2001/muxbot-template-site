# Mux Bot website template

A small website to start from: Vite, React and TypeScript with plain CSS. One page with a hero, an about section, a list of services, a quote, a contact section and a footer, laid out for phones, tablets and desktops, in light and dark, and in ten designs to choose from.

## How Mux Bot uses it

When you choose **Build a website** in [Mux Bot](https://github.com/kstrat2001/muxbot), it makes you a new bot for your site and has darkmux set up a copy of this template on your Mac, as a project of its own with no remote. Your bot then changes the site when you ask, and you see each change in Mux Bot's live preview.

Two files are for Mux Bot and darkmux:

- `PLAYBOOK.md`: the recipe Mux Bot reads to make the bot (what it asks you first, the bot's persona, and its skills: add a page, edit a section, change the look, fix something you point at, make it work on phones).
- `.darkmux/preview.json`: how darkmux runs the live preview (install with `npm ci`, then `npm run dev` on the ports darkmux picks).

## Run it yourself

Needs Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

Open http://127.0.0.1:5173. `npm run build` checks the types and builds the site into `dist/`.

## Where things are

- `src/pages/`: one file per page; `src/App.tsx` maps paths to pages and `src/site.ts` holds the site's name, email address and menu.
- `src/components/`: the header, footer and page sections, one file each.
- `src/site.ts` also picks the design: the one word `theme`.
- `src/themes/`: the ten designs, one CSS file each, and `index.ts`, the list of them with an `active` flag. A design's colors, fonts, corners and spacing are the variables at the top of its file.
- `src/styles.css`: the layout every design shares.
- `src/fonts/`: the bundled fonts (all under the SIL Open Font License, each with its license file), so the site needs no network.

## Designs

`editorial` (the default), `modern`, `bold`, `friendly`, `minimal`, `luxe`, `retro`, `natural`, `terminal` and `playful`. Change `theme` in `src/site.ts` to switch. Each has a light and a dark set of colors, except `bold`, which is always dark. To take a design off the list of choices, set its `active` to `false` in `src/themes/index.ts`, and remove its line from the list in `PLAYBOOK.md`.

## License

MIT
