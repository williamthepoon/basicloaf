# Basic Loaf - Project Guidelines for Claude

## Quick Start (30-Second TL;DR)
This is a vanilla HTML/CSS/JS sourdough baking website. **No frameworks. No build tools. No exceptions.** Primary files: 10 HTML pages, `style.css`, `script.js`. Check TODO.md for current tasks.

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
| **CSS** | Vanilla CSS | Custom properties for theming, 'Inter' font from Google Fonts |
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
- **Color Palette**: Warm tan/browns (#b07d62 accent, #a06d52 links), light neutrals (#f9f9f9 background)
- **User Intent First**: Classic loaf is primary goal, focaccia is alternative
- **Empowerment Over Prescription**: No skill-level labels, users choose their path
- **Accessibility**: Keyboard navigation, skip links, focus indicators
- **Performance**: Optimized images, no blocking resources, minimal page weight

---

## Common Tasks

### Adding a New Page
1. Create `newpage.html` following existing structure (header, nav, main, footer)
2. Add to navigation in all 10 HTML files (`<nav id="main-nav">`)
3. Add to `sitemap.xml` with current date in `<lastmod>`
4. Update `llms.txt` if content is significant
5. Test mobile menu and skip-to-content link
6. Update this file's "File Structure" section

### Editing Styles
1. Check if utility class exists in `style.css` (e.g., `.centered-image`, `.hero-image`)
2. If not, add to CSS (avoid inline styles except for one-off CTA boxes)
3. Use CSS custom properties for colors/spacing (see `:root` section)
4. Test responsive behavior on mobile/tablet/desktop

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
4. Push to remote: `git push`

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
- **2026-02-11**: Lazy loading added to all below-fold images (advice.html, gear.html - others already had it)
- **2026-02-11**: SEO overhaul (multiple commits)
  - **Technical**: Fixed canonical and og:url tags on all pages - removed .html extensions to match Google-indexed clean URLs
  - **Technical**: Fixed breadcrumb schema item URLs on index, recipe, focaccia, starter pages
  - **Technical**: Cloudflare 301 redirect deployed - www.basicloaf.com now redirects to basicloaf.com
  - **Technical**: Updated sitemap.xml with clean URLs (no .html)
  - **SEO**: Keyword strategy pivot to "foolproof sourdough bread recipe" cluster based on GSC data
  - **SEO**: Rewrote homepage and recipe page meta descriptions to front-load target keywords
  - **SEO**: Updated ideas page title and H1 to target "what to do with sourdough bread" queries
  - **SEO**: Added FAQPage JSON-LD schema to ideas.html and bought-starter.html
  - **SEO**: Fixed ideas page section headings from H3 to H2
  - **Content**: Added troubleshooting.html - 10 common sourdough problems with fixes and FAQPage schema
  - **Content**: Improved internal linking across about, gear, advice, recipe, ideas pages
  - **Nav**: Added Troubleshooting to navigation on all 10 pages
- **2026-02-09**: Recipe page improvements (multiple commits)
  - **Images**: Cropped all 7 process images to portrait 900x1200 for visual consistency (250-380KB each)
  - **Images**: Tightened sourdough-loaf.jpg crop to focus on just the loaf
  - **Content**: Updated starter amount from 75-100g to 100-125g
  - **Content**: Made stretch & folds recommended (at least 2 sets) instead of optional, added windowpane test
  - **Content**: Updated cooling time to 30-45 minutes, improved natural tone throughout
  - **Styling**: Fixed CSS bug - `#method li strong` now targets only first strong tag (step titles)
  - **Styling**: Inline bold text (ingredients/times/temps) no longer creates unwanted line breaks
  - **Styling**: Updated CTA to match site color scheme (warm tan/brown #b07d62)
  - **Docs**: Merged agents.md into CLAUDE.md with comprehensive guidelines
- **2026-02-09**: Video integration - added three technique demonstration videos
- **2026-02-08**: Landing page CTA redesign - classic loaf primary, focaccia alternative
- **2026-02-08**: Code quality improvements - accessibility, performance, validation fixes
- **2026-02-08**: Image optimization - ~2MB savings across 6 images
- **2026-02-07**: Content consolidation - merged tips.html + techniques.html → advice.html
- **2026-02-07**: Etsy shop integration - global nav + contextual soft-sell links

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

**Last Updated**: 2026-02-11 (evening)
**Current Site Status**: Production-ready, WCAG 2.1 Level A compliant
**Known Issues**: None blocking. See TODO.md for planned improvements.

## SEO Notes
- **Target keyword cluster**: "foolproof sourdough bread recipe" and variants - Google already associates the site with this
- **Canonical domain**: https://basicloaf.com/ (no www) - Cloudflare 301 redirect in place for www
- **All URLs are clean** (no .html extension) - canonicals, og:url, sitemap, and breadcrumb schema all consistent
- **FAQPage schema** on: advice.html, starter.html, ideas.html, bought-starter.html, troubleshooting.html
- **Biggest remaining SEO lever**: backlinks - site has very few external links pointing to it
- **GSC baseline** (Nov 2025 - Feb 2026): 8 clicks, 242 impressions, avg position 25.7
