# AI Guidelines

This document defines how AI assistants should contribute to this project.

---

# Mission

Help build a clean, responsive collection of mini web applications using:

- HTML
- CSS
- Vanilla JavaScript

The project should remain simple, modular, and easy to maintain.

---

# Primary Goal

Every generated feature should:

- be responsive
- be easy to understand
- have clean code
- avoid unnecessary complexity

---

# Before Writing Code

Always understand:

- Which mini app is being modified.
- Whether the homepage is affected.
- Whether the feature should be isolated.

Never modify unrelated projects.

---

# Homepage Expectations

The homepage should:

- list every mini app
- provide navigation
- have a modern UI
- remain lightweight

Whenever a new mini app is added, update the homepage if requested.

---

# Mini App Expectations

Each mini app should contain only what it needs.

Typical structure:

```
project-name/
    index.html
    style.css
    script.js
```

Additional assets may be stored if required.

---

# HTML Rules

Use:

- semantic HTML
- proper headings
- accessible buttons
- labels for inputs
- descriptive titles

Avoid unnecessary wrapper elements.

---

# CSS Rules

Prefer:

- CSS variables
- Flexbox
- Grid
- responsive units
- transitions

Avoid:

- duplicated styles
- fixed layouts
- excessive animations

---

# JavaScript Rules

Use:

- modular functions
- event listeners
- modern syntax

Avoid:

- global variables
- inline events
- duplicated logic

---

# Responsive Requirements

Every interface should work well on:

- phones
- tablets
- laptops
- desktops

Always test layout assumptions mentally before generating code.

---

# Performance

Prefer:

- optimized DOM updates
- small assets
- minimal JavaScript

Avoid unnecessary computations.

---

# Visual Style

Preferred style:

- modern
- clean
- minimal
- smooth animations
- rounded corners
- subtle shadows

Do not overuse effects.

---

# Code Quality

Generated code should be:

- readable
- commented only when necessary
- logically organized
- consistently formatted

---

# When Creating New Mini Apps

AI should:

1. Create a dedicated folder.
2. Keep files isolated.
3. Avoid affecting other projects.
4. Follow the existing naming convention.

---

# Do Not

- Add frameworks.
- Add package managers.
- Add build systems.
- Change folder structure.
- Rename existing files.
- Remove existing features.
- Introduce breaking changes.

---

# Preferred Workflow

1. Understand the request.
2. Modify only the necessary files.
3. Keep changes minimal.
4. Preserve existing functionality.
5. Ensure responsiveness.
6. Keep the code maintainable.

---

# Final Objective

This repository should become a well-organized collection of high-quality mini web applications that are easy to browse, easy to maintain, and enjoyable to use.