# Focus Board — GitHub practice project

A deliberately small, dependency-free task board for practicing Git and GitHub workflows. It runs entirely in the browser, so you can focus on collaboration instead of setup.

## Run it

Open `index.html` in a browser, or use a local static server such as VS Code's Live Server extension.

## Project structure

- `index.html` — page structure and task form
- `styles.css` — responsive visual design
- `app.js` — add, complete, and remove task interactions

## Practice ideas

1. Create a branch named `feature/dark-mode` and add a dark theme.
2. Open an issue to persist tasks in `localStorage`, then implement it in a pull request.
3. Make two branches that both edit the hero text, then practice resolving the merge conflict.
4. Add a GitHub Actions workflow that checks HTML, CSS, or JavaScript formatting.
5. Tag a release after merging your changes.

## Suggested first commit

```bash
git add index.html styles.css app.js README.md
git commit -m "Add Focus Board starter app"
```
