# Basic Loaf Website - TODO & Feature Tracking

**Last Updated:** 2026-02-08

---

## 📋 Overview

This file tracks planned features, improvements, bug fixes, and enhancements for the Basic Loaf website. Both human editors and AI agents can read, update, and modify this document.

**Status Legend:**
- ❌ Not started
- 🔄 In progress
- ✅ Complete
- 🚧 On hold (reason in description)
- 🐛 Bug/Issue

---

## 🚀 High Priority Features

### Content & Recipes
- [ ] ❌ Add troubleshooting guide page for common sourdough issues
- [ ] ❌ Create video tutorials for key techniques (scoring, stretching, shaping)
- [ ] ❌ Add seasonal sourdough variations (whole wheat, spelt, rye blends)
- [ ] ❌ Expand focaccia recipe with variations (olive tapenade, herb infusions)
- [ ] ❌ Add printable recipe PDFs for offline reference

### User Experience
- [ ] ❌ Add dark mode toggle button with local storage persistence
- [ ] ❌ Implement email newsletter signup form
- [ ] ❌ Add recipe rating/review system (anonymous)
- [ ] ❌ Create "Sourdough Journey" progress tracker for users

### Technical
- [ ] ❌ Set up analytics (Plausible or similar privacy-focused tool)
- [ ] ❌ Implement server-side redirect for old techniques.html (SEO)
- [ ] ❌ Add .htaccess rules for expired URLs

---

## 🎨 Medium Priority Enhancements

### Design & Layout
- [ ] ❌ Add hero banner to homepage with call-to-action
- [ ] ❌ Improve mobile navigation with mega menu for sub-sections
- [ ] ❌ Add "related articles" cards at end of each page
- [ ] ❌ Create custom 404 page

### Performance
- [ ] ❌ Implement lazy loading for below-fold images
- [ ] ❌ Convert remaining JPGs to WebP with fallbacks
- [ ] ❌ Set up image CDN for faster global delivery
- [ ] ❌ Cache static assets in service worker (PWA)

### SEO & Marketing
- [ ] ❌ Add breadcrumb navigation (schema markup)
- [ ] ❌ Implement internal linking strategy for better site flow
- [ ] ❌ Add Open Graph meta tags for social sharing
- [ ] ❌ Create XML sitemaps for search engines (already have sitemap.xml, verify it's being submitted)

---

## 🐛 Bug Fixes & Issues

### Current Issues
- [x] ✅ Fix broken links to old techniques.html (FIXED 2026-02-08)
  - ✅ recipe.html: /techniques.html#scoring → advice.html#scoring
  - ✅ recipe.html: techniques.html#stretch-fold → advice.html#stretch-fold
  - ✅ focaccia.html: techniques.html#stretch-fold → advice.html#stretch-fold

### Potential Issues to Monitor
- [ ] 🔄 Monitor recipe scaler on very small mobile screens (iPhone SE viewport)
- [ ] ⚠️ Test focus trap behavior in mobile menu on screen readers
- [ ] ⚠️ Verify image alt text across all pages

---

## 🔧 Maintenance & Code Quality

### Documentation
- [ ] ❌ Create CONTRIBUTING.md for future developers
- [ ] ❌ Add code style guidelines to agents.md
- [ ] ❌ Document all CSS variables and their usage
- [ ] ✅ Update agents.md with latest improvements (DONE 2026-02-08)

### Accessibility
- [ ] ❌ Add focus trap implementation to mobile menu when open
- [ ] ❌ Conduct full WCAG 2.1 AA audit (currently Level A)
- [ ] ❌ Test with screen readers (NVDA, JAWS)
- [ ] ❌ Add captions/transcripts for video tutorials (when added)

### Testing
- [ ] ❌ Set up automated accessibility testing (axe-core)
- [ ] ❌ Create test checklist for new pages/features
- [ ] ❌ Test on actual devices (iPhone, Android, tablets)
- [ ] ❌ Set up lighthouse CI for performance monitoring

---

## 📱 Mobile & Responsive Design

- [x] ✅ Skip links working on mobile (DONE 2026-02-08)
- [x] ✅ Mobile menu UX improvements (DONE 2026-02-08)
  - ✅ Auto-close on link click
  - ✅ Escape key handler
  - ✅ Window resize handler
- [ ] ❌ Test recipe scaler on landscape mode
- [ ] ❌ Improve touch targets (minimum 48px for buttons)
- [ ] ❌ Add swipe gestures for mobile navigation (optional)

---

## 💰 Monetization & Business

- [ ] ❌ Add affiliate links for recommended sourdough equipment
- [ ] ❌ Create gated "Advanced Techniques" guide (optional premium content)
- [ ] ❌ Set up email course funnel
- [ ] ❌ Add shop integration for selling starter cultures
- [ ] ❌ Explore sponsorship opportunities with sourdough equipment brands

---

## 🔄 Regular Maintenance Tasks

**Monthly:**
- [ ] Review analytics and user feedback
- [ ] Check for broken links
- [ ] Update "Last Modified" dates in sitemap

**Quarterly:**
- [ ] Audit image optimization and compression
- [ ] Review and update recipe notes with seasonal tips
- [ ] Test all interactive features across browsers

**Yearly:**
- [ ] Full accessibility audit
- [ ] Update dependencies (if any)
- [ ] Refresh testimonials and user reviews

---

## 📊 Performance Baselines

**Current Metrics (as of 2026-02-08):**
- Homepage: ~12-15KB (excluding images)
- Logo: 21KB (optimized from 297KB)
- Largest image: 602KB (gear image, PNG→JPG)
- Total site weight: ~3-4MB (before lazy loading images below fold)

**Goals:**
- Homepage initial load: < 2 seconds on 4G
- Largest Contentful Paint: < 2.5 seconds
- Cumulative Layout Shift: < 0.1

---

## 🗂️ File Organization Notes

**Current Structure:**
```
/basicloaf
├── index.html (homepage)
├── recipe.html (sourdough recipe)
├── focaccia.html (focaccia recipe)
├── advice.html (techniques & tips)
├── starter.html (starter maintenance)
├── bought-starter.html (guide for bought starter)
├── gear.html (equipment recommendations)
├── ideas.html (recipe variations & ideas)
├── about.html (about will & philosophy)
├── style.css (main styles)
├── script.js (interactive features)
├── agents.md (agent instructions)
├── TODO.md (this file)
├── sitemap.xml (SEO)
└── /images (all images)
```

**If more pages needed:**
- Consider static site generator (11ty) when site exceeds 20+ pages
- Currently optimal for no-build-tool approach

---

## 🎯 Next Steps (Priority Order)

1. **Short-term (Next 1-2 weeks):**
   - Monitor if any new bugs arise from recent changes
   - Test all links and interactions thoroughly
   - Gather user feedback on new accessibility features

2. **Medium-term (1-2 months):**
   - Add analytics to understand user behavior
   - Implement lazy loading for images
   - Create troubleshooting guide based on common questions

3. **Long-term (3+ months):**
   - Plan video tutorial content
   - Explore monetization options
   - Consider expanding to sourdough community features

---

## 📝 How to Use This File

**For Users:**
- Add new ideas under appropriate sections
- Mark items as complete with checkmarks
- Add dates and notes for context

**For AI Agents:**
When discussing features or improvements:
1. Check this TODO file to see what's planned
2. Update items as decisions are made
3. Move completed tasks to their respective ✅ status
4. Add new items with clear descriptions for future reference

**Format for new items:**
```
- [ ] [STATUS EMOJI] Brief description
  - Detail 1
  - Detail 2
  - Expected impact or notes
```

---

## 📞 Questions or Suggestions?

If you discover bugs, have feature ideas, or want to prioritize different work:
- Add to the relevant section
- Mark priority level (HIGH/MEDIUM/LOW)
- Include context about why it matters
