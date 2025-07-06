---
title: Split Text
component: "gsap/splittext"
category: "gsap"
colors: ["#614385", "#516395"]
date: 2025-07-08
tags: ["plugin", "text"]
---

This example demonstrates how to use GSAP's SplitText plugin to break a block
of HTML text into characters, words, or lines, and animate them individually.

### How it works

`SplitText.create()` splits the text into elements based on the type you choose:
`chars`, `words`, or `lines`.

You can assign custom classes to each type via `charsClass`, `wordsClass`, and
`linesClass`, which makes it easy to style or animate them.

A dropdown lets you switch the split type dynamically. When the type changes:

- The previous split is reverted with `.revert()`
- A new split is created with the selected type
- An animation is triggered using `gsap.fromTo()` on the new elements

### Why use it

SplitText is useful when you want to create fine-grained animations like:

- Letter-by-letter text reveals
- Word-by-word emphasis
- Line-by-line transitions
