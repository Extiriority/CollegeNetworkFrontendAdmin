# College Network Frontend
<a href="(https://github.com/Extiriority/CollegeNetworkBackend"><img align="right" src="https://catalog.app.fhict.nl/images/menuGlobal.svg" width=27%></a>

CollegeNetworkFrontend is the frontend repository of [College Network](https://github.com/Extiriority/CollegeNetworkBackend),
a detailed description of College Network and its objectives can be found in
[College Network](https://github.com/Extiriority/CollegeNetworkBackend) which is the API repository
for College Network.

## Setup

1. Install NodeJS and NPM (or PNPM or yarn)
2. Clone this repository
3. `cd` into the repository

## Developing

Once you've created a project and installed dependencies with `npm install` (or `PNPM install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
The frontend can now be found at `http://localhost:3000` but will not work fully without
also installing [College Network](https://github.com/Extiriority/CollegeNetworkBackend).

## Building

Before creating a production version of your app (currently on a simple Node server), install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
