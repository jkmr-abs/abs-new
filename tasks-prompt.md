# Task 1 & Task 2 — Data Architecture and Services UI Refinement

## Important Execution Rule

These are **two separate tasks**.

**Task 1 must be completed and verified first.**

Only after Task 1 is completely finished should Task 2 be started.

Do not combine both tasks into one implementation.

Do not modify unrelated components or functionality.

---

# TASK 1 — Centralize All Website Data

## Objective

Refactor the current data architecture so that **all website content comes from one centralized data source**.

Currently, section-specific data files may exist inside individual component/section folders, such as:

```text
Hero/
  HeroSection.jsx
  heroData.js

Services/
  ServicesSection.jsx
  servicesData.js

Expertise/
  ExpertiseSection.jsx
  expertiseData.js
```

This structure must be changed.

### Required Architecture

Create one central data location:

```text
src/
├── data/
│   └── data.js
│
├── components/
│   ├── Hero/
│   ├── Services/
│   ├── Expertise/
│   ├── Clients/
│   ├── Teams/
│   └── ...
```

The exact existing project structure should be preserved where possible, but **all content/data must originate from the central data file**.

---

## Central Data File

Create/use:

```text
src/data/data.js
```

This should become the **single source of truth for website content**.

It should contain the required data for:

* Navigation
* Hero
* Services
* Expertise
* Clients
* Teams
* Footer
* Other existing page/section content

Do not create separate data files beside individual section components.

---

## Data Structure

Keep the data organized by section.

Example:

```js
const data = {
  navigation: {
    // navigation data
  },

  hero: {
    // hero data
  },

  services: [
    // service data
  ],

  expertise: [
    // expertise data
  ],

  clients: {
    // client data
  },

  teams: [
    // team data
  ],

  footer: {
    // footer data
  }
};

export default data;
```

The exact fields should match the existing website requirements.

Do not unnecessarily change existing content.

---

## Component Data Flow

Components should import data from the centralized file.

Example:

```jsx
import data from "@/data/data";
```

Then:

```jsx
<HeroSection data={data.hero} />
```

and:

```jsx
<ServicesSection data={data.services} />
```

The components should be responsible for **rendering the UI**.

The central data file should be responsible for **providing the content**.

---

## Important Rules for Task 1

* Do not duplicate data.
* Do not keep section-specific data files.
* Do not hardcode content inside reusable components.
* Do not change the visual design.
* Do not change the existing content unnecessarily.
* Do not change functionality unnecessarily.
* Do not restructure unrelated code.
* Remove obsolete section-level data files only after their data has been safely migrated.
* Make sure every component imports data from the central source.
* Verify that no old data import remains.
* Verify that the application builds successfully after the migration.

### Task 1 Completion Condition

Task 1 is considered complete only when:

* [ ] `src/data/data.js` exists.
* [ ] Required website content is centralized.
* [ ] Sections consume data from the central data source.
* [ ] Old section-level data files/imports are no longer being used.
* [ ] No content is accidentally lost.
* [ ] Application works exactly as before.
* [ ] No console/build errors are introduced.

**Stop after Task 1 and verify the implementation before starting Task 2.**

---

# TASK 2 — Services Section Responsive & Layout Refinement

After Task 1 is fully completed, refine only the **Services Section**.

## Objective

The Services Section must remain visually stable, responsive and contained within the intended screen boundaries.

The section should not overflow horizontally or vertically because of different content lengths.

---

# Services Section Structure

The Services section should follow this general structure:

```text
Services Section
│
├── Label
├── Title
├── Description (optional)
├── Features
├── Navigation Controls
└── Right Interaction Panel
```

The structure must be driven by the service data.

---

# Standard Service Content

A service item may contain:

```js
{
  label,
  title,
  description,
  features,
  primaryButton,
  secondaryButton,
  additionalDetails,
  interaction
}
```

Not every service necessarily has every property.

For example, one service may have:

```js
{
  label,
  title,
  description,
  features
}
```

while another may have:

```js
{
  label,
  title,
  features
}
```

The UI must handle both cases correctly.

---

# Optional Description Handling

This is extremely important.

If a service has a description:

```text
Label
↓
Title
↓
Description
↓
Features
```

If a service does NOT have a description:

```text
Label
↓
Title
↓
Features
```

Do **not** reserve an empty description area.

Do not leave an unnecessary blank vertical gap.

Do not use an empty placeholder merely to preserve the description's space.

The next available content should naturally move upward.

---

# Features

Features should be rendered dynamically from the service data.

For example:

```js
features: [
  {
    icon,
    title,
    description
  },
  {
    icon,
    title,
    description
  },
  {
    icon,
    title,
    description
  }
]
```

The component must support any reasonable number of features.

Do not hardcode exactly three or four features.

Each feature should use the existing icon-based visual treatment.

---

# Service Navigation

The Services section should contain the existing Previous / Next navigation.

The navigation should:

* Stay inside the Services section.
* Never overflow outside the intended screen/container.
* Remain aligned with the service content.
* Update the current service correctly.
* Maintain the existing visual design.

Example:

```text
Previous    01 / 03    Next
```

The total number must come dynamically from the services data.

---

# Screen Containment

All Services content must remain within the intended screen/container.

Check:

* Left content width
* Right interaction panel width
* Horizontal spacing
* Feature width
* Title wrapping
* Description wrapping
* Button width
* Navigation position
* Mobile viewport width

There must be no unwanted:

```text
horizontal overflow
content clipping
unexpected page width expansion
layout breaking
```

---

# Responsive Behaviour

The Services section must work correctly across:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop should maintain the intended left/right layout.

Mobile should stack naturally without breaking the design.

Content should never force the page outside the viewport.

---

# Content-Driven Layout

Do not solve responsive problems by hiding actual content.

The real content must remain visible.

Instead, correctly manage:

* Width
* Max-width
* Flex/grid behavior
* Text wrapping
* Gap
* Padding
* Container sizing
* Feature layout
* Button sizing

Use the existing design system wherever possible.

---

# Visual Consistency

The Services section should maintain a consistent visual structure across all service items.

Changing from one service to another should not cause unnecessary layout jumps.

For example:

```text
Service A
Label
Title
Description
Features
Navigation
```

and:

```text
Service B
Label
Title
Features
Navigation
```

should both look naturally aligned without creating an artificial empty description area.

---

# Final Verification

After completing Task 2, test every service item from the centralized data.

Verify:

* [ ] Label renders correctly.
* [ ] Title renders correctly.
* [ ] Description renders only when available.
* [ ] No empty description gap exists.
* [ ] Features render correctly.
* [ ] Feature icons remain inside the layout.
* [ ] Previous/Next controls remain inside the section.
* [ ] Right interaction panel remains aligned.
* [ ] No horizontal overflow occurs.
* [ ] No content gets pushed outside the viewport.
* [ ] Desktop layout works.
* [ ] Mobile layout works.
* [ ] Different content lengths do not break the UI.
* [ ] No console errors are introduced.

---

## Critical Constraints

Do NOT:

* Redesign the Services section.
* Change the existing visual identity.
* Create additional data files.
* Hardcode service-specific content inside components.
* Add unnecessary wrappers.
* Add artificial empty spacing.
* Hide content to solve overflow.
* Modify unrelated sections.
* Change the existing interaction behavior unless required for the layout fix.

The final result must be:

**Centralized data → reusable components → stable Services UI → responsive layout → zero unnecessary layout gaps/overflow.**
