---
title: Repeat
component: "gsap/repeat"
category: "gsap"
colors: ["#283c86", "#45a247"]
date: 2025-07-03
tags: ["core"]
---

This example demonstrates how to use GSAP to create a basic horizontal animation
and control its behavior using the yoyo feature. We use `gsap.fromTo()` to move
a box from left to right infinitely using `repeat: -1`, and a checkbox toggles
whether the animation reverses direction after each cycle.

It’s a simple yet powerful way to explore how repeating animations work and how
to enhance them with `yoyo` for a natural back-and-forth motion—something often
used in UI elements like loaders, sliders, or playful transitions.

- A repeat value of -1 makes the animation loop forever.
- When yoyo is enabled, the tween alternates direction, going forward then
  backward in each cycle.
- When yoyo is disabled, the animation resets to the starting point after each
  cycle, repeating in the same direction.

By toggling the checkbox, the animation is updated dynamically using
`tween.yoyo(...)` and restarted with `tween.restart()`, giving real-time control
over the animation behavior.
