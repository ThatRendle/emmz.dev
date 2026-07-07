+++
date = 2026-06-20
draft = false
title = 'Spec-Driven Development, With Agents Doing the Typing'
description = "Why I hand agents a spec instead of a prompt, and how the explore → propose → apply → archive loop keeps AI output reviewable."
tags = ['claude-code', 'workflow', 'openspec']
+++

The fastest way to get unreliable code out of an AI agent is to give it a vague
prompt and a lot of freedom. The fastest way to get *reliable* code is to give it
a **spec** and almost none.

## The loop

Everything I build with agents now flows through four steps:

1. **Explore** — think through the problem before writing anything down
2. **Propose** — capture the change as a spec: proposal, design, tasks
3. **Apply** — implement it section by section, each one reviewed
4. **Archive** — fold the shipped change back into the record

The agent types. I direct. The spec is the contract between us, and the review is
where trust is earned.

> A prompt is a wish. A spec is a checklist you can hold the work against.

That's the whole trick. More on each step in future posts.
