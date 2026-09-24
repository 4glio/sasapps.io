---
title: 'SASjs Core - 250+ Open Source Macros for SAS App Developers'
date: 2026-09-24T09:00:00.000Z
layout: POST
path: /sasjs-core-macros
description: A tour of SASjs Core - over 250 MIT licensed, fully documented SAS macros covering Base SAS, SAS 9 metadata and SAS Viya. What is in the library, the four ways to install it, and the tooling that tests and lints it.
category: SAS Apps
featuredImage: ../assets/sasjs-core-macros.jpeg
tags:
  - SAS
  - SASjs
  - Open Source
  - Macros
---

Every SAS developer eventually writes the same utility macro twice - once because they needed it, and again in the next project because nobody could find the first one. SASjs Core is the library that stops that happening: over 250 fully documented macros covering everything from dataset inspection and metadata lookups to Viya REST calls, all MIT licensed and free for commercial use. This post is a short tour of what is in it, and the four ways to get it into your environment.

## What is in the library

The macros are grouped into nine folders, by the platform they target and the job they do:

* **BASE** - macro functions and procedures that run on any SAS platform, no X command required (`mf_`, `mp_`)
* **DDL** - creating and changing tables (`mddl_`)
* **FCMP** - macros that generate `proc fcmp` functions (`mcf_`)
* **LUA** - LUA modules wrapped as macros, for the `proc lua` interpreter (`ml_`)
* **META** - metadata server access on SAS 9 and Enterprise BI (`mm_`)
* **METAX** - the metadata macros that need an enabled X command (`mmx_`)
* **SERVER** - for apps running on [SASjs Server](https://server.sasjs.io) (`ms_`)
* **VIYA** - interfacing with SAS Viya (`mv_`, `mvf_`)
* **XPLATFORM** - macros written to behave the same on Viya, SAS 9 and SASjs Server (`mx_`)

Each macro carries its documentation in the header comment - parameters, return values, and the related macros you probably want next. Those same comments generate the [published documentation](https://core.sasjs.io), so the reference and the code cannot drift apart.

## Four ways to install

**1. Add the folders to your SASAUTOS path.** Clone the repo somewhere your SAS system can read, then:

```sas
%let repoloc=/your/path/core;
options insert=(sasautos="&repoloc/base");
options insert=(sasautos="&repoloc/ddl");
options insert=(sasautos="&repoloc/fcmp");
options insert=(sasautos="&repoloc/lua");
options insert=(sasautos="&repoloc/meta");
options insert=(sasautos="&repoloc/metax");
options insert=(sasautos="&repoloc/server");
options insert=(sasautos="&repoloc/viya");
options insert=(sasautos="&repoloc/xplatform");
```

**2. Compile the whole set in two lines.** If your SAS session has internet access, the build generates a single file containing every macro:

```sas
filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;
```

**3. Install it as an npm package.** JavaScript and CLI projects can pull the macros in from npm and pin them to a version, the same way as any other dependency:

```bash
npm install @sasjs/core
```

**4. Install it as a SAS package.** SASjs Core is published to [SASPAC, the SAS Packages Archive](https://github.com/SASPAC/sasjscore), as a package for Bartosz Jablonski's [SAS Packages Framework](https://github.com/yabwon/SAS_PACKAGES). The framework is a single file - enable it, then install and load the package:

```sas
filename packages "%sysfunc(pathname(work))";
filename SPFinit url "https://bit.ly/SPFinit";
%include SPFinit;

%installPackage(sasjscore)   /* download and unpack the package */
%helpPackage(sasjscore)      /* optional: the package help and documentation */
%loadPackage(sasjscore)      /* compile the macros into the session */
```

This is a different way of owning the code rather than a different copy of it. The package is one zip holding the macros plus the framework's generated load, unload and help files, so `%loadPackage()` compiles the set into a session and `%unloadPackage()` takes it back out - useful when a job needs the macros but a shared server's SASAUTOS should not carry them. Installation is versioned, and it tracks the source: the archive currently carries [5.2.10](https://github.com/SASPAC/sasjscore/releases/tag/5.2.10), the same version as the npm release, so a build can pin the library the way it pins anything else. For repeated use, point the `packages` fileref at a permanent folder, run `%installPackage(SPFinit)` once to put the framework there, and the two internet-facing lines collapse to `%include packages(SPFinit.sas);` with no network access needed at run time.

## Tests and quality rules

The macros are tested with [sasjs test](https://cli.sasjs.io/test/) and checked with [sasjs lint](https://cli.sasjs.io/lint/) against the repo's own [quality rules](https://github.com/sasjs/core/blob/main/.sasjslint). That matters beyond the library itself - it is the same tooling you can point at your own macros, which is how the lint rules and the test harness were hardened in the first place.

## Where else it turns up

The same macros ship inside [SASjs Server](https://server.sasjs.io), our open source REST API for Desktop SAS, and they are a dependency of [Data Controller for SAS](https://datacontroller.io) - the SAS data editing tool with a review and approve workflow and a full audit trail. Data Controller pulls the library in as an npm package in its SAS build, so its SAS-side services run on the same macros described here.

The library lives at [github.com/sasjs/core](https://github.com/sasjs/core). If you have written a macro you think belongs in it, contributions are welcome - the [contributing guide](https://github.com/sasjs/core/blob/main/.github/CONTRIBUTING.md) sets out the house rules.

<!--
Image prompt (regenerate with routstr-genimg.py):

Generate a 16:9 landscape illustration for a B2B developer blog cover, 1200x627.

Style: dark charcoal-teal background (#0d1f22), vibrant lime green (#8ac640) as the primary accent, teal-cyan (#00a5d7) for secondary depth. Isometric, flat-shaded 3D with soft diffused shadows and translucent, glass-like panels - the same visual language as the sasapps.io homepage hero. Geometric sans-serif forms, clean and technical, no photorealism, no harsh outlines.

Scene: an orderly wall of small, colour-coded building blocks, each one a reusable component, stacked into a library. Three or four blocks lift out of the stack and snap into place inside a translucent panel floating above it, where they resolve into a finished application screen - a data grid and a pair of charts in green and cyan. The blocks are plain geometry carrying abstract code glyphs rather than readable words.

Minimal text, no logos, no watermarks.

Keep the block wall and the floating panel in the central square (safe for 1:1 crop). Outer left/right thirds croppable background only. Suitable as a blog/feed cover image.
-->

<!--
LinkedIn version (paste as first comment under the LinkedIn post):

#SAS Developers - how often have you needed a macro and thought "surely someone has done this before"?

SASjs Core is a collection of 250+ fully documented macros, split between:
* BASE (macro functions & procedures)
* DDL (for table creation)
* FCMP (functions)
* LUA (functions)
* META (macros for metadata)
* METAX (metadata macros with XCMD)
* SERVER (macros for SASjs Server)
* VIYA (macros for SPRE)
* XPLATFORM (for all flavours of SAS)

Four ways to get them into your environment:

1. Add the relevant parts to your SASAUTOS
2. Include the entire set in 2 lines of code (needs internet access from SAS):

filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;

3. Install as an npm package:

npm install @sasjs/core

4. Install as a SAS package from SASPAC, the SAS Packages Archive (via the SAS Packages Framework by Bartosz Jablonski):

filename packages "%sysfunc(pathname(work))";
filename SPFinit url "https://bit.ly/SPFinit";
%include SPFinit;
%installPackage(sasjscore)
%loadPackage(sasjscore)

Documentation (using Doxygen): https://core.sasjs.io
Tests (using sasjs test): https://cli.sasjs.io/test/
Quality rules (using sasjs lint): https://cli.sasjs.io/lint/

The macros also ship inside SASjs Server - https://server.sasjs.io - and are a dependency of Data Controller for SAS: https://datacontroller.io

All macros are MIT open source / free for commercial use.

#sasjs #sasapps #sasprogramming
-->
