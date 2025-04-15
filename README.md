# CyberCup.IT - Website

This is the official website of CyberCup.IT, a cybersecurity competition for CTF teams in Italy.

## Developing

This project is built with [SvelteKit](https://kit.svelte.dev) and uses [Tailwind CSS](https://tailwindcss.com/) and DaisyUI for styling.

Download the project and install dependencies:

```bash
# clone the repository
git clone <repo_url>
cd <repo_name>
pnpm install
```

To start a development server, run:

```bash
pnpm dev
```

To build the project for production, run:

```bash
pnpm build
```

You can preview the production build with `npm run preview`.

## Deployment

We deploy to GitHub pages via GitHub Actions.

The deployment is triggered on every push to the `main` branch via the `.github/workflows/ghpages.yml` workflow.
