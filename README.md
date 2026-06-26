# Resume

Personal resume site for Peter Meinders — [petermeinders.com](https://petermeinders.com).

Built with [Astro](https://astro.build). Content migrated from the older Blazor site; see [INSTRUCTIONS.md](INSTRUCTIONS.md) for project decisions, content inventory, and migration notes.

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |

## Project structure

- `src/data/resume.json` — resume content (single source of truth)
- `src/pages/` — site routes (`/`, `/experience`, `/skills`, `/projects`)
- `INSTRUCTIONS.md` — living project documentation
