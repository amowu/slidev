# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Slidev Presentation Factory — a single repo managing multiple Slidev presentations with shared `node_modules`. Each presentation lives in its own dated folder.

## Commands

```bash
# Start dev server with live preview
npm run dev -- <path/to/slides.md>

# Build static HTML for deployment
npm run build -- <path/to/slides.md>

# Export to PDF
npm run export -- <path/to/slides.md>
```

The `--` separator is required to pass the file path argument through npm to Slidev.

## Creating a New Presentation

1. Copy `_template/` to a new folder named `YYYY-MM-DD-TOPIC-NAME` (e.g., `2026-05-11-DRM`)
2. Edit `slides.md` inside the new folder
3. Place images/assets in `./assets/` within that folder — paths must be relative (e.g., `./assets/image.png`)

## Slide Format

Presentations use Slidev Markdown with YAML frontmatter:

```yaml
---
theme: default          # or: seriph, apple-basic
title: Presentation Title
background: https://cover.sli.dev
class: text-center
highlighter: shiki
drawings:
  persist: false
---
```

Slides are separated by `---`. Supports inline HTML, Windi CSS utility classes, and emoji.

## Themes

Available themes (already installed):
- `@slidev/theme-default`
- `@slidev/theme-seriph`

To add a new theme, install it with npm and reference it in the frontmatter.

## Project Structure

```
slidev/
├── _template/        # Template for new presentations — copy this to start
├── YYYY-MM-DD-NAME/  # One folder per presentation
│   ├── slides.md
│   └── assets/       # Images and resources for this presentation
└── package.json      # Shared scripts and dependencies
```
