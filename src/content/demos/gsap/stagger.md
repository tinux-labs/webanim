---
title: Stagger
component: "gsap/stagger"
category: "gsap"
colors: ["#642B73", "#C6426E"]
date: 2025-07-05
---

Stagger in GSAP allows you to delay the start of animations between multiple
elements, creating a cascading or wave-like effect. Instead of all elements
animating at the same time, each one starts slightly after the previous.

This is especially useful for:

- Animating lists or grid items.
- Sequential entrance effects.
- Creating rhythm and emphasis in UI animations.

### How stagger works

```
{
  stagger: 0.2
}
```

- First element starts immediately.
- Second starts 0.2 seconds later.
- Third starts 0.4 seconds later, and so on.

You can also use advanced stagger options like:

```
stagger: {
  each: 0.2,         // time between each element
  from: "center",    // animation starts from the middle element
  grid: "auto",      // use with grids
  ease: "power1.in"  // stagger easing
}
```
