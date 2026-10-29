# Rules for OpenBot Site

Run every command as `devenv shell -- <command>`.

This repository owns the public OpenBot website at `https://openbot.build`.
Keep it a static Astro site. It builds on its own and has no server package
dependencies.

## Content and design

- Keep the page layout, fonts, colors, and all languages when moving code.
- English is the source for text. Keep all 35 language files in
  `src/landing/messages` in sync when changing page text.
- Keep `lang`, text direction, canonical links, and language links correct.
- Write new comments, logs, errors, and docs in short, plain English.
- Link to the documentation at `https://docs.openbot.build` through
  `src/links.ts`. The API reference is in English at `/api/`.

## License and checks

Use `AGPL-3.0-only`. Keep the official license text and third-party notices.
Before finishing a change, run `pnpm build`, `pnpm typecheck`, and
`pnpm check:site`. The last check reads the built pages and checks language
links and docs links.
