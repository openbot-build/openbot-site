# OpenBot Site

The public OpenBot website at [openbot.build](https://openbot.build).
This is a static Astro site with 35 languages. Each language has a product
home page and a developer page. It builds on its own.

## Local work

Use [Nix](https://nixos.org/download/) and [devenv](https://devenv.sh/getting-started/).
The pinned shell provides Node.js and Corepack. Install packages, then start:

```sh
devenv shell -- pnpm install --frozen-lockfile --store-dir .cache/pnpm
devenv shell -- pnpm dev
```

Open `http://localhost:4322`. To check the site:

```sh
devenv shell -- pnpm build
devenv shell -- pnpm typecheck
devenv shell -- pnpm check:site
```

The build compiles 70 product and developer pages plus the 404 page. The type check checks the TypeScript
files. The site check reads the build to check all language pages and their
links. Output is in `dist`.

## Pages and links

Page text lives in `src/landing/messages`, with one file for each language.
`src/i18n.ts` lists the languages. Keep all language files when changing text.
English lives at `/`; the other languages keep paths such as `/de/`.
The product home page presents one OpenBot experience. The online experience
is marked as coming soon. Technical content lives at `/developers/`, with
localized routes such as `/de/developers/`. Language switching stays on the
same page type.

Docs links point to [docs.openbot.build](https://docs.openbot.build/).
German and Chinese links use `/de/` and `/zh-cn/`. Other languages use the
English docs. The API reference uses `/api/`.

## Deploy

The Pages workflow checks pull requests and deploys `main`. In the repository
Pages settings, select GitHub Actions and set the custom domain to
`openbot.build`. Point its DNS to GitHub Pages and turn on HTTPS. The workflow
uploads only `dist`; it needs no registry token or server build.

AGPL-3.0-only. See [LICENSE](./LICENSE).

## Brand icons

The source logo is `public/OB.svg`. After changing it, run
`devenv shell -- pnpm generate:icons` and commit the generated icons.
Browser and Apple icons use a white background for contrast in both light
and dark browser chrome. The separate maskable icon keeps the logo within
the central safe area. Shared icon metadata is included on every page,
including the 404 page. The manifest keeps normal browser navigation.
