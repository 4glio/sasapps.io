---
title: 'Constraints to Consider as a SAS App Developer'
date: 2026-08-28T11:00:00.000Z
layout: POST
path: /sas-app-developer-constraints
description: Twenty One hard-won lessons for anyone building apps on SAS - from filepath separators and WLATIN encodings to LOCKDOWN, -NOXCMD and MFA. Based on many successful (and some not so successful) project deliveries.
category: SAS Apps
featuredImage: ../assets/sas-app-developer-constraints.jpeg
tags:
  - SAS
  - SAS Viya
  - SASjs
  - App Development
---

<!--
Image prompt (regenerate with routstr-genimg.py):

Generate a 16:9 landscape flat-design illustration for a B2B developer blog cover, 1200x627.

Style: dark navy background, teal/green and orange accents, clean flat vector illustration, professional but lightly humorous. Minimal text, no logos, no watermarks.

Scene: a SAS application developer at the centre, calmly typing on a laptop, surrounded by a ring of constraint-themed obstacles closing in from the edges: a padlocked server rack (LOCKDOWN), a shield with "MFA" on it, a broken file path with backslashes, a jar labelled "WLATIN" with letters spilling out, a padlock on a command prompt (-NOXCMD), a very old web browser window, and a wheelchair-accessibility icon. A green tick/checkmark glows above the developer's laptop showing the app shipping anyway.

Keep the developer and laptop in the central square (safe for 1:1 crop). Outer left/right thirds croppable background only. Suitable as a blog/feed cover image.
-->

# Constraints to Consider as a SAS App Developer

SAS is a powerful platform - but if you're building apps on it, the real world has a habit of introducing constraints you didn't plan for. Here's a short list, earned the hard way across many project deliveries, to consider before you write a single line of code:

* SAS runs on both Windows and Linux - so always use "/" in filepaths
* The SAS 9 url may not be /SASStoredProcess/do (it could be do3)
* Encoding in SAS 9 in Europe is frequently WLATIN(X) not UTF-8
* PROC JSON doesn't handle invalid chars or special missings
* The SAS 9 home directory may not be under `/User Folders/`
* There are three primary flavours of SAS - Viya, EBI, Base
* The OS library in LUA is disabled in Viya 4 but not 3.5
* Avoid in-line and external JS/CSS to meet strict CSP
* Accessibility considerations / Lighthouse scores
* endsas can kill the entire STP server in 9.4m3
* Invisible characters embedded in .sas programs
* The SAS 9 home directory might be read-only
* RunAsTask fixes Job performance in Viya
* Most large environments run -NOXCMD
* Lack of multibridge connections
* Options missing='' fun & games
* Many sites implement LOCKDOWN
* Breaking changes in Viya APIs
* Support for very old browsers
* How to prevent code injection
* Handling SASLogon with MFA

## We can help

If you are embarking on a SAS App Development project, as a customer or SAS Partner, my team is available for support.

Not only do we have the bitter-sweet experience of many successful (and some not so successful) project deliveries, we can equip you with some serious dev tooling. All of which is MIT open source and free for commercial use:

* [SASjs CLI](https://cli.sasjs.io) - DevOps, Documentation & Testing
* [SASjs Core](https://core.sasjs.io) - Macros for all flavours of SAS
* [SASjs Lint](https://cli.sasjs.io/lint) - Quality check your SAS code
* [SASjs Server](https://server.sasjs.io) - Build Apps on Base SAS
* [SASjs Adapter](https://adapter.sasjs.io) - JS connectivity library
* [SASjs VS Code Extension](https://open-vsx.org/extension/SASjs/sasjs-for-vscode) - IDE tools

Plus multiple [Seed Apps](https://github.com/sasjs/seed_apps) to quick start your development journey.

#sasviya #sashackathon #sasprogramming #sassoftware

<!--
LinkedIn version (paste as first comment under the LinkedIn post):

A short list of constraints to consider as a #SAS App Developer!

* SAS runs on both Windows and Linux - so always use "/" in filepaths
* The SAS 9 url may not be /SASStoredProcess/do (it could be do3)
* Encoding in SAS 9 in Europe is frequently WLATIN(X) not UTF-8
* PROC JSON doesn't handle invalid chars or special missings
* The SAS 9 home directory may not be under `/User Folders/`
* There are three primary flavours of SAS - Viya, EBI, Base
* The OS library in LUA is disabled in Viya 4 but not 3.5
* Avoid in-line and external JS/CSS to meet strict CSP
* Accessibility considerations / Lighthouse scores
* endsas can kill the entire STP server in 9.4m3
* Invisible characters embedded in .sas programs
* The SAS 9 home directory might be read-only
* RunAsTask fixes Job performance in Viya
* Most large environments run -NOXCMD
* Lack of multibridge connections
* Options missing='' fun & games
* Many sites implement LOCKDOWN
* Breaking changes in Viya APIs
* Support for very old browsers
* How to prevent code injection
* Handling SASLogon with MFA

If you are embarking on a SAS App Development project, as a customer or SAS Partner, my team is available for support.

Not only do we have the bitter-sweet experience of many successful (and not so successful) project deliveries, we can equip you with some serious tooling. All of which is MIT open source and free for commercial use:

* SASjs CLI - DevOps, Documentation & Testing
* SASjs Core - Macros for all flavours of SAS
* SASjs Lint - Quality check your SAS code
* SASjs Server - Build Apps on Base SAS
* SASjs Adapter - JS connectivity library
* SASjs VS Code Extension - IDE tools (now on the FOSS VSCodium app store)

Plus multiple Seed Apps to quick start your development journey.

#sasviya #sashackathon #sasprogramming #sassoftware
-->
