# Basic Loaf - Project Documentation

## 1. Overview
Basic Loaf is a website dedicated to providing a simple, foolproof guide for beginners to bake sourdough bread. The project focuses on accessibility, reliability, and high performance, featuring a clean design and user-friendly tools. It specializes in supporting bakers who use the "Basic Loaf" mature sourdough starter (a resilient 5+ year-old culture).

## 2. Technology Stack
- **Core**: Semantic HTML5.
- **Styling**: Vanilla CSS (No framework).
  - Uses CSS Custom Properties (Variables) for consistent theming.
  - Typography: 'Inter' from Google Fonts.
  - Design Style: Clean, minimalist, modern aesthetic with "refined" color palette.
- **Scripting**: Vanilla JavaScript (ES6+).
  - Handles interactive elements like the Recipe Scaler.
- **Build System**: None. This is a pure static site.
  - **Philosophy**: Keep the site simple, lightweight, and easy to maintain without build steps or frameworks. Avoid adding complexities like static site generators (SSGs) unless absolutely necessary for a specific future feature.

## 3. Key Features
- **Recipe Scaler**: An interactive feature (located in `recipe.html`, `focaccia.html` and `script.js`) that dynamically calculates ingredient quantities based on the user's desired output (loaves or trays).
- **Easy Focaccia Recipe**: A dedicated beginner-friendly page (`focaccia.html`) designed to lower the barrier for new sourdough bakers, featuring a high-quality community-provided photo.
- **Refined Navigation**: Site-wide navigation layout optimized to prevent wrapping on desktop and a fully responsive hamburger menu for mobile.
- **Guided Starter Activation**: Tailored instructions in `bought-starter.html` that handle different scenarios for a mature starter (Collected in-person vs. Received by post), including recovery steps and baking schedules.
- **Visual Equipment Tiers**: The `gear.html` page uses distinct visual guides (Essentials vs. Nice-to-Haves) to help beginners start with minimal financial barrier while showing a clear upgrade path.
- **Responsive Design**: Fully responsive layout ensuring readability on mobile, tablet, and desktop devices.
- **SEO & AI Optimization**: Comprehensive implementation of meta tags, Schema.org (JSON-LD), and AI-specific directives (`robots.txt`, `llms.txt`) for better visibility across search engines and LLM agents.

## 4. File Structure
The project is organized in the root directory:

- **Pages**:
  - `index.html`: The landing page introducing the concept.
  - `recipe.html`: The core guide with the interactive scaler.
  - `focaccia.html`: A simplified, no-shape sourdough focaccia recipe for beginners.
  - `starter.html`: Instructions for creating and maintaining sourdough starter.
  - `bought-starter.html`: Specific activation instructions for customers who purchased a fresh starter.
  - `techniques.html`: Explanations of baking techniques (folding, proving, etc.).
  - `gear.html`: Recommendations for baking equipment.
  - `ideas.html`: Additional inspiration or variations.
  - `about.html`: Information about the author and project.

- **Assets**:
  - `style.css`: The central stylesheet containing all design tokens and rules.
  - `script.js`: Contains logic for the recipe scaler and other DOM interactions.
  - `images/`: Directory containing visual assets (SVGs, JPGs, PNGs).

- **Config/Meta**:
  - `robots.txt`: Directives for search engine crawlers, including specific rules for AI agents (GPTBot, etc.).
  - `sitemap.xml`: XML map of site content for indexing.
  - `llms.txt`: Machine-readable summary of the site for LLMs.

- **Structured Data**:
  - Uses JSON-LD for `Recipe`, `HowTo` (Starter), `Organization`, and `BreadcrumbList`.

## 5. Development Workflow
Since this is currently a static site without a build step:
1.  **Editing**: Modify `.html`, `.css`, or `.js` files directly.
2.  **Testing**: Open `index.html` locally in a browser or use a simple local server (e.g., specific VS Code extensions or `python3 -m http.server`).
3.  **Deployment**: Push changes to the repository. The hosting provider (e.g., GitHub Pages, Netlify) serves the static files directly.

## 6. Maintenance Instructions for AI Agents
**CRITICAL**: This file (`agents.md`) is the PRIMARY source of truth for any AI working on this project. It ensures continuity and context awareness. **Updating this file is a MANDATORY part of the development process.** Any task involving code changes must conclude with an update to `agents.md` to reflect the new project state.

### When to Update
You MUST update this file after EVERY change that affects:
1.  **Add/Remove Pages**: Update the "File Structure" section.
2.  **Change Tech Stack**: If you introduce a build tool (like Eleventy), CSS framework (like Tailwind), or new library, you *must* rewrite the "Technology Stack" and "Development Workflow" sections.
3.  **Add Features**: Document new interactive features in "Key Features".
4.  **Refactor**: If you change the directory structure (e.g., move files to `src/`), verify and update paths here.

### How to Update
- Read the current `agents.md`.
- Make necessary changes to reflect the *new* state of the codebase.
- Ensure instructions remain clear for the *next* AI.
