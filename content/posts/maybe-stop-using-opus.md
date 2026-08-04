+++
date = 2026-07-29
draft = true
title = 'Maybe stop using Opus for everything'
description = "On the v5 Claude models and overkill."
tags = ['claude', 'models', 'workflow']
+++

So I'm absent-mindedly baby-sitting a Claude Code session, applying
a fairly simple change to an as-yet-unpublished greenfield project.
And it's taking *aaaaaages*. I've got an Opus 5 top level managing
two Opus 5 agents, `worker` and `reviewer`, and between them they've
been working on one task in one section of a change for basically
an entire day. And when I dig a little bit into why, it looks like
one of them has decided that
[mutation testing](https://stryker-mutator.io/docs/) is necessary
for every change it makes (it's not), and it's running a dozen
cycles of manual mutation tests on every test suite as part of
every review, so what should be a two minute "run tests and check
code" turned into over an hour of generating sed scripts and
whatever other nonsense, because my global CLAUDE.md file says
"don't use JavaScript frameworks" and it extended that to mean
"don't use any packages that call themselves frameworks in any
language ever" so it decided it couldn't use e.g. Stryker.

There is precisely one feature in this new project that I guess,
if it were production software expecting hundreds of installations,
would be worth this level of scrutiny, and that's the first-run
bootstrap; you know, the "go here and create the admin account"
setup bit that you have to do as soon as the site is reachable.
But this is not that, this is a wiki engine I'm writing because
all the wiki engines I looked at have UI/UX that might have been
acceptable when Windows XP was still a thing, but it's 2026 now
and we have CSS and expectations.

Anyway, point is, I told it to stop being silly, stop running
the mutation tests after every new unit test was added, definitely
stop running twelve cycles of mutation tests every time, and
suddenly the task was finished and I could go climb a rock.

As I was driving to said rock, it occurred to me that in over
a year of using Claude, much of it with various versions of
the Opus model, it had never decided mutation testing was
necessary before, and I wondered if it was something new in
the recently-released Opus 5 model's training data. If you
haven't sat with one of these models through various versions
(3.5, 4, 4.5, 4.6, 4.7, 4.8, now 5) you won't have experienced
the way certain words or phrases suddenly pop up in new versions,
almost to the point where you could use them to forensically
identify which version generated some text. Opus 5, for example,
is talking a lot about "oracles", as in "potential information
leaks", which I don't remember from earlier versions.

There were also a lot of posts when Sonnet 5 was released saying
it was better than Opus 4.8 for development work, albeit warning
about increased token counts due to a brand new tokenization
model, but I have a Max subscription so I don't care about that.
So I decided it was time to re-jig my configuration and my agents
a bit; here's what I've ended up with.

Main session: Opus 5 for analysis and architecture sessions and
briefing sub-agents with Blocks of tasks with a Section.
Worker agent: Sonnet 5
Reviewer agent: Sonnet 5, runs on each Block
Supervisor agent: Opus 5, runs on Section completion

Now the worker and reviewer agents rattle through the Blocks
within a Section much faster, but I still have the reassurance
of an Opus 5 review from the Supervisor before the Section
changes are committed. If the Supervisor finds something, fixing
it becomes a new "block" that the Worker and Reviewer cycle through.
The Supervisor can push back twice before I have to get involved.

I also told it to cap mutation test cycles at three for this
project, and to only use them for critical paths on all projects.
