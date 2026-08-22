# Stitch Prompt — Personal Website Prototype

> Paste the block below into Stitch to generate wireframe / mid-fidelity prototype screens.
> Reference aesthetic language inspired by [Designprompts](https://www.designprompts.dev) (structured style system + precise constraints).
> **No photography, no avatar, no portrait images.** Use text blocks, labels, and empty geometric frames only.

---

## Prompt (copy from here)

```
Design a multi-page personal portfolio website prototype for An Jiaqi (安佳琪), an AI Product Manager specializing in complex ToB scenarios.

GOAL
Use three representative case studies to prove 0-to-1 product building capability, and provide a clear, low-friction collaboration / contact entry. The prototype should feel like a product system document — not a flashy creative portfolio.

STYLE SYSTEM (Designprompts-inspired)
Name: AI System Editor — Light
Keywords: rational, clear, precise, warm
Visual metaphor: AI system editor / structured product workspace
Layout language:
- generous editor-style whitespace
- process nodes and flowchart-like methodology markers
- data callouts and metric chips as first-class UI
- hairline dividers, aligned columns, calm density
- no decorative glassmorphism, no neon glow, no purple gradients, no card-heavy dashboards

COLOR TOKENS (exact)
- Background: #F4F3EF (warm gray-white)
- Accent / buttons / links: #315EFB (rational blue)
- Data / secondary accent: #1A9A8A (teal)
- Primary text: #18202A (ink blue-black)
- Secondary text: #69717D (cool gray-blue)
- Surfaces: slightly lighter or equal to background; borders soft and thin

TYPOGRAPHY
- Sans-serif UI system (Inter / Geist / IBM Plex Sans equivalent)
- Strong hierarchy: large calm headlines, readable body, mono-style small labels for data / process nodes
- Avoid decorative display serifs and fashion-editorial typography

NO IMAGES RULE
- Do NOT include personal photos, avatars, portraits, product screenshots, or stock photos
- For any media slot (e.g. Contact “professional photo”), show an empty outlined rectangle with a short label such as “Photo placeholder”
- Project covers = text-only frames or abstract geometric blocks, not realistic images

INFORMATION ARCHITECTURE
Navigation labels: Home | About | Contact | Works
- Desktop: fixed top-right navigation; name/brand top-left
- Mobile: name + hamburger menu
- Standard page transitions; each work item opens its own detail page

PAGES TO GENERATE

1) HOME
Sections in this exact order:
A. Personal Positioning
   - Title: An Jiaqi | AI Product Manager for complex ToB scenarios
   - Short supporting line about 0-to-1 product capability in complex enterprise contexts
   - Primary CTA: View Works
   - Secondary CTA: Contact / Collaborate
B. Core Achievements
   - Compact metric / data markers (not a noisy stats dashboard)
   - Example signals: consecutive S performance ratings; national top 2% achievement award; Innovation & Hard Work Pioneer honor
C. Representative Cases (teasers for 3 works)
   - Document Collaboration Platform
   - Intelligent O&M Assistant
   - Enterprise Document Knowledge Base
   - Each item shows title + one-line summary + “Problem → Solution → Result” peek on hover state annotation
D. Product Capabilities
   - Methodology shown as process nodes / sequential capability map (editor / system diagram feel)
E. Honors
   - Short list with precise labels (no badges clutter)
F. Contact entry
   - Minimal strip: work email + CTA to Contact page / resume

2) ABOUT
- Intro: AI Product Manager for complex ToB scenarios
- Experience: AI Product Manager at ZTE (中兴通讯)
- Education: Master’s and Bachelor’s degrees from NUAA (Nanjing University of Aeronautics and Astronautics / 南航)
- Honors: Innovation and Hard Work Pioneer; 4 consecutive “S” performance ratings; National top 2% achievement award
- Keep layout documentary and calm; use timeline or structured field rows, not cards everywhere

3) WORKS (portfolio index)
List three projects only:
1. Document Collaboration Platform
2. Intelligent O&M Assistant
3. Enterprise-level Document Knowledge Base
Each row/block: project name, domain tag (ToB / AI / Collaboration / O&M / Knowledge), one-sentence outcome, link affordance to detail page
No images; use typography + thin rules + optional abstract node graphic

4) WORK DETAIL (template used for all three)
Structure:
- Project title
- Context / problem
- Approach / methodology nodes
- Solution
- Result / measurable impact placeholders
- Back to Works
Keep one consistent template; vary only the text content

5) CONTACT
Fields / blocks (text-first):
- Professional photo placeholder frame (empty, labeled)
- Work email
- WeChat
- GitHub
- Resume download link/button
Keep this page sparse and trustworthy

INTERACTION NOTES (annotate on prototype, do not over-animate)
- Page enter: light fade-in 150–250ms
- Scroll: project/content blocks appear sequentially; methodology nodes “light up” in order
- Hover (Works / case teasers): slight enlarge + reveal Problem–Solution–Result summary overlay text
- First-screen loading: text reveals step-by-step
- Respect prefers-reduced-motion (note this in annotations)

OUTPUT REQUIREMENTS FOR STITCH
- Generate desktop and mobile frames for: Home, About, Works, Work Detail (one sample), Contact
- Mid-fidelity clean UI prototype, production-like spacing, real Chinese or bilingual labels where natural (name can stay bilingual)
- Use the exact palette above
- No real images; placeholders only
- One composition per first viewport on Home: brand/name + positioning + short support + CTA group; avoid stuffing stats into the hero
- Prefer list / editorial / editor panels over card grids
```

---

## Suggested Stitch generation order

1. Home (desktop + mobile)
2. About
3. Works index
4. One Work Detail template
5. Contact

## Notes for iteration

- If Stitch adds photos by default, append: `Strictly text-and-geometry only. Zero photographic assets.`
- If the look becomes generic SaaS purple, append: `Stay on #315EFB / #1A9A8A only. No violet/indigo theme.`
- Closest Designprompts vibe references (for human calibration, not literal copy): Swiss Minimalist, Professional, Enterprise — but reinterpreted as **AI System Editor**.
