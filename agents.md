# Basic Loaf - AI Agent Instructions

## Quick Start (30-Second TL;DR)
This is a vanilla HTML/CSS/JS sourdough baking website. **No frameworks. No build tools. No exceptions.** Edit files directly, test in browser, push to GitHub. Primary files: 9 HTML pages, `style.css`, `script.js`. Check TODO.md for current tasks. Update this file, `sitemap.xml`, and `llms.txt` after making changes.

## Critical Rules (Non-Negotiable)
1. **NO frameworks or build tools** - Keep it vanilla HTML/CSS/JS
2. **Update agents.md** after every change that affects structure, features, or tech stack
3. **Update sitemap.xml** when adding/removing pages or changing URLs (refresh `lastmod` dates)
4. **Update llms.txt** when making significant content or feature changes
5. **ALWAYS prefer editing existing files** over creating new ones
6. **No emojis** unless user explicitly requests them
7. **No em dashes** - Use regular hyphens " - " instead of em dashes "—"
8. **Read files before editing** - Understand existing code first

## Technology Stack

| Category | Technology | Details |
|----------|-----------|---------|
| **HTML** | Semantic HTML5 | No templating, no frameworks |
| **CSS** | Vanilla CSS | Custom properties for theming, 'Inter' font from Google Fonts |
| **JavaScript** | Vanilla ES6+ | Recipe scaler, mobile menu, no libraries |
| **Build System** | None | Static site, no compilation |
| **Deployment** | Git push | GitHub Pages or similar static host |
| **Schema** | JSON-LD | Recipe, HowTo, FAQPage, Organization, BreadcrumbList |

## File Structure
```
/basicloaf/
├── index.html              # Landing page
├── recipe.html             # Classic sourdough recipe with scaler
├── focaccia.html           # Beginner-friendly focaccia recipe
├── advice.html             # Techniques & tips (merged from old tips/techniques)
├── starter.html            # Starter creation & maintenance
├── bought-starter.html     # Activation guide for purchased starter
├── gear.html               # Equipment recommendations
├── ideas.html              # Recipe variations
├── about.html              # About the author
├── style.css               # All styles
├── script.js               # All interactivity
├── sitemap.xml             # SEO sitemap
├── llms.txt                # Machine-readable site summary
├── robots.txt              # Crawler directives
├── agents.md               # This file
├── TODO.md                 # Task tracking
├── /images/                # Visual assets (optimized)
└── /videos/                # Video demonstrations (optimized MP4)
```

## Key Features
- **Recipe Scaler**: Dynamic ingredient calculator in `recipe.html` and `focaccia.html`
- **Mobile Menu**: Hamburger navigation with escape key, auto-close, and resize handlers
- **Skip Links**: WCAG 2.1 Level A compliant keyboard navigation
- **Etsy Integration**: Subtle shop links for mature starter sales
- **Coaching Links**: 1:1 sourdough coaching offering
- **Schema Markup**: Optimized for Google rich results
- **Image Optimization**: All images compressed (<600KB, most <300KB)
- **Video Demonstrations**: Embedded scoring technique video (1.1MB MP4, optimized for web)

## Design Principles
- **Clean & Simple**: No gradients, minimal borders, authentic feel (not "AI-generated looking")
- **User Intent First**: Classic loaf is primary goal, focaccia is alternative
- **Empowerment Over Prescription**: No skill-level labels, users choose their path
- **Accessibility**: Keyboard navigation, skip links, focus indicators
- **Performance**: Optimized images, no blocking resources, minimal page weight

## Common Tasks

### Adding a New Page
1. Create `newpage.html` following existing structure (header, nav, main, footer)
2. Add to navigation in all 9 HTML files (`<nav id="main-nav">`)
3. Add to `sitemap.xml` with current date in `<lastmod>`
4. Update `llms.txt` if content is significant
5. Test mobile menu and skip-to-content link
6. Update this file's "File Structure" section

### Editing Styles
1. Check if utility class exists in `style.css` (e.g., `.centered-image`, `.hero-image`)
2. If not, add to CSS (avoid inline styles)
3. Use CSS custom properties for colors/spacing (see `:root` section)
4. Test responsive behavior on mobile/tablet/desktop

### Fixing Broken Links
1. Use global search to find all instances
2. Update internal links format: `advice.html#anchor` (not `/advice.html#anchor`)
3. Test navigation works on all pages
4. Update `sitemap.xml` `lastmod` dates for affected pages

### Updating Recipe Schema
1. Add unique `id` attributes to each step in HTML
2. Update JSON-LD `HowToStep` array with `name` and `url` for each step
3. Validate with Google's Rich Results Test
4. Include nutrition data if adding new recipe

### Optimizing Images
1. Resize large images: `sips -Z 900 image.jpg`
2. Compress PNGs: `pngquant --quality=65-80 image.png`
3. Convert large PNGs to JPG if no transparency needed
4. Add `width`, `height`, `loading="lazy"`, `alt` to `<img>` tags
5. Back up originals with `-original-backup` suffix

### Committing Changes
1. Run `git status` and `git diff` to review changes
2. Stage specific files: `git add file1.html file2.css`
3. Commit with descriptive message + co-author:
   ```
   git commit -m "$(cat <<'EOF'
   Add troubleshooting guide page

   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
   EOF
   )"
   ```
4. Push to remote: `git push`

## Development Workflow
1. **Edit**: Modify HTML/CSS/JS files directly
2. **Test**: Open in browser or run `python3 -m http.server 8001`
3. **Validate**: Check responsive design, test interactive features
4. **Commit**: Stage files, commit with message, push to GitHub
5. **Update Docs**: Modify `agents.md`, `sitemap.xml`, `llms.txt` as needed

## Troubleshooting

### Port Already in Use
```bash
# If port 8000 is in use, try another:
python3 -m http.server 8001
```

### Mobile Menu Not Closing
- Check `script.js` has `closeMenu()` called on link clicks
- Verify escape key handler is attached
- Test window resize handler resets menu state

### Images Not Loading
- Check file paths are relative (no leading `/`)
- Verify image exists in `/images/` directory
- Check capitalization matches exactly (case-sensitive on Linux hosts)

### Schema Validation Errors
- Use Google's Rich Results Test tool
- Ensure all required properties present (author, datePublished, etc.)
- Check `url` fields are absolute URLs (https://basicloaf.com/...)

### Skip Links Not Visible on Focus
- Check `.skip-link:focus` styles in `style.css`
- Verify `position: fixed` when focused, not `absolute`
- Test with Tab key on keyboard

## Recent Major Changes
- **2026-02-09**: Video integration - added scoring technique demonstration (advice.html, recipe.html)
- **2026-02-08**: Landing page CTA redesign - classic loaf primary, focaccia alternative
- **2026-02-08**: Code quality improvements - accessibility, performance, validation fixes
- **2026-02-08**: Image optimization - ~2MB savings across 6 images
- **2026-02-07**: Content consolidation - merged tips.html + techniques.html → advice.html
- **2026-02-07**: Etsy shop integration - global nav + contextual soft-sell links
- **2026-02-07**: Footer update - added coaching session link

## Maintenance Checklist
**After every significant change:**
- [ ] Update this file if structure/features/tech changed
- [ ] Update `sitemap.xml` if pages added/removed/modified
- [ ] Update `llms.txt` if content significantly changed
- [ ] Test on mobile and desktop
- [ ] Validate HTML (no duplicate IDs, proper nesting)
- [ ] Check accessibility (skip links, keyboard nav, focus indicators)
- [ ] Commit changes with clear message

---

**Last Updated**: 2026-02-09
**Current Site Status**: Production-ready, WCAG 2.1 Level A compliant
**Known Issues**: None blocking. See TODO.md for planned improvements.
