+++
date = 2026-07-07
draft = false
title = 'Hello, Ink Console'
description = "The first post on the new blog — a quick tour of the Ink Console theme and what I plan to write about here."
tags = ['meta', 'hugo', 'design']
+++

Welcome to the new blog. It's built with Hugo and a theme I'm calling **Ink
Console** — dark-first, monospace where it counts, and quietly opinionated about
type. This post is here mostly to show the theme off, so let's exercise the
elements.

## Two voices, one accent

The design runs on two typefaces doing two jobs. **Fraunces** is the human voice —
headings, the display title, anything that wants warmth. **JetBrains Mono** is the
machine voice: labels, metadata, the little `▮` in the logo, and inline `code`
like this. **Inter** stays out of the way for body text.

> The whole thing leans on hairline borders and a single teal accent instead of
> boxes and shadows. Restraint is the feature.

### Lists get the treatment

Unordered lists use a mono arrow marker:

- Specs before code
- Reviews before merge
- Small, reversible steps

Ordered lists count in `01`-style leading zeros:

1. Explore the problem
2. Propose a change
3. Apply it, section by section
4. Archive when it's shipped

### Code blocks

```python
def greet(name: str) -> str:
    return f"hello, {name}"

print(greet("world"))
```

That's the tour. More soon — expect posts about Claude Code workflows, agentic
development, and the occasional yak-shave.
