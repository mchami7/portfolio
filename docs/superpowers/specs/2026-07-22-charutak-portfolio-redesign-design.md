# Portfolio Structural Redesign

## Goal

Redesign Mira Chami's portfolio around the page hierarchy and interaction model of `charutak.xyz` while preserving Mira's professional identity, confidentiality-safe project content, and existing React data architecture.

## Information Architecture

- The default route is a Work page with a top-right `Work` and `About Me` navigation.
- The Work page opens with a concise, three-line introduction and continues directly into an image-led project grid.
- About content, education, technical experience, CV, LinkedIn, and GitHub move to a separate About Me route.
- Selecting a project opens a dedicated project page with the same shared navigation and footer.
- Existing hash routing remains in use for static-host compatibility.

## Visual System

- Use an airy blue-white background, charcoal text, white project surfaces, subtle shadows, and restrained dark active controls.
- Use a rounded geometric sans-serif with lightweight body copy and selectively bold phrases.
- Add a low-contrast connecting-line background motif without copying the reference site's artwork.
- Project cards use imagery as the primary surface, with title and role metadata revealed in a dark hover/focus overlay.
- Recent confidential projects use intentionally blank media surfaces rather than invented or identifying project artwork.

## Pages

### Work

- Shared top navigation.
- Three-line introduction tailored to Mira's role.
- Three-column desktop project grid, two columns on tablet, one column on mobile.
- Recent work appears first, followed by older work, without the current employer framing interrupting the image grid.
- Shared contact footer.

### About Me

- Two-column introduction with an original profile graphic in the portrait position.
- Preserve the personal statements about technology, art, and favourite games.
- Continue with compact education and technical-experience sections.
- Include direct CV, LinkedIn, and GitHub actions.
- Shared contact footer.

### Project Detail

- Shared navigation.
- Full-width hero image or original confidential-project cover with title overlay.
- Introductory two-column area: narrative on the left, role/year/technology on the right.
- Preserve all existing detail sections, bullet points, links, and galleries.
- Render galleries as spacious image-led blocks rather than small framed thumbnails.
- Shared contact footer.

## Responsive And Accessibility Requirements

- Maintain readable line lengths and prevent horizontal overflow from 320px upward.
- Keep navigation available without overlap on mobile.
- Make card overlays visible on keyboard focus and touch layouts, not only mouse hover.
- Preserve semantic headings, lists, alt text, focus indicators, and descriptive link labels.
- Respect reduced-motion preferences.

## Constraints

- Do not expose confidential project names, product names, internal screenshots, or employer-only technical documentation.
- Do not change the meaning of Mira's portfolio copy.
- Do not copy source code, imagery, or background artwork from the reference site.
- Keep the existing Vite, React, TypeScript, and hash-routing setup.
