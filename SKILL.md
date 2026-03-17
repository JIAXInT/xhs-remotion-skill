---
name: xhs-remotion-skill
description: Generate Xiaohongshu static image carousels with Remotion Still. Use when converting text/chapters into XHS 套图/封面/内页 PNG, batch rendering stills, or setting up the Remotion template (supports chapter auto-split + configurable output dir).
---

# XHS Remotion Skill

## Quick start
1. **Bootstrap template**
   ```bash
   python scripts/bootstrap_template.py --dest <project-path>
   ```
2. **Edit content**
   - Update `data/post.js` (cover + chapters).
3. **Install deps**
   ```bash
   npm i
   ```
4. **Batch export**
   - macOS/Linux:
     ```bash
     REMOTION_OUT_DIR=out-run-001 npm run render:all
     ```
   - PowerShell:
     ```powershell
     $env:REMOTION_OUT_DIR='out-run-001'; npm run render:all
     ```
   Output goes to `out/slide-*.png` (or your custom dir).

## Data schema (data/post.js)
- `theme`: primary/bg/text/accent/dark colors
- `maxItemsPerSlide`, `maxLinesPerSlide`, `maxCharsPerSlide` (default: 8/12/360)
- `cover`: tag/title/subtitle/metrics/cta
- `chapters[]`: each chapter becomes 1+ slide; auto-split when items/steps/lines/body exceed thresholds
  - Fields: `tag`, `title`, `subtitle`, `items`, `steps`, `lines`, `body`, `summary`
  - Duplicate titles auto-suffixed like `标题（1/2）`
- `sections[]` or `rawText` are accepted as fallbacks (raw text with ## headings)

## Output notes
- Default size: **1080×1440 (3:4)**
- Dark mode: set `REMOTION_THEME=dark`
- Keep key text away from top/bottom edges (safe area ~120px top, ~180px bottom)

## Resources
- `scripts/bootstrap_template.py` – copy template to a target directory
- `assets/xhs-remotion-template/` – Remotion Still project template
