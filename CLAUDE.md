# Basic Loaf - Project Guidelines for Claude

## Quick Start (30-Second TL;DR)
This is a vanilla HTML/CSS/JS sourdough baking website. **No frameworks. No build tools. No exceptions.** Primary files: 11 HTML pages, `style.css`, `script.js`. Check TODO.md for current tasks.

**Target Audience:** Complete beginners to sourdough baking looking for a flexible, forgiving recipe with minimal effort and maximum flavor.

---

## Critical Rules (Non-Negotiable)
1. **NO frameworks or build tools** - Keep it vanilla HTML/CSS/JS
2. **Update CLAUDE.md** after every change that affects structure, features, or tech stack
3. **Update sitemap.xml** when adding/removing pages or changing URLs (refresh `lastmod` dates)
4. **Update llms.txt** when making significant content or feature changes
5. **ALWAYS prefer editing existing files** over creating new ones
6. **No emojis** unless user explicitly requests them
7. **No em dashes** - Use regular hyphens " - " instead of em dashes "—"
8. **Read files before editing** - Understand existing code first

---

## Writing Style Guidelines

### Core Principles
- Write like a knowledgeable person having a conversation, not like you're performing "helpfulness"
- Vary sentence structure naturally - mix short and long sentences based on what sounds right, not a formula
- Use formatting sparingly - only when it genuinely aids clarity, not as decoration
- Let ideas flow in paragraphs and natural prose rather than segmenting everything into lists

### Avoid These AI Tells
- Em dashes used for emphasis (use them only for actual parenthetical thoughts)
- "It's not X, it's Y" constructions
- "Here's the thing:" or "The truth is:" openings
- Ending with summary sentences that restate what was just said
- Lists and bullet points unless specifically requested or genuinely necessary
- Bold text for emphasis in conversational responses (bold is for scannability in recipes - ingredients, times, temps)
- Starting multiple paragraphs with "But" or "And" for artificial rhythm

### Tone Calibration
- Match the user's energy level - don't be more enthusiastic than they are
- If they're technical, be technical. If they're casual, be casual
- Don't manufacture friendliness - be genuinely helpful instead
- Skip the reassurance unless someone actually seems uncertain
- No emojis unless the user uses them first

### Structural Guidelines
- Lead with the actual answer, not preamble about what you're going to explain
- Use the minimum viable formatting - if paragraphs work, use paragraphs
- Headers and lists are for organizing complex information, not making simple answers look substantial
- Conversational responses should feel like one person talking to another, not a structured document

### When Uncertain
- Say you don't know rather than hedging with elaborate caveats
- Offer to search or explore further without treating it as a disclaimer
- Trust that directness is more helpful than exhaustive coverage of possibilities

### Length and Scope
- Short questions deserve short answers
- Don't expand scope unless the user's question genuinely requires it
- More words ≠ more helpful
- If you can answer well in two sentences, use two sentences

---

## Recipe Content Guidelines

### Voice & Tone
- Friendly and encouraging, like a knowledgeable friend teaching you
- Honest about what matters and what doesn't
- No gatekeeping or sourdough snobbery
- Acknowledge that life is messy and schedules vary

### Technical Accuracy
- Provide temperature ranges and visual cues
- Explain the "why" behind techniques when it helps understanding
- Don't oversimplify to the point of being wrong
- Be honest about flexible vs. critical steps

### Recipe Formatting
- Keep instructions clear and sequential
- Use images at decision points to show what success looks like
- Break complex steps into numbered sub-steps only when it genuinely helps
- **Bold for scannability**: Ingredient amounts (100-125g), times (10-15 minutes), temperatures (235°C)
- Avoid over-formatting - not every sentence needs bold text or bullet points

---

## Technology Stack

| Category | Technology | Details |
|----------|-----------|---------|
| **HTML** | Semantic HTML5 | No templating, no frameworks |
| **CSS** | Vanilla CSS | Custom properties for theming, Fraunces (headings) + Source Sans 3 (body) from Google Fonts |
| **JavaScript** | Vanilla ES6+ | Recipe scaler, mobile menu, no libraries |
| **Build System** | None | Static site, no compilation |
| **Deployment** | Git push | GitHub Pages or similar static host |
| **Schema** | JSON-LD | Recipe, HowTo, FAQPage, Organization, BreadcrumbList |

---

## File Structure
```
/basicloaf/
├── index.html              # Landing page
├── recipe.html             # Classic sourdough recipe with scaler
├── focaccia.html           # Beginner-friendly focaccia recipe
├── advice.html             # Techniques & tips (merged from old tips/techniques)
├── troubleshooting.html    # Common sourdough problems and fixes
├── starter.html            # Starter creation & maintenance
├── bought-starter.html     # Activation guide for purchased starter
├── gear.html               # Equipment recommendations
├── ideas.html              # Recipe variations and uses for bread
├── about.html              # About the author
├── 404.html                # Custom 404 error page
├── style.css               # All styles
├── script.js               # All interactivity
├── sitemap.xml             # SEO sitemap
├── llms.txt                # Machine-readable site summary
├── robots.txt              # Crawler directives
├── CLAUDE.md               # This file
├── TODO.md                 # Task tracking
├── /images/                # Visual assets (optimized)
└── /videos/                # Video demonstrations (optimized MP4)
```

---

## Key Features
- **Recipe Scaler**: Dynamic ingredient calculator in `recipe.html` and `focaccia.html`
- **Print Recipe**: Print button and `@media print` stylesheet on recipe and focaccia pages
- **Related Content Cards**: "Keep Reading" section at bottom of all content pages with contextual links
- **Mobile Menu**: Hamburger navigation with escape key, auto-close, and resize handlers
- **Skip Links**: WCAG 2.1 Level A compliant keyboard navigation
- **Etsy Integration**: Subtle shop links for mature starter sales
- **Coaching Links**: 1:1 sourdough coaching offering
- **Schema Markup**: Optimized for Google rich results
- **Image Optimization**: All images compressed (<400KB, portrait 900x1200)
- **Video Demonstrations**: Embedded technique videos - scoring (1.1MB), stretch & fold (2.9MB), and shaping/banneton (9.9MB)

---

## Design Principles
- **Clean & Simple**: No gradients (except where intentional), minimal borders, authentic feel (not "AI-generated looking")
- **Color Palette**: Warm tan/browns (#b07d62 accent, #a06d52 links), warm cream (#faf6f3 background), subtle warm (#f5efe9 inset elements), light terracotta (#f0e0d5 accent-light)
- **Typography**: Fraunces serif for h1/h2/h3, Source Sans 3 for body/h4/nav - `--font-heading` and `--font-body` CSS variables
- **User Intent First**: Classic loaf is primary goal, focaccia is alternative
- **Empowerment Over Prescription**: No skill-level labels, users choose their path
- **Accessibility**: Keyboard navigation, skip links, focus indicators
- **Performance**: Optimized images, no blocking resources, minimal page weight

---

## Common Tasks

### Adding a New Page
1. Create `newpage.html` following existing structure (header, nav, main, footer)
2. Add to navigation in all 11 HTML files (`<nav id="main-nav">`)
3. Add to `sitemap.xml` with current date in `<lastmod>`
4. Update `llms.txt` if content is significant
5. Test mobile menu and skip-to-content link
6. Update this file's "File Structure" section

### Editing Styles
1. Check if utility class exists in `style.css` (e.g., `.centered-image`, `.hero-image`)
2. If not, add to CSS (avoid inline styles except for one-off CTA boxes)
3. Use CSS custom properties for colors/spacing (see `:root` section)
4. Test responsive behavior on mobile/tablet/desktop
5. Use `replace_all: true` in Edit tool for global CSS variable renames (e.g., `#966b54` → `var(--accent-dark)`)

### Callout Classes (style.css)
Quick reference - use these instead of inline styles for CTA/info boxes:
- `.callout-warm` - muted tip or aside (warm-bg-subtle bg, terracotta left border)
- `.callout-highlight` - important note (accent-light bg, stronger border)
- `.callout-accent` - CTA/promotional block (centered, box-shadow; use `.cta-link` child for the button)
- `.callout-info` - neutral info note (warm-bg-subtle bg, grey left border)

### Bulk HTML Edits
When making the same change across multiple HTML files: read ALL target files first, then make edits. Prevents "file has not been read yet" errors and catches indentation differences (some files use 2-space indent, most use 4-space).

### Optimizing Images
1. **For process photos**: Crop to portrait 900x1200 from originals in ~/Downloads
   ```bash
   sips -c 4284 3213 "original.jpeg" --out /tmp/temp.jpg
   sips -Z 1200 -s format jpeg -s formatOptions 85 /tmp/temp.jpg --out images/filename.jpg
   ```
2. Add `width="900"`, `height="1200"`, `loading="lazy"`, descriptive `alt` to `<img>` tags
3. Target 250-350KB file size for portraits
4. Back up originals with `-original-backup` suffix if needed

### Updating Recipe Content
1. **Bold for scannability**: Ingredient amounts, times, temperatures
2. Keep bold tags on single lines in HTML source (no line breaks inside `<strong>`)
3. Use natural language, avoid AI tells
4. Add images at decision points
5. Update schema if step structure changes

### Committing Changes
1. Run `git status` and `git diff` to review changes
2. Stage specific files: `git add file1.html file2.css`
3. Commit with descriptive message + co-author:
   ```bash
   git commit -m "$(cat <<'EOF'
   Add troubleshooting guide page

   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
   EOF
   )"
   ```
4. Push to remote: `git push` (uses GitHub CLI auth - `gh` installed at `/opt/homebrew/bin/gh`)

---

## Development Workflow
1. **Edit**: Modify HTML/CSS/JS files directly
2. **Test**: Open in browser or run `python3 -m http.server 8001`
3. **Validate**: Check responsive design, test interactive features
4. **Commit**: Stage files, commit with message, push to GitHub
5. **Update Docs**: Modify `CLAUDE.md`, `sitemap.xml`, `llms.txt` as needed

---

## Troubleshooting

### Port Already in Use
```bash
python3 -m http.server 8001  # Try different port
```

### Mobile Menu Not Closing
- Check `script.js` has `closeMenu()` called on link clicks
- Verify escape key handler is attached
- Test window resize handler resets menu state

### Images Not Loading
- Check file paths are relative (no leading `/`)
- Verify image exists in `/images/` directory
- Check capitalization matches exactly (case-sensitive on Linux hosts)

### Bold Text Causing Line Breaks
- Keep entire `<strong>` content on single line in HTML source
- Don't split bold tags across multiple lines with indentation
- Example: `<strong>100-125g active starter</strong>` not `<strong>100-125g active\n       starter</strong>`

---

## Recent Major Changes
- **2026-02-22**: Design upgrade - Phase 1 & 2 of DESIGN-UPGRADE.md
  - **Typography**: Replaced Inter with Fraunces (headings) + Source Sans 3 (body); `--font-heading` / `--font-body` CSS variables; all 11 HTML files updated
  - **Layout**: Connected-card layout (header/main/footer as one unified card per page, rounded at top and bottom only)
  - **Colors**: New CSS vars `--warm-bg` (#faf6f3), `--warm-bg-subtle` (#f5efe9), `--accent-light` (#f0e0d5), `--accent-dark` (#966b54); body background warmed to #faf6f3; h2 border, hr now use warm palette; all `#966b54` hardcodes replaced with `var(--accent-dark)`
  - **Footer**: New two-column `.footer-content` / `.footer-brand` / `.footer-links` structure across all 11 pages; standardized links (Shop Starter, Instagram, About)
  - **Callouts**: New CSS classes `.callout-warm`, `.callout-accent`, `.callout-highlight`, `.callout-info`, `.callout-accent .cta-link`; replaced all blue (#1890ff, #0056b3) and yellow (#fff9c4, #fbc02d) inline styles
  - **Inline cleanup**: Removed all `onmouseover`/`onmouseout` attributes; replaced coaching CTAs with class-based styling; `figure`/`figcaption` for all image captions; `.video-container`/`.video-container-narrow` classes for video embeds
  - **Images**: `.hero-image` now full-bleed with negative margins; applied to first image on index.html, recipe.html, focaccia.html; `.wide-image` class added
  - **Hero**: Homepage `#welcome` section wrapped in `.hero-section`, image moved to top; `.hero-section` CSS for centered large h2
  - **HR**: Replaced border with warm gradient (transparent → accent-light → accent-color → accent-light → transparent)
- **2026-02-22**: UX improvements - navigation, internal linking, print, CTAs
  - **Nav**: Converted "Starter Guide" nav link to "Starter" dropdown with "Starter Guide" and "Bought Starter" sub-items across all 11 HTML files
  - **Internal linking**: Added "Keep Reading" related content cards to bottom of 9 content pages (all except index.html and 404.html)
  - **Print**: Added print button and `@media print` stylesheet to recipe.html and focaccia.html
  - **Focaccia CTAs**: Added "Ready for the Next Challenge?" nudge to classic loaf and coaching CTA box
  - **404 page**: Created 404.html with on-brand design and navigation links
  - **CSS**: New `.print-recipe-btn`, `.related-content`, `.related-cards`, `.related-card` classes and print media query
  - **Sitemap**: Updated all lastmod dates to 2026-02-22
- **2026-02-21**: Bug fixes and header height reduction
  - **Style**: Reduced header height from ~420px to ~125px - logo `max-height: 60px`, tightened padding and nav spacing
  - **CSS fix**: `header h1+p` selector never matched (div/button between h1 and p in HTML) - corrected to `header > p`
  - **CSS fix**: Replaced undefined `var(--accent-light)` in bought-starter.html with `#fff9f6`
  - **HTML fix**: Fixed stray `</p>` tag and missing Instagram link in focaccia.html footer
  - **HTML fix**: Fixed off-brand pink coaching CTA in advice.html to use site terracotta palette
  - **Schema**: Added missing breadcrumb JSON-LD schema to gear.html
- **2026-02-21**: Added dried/dehydrated starter revival guide to bought-starter.html
  - **Content**: New `#dried` section with 3-day rehydration instructions for customers who receive dried flakes
  - **Content**: Updated intro paragraph to acknowledge both fresh and dried starter recipients
  - **Content**: Added dried starter FAQ to the visible `#faq` section and FAQPage JSON-LD schema
  - **Tooling**: Installed Homebrew and GitHub CLI (`gh`); configured git push via `gh auth login`
  - **Docs**: Updated sitemap.xml lastmod for bought-starter to 2026-02-21

---

## Maintenance Checklist
**After every significant change:**
- [ ] Update this file if structure/features/tech changed
- [ ] Update `sitemap.xml` if pages added/removed/modified
- [ ] Update `llms.txt` if content significantly changed
- [ ] Test on mobile and desktop
- [ ] Validate HTML (no duplicate IDs, proper nesting)
- [ ] Check accessibility (skip links, keyboard nav, focus indicators)
- [ ] Verify bold text doesn't cause formatting issues
- [ ] Commit changes with clear message

---

**Last Updated**: 2026-02-22 (design upgrade)
**Current Site Status**: Production-ready, WCAG 2.1 Level A compliant
**Known Issues**: None blocking. See TODO.md for planned improvements.

## SEO Notes
- **Target keyword cluster**: "foolproof sourdough bread recipe" and variants - Google already associates the site with this
- **Canonical domain**: https://basicloaf.com/ (no www) - Cloudflare 301 redirect in place for www
- **All URLs are clean** (no .html extension) - canonicals, og:url, sitemap, and breadcrumb schema all consistent
- **FAQPage schema** on: advice.html, starter.html, ideas.html, bought-starter.html, troubleshooting.html
- **Biggest remaining SEO lever**: backlinks - site has very few external links pointing to it
- **GSC baseline** (Nov 2025 - Feb 2026): 8 clicks, 242 impressions, avg position 25.7
