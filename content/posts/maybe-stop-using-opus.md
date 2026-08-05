+++
date = 2026-08-05
draft = false
title = 'Maybe stop using Opus for everything'
description = "On the v5 Claude models and overkill."
tags = ['claude', 'models', 'workflow']
+++

Saturday. I'm absent-mindedly baby-sitting a Claude Code
session, applying a fairly simple change to an
as-yet-unpublished greenfield project. And it's taking
*aaaaaages*. I've got an Opus 5 top-level session managing
two Opus 5 agents, `worker` and `reviewer`, and between them
they've been working on one task in one section of a change
for almost a day and a half. And when I dig a little bit
into why, it looks like one of them has decided that
[mutation testing](https://stryker-mutator.io/docs/) is
necessary for every change it makes (it's not), and it's
running a dozen cycles of manual mutation tests on every
test suite as part of every review, so what should be a
two-minute "run tests and check code" turned into over an
hour of generating sed scripts and whatever other nonsense.
The manual part is because my global CLAUDE.md file says
"don't use JavaScript frameworks" and it extended that to
mean "don't use any packages that call themselves frameworks
in any language ever", so it decided it couldn't use e.g.
Stryker.

There is precisely one feature in this new project that I
guess, if it were production software expecting hundreds of
installations, would be worth this level of scrutiny, and
that's the first-run bootstrap; you know, the "go here and
create the admin account" setup bit that you have to do as
soon as the site is reachable. But this is not that; this is
a wiki engine I'm writing because all the wiki engines I
looked at have UI/UX that might have been acceptable when
Windows XP was still a thing, but it's 2026 now and we have
CSS and expectations.

Anyway, point is, I told it to stop being silly, stop
running the mutation tests after every new unit test was
added, definitely stop running twelve cycles of mutation
tests every time, and suddenly the task was finished and I
could go climb a rock.

## Model vs Model

As I was driving to said rock, it occurred to me that in
over a year of using Claude, much of it with various
versions of the Opus model, it had never decided mutation
testing was necessary before, and I wondered if it was
something new in the recently-released Opus 5 model's
training data. If you haven't sat with one of these models
through various versions (3.5, 4, 4.5, 4.6, 4.7, 4.8, now
5), you won't have experienced the way certain words or
phrases suddenly pop up in new versions, almost to the point
where you could use them to forensically identify which
version generated some text. Opus 5, for example, is talking
a lot about "oracles", as in "potential information leaks"
(i.e. the security sense of the term), which I don't
remember from earlier versions.

There were also a lot of posts when Sonnet 5 was released
saying it was better than Opus 4.8 for development work,
although they warned about increased token counts due to a
brand-new tokenization model, but I have a Max subscription
so I don't care about that. So I decided it was time to
rejig my configuration and my agents a bit; here's what I've
ended up with.

### A quick note about OpenSpec

If you haven't used [OpenSpec](https://openspec.dev), the
spec-driven agent extension and CLI tool, here's an
overview. It breaks work down into *changes*, which pretty
much map to a story or ticket, and each change gets its own
set of files: `proposal.md` is the high-level description,
`design.md` contains the implementation details, and
`tasks.md` is a list of actual tasks with `[ ]` checkboxes.
The tasks are divided into sections, usually with 5--10
tasks in each section.

### New sub-agent pattern

When I first started using it, my agents tackled a whole
section at a time, which often needed the million-token
context window of Opus 4.x. But lately I've switched to a
different pattern, where I am the Product Owner, the main
session acts as the Analyst and Architect and breaks each
section down into minimal *blocks* of two or three tasks
that can be completed by a Worker agent, reviewed by a
Reviewer, and committed independently. The top-level session
and both agents had been running on Opus 4.8 and were now
running on Opus 5, which I suspected was a slight case of
overkill.

So I tweaked the setup, and now it looks like this:

- Main session: Opus 5
- Worker agent: Sonnet 5
- Reviewer agent: Sonnet 5, runs on each block
- **NEW** Supervisor agent: Opus 5, runs on section
  completion

Now the worker and reviewer agents rattle through the blocks
within a section much faster, but I still have the
reassurance of an Opus 5 review from the supervisor before
the section changes are committed. If the supervisor finds
something, fixing it becomes a new block that the worker and
reviewer cycle through. The supervisor can push back twice
before I have to get involved.

I also told it to cap mutation test cycles at three for this
project, and to only use them for critical paths on all
projects.

Combined, these changes have made things progress a lot
faster; I feel like I'm back to the velocity I had with Opus
4.8, and the supervisor is catching some genuine issues in
the code, especially around security and stability.

## Share and Enjoy

I've updated my plugin marketplace at
[daemonicai/dmon-dev](https://github.com/daemonicai/dmon-dev)
to scaffold the agents, and I added an `update-scaffold`
skill to migrate from the old pattern to the latest one. As
usual, feel free to use it as-is, or fork it and adapt it to
your specific needs. This is all still an unexplored
frontier, and we need to be forging these paths together.
