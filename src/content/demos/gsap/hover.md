---
title: Hover
component: "gsap/hover"
category: "gsap"
colors: ["#CB356B", "#BD3F32"]
date: 2025-07-07
---

This example shows how to use a GSAP timeline to create a hover effect where
two overlapping text layers animate in and out.

```
const tl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "power2.out" }
})
```

- `paused: true`: It waits until you manually call `play()`
- `defaults: {...}`: These values apply to all animations in the timeline.

#### Why Use Timeline Here?

Using a timeline makes it easy to:

- Synchronize animations (text-1 out, text-2 in).
- Reuse the same animation for both hover and exit (with `reverse()`).
- Maintain cleaner, readable animation code.
