# M1kuW1ll.github.io

Personal academic website of Fei Wu (吴非), served by GitHub Pages at <https://m1kuw1ll.github.io/>.

Plain static HTML, CSS and JavaScript, with no build step and no Jekyll (`.nojekyll`).

## Layout

| File | What it holds |
| --- | --- |
| `index.html` | All page content: sidebar, About, Research (posts/data/code), Service, CV, Fun |
| `assets/js/publications.js` | **The paper list.** Feeds both "Selected publications" and the Research tab |
| `assets/js/main.js` | Tab switching (`#about`, `#research`, …), dark-mode toggle, publication rendering |
| `assets/css/style.css` | Styles; colours are CSS variables at the top (light and dark) |
| `assets/img/photo.jpg` | Sidebar photo (full portrait) |
| `assets/img/profile.jpg` | Square headshot used for link previews (`og:image`) |
| `cv.pdf` | CV linked from the sidebar and the CV tab |

## Common edits

- **Add a paper:** copy an entry in `assets/js/publications.js`, keep the list newest first, and set `selected: true` to also show it on the About tab.
- **Replace the CV:** overwrite `cv.pdf`.
- **Change the photo:** replace `assets/img/photo.jpg` (any portrait image; if the aspect ratio changes, update `aspect-ratio` on `.photo` in the CSS and the `width`/`height` on the `<img>`).
- **Add Google Scholar:** uncomment the Scholar link in the sidebar of `index.html` and fill in your user ID.
- **After editing CSS or JS:** bump the `?v=` value on the `<link>`/`<script>` tags in `index.html` (and the CSS link in `404.html`) so browsers fetch the new files instead of a cached copy.
- **Change the accent colour:** edit `--accent` (and its dark-mode counterpart) in `assets/css/style.css`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

GitHub Pages serves the `master` branch root: **Settings → Pages → Build and deployment → Deploy from a branch → `master` / `(root)`**. Every push to `master` updates the site within a minute or two.
