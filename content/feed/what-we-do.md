---
title: 'What We Do on SAS - and What We Don''t'
date: 2026-09-19T09:00:00.000Z
layout: POST
path: /what-we-do
description: We build and support apps on SAS, migrate SAS 9 stored process interfaces, and modernise legacy AF/SCL. This post sets out those three things, the three things we deliberately leave to others, and why the boundary matters.
category: SAS Apps
featuredImage: ../assets/what-we-do.jpeg
tags:
  - SAS
  - SASjs
  - SAS Viya
  - AF/SCL
  - Open Source
---

We build applications on SAS, we migrate SAS 9 interfaces, and we modernise legacy AF/SCL code. This post is a short statement of scope - the three things we do, the three things we deliberately do not do, and the open source framework we work on the rest of the time. If you are a SAS customer or a SAS partner with a SAS interface in your inventory, or sitting inside a proposal you are reviewing, it should tell you quickly whether we are the right people to talk to.

## What we don't do

**We don't build data pipelines.** Data engineering is a discipline in its own right, and the people who are good at it are specialists in exactly that. Our interest starts once the data is already in SAS.

**We don't manage SAS platforms.** Installing, upgrading and administering SAS 9 or Viya is platform work, normally owned by an internal SAS admin team. We build on top of the platform, and we are happy to leave the day-to-day running of it to the people who own it.

**We don't place generic consultants.** We are not a resourcing agency. When you engage us you get the people who do the work - the same people who maintain SASjs and who have spent their careers building SAS applications.

## What we do

**We manifest and support Apps on SAS.** Apps means web applications that put a proper interface on SAS logic - built for SAS 9 (stored processes) or SAS Viya (jobs and compute services), delivered with documentation and tests, and either handed over to your team or supported on a fixed price plan. Read more about [SAS app delivery](/projects/) and [SAS app support](/support/).

**We migrate SAS 9 STP interfaces.** Stored processes are how a great many organisations expose SAS logic to the outside world - parameterised SAS programs called from a portal, a web page, or an Office add-in. Migrating those interfaces keeps the business logic intact while the thing in front of it moves to something maintainable, and can target either SAS 9 or Viya.

**We modernise legacy AF/SCL.** SAS/AF and SCL are the desktop application development facilities from the SAS 9 era - a point and click interface builder paired with an object orientated language, compiled into catalogs and launched from a network drive. We rebuild the user interface as a modern HTML5 web app and reuse the SCL data logic via the SCL Transcoding Kit, so the application keeps working without an AF licence. There is a full write-up in [Modernising Legacy SAS SCL / AF Applications](/modernising-legacy-sas-scl-af-applications/).

## The rest of the time: SASjs

When we are not doing those three things, we are working on SASjs - an MIT licensed, open source, cross-platform framework for SAS powered application development. It runs against Base SAS, SAS Enterprise BI and SAS Viya, and it exists to accelerate and de-risk exactly the kind of work described above. It is also why our projects can be handed over cleanly: the build, the tests, the CI and the deployment tooling are all public and documented.

Start at [sasjs.io](https://sasjs.io), the source is at [github.com/sasjs](https://github.com/sasjs), and the CLI documentation is at [cli.sasjs.io](https://cli.sasjs.io).

## Let's talk

If you are a SAS customer or a SAS partner, and you have a SAS interface in your inventory - or in a proposal - we would like to hear about it. [Get in touch](/contact/).

<!--
LinkedIn version (paste as first comment under the LinkedIn post):

We don't build data pipelines
We don't manage SAS platforms
We don't place generic consultants

We do manifest & support Apps on SAS
We do migrate SAS 9 STP Interfaces
We do modernise legacy AF/SCL

When we're not doing these 3 things, we're working on SASjs.

#SASjs is an MIT open-source cross-platform (Base, EBI, SASViya) framework which accelerates and de-risks #SAS powered application development.

If you're a SAS Customer or #saspartner, and you have a SAS interface in your inventory (or proposal) - let's chat.

#sas #sasviya #sasjs #opensource
-->
