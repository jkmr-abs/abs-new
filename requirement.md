# Services Section — Data-Driven Implementation

Implement the **Services Section** using the existing UI workspace and layout.

The existing Services Section design/space must be preserved.

The goal is to make the Services Section **fully reusable and data-driven** so that any number of services can be added through data without modifying the component structure.

---

## 1. Services Data Structure

Create a dedicated services data file.

Example:

```js
const servicesData = [
  {
    id: "customer-support",
    label: "Customer Support Solution",
    title: "Custom Software Solution",
    description: "...",

    features: [
      {
        icon: "...",
        title: "...",
        description: "..."
      }
    ],

    primaryButton: {
      label: "...",
      href: "..."
    },

    secondaryButton: {
      label: "...",
      href: "..."
    },

    additionalDetails: [
      {
        label: "...",
        value: "..."
      }
    ],

    interaction: {
      type: "..."
    }
  },

  {
    id: "recruitment",
    label: "Recruitment Solution",
    title: "Talent Recruitment",
    description: "...",

    features: [],

    primaryButton: {
      label: "...",
      href: "..."
    },

    secondaryButton: {
      label: "...",
      href: "..."
    },

    additionalDetails: [],

    interaction: {
      type: "..."
    }
  },

  {
    id: "staffing",
    label: "Staffing Solution",
    title: "Staffing Solutions",
    description: "...",

    features: [],

    primaryButton: {
      label: "...",
      href: "..."
    },

    secondaryButton: {
      label: "...",
      href: "..."
    },

    additionalDetails: [],

    interaction: {
      type: "..."
    }
  }
];

export default servicesData;
```

The actual content can be filled from the existing project data/content.

---

# 2. Reusable Services Section

Create one reusable:

```text
ServicesSection
```

component.

It should receive the service data:

```jsx
<ServicesSection services={servicesData} />
```

The component must not contain hardcoded service content.

---

# 3. Dynamic Service Rendering

The component must work with any number of services.

For example:

```text
3 services
→ 3 slides

5 services
→ 5 slides

10 services
→ 10 slides
```

Do not hardcode:

```js
service1
service2
service3
```

Instead, use the provided data array.

---

# 4. Service Slide

Create one reusable:

```text
ServiceSlide
```

component.

Every service should use the same component.

Structure:

```text
ServiceSlide
│
├── Label
├── Title
├── Description
├── Features
├── Action Buttons
├── Additional Details
└── Interaction Panel
```

The content must come from the current service object.

---

# 5. Service Navigation

Create reusable navigation for the Services Section.

It should contain:

```text
Previous    01 / 03    Next
```

The numbers must be generated dynamically.

If there are 5 services:

```text
01 / 05
```

If there are 8 services:

```text
01 / 08
```

Do not hardcode the total number.

---

# 6. Previous / Next Behaviour

When the user clicks `Next`:

```text
Current Service
      ↓
Next Service
```

When the user clicks `Previous`:

```text
Current Service
      ↓
Previous Service
```

The following must update together:

* Label
* Title
* Description
* Features
* Buttons
* Additional details
* Active/highlight state
* Right-side interaction panel

---

# 7. Active Service State

Only the currently selected service should be active/highlighted.

Example:

```text
Customer Support
→ Customer Software = active

Recruitment
→ Talent Recruitment = active

Staffing
→ Staffing Solutions = active
```

The active state must come from the current service index/data.

Do not create separate hardcoded highlight logic for each service.

---

# 8. Fixed Layout / Stable Workspace

The existing Services Section workspace must remain stable.

Changing services must NOT cause:

* Layout jumping
* Feature movement
* Button movement
* Navigation movement
* Right-side interaction movement
* Unexpected height changes

Keep the content areas structurally consistent.

Longer titles/descriptions should be handled within the existing layout without breaking the section.

---

# 9. Right-Side Interaction Panel

The right-side area should remain a dedicated:

```text
InteractionPanel
```

component.

The Services Section should pass the current service's interaction data:

```jsx
<InteractionPanel data={currentService.interaction} />
```

For now, maintain the existing placeholder/dummy interaction if the actual interaction has not been implemented yet.

Later, different service-specific interactions can be connected through the same data structure.

---

# 10. Responsive Behaviour

The existing responsive design must be preserved.

Desktop:

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│   Service Content    │ Interaction Panel    │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

Mobile:

```text
┌──────────────────────┐
│   Service Content    │
├──────────────────────┤
│ Interaction Panel    │
└──────────────────────┘
```

The Services Section must remain usable regardless of the number of services.

---

# 11. Component Architecture

Use a structure similar to:

```text
ServicesSection
│
├── ServiceContent
│   ├── Label
│   ├── SectionTitle
│   ├── Description
│   ├── Features
│   ├── ActionButtons
│   └── AdditionalDetails
│
├── InteractionPanel
│
└── ServiceNavigation
    ├── Previous
    ├── Counter
    └── Next
```

Reuse existing common components where they already exist.

Do not create duplicate components.

---

# 12. Data Flow

The final flow should be:

```text
servicesData
      ↓
ServicesSection
      ↓
Current Service
      ↓
Reusable Components
      ↓
UI
```

Example:

```jsx
const currentService = services[currentIndex];

return (
  <ServicesSection
    service={currentService}
  />
);
```

The UI should always render based on `currentService`.

---

# 13. Adding New Services

The most important requirement:

If I add this:

```js
{
  id: "new-service",
  label: "New Service",
  title: "New Service Title",
  description: "New Service Description",
  features: [...],
  primaryButton: {...},
  secondaryButton: {...},
  additionalDetails: [...],
  interaction: {...}
}
```

to `servicesData`, the Services Section must automatically support it.

I should NOT need to:

* Create another component
* Modify the navigation
* Modify the counter
* Add another `if` condition
* Add another hardcoded slide
* Modify the layout

Everything must work automatically from the data.

---

## Final Requirements

* Preserve the existing Services Section workspace.
* Make the section completely data-driven.
* Support any number of services.
* Use reusable components.
* Keep content separate from UI components.
* Keep navigation dynamic.
* Keep active state dynamic.
* Keep the right-side interaction panel dynamic.
* Prevent layout shifts between services.
* Preserve responsive behavior.
* Do not redesign the existing UI.
* Do not duplicate service-specific components.
* Keep the implementation clean, lightweight and maintainable.
