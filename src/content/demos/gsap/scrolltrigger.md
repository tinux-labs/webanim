---
title: Scroll Trigger
component: "gsap/scroll"
category: "gsap"
colors: ["#de6161", "#2657eb"]
date: 2025-07-09
tags: ["plugin", "scroll"]
---

This demo shows how to animate elements when they enter the viewport using GSAP's
ScrollTrigger plugin. It uses a scrollable container instead of the full page
scroll, and includes dynamic control of the toggleActions and markers for
learning purposes.

#### How it works

- The ScrollTrigger plugin watches each `.box` inside a scrollable container.
- When a box enters the viewport (`start: "top bottom"`), an animation plays
  that moves it in from the left with a fade (`x: "-300%", opacity: 0`).
- Each box has its own `ScrollTrigger` instance.
- The `scroller` is explicitly set to a custom container (`#scroll-area`), so
  it doesn’t use the default `window` scroll.

#### Key ScrollTrigger Options

| Option          | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `trigger`       | The element that triggers the animation.                                                                                 |
| `scroller`      | The scrollable container. If omitted, `window` is used.                                                                  |
| `toggleActions` | A string that defines what happens on scroll events. Format: `"onEnter onLeave onEnterBack onLeaveBack"`                 |
| `markers`       | When `true`, displays markers to debug where triggers start/end.                                                         |
| `start`         | Defines when the animation starts. Example: `"top bottom"` means the top of the element hits the bottom of the scroller. |

#### Common toggleActions combos

| Combo                       | Behavior                                      |
| --------------------------- | --------------------------------------------- |
| `play none none none`       | Plays on enter, does nothing on other events. |
| `restart none none none`    | Always restarts when entering.                |
| `play pause resume reset`   | Controls full lifecycle of scroll.            |
| `play reverse play reverse` | Plays on enter, reverses on leave.            |
