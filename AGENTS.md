# Repository Guidelines

## Project Structure & Module Organization
This repository is a small Next.js 16 app using the App Router and TypeScript. Core UI files live in `app/`: `page.tsx` contains the main screen, `layout.tsx` defines shared HTML and metadata, and `globals.css` holds global styles and Tailwind imports. Static assets belong in `public/`. Root config files such as `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs` control framework, typing, linting, and CSS behavior.

## Build, Test, and Development Commands
Use npm for local work:

- `npm run dev` starts the development server at `http://localhost:3000`.
- `npm run build` creates the production build and catches build-time issues.
- `npm run start` serves the production build locally after `npm run build`.
- `npm run lint` runs ESLint with the Next.js and TypeScript rules configured in `eslint.config.mjs`.

## Coding Style & Naming Conventions
Use TypeScript and React function components. Follow the existing style: double quotes, semicolons, and 2-space indentation in JSX and TS/TSX files. Name React components in PascalCase, functions and variables in camelCase, and keep route files in the Next.js convention such as `page.tsx` and `layout.tsx`. Prefer small, focused components and move reusable UI out of `app/page.tsx` if the screen grows.

## Testing Guidelines
There is no test suite configured yet. At minimum, run `npm run lint` and `npm run build` before opening a PR. If you add tests, keep them close to the feature (`app/__tests__/` or adjacent `*.test.tsx` files) and use clear names such as `HomePage.test.tsx`. Prefer testing user-visible behavior over implementation details.

## Commit & Pull Request Guidelines
The current history uses short, imperative commit messages such as `Initial commit - Codex demo project`. Continue with concise subject lines that describe the change directly, for example `Add text transform actions`. PRs should include a brief summary, any manual verification steps, and screenshots for UI changes. Link the relevant issue when one exists.

## Configuration Tips
Do not commit secrets or local `.env*` files. Keep generated output such as `.next/` out of reviews, and place new public assets in `public/` rather than embedding large data in components.
