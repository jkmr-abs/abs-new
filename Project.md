ABS Website - React + Three.js + Tailwind CSS Project Architecture

1. Project Overview

This project is a modern, dark-themed, 3D-integrated portfolio/corporate website built for "ABS". The site features a full-screen snapping scroll experience, a unified grid layout for sections, and placeholders for future Three.js 3D interactions.

2. Tech Stack Requirements

Framework: React.js (Vite or Next.js recommended)

Styling: Tailwind CSS + SCSS (for custom gradients and glows)

3D Rendering: Three.js (via @react-three/fiber and @react-three/drei for future scalability)

Scrolling/Animation: Native CSS Scroll Snapping (scroll-snap-type) or framer-motion for smooth section transitions.

3. Theme & Color System

The AI generating the code MUST use the following color tokens and gradients.

Tailwind Configuration (tailwind.config.js requirements)

Add these strictly under theme.extend.colors.abs:

orange: #ff671d (Primary Accent)

orange-soft: #ffad82 (Secondary Accent)

ink: #050608 (Page Background)

panel: #111318 (Card Surface)

text: #f7f7f5 (Headings)

muted: #a5a8ae (Body text)

line: rgba(255, 255, 255, 0.14) (Dividers)

SCSS Variables & Gradients (App.scss requirements)

App Background: radial-gradient(circle at 82% 13%, rgba(255, 89, 15, 0.14), transparent 24rem), linear-gradient(180deg, #050608 0%, #090a0d 48%, #060709 100%)

Showcase Panel: linear-gradient(112deg, rgba(32, 34, 39, 0.83), rgba(7, 8, 11, 0.92))

Header Blur: backdrop-filter: blur(18px) with background rgba(5, 6, 8, 0.66)

Glow Effects: Use Box Shadows primarily centered around #ff671d (e.g., 0 0 2.8rem rgba(255, 103, 29, 0.13) for cards).

4. App Architecture & Layout

4.1 Global Scrolling Behavior (Critical Requirement)

Full-Screen Sections: Every section must take exactly 100vh (100% of the viewport height) and 100vw.

Scroll Snapping: The main container must have overflow-y: scroll and scroll-snap-type: y mandatory.

Section Snapping: Each individual section (<section>) must have scroll-snap-align: start. This ensures that a slight scroll automatically snaps to the next section perfectly.

Navigation Click Behavior: Clicking a Navbar menu item must use scrollIntoView({ behavior: 'smooth' }) to snap directly to that section without stopping halfway.

4.2 Navbar Specifications

Position: Fixed at the top, z-index: 50, glassmorphism effect (blur + transparent background).

Menu Items: Home, Service, Expertise, Client, Team.

Active State: The active menu item should have an abs-orange text color or an active ring indicator.

4.3 Universal Section Layout (The Grid System)

Every section (Home, Service, Expertise, Client, Team) must follow a strict CSS Grid layout.

Container: CSS Grid with 2 columns (grid-cols-2).

Left Column (Content):

Contains the Section Title (abs-text color).

Contains descriptions, buttons, and text content (abs-muted color).

Vertically centered.

Right Column (3D Placeholder):

Currently: A visually appealing dummy image or an empty abs-panel with an abs-line border.

Future-proofing: This container must be isolated so a <Canvas> (Three.js) can easily replace the image later.

4.4 Footer Specifications

Position: Can be the final snap section or appended to the bottom of the "Team" section.

Layout Structure (Flex/Grid):

Left Side: Contact Email (mailto: link) + LinkedIn Profile link.

Center: Quick Links (Home, Services, etc.).

Right Side: Company Logo, followed by the physical address below it.

Bottom: Copyright text in abs-text-subtle (#858b96).

5. Development Steps for the AI (Prompt Guide)

When feeding this to a code-generation AI, instruct it to:

Initialize the React app and install tailwindcss.

Setup tailwind.config.js with the exact abs-* color tokens provided.

Create an App.scss file dumping all the gradient and glow CSS variables.

Create a <Layout> component containing the Navbar and Footer.

Create a <SectionBlock> wrapper component that handles the scroll-snap-align: start, h-screen, and the 50/50 Grid Layout (Left Content, Right Dummy Image).

Build out the 5 pages (Home, Service, Expertise, Client, Team) using the <SectionBlock>.

Implement the Scroll container logic in App.jsx to ensure smooth snapping.