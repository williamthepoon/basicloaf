# Basic Loaf - Project Documentation

## 1. Overview
Basic Loaf is a website dedicated to providing a simple, foolproof guide for beginners to bake sourdough bread. The project focuses on accessibility, reliability, and high performance, featuring a clean design and user-friendly tools. It specializes in supporting bakers who use the "Basic Loaf" mature sourdough starter (a resilient 5+ year-old culture), which is also available for purchase via the integrated Etsy shop.

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
- **Expert Branding (E-E-A-T)**: Rebranded site-wide author identity to "Will Poon" to build personal authority and trust with readers and search engines.
- **Advanced Schema implementation**:
  - `Recipe` schema optimized with specific author and timing data.
  - `FAQPage` schema on `tips.html` and `starter.html` to capture search result real-estate.
  - Consistent `BreadcrumbList` across the journey.
- **Strategic Internal Linking**: Content siloed to guide users from foundation (Starter/Gear) to execution (Recipe/Techniques).
- **Subtle Etsy Shop Integration**: Integrated links to the `Basicloafsourdough` Etsy shop (`https://basicloafsourdough.etsy.com`) across the global navigation and footer. Includes context-aware "soft-sell" links in the Starter Guide (as a time-saving tip), Gear list, and Recipe ingredients to offer a helpful alternative to making a starter from scratch.

## 4. File Structure
The project is organized in the root directory:

- **Pages**:
  - `index.html`: The landing page introducing the concept.
  - `recipe.html`: The core guide with the interactive scaler.
  - `focaccia.html`: A simplified, no-shape sourdough focaccia recipe for beginners.
  - `starter.html`: Instructions for creating and maintaining sourdough starter.
  - `bought-starter.html`: Specific activation instructions for customers who purchased a fresh starter.
  - `advice.html`: **[NEW]** Consolidates "Baker Tips" and "Techniques" into a single advice hub.

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
5.  **Update LLM/Robot Files**: When making significant changes, also update `llms.txt` and `robots.txt` to ensure AI crawlers and LLMs have accurate information about the site.

### How to Update
- Read the current `agents.md`.
- Make necessary changes to reflect the *new* state of the codebase.
- Ensure instructions remain clear for the *next* AI.
- **IMPORTANT**: After updating `agents.md`, also update `llms.txt` and `robots.txt` if the changes affect site structure, features, or content that should be communicated to LLMs and crawlers.

## 7. Recent Changes & Known Issues

### CSS List Alignment Fix (2026-02-06)
**Issue**: Lists on pages using `<section>` tags (about.html, gear.html, techniques.html, ideas.html) had misaligned bullet points and numbers that didn't align with surrounding paragraph text.

**Root Cause**: The CSS rule for list alignment only applied to lists within `<article>` tags, but several pages use `<section>` tags directly inside `<main>`.

**Solution**: Extended the CSS selector in `style.css` (lines 302-314) to include lists in both `article` and `main` elements:
```css
article ol, article ul, main ol, main ul {
    margin-left: 0;
    padding-left: 2em;
    margin-bottom: 1.5em;
}
```

**Pages Fixed**: about.html, gear.html, techniques.html, ideas.html, starter.html
**Status**: ✅ Resolved - All lists now have consistent alignment across the entire site.

### Etsy Shop Integration (2026-02-07)
**Feature**: Integrated a link to the user's Etsy shop (`Basicloafsourdough` / `https://basicloafsourdough.etsy.com`) to sell mature sourdough starter.

**Implementation**:
- **Global**: Added "Shop" link to main navigation and "Shop: Buy Mature Starter" to footer on all pages.
- **Contextual**: Added "soft-sell" links in specific context-appropriate locations:
  - `index.html`: "Short on time?" helper link below the main CTA.
  - `starter.html`: A tip box in the "Create from Scratch" section offering a purchase alternative.
  - `gear.html` & `recipe.html`: Hyperlinked "Sourdough Starter" in the ingredients lists directly to the shop listing.
- **Design**: Kept styling subtle to maintain informational credibility and avoid aggressive upselling.

**Status**: ✅ Deployed - Links are active and consistent across all pages.

### Footer & Coaching Update (2026-02-07)
**Feature**: Updated global footer and added 1:1 Coaching offering.
- **Footer**: Removed "Shop:" prefix from starter link. Added new link for "Book a Coaching Session".
- **Coaching**: Integrated 1:1 coaching offering into `index.html` (CTA), `about.html`, `tips.html`, and `recipe.html`.

### Content Consolidation (2026-02-07)
**Feature**: Merged "Baker Tips" and "Techniques" into a single "Advice" page (`advice.html`).
- **Goal**: Simplify navigation and group related information.
- **Changes**: Created `advice.html`, updated all navigation links, redirected internal links to new anchors, and deleted `tips.html` and `techniques.html`.
### Footer Styling Update (2026-02-07)
**Feature**: Aligned footer links horizontally.
- **Change**: Updated `style.css` to display "Buy Mature Starter", "Book a Coaching Session", and "Follow on Instagram" side-by-side on desktop, while keeping the copyright notice on its own line at the top.

### Logo Update (2026-02-07)
**Feature**: Replaced the SVG logo with a new PNG version (`logo.png`) and increased its size.
- **Change**: Updated references in all HTML files from `logo.svg` to `logo.png` and adjusted the favicon type accordingly.
- **Styling**: Increased logo width to `700px` in `style.css` for better visibility.
