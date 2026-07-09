+++
date = 2026-07-09
draft = false
title = 'Evolving Workflows'
description = "On the importance of adapting to change."
tags = ['claude', 'agents', 'workflow']
+++

I just finished a session with Claude Opus, updating my plug-ins to reflect the
changes I've made to my day-to-day workflow since publishing the first version.

## What does that mean?

Okay, so when you're working with Claude Code, there are lots of ways you can
break down the work, and help the agent(s) to do their jobs more effectively.
There's the `CLAUDE.md` file, and skills, commands and sub-agents, and all
of these work together to solidify your processes, standards and so on.

The important thing is that those processes and standards are (and should be)
in a constant state of improvement - what the Japanese call
[kaizen (改善)](https://en.wikipedia.org/wiki/Kaizen). As I work on each
project, I make changes to these various files to improve the flow
*for that specific project*. And every now and then I try to pull some of
that into my shared plug-in marketplace to introduce those changes in
other projects.

## Example

Let's look at the changes I just made, what my setup looked like before,
what I changed, and why.

The existing workflow was based on OpenSpec, an open-source set of skills
and scripts I've been using since last year and that I highly recommend
for *spec-driven development* (more on that in an upcoming post). On top
of that I layered:

- the main session working as the `orchestrator`, managing
- two sub-agents
  - a `worker` that wrote the code and the tests
  - a `reviewer` that checked the worker's output

OpenSpec works with units-of-work called `changes`, and these are broken
down into `tasks` grouped into `sections`. The orchestrator would brief
the worker agent to tackle a section, then the reviewer would review it;
if it identified any issues, those would be sent back to the worker to
fix, until the `gates` were green - clean build with no warnings,
tests passing, lints clean. The orchestrator also maintained a devlog
for each change, recording decisions made with the reasons why and other
useful bits of history.

This was a massive simplification of my previous setup, which had analyst,
architect, developer, tester and reviewer agents. To be clear, that's
still a valid setup and one I still use on some of my more complex
projects, but this new flow works well for a lot of the things I'm doing
right now.

Claude agents are just markdown files with YAML frontmatter, and one
of the things you can configure per-agent is the `model` it should
use. I tend to default to Sonnet 5 for the worker and Opus 4.8 for
the reviewer, which works well with my Claude Max subscription.
I'll switch the orchestrator between Sonnet and Opus based on how
complex the current change is. If you're on a cheaper subscription
or working on something very simple, you might find that a Sonnet/Haiku
combination works well enough, especially now Sonnet 5 is out and
competitive with and even better than Opus 4.8 on some tasks.

### How my plug-in works

I could just publish my CLAUDE.md and my agent definitions, but all
projects are different and so these roles change from one to the next.
So instead, I created a `scaffold` skill that looks at the OpenSpec
documents - changes, specs, designs, tasks, etc. - and generates the
CLAUDE.md and agent files from templates, customized for the relevant
tech stack, requirements, etc.

The `devlog` skill is the same for all projects so that's just its
own `SKILL.md` file.

### What I changed

Based on the common changes I've made to this setup over the last
few weeks of working on my Daemon agent project, half a dozen
game prototypes and a couple of iOS apps, I just reviewed all of
this to formalize what I've changed.

The `orchestrator` role has been changed to `analyst/architect`.
It still manages the sub-agents, but in its interactions with me
it wears either an Analyst or an Architect hat depending on context.
The Analyst worries about the what and the why; the Architect takes
care of the how. I did this because I missed those formal roles from
the more involved workflow, but didn't want to pull them back as
distinct agents again. Now they live in the main session and I can
switch the model they use as I please.

The `worker` agent can now be split into multiple agents for
multi-stack projects. I have projects with a web frontend and a
.NET backend, or a Unity-as-a-Library component in a SwiftUI app,
and sometimes I might want separate agents for those stacks.
Other times a "full-stack developer" might be just fine. One of
the things I love about building these skills is I can just
tell Claude "if there's more than one tech stack, ask the user
if they want multiple worker agents" and that becomes a decision
during the `scaffold` process.

The `analyst/architect` can now break an OpenSpec `section` down into
multiple `blocks`, with a complete worker/reviewer/commit cycle
per-block. This is partly to get more precise commits, but also
because a `section` might involve more than one `worker` agent
now.

The `devlog` is now used as a communication channel between the
agents and the analyst/architect, instead of just being an historical
record. It's like a Slack thread; they can ask each other questions
or just drop notes explaining why they've done something. The
`DEVLOG.md` file lives in the OpenSpec change folder, so when the
change gets archived, the devlog is archived along with it and
you have a permanent, source-controlled record of the complete
process which can be reviewed if something breaks, or just used
to augment release notes or provide context in retrospectives.

## Takeaway

The key thing I want you to take from this is the practice
itself: taking the time, maybe once a month or so, to
reflect on your workflows and how you interact with your
coding agent, whatever it may be,  and codify those
evolving processes into the agent's instructions. It's almost
like an Agile retrospective, where you look back on a sprint
and talk about what worked, what didn't, and what you want to
change in the next sprint.

If you use Claude and want to try my plug-in, it's linked
[below](#links). It's open source, so if you want to fork
it and make it yours, you can do that too. Or build your own
from scratch as a learning exercise.

## Want to learn more?

I teach all of this stuff and more in a one-day (or two half-days)
workshop with m'colleague
[Dylan](https://dylanbeattie.net/),
either online or onsite for companies and organizations, or in
online public workshops. We're still figuring out some of the
logistics but if that sounds interesting, check it out at
[claude.rendle.dev](https://claude.rendle.dev/).

## Links

- [My plug-in marketplace](https://github.com/daemonicai/dmon-dev)
- [The PR for this change](https://github.com/daemonicai/dmon-dev/pull/1)
