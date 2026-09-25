# Abstract Business Systems — Engineering Guide for AI Agents

> **Status:** Authoritative repository guidance  
> **Scope:** All AI-assisted development in this repository

This document defines how agents must understand, extend, and validate the ABS Studio application. The existing architecture is the source of truth. New work should extend that architecture rather than introduce a parallel component, data, styling, or interaction system.

---

## 1. Project Profile

| Area | Current implementation |
|---|---|
| Framework | React with Vite |
| Entry point | `src/main.jsx` |
| Application shell | `src/App.jsx` |
| Primary page | `src/pages/Home/index.jsx` |
| Styling | Tailwind CSS via PostCSS |
| Routing | No router; section navigation uses `scrollIntoView` |
| State | Local React state only; no context or global state manager |
| Icons | `lucide-react` |
| Data source | `src/data/data.js` |
| 3D status | Three.js dependencies are installed for future work; current visuals use placeholders |
| Validation scripts | `npm run dev`, `npm run build`, `npm run preview` |
| Lint/test scripts | None currently defined in `package.json` |

### Design language

- Dark ABS visual system built around `abs-ink`, `abs-panel`, `abs-text`, `abs-muted`, `abs-orange`, `abs-orange-soft`, and `abs-line`.
- `DM Sans` is the primary sans-serif font.
- `Space Grotesk` is the display font.
- Full-screen sections use vertical scroll snapping.
- Desktop sections use a content/interaction split; mobile sections stack vertically.

---

## 2. Repository Map

```text
src/
├── App.jsx                         Application shell and scroll behavior
├── main.jsx                        React bootstrap
├── index.css                       Tailwind layers and global base rules
├── components/
│   ├── Button.jsx                  Base button
│   ├── Footer.jsx                  Global footer
│   ├── InteractionPanel.jsx        Right-side interaction wrapper
│   ├── InteractionPlaceholder.jsx  Placeholder visual
│   ├── Logo.jsx                    Shared brand lockup
│   ├── Navbar.jsx                  Global navigation
│   ├── PrimaryContentPanel.jsx     Standard left content panel
│   ├── SectionBlock.jsx             Full-screen section layout
│   ├── SectionLabel.jsx             Re-export of common Label
│   ├── navigation.js               Re-export of data.navigation
│   └── common/                     Shared UI primitives and adapters
├── data/
│   └── data.js                     Centralized site content
└── pages/
    └── Home/
        ├── index.jsx
        ├── Hero/
        ├── Services/
        ├── Expertise/
        ├── Clients/
        └── Teams/

public/
├── logo.svg
├── favicon.ico
├── logo192.png
└── logo512.png
```

Do not create a second `data` directory, page layout system, or component hierarchy without a documented architectural reason.

---

## 3. Component Registry

### Application and layout

| Component | Location | Use it for |
|---|---|---|
| `App` | `src/App.jsx` | The app shell, scroll container, active-section observation, and section navigation. |
| `Navbar` | `src/components/Navbar.jsx` | Fixed global header, desktop navigation, mobile menu, active state, and project CTA. |
| `Footer` | `src/components/Footer.jsx` | The final snap section and all footer resources. |
| `Logo` | `src/components/Logo.jsx` | The shared ABS logo and brand lockup. |
| `SectionBlock` | `src/components/SectionBlock.jsx` | Full-screen snap sections with shared content and interaction layout. |
| `PrimaryContentPanel` | `src/components/PrimaryContentPanel.jsx` | Standard label/title/description/action composition. |
| `InteractionPanel` | `src/components/InteractionPanel.jsx` | The right-side visual or interactive area. |
| `InteractionPlaceholder` | `src/components/InteractionPlaceholder.jsx` | Temporary visual content until a real interaction or 3D experience exists. |

### Shared UI primitives

| Component | Location | Use it for |
|---|---|---|
| `Button` | `src/components/Button.jsx` | Base primary and outline button styles. |
| `PrimaryButton` | `src/components/common/PrimaryButton.jsx` | Data-driven primary button adapter. |
| `SecondaryButton` | `src/components/common/SecondaryButton.jsx` | Data-driven outline button adapter. |
| `ActionButtons` | `src/components/common/ActionButtons.jsx` | Optional primary/secondary CTA group. |
| `Label` | `src/components/common/Label.jsx` | Shared section label markup and styling. |
| `SectionLabel` | `src/components/SectionLabel.jsx` | Compatibility re-export of `Label`; do not duplicate label markup. |
| `SectionTitle` | `src/components/common/SectionTitle.jsx` | Data-driven headings, explicit lines, and highlighted words. |
| `Description` | `src/components/common/Description.jsx` | Optional descriptions; returns `null` when no text is provided. |
| `Features` | `src/components/common/Features.jsx` | Data-driven icon feature lists. |
| `AdditionalDetails` | `src/components/common/AdditionalDetails.jsx` | Supplemental values, labels, and descriptions. |
| `Stats` | `src/components/common/Stats.jsx` | Hero statistics composed from `AdditionalDetails`. |
| `SlideNavigation` | `src/components/common/SlideNavigation.jsx` | Reusable previous/next controls and slide counter. |

### Home sections

| Component | Location | Use it for |
|---|---|---|
| `Home` | `src/pages/Home/index.jsx` | Page composition and data injection. |
| `HeroSection` | `src/pages/Home/Hero/HeroSection.jsx` | Hero content, CTAs, stats, and interaction placeholder. |
| `ServicesSection` | `src/pages/Home/Services/ServicesSection.jsx` | Service carousel state and current-service interaction panel. |
| `ServiceSlide` | `src/pages/Home/Services/ServiceSlide.jsx` | Reusable service content structure. |
| `ServiceNavigation` | `src/pages/Home/Services/ServiceNavigation.jsx` | Services adapter around `SlideNavigation`. |
| `ServiceTitleFrame` | `src/pages/Home/Services/ServiceTitleFrame.jsx` | Services-specific title wrapper. |
| `ExpertiseSection` | `src/pages/Home/Expertise/ExpertiseSection.jsx` | Expertise content and interaction placeholder. |
| `ClientsSection` | `src/pages/Home/Clients/ClientsSection.jsx` | Client content, supporting blocks, and interaction placeholder. |
| `TeamsSection` | `src/pages/Home/Teams/TeamsSection.jsx` | Team content and interaction slots. |

---

## 4. Data Contract

All editable site content belongs in:

```text
src/data/data.js
```

The current top-level data shape is:

```js
data.navigation
data.hero
data.servicesLabel
data.services
data.expertise
data.clients
data.teams
data.footer
```

### Data rules

1. Add or update content in `src/data/data.js`, not directly in JSX.
2. Pass data into sections and shared components through props.
3. Render repeated content with `.map()` and stable IDs.
4. Keep optional fields optional. Use conditional rendering rather than empty wrappers.
5. Do not add empty strings, invisible nodes, or fixed space to simulate missing content.
6. Keep the common Services label in `data.servicesLabel`; an individual service label must not replace it.
7. Add a service or feature by extending the relevant array before creating a new component.
8. Keep interaction configuration with the relevant data object so the current service can drive its interaction panel.

Example service shape:

```js
{
  id: 'talent-recruitment',
  label: 'Recruitment Solution',
  title: 'Talent Recruitment',
  description: 'Optional description',
  features: [
    {
      id: 'recruitment-feature-1',
      icon: 'circle',
      title: 'Talent sourcing',
      description: 'Feature details'
    }
  ],
  primaryButton: null,
  secondaryButton: null,
  additionalDetails: [],
  interaction: { type: 'lp-double-wave-placeholder' }
}
```

---

## 5. Approved Composition Patterns

### Standard section

Use `SectionBlock` with the default content panel when the section follows this structure:

```text
Label
Title
Optional description
Optional actions
Interaction panel
```

### Custom left content

Use `SectionBlock` with `primaryContent` only when the left side has genuinely different behavior, as in `ServicesSection`. Compose the custom content from existing primitives such as `Label`, `SectionTitle`, `Description`, `Features`, `ActionButtons`, and `SlideNavigation`.

### Desktop and mobile layout

```text
Desktop: left content | right interaction
Mobile:  left content
         right interaction
```

Do not create another grid or section wrapper to reproduce this pattern.

### Services carousel

```text
data.services
  ↓
Home
  ↓
ServicesSection
  ↓
ServiceSlide + ServiceNavigation
  ↓
Features / Description / ActionButtons / AdditionalDetails / SlideNavigation
```

`ServicesSection` owns the active index. `ServiceSlide` receives the current item. Navigation must update the title, optional description, features, buttons, details, counter, and current interaction together.

### Feature list

Use `Features` with an array. It must support the number of items supplied by data; do not create separate components for three-feature or four-feature services.

### Actions and details

Use `ActionButtons`, `PrimaryButton`, `SecondaryButton`, `Stats`, and `AdditionalDetails` rather than repeating their markup in a page section.

---

## 6. Non-Negotiable Reuse Rules

### Before creating a component

Search, in this order:

1. `src/components/`
2. `src/components/common/`
3. The relevant page or section folder
4. `src/data/data.js`
5. Existing Tailwind classes and design tokens
6. Existing icons and assets

### Reuse priority

```text
Existing component
      ↓
Existing component composition
      ↓
Existing data structure
      ↓
Existing styles and tokens
      ↓
Small reusable component
      ↓
Page-specific component only when truly necessary
```

### Prohibited duplication

Do not create parallel versions of:

- `Button`
- `Label` / `SectionLabel`
- `SectionTitle`
- `Description`
- `Features`
- `SlideNavigation`
- `InteractionPanel`
- `SectionBlock`
- `Navbar`
- `Footer`

Avoid names such as `HeroButton`, `RecruitmentFeatures`, `CustomSectionBlock`, or `NewPrimaryButton` when the existing components can be composed.

A new component is acceptable only when it represents a real reusable pattern that the current registry cannot provide.

---

## 7. Styling and Responsive Standards

### Styling

- Use Tailwind utility classes and existing tokens.
- Reuse colors defined in `tailwind.config.js`.
- Reuse `DM Sans` and `Space Grotesk`.
- Reuse existing borders, glows, spacing, shadows, snap behavior, and transitions.
- Do not introduce SCSS, CSS modules, a second utility system, or unnecessary global CSS.
- Keep local layout changes local to the affected component or section.

### Responsive behavior

- Follow the existing mobile-first Tailwind system.
- Reuse the existing `sm`, `md`, and `lg` breakpoints; `lg` is the primary desktop layout breakpoint.
- Preserve full-screen sections and the desktop two-column/mobile-stacked behavior.
- Check mobile, tablet, laptop, and desktop layouts.
- Prevent horizontal overflow, content clipping, unexpected height expansion, and hidden content.
- Do not use `overflow: hidden` to conceal real content.
- Do not use fixed heights or artificial spacing to compensate for missing optional content.

### Section dimensions

Do not change global section dimensions to solve a local content problem. Prefer a Services-specific or component-specific fix when the issue belongs to Services.

---

## 8. Assets, Icons, and Animation

### Assets

- Search `public/` before adding an asset.
- Reuse `/logo.svg`, the existing favicon, and existing PNG assets.
- Do not add duplicate logos, fonts, or image assets without a clear requirement.

### Icons

- Use `lucide-react`, the existing icon system.
- Extend the existing `Features` icon map only when necessary.
- Do not add a second icon library without explicit approval.

### Animation and 3D

- Reuse the existing Tailwind `float` animation and transition patterns.
- Do not add an animation library when CSS/Tailwind is sufficient.
- Do not introduce a Three.js canvas in place of placeholders unless explicitly requested.
- Keep future 3D content isolated behind `InteractionPanel` and `InteractionPlaceholder`.

---

## 9. State and Interaction Rules

- `App` owns section navigation and active-section detection.
- `Navbar` and `Footer` use the existing `onNavigate` callback.
- Do not create a second navigation mechanism.
- `ServicesSection` owns service slide state.
- Reuse `SlideNavigation` for carousel controls and counters.
- Use local React state for local UI behavior.
- Do not add context or a global state library without a demonstrated cross-page need.
- Preserve existing props, callbacks, data attributes, and interaction behavior when changing a shared component.

---

## 10. Scope Control

For a request that affects one section:

- Modify only that section and the smallest required shared component.
- Do not change Hero, Expertise, Clients, Teams, Footer, Navbar, or global typography unless a shared fix is necessary and proven safe.
- Do not perform unrelated refactors.
- Do not rewrite working components to introduce a preferred personal architecture.

---

## 11. Git Safety

Before significant work, run:

```bash
git status --short
git log --oneline --all --decorate
```

For established behavior, inspect relevant history and previous implementations before editing:

```bash
git show <commit>
git diff <old-commit> <current-commit> -- <affected-files>
```

Rules:

- Do not overwrite unrelated work.
- Do not revert unrelated changes.
- Keep changes scoped to the request.
- Commit only when the user explicitly asks for a commit.
- Use a focused commit message when committing.

---

## 12. Validation Checklist

After implementation:

### Static validation

- Confirm imports and exports.
- Check changed-file diagnostics.
- Run:

```bash
npm run build
```

There is no lint or test script currently defined in `package.json`.

### Functional validation

- Verify global navigation and active section state.
- Verify service carousel previous/next behavior and counter.
- Verify optional descriptions, buttons, and details do not create empty layout space.
- Verify the current service drives the right-side interaction metadata.

### Responsive validation

- Check desktop, laptop, tablet, and mobile widths.
- Check for horizontal overflow and vertical clipping.
- Check that full-screen snap sections still behave correctly.
- Check that right-side panels remain aligned and contained.

### Browser validation

When the change affects UI or interaction, check the browser console for new errors or warnings. A successful build is required, but it is not sufficient for visual or interactive changes.

---

## 13. Required Agent Workflow

```text
1. Read the request and identify the affected page, section, data, and interaction.
2. Inspect git status and relevant history.
3. Search existing components, data, styles, assets, and interactions.
4. Identify the closest approved composition pattern.
5. Make the smallest scoped change.
6. Validate imports and diagnostics.
7. Run npm run build.
8. Check affected responsive and interactive states.
9. Report changed paths and validation results.
10. Commit only when requested.
```

Before writing a new component, ask:

> **What already exists that can be reused or composed?**

The answer must be established from the repository, not assumed.
