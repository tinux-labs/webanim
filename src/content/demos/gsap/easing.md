---
title: Easing
component: "gsap/easing"
category: "gsap"
colors: ["#2c5364", "#0f2027"]
date: 2025-07-03
---

Easing defines how an animation accelerates or decelerates over time.
Instead of moving at a constant speed, easing functions create more natural,
dynamic motion—objects can ease in, ease out, bounce, or spring.

**Examples**

- `linear`: constant speed
- `power1.out`: starts fast and slows down
- `bounce.out`: adds a bounce effect at the end

### Common easing types in GSAP

| Easing               | Description                                   |
| -------------------- | --------------------------------------------- |
| `linear`             | Constant speed                                |
| `power1` to `power4` | Gradual acceleration/deceleration             |
| `bounce`             | Bouncy effect, like a ball                    |
| `elastic`            | Spring-like motion                            |
| `back`               | Moves slightly backward before moving forward |
| `circ`, `expo`       | Circular or exponential curves                |
| `sine`               | Smooth sine wave–based easing                 |

Each easing type has modifiers:

- `.in`: accelerates into the motion
- `.out`: decelerates at the end
- `.inOut`: accelerates and decelerates

<a href="https://gsap.com/docs/v3/Eases/" rel="noopener noreferrer" target="_blank">Learn more</a>
