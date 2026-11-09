# Mux Bot website template

A small website to start from: Vite, React and TypeScript with plain CSS. One page with a hero, a features row, a contact section and a footer, laid out for phones, tablets and desktops.

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

- `src/pages/`: one file per page; `src/App.tsx` maps paths to pages and `src/site.ts` holds the site's name and menu.
- `src/components/`: the header, footer and page sections.
- `src/styles.css`: the look. Colors and fonts are the variables at the top.

## License

MIT
