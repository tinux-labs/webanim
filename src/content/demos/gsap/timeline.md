---
title: Timeline
component: "gsap/timeline"
category: "gsap"
colors: ["#334d50", "#cbcaa5"]
date: 2025-07-06
tags: ["core"]
---

This example demonstrates how to use a GSAP Timeline to orchestrate multiple
animations in a synchronized sequence. It includes three vertical bars that
scale in, a title that slides in, and a skew effect applied to the bars—all
timed with precision using timeline offsets.

A timeline in GSAP is a powerful tool that allows you to:

- Chain multiple animations together.
- Control the order and timing of each animation.
- Reuse, reverse, pause, and play groups of animations as one unit.

Instead of triggering animations separately with multiple tweens, timelines
let you compose complex sequences declaratively.

```
const timeline = gsap.timeline()
```

Just like a regular GSAP tween, a timeline can use:

- `timeline.to(...)`: animate to a final value.
- `timeline.from(...)`: animate from a starting value.
- `timeline.fromTo(...)`: define both start and end values.

Time offsets let you overlap or delay animations within a timeline.

| Syntax    | Meaning                                             |
| --------- | --------------------------------------------------- |
| `"+=1"`   | Starts 1 second **after** the previous animation    |
| `"-=0.3"` | Starts 0.3 seconds **before** the previous ends     |
| `">"`     | Starts **immediately after** the previous (default) |
| `"<"`     | Starts **at the same time** as the previous         |
| `"label"` | Starts at a named **timeline label** (see below)    |

You can also define labels as time markers:

```
timeline.add("reveal")
  .to(..., {}, "reveal")
  .to(..., {}, "reveal+=0.5")
```
