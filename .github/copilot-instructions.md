# Copilot instructions for this repository

This is a tiny static-site repository (three HTML files) using an embedded local font. There is no build system, backend, or tests. The goal of these instructions is to make an AI coding agent immediately productive by documenting the project layout, observable conventions, and concrete examples of safe edits.

## Quick snapshot
- Project type: static HTML/CSS (no JS, no build/test tools). ✅
- Key files:
  - `test.html` — main sample page (Thai content)
  - `test2.html` — CSS examples / component variations
  - `test3.html` — button/input examples
  - `Kanit/Kanit-Regular.ttf` — bundled font (licensed with `Kanit/OFL.txt`)

## How to run locally
- No build step — open any `.html` in a browser to preview.
- For a quick local server (useful for relative font loading):
  - Python: `python -m http.server 8000` and open `http://localhost:8000/test.html`
  - Or use VS Code Live Server extension to preview pages with a local URL.

## Discoverable conventions & patterns
- Styles are inline inside each HTML file in `<style>` tags (no shared stylesheet).
- Class naming is simple and ad-hoc (examples: `.button`, `.button-active`, `.button-danger`).
- State selectors used: `:hover`, `:active`, and `:focus` on inputs.
- Form controls exist but lack labels and some `value` attribute consistency (see examples below).
- Font is loaded via a relative `@font-face` rule in `test.html`: `src: url('./Kanit/Kanit-Regular.ttf')` — do not remove or alter the `OFL.txt` license.
- Character encoding is UTF-8 (`<meta charset="UTF-8">`) and text contains Thai; preserve encoding on edits.

## Concrete examples & safe edits for an AI agent
- Fix small typos and attributes (non-breaking changes):
  - `Register From` → `Register Form` (in `test.html`).
  - `Value="male"` attribute should use lowercase `value`.
  - Radio `Value="feamle"` → `value="female"` and `traveding` → `traveling` (or keep original Thai where appropriate).

- Accessibility improvements (recommended minimal changes):
  - Add `<label for="...">` for inputs and ensure `id` attributes on inputs. Example:
    - Before: `ชื่อ<input class="form" type="text">`
    - After: `<label for="firstname">ชื่อ</label><input id="firstname" name="firstname" class="form" type="text">`

- Consolidation refactor (safe, testable):
  - Extract all `<style>` contents into `assets/styles.css` and add `<link rel="stylesheet" href="assets/styles.css">` to each head.
  - Keep the visual outcome identical; use browser screenshot diffs or manual testing to validate.

- Font/license handling:
  - Keep `Kanit/Kanit-Regular.ttf` with its `OFL.txt` license. Any changes to font files should preserve the license file and not re-license the font.

## Testing & validation suggestions (manual)
- Use the browser's DevTools (responsive mode) to verify layout and font rendering.
- Run Lighthouse to check accessibility improvements after edits.
- For visual regression, capture before/after screenshots (no project CI is present).

## PR & commit guidance
- Keep ephemeral changes small and focused (single concern per PR).
- When refactoring styles, include screenshots or a short QA checklist (which pages to verify).

## Tasks that are out of scope / *do not do*
- Introduce heavy frameworks or build tools without prior agreement (this is a small static site).
- Remove or re-license `Kanit` assets or modify `OFL.txt` without explicit approval.

---
If any of these sections are unclear or you want examples expanded (e.g., a sample refactor PR with diff snippets), tell me which area to expand and I will iterate. 👍