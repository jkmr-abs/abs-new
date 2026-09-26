I need to update my existing Footer component to match a new layout structure. I am using [React/Next.js and Tailwind CSS - update if different]. Please refactor my existing code to match the new 4-section layout described below. Keep the existing dark theme, fonts, and colors, but update the HTML/JSX structure and styling classes to achieve this exact layout.

Please update it to match this exact target structure:

**Section 1: Top Header (Split Layout - Flexbox space-between)**
- Left side: Sub-heading "GET IN TOUCH" (accent color), Main Heading "Have A Good Feeling?" (large, bold), and description "Let's turn your ideas into meaningful outcomes."
- Right side (Aligned right): Sub-heading "START A CONVERSATION" (accent color), Email link "sales@abstractit.in", and text "Chennai, India". Wrap this right side in a subtle bordered container if possible.

**Section 2: What Happens Next (Full Width Box)**
- A full-width container with a thin border and rounded corners.
- Top-left inside: "WHAT HAPPENS NEXT".
- Below that, a flex/grid layout with 3 equally spaced steps:
  1. "01 Tell us your needs" (include a minimal user/user-group icon)
  2. "02 Shape the solution" (include a minimal handshake icon)
  3. "03 Move forward together" (include a minimal arrow icon)
- Highlight the numbers (01, 02, 03) with the accent color.

**Section 3: Main Navigation (4-Column Grid)**
- Column 1: Company Logo + "Abstract Business Systems", followed by address "4/67, 4th North Cross St, Neelankarai, Chennai - 600041".
- Column 2: Heading "SERVICES", Links: "Expertise", "Staffing", "Development".
- Column 3: Heading "QUICK LINKS", Links: "Home", "Team", "Clients".
- Column 4: Heading "SOCIAL LINKS", Links: "LinkedIn ↗", "Instagram ↗".

**Section 4: Bottom Bar**
- A thin top border/divider.
- Left side: "© 2026 Abstract Business Systems. All rights reserved."
- Right side: "Privacy policy | Terms & conditions".

Ensure the layout is fully responsive (stacking smoothly on mobile). Provide the updated code.