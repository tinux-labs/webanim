---
title: Basic Animation
component: "gsap/basics"
category: "gsap"
colors: ["#4D5456", "#676D73"]
date: 2025-07-01
---

This example demonstrates a two-phase animation:

- Fade & Scale In – The `.card` element fades in from `opacity: 0` and
  `scale: 0.5` to its natural state (`opacity: 1; scale: 1`) over 2 seconds.
- Looping Bounce – After that, it starts a subtle bounce effect by animating
  `y: -20` with yoyo and infinite repeat.

#### 🧠 from vs to in GSAP

- `gsap.from()` animates **from the given values to the element's current values**.
- `gsap.to()` animates **from the element's current values to the given values**.

Use from when you want elements to "appear" into place, and to when you want to
move them away from their current state.
