# AGENTS.md

## Project Overview

This repository contains a collection of mini web applications built using only:

- HTML5
- CSS3
- Vanilla JavaScript

The project acts as a hub where users can access different mini applications from a single homepage.

Examples of mini applications include:

- Piano
- QR Code Generator
- Calculator
- Mini Games
- Timer
- Stopwatch
- Text Utilities
- Color Picker
- and many more.

The project must remain lightweight and should not depend on frameworks unless explicitly requested.

---

## Folder Structure

```
/
│
├── index.html          # Main homepage
├── style.css           # Global styles for homepage
├── assets/             # Images, icons, audio, fonts, etc.
│
└── projects/
    ├── calculator/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    │
    ├── piano/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    │
    └── ...
```

Every mini app lives inside its own folder.

Each mini app should be isolated and should not break other projects.

---

## Development Rules

When modifying code:

- Never break existing mini applications.
- Keep every mini app independent.
- Avoid global JavaScript conflicts.
- Avoid global CSS conflicts.
- Reuse assets when appropriate.
- Keep the code clean and readable.
- Prefer simple Vanilla JavaScript solutions.
- Avoid unnecessary libraries.
- Write semantic HTML.
- Use modern CSS.

---

## Homepage Rules

The homepage (index.html) is the entry point.

It should:

- Display all mini apps.
- Be fully responsive.
- Load quickly.
- Use clean card-based layouts.
- Allow easy navigation to every project.

Adding a new mini app should only require:

1. Creating a new folder inside `projects/`
2. Adding its files
3. Adding one card on the homepage

---

## Responsive Design

Every page must work correctly on:

- Desktop
- Laptop
- Tablet
- Mobile

Use flexible layouts.

Avoid fixed widths whenever possible.

---

## JavaScript Guidelines

Prefer:

- const
- let
- arrow functions
- addEventListener()

Avoid:

- inline JavaScript
- global variables
- duplicated code

---

## CSS Guidelines

Prefer:

- CSS variables
- Flexbox
- Grid
- Mobile-first design
- Reusable utility classes

Avoid:

- !important unless absolutely necessary
- deeply nested selectors
- duplicated styles

---

## Naming

Use lowercase names.

Examples:

calculator

qr-generator

typing-speed-test

Avoid spaces.

---

## Performance

Keep pages lightweight.

Optimize:

- Images
- Audio
- Animations

Do not load unnecessary assets.

---

## Accessibility

Whenever possible:

- Use semantic HTML.
- Add alt attributes.
- Keep sufficient color contrast.
- Support keyboard interaction.

---

## Code Style

Write code that is:

- readable
- maintainable
- modular
- beginner-friendly

Favor clarity over cleverness.

---

## AI Instructions

When generating code:

- Respect the existing folder structure.
- Do not rename files unless requested.
- Do not introduce build tools.
- Do not introduce frameworks.
- Keep everything compatible with modern browsers.
- Preserve existing functionality unless explicitly asked to modify it.