+++
date = 2026-08-07
draft = false
title = 'Effective Claude Code Workshop'
description = "On my new 'Effective Claude Code' workshop."
tags = ['claude', 'workshops']
+++

Exciting news! I am running a new workshop,
[Effective Claude Code](https://claude.rendle.dev),
in collaboration with [Dylan Beattie](https://dylanbeattie.net).
We're doing an online version that is open to anyone, starting
on the 1st and 2nd of September; it's split over two days, from
2pm to 6pm UK time, so it's accessible to people in all kinds of
timezones and it doesn't use up a whole work-day. We'll probably
try putting one on at a weekend so if you can't get or afford the
time off work (hello fellow freelancers) you can just sacrifice
watching some sportsball or playing *Elden Ring* or whatever you
do to unwind.

> **Even more exciting news!** For the first couple of dates, 
you can get 50% off by using the code `EMMZ50` when signing
up on Eventbrite.

## Why a live workshop?

I see a lot of people selling pre-recorded courses, or pre-written
or whatever, and I'm sure they're great, but I don't want to spend
hours and hours and hours writing and recording and polishing a
course just to release it and then there's yet another tectonic
shift in the state of the art and the whole thing's out of date.
Seriously: I did my
[How I Tamed Claude](https://www.youtube.com/watch?v=pey9u_ANXZM)
talk[^1] at NDC London in January and (a) it was nothing like the
abstract I originally submitted the previous August, and
(b) _literally the day before it_ OpenSpec released version 1.0
and it was completely different from the version I'd written
about in the talk. As a wise man once didn't say: 

> Life moves pretty fast. If you don't stop and update your
workshop every other week you'll be teaching people the wrong
things.

With a live workshop, if "they" change something on Day 1, we
can tell you about it on Day 2. And with 30 days of follow-up
support by email, even if they change something within that
timespan, we can help you deal with it.

## Why Claude?

Currently, in my experience, Claude Code provides the most
cohesive experience out of the box, and it tends to be the
most popular target for new techniques, extensions, skills
and so on. It also works pretty well even with a $20/month
subscription, although if you hit the limits a lot and you
can afford Max it's (currently) totally worth it.

It's my go-to daily driver, but I regularly try others
like OpenCode, Pi, Codex, Copilot and so on. If I switch
to a different primary tool or agent or model for any reason,
whether it's something better coming along or some kind
of rug-pull moment, then I'll write a new workshop and teach
that instead.

## What does the workshop cover?

On the first half-day we start by one-shot prompting
(vibe-coding) something, so we can see what the baseline
looks like. Then we get more rigorous with **spec-driven**
development, using [OpenSpec](https://openspec.dev), and
build something more complex using that workflow. Again,
if _I_ find something I like more than OpenSpec, future
workshops will be updated.

On the second half-day we look at customizing Claude with
`CLAUDE.md`, skills, plugins, MCP servers, and role-specific
agents, which is how I work on my customers' and my own
projects. The last couple of hours are spent building a
client for an existing server, and you can get as creative
as you like with it.

## What stack will we use?

We'll be using Node.js with vanilla TypeScript and Vite,
because that's what most people are familiar with and
it's easy to build frontend stuff with it, but if you
want to use .NET or Java or whatever, that's totally
cool. One of the things I love about building with
AI agents is the spec is what you create; how that gets
turned into code and built into an application is almost
incidental. I'm working with .NET, Python, Swift, Kotlin,
Rust and Zig across my various projects, and I don't
really know how to write some of those languages. The
important thing is that I can read all of them, because
at the end of the day programming is variables, loops,
conditions and functions, and the syntax really doesn't
change that much.

## Have you run this workshop before?

Yes. We delivered it in person, over a single day, to
a room full of not just developers, but also designers,
testers and entirely engineering-adjacent people, and
by the end of the day we had 40 people connecting to
our server with 40 different clients, and in some cases
making those clients do some things that surprised us.
In fact, the first person to connect was _not_ a
programmer; that's just how good we are at this stuff.

## Do you do private workshops?

Yes. If you want a workshop for your company or
organization, either online or at a location of
your choosing, we can do that. For in-person workshops
we can do a single eight-hour day; for online, we can
do a single day or the two half-day format. We can also
deliver it for your specific tech stack and make the
project work directly relevant to your business,
domain or other preferences. To find out more,
get in touch using the
[contact form](https://claude.rendle.dev/#teams)
on the website.

[^1]: don't watch that video; it's hopelessly out
of date.
