---
title: SAS Apps Without SAS - the Mocked Build
date: 2026-11-13T10:00:00.000Z
layout: POST
path: /sas-mocked-apps
description: A deep dive into mocked SASjs applications - apps whose services are JavaScript, so the whole stack runs with no SAS licence, no metadata server and no backend. What it is good for, what it cannot do, five working examples, and how to build one.
category: SASjs
featuredImage: ../assets/sas-mocked-apps.jpeg
tags:
  - SASjs
  - SASjs Server
  - SAS
  - SAS Apps
  - Open Source
---

![SAS mocked apps](../assets/sas-mocked-apps.jpeg)

A mocked SASjs app is an application whose backend services are JavaScript instead of SAS. Nothing else about it changes: the same `@sasjs/adapter` in the browser, the same service names, the same `webout` contract, the same `sasjs` element in the page. What changes is that there is no SAS engine behind it, so the app builds, deploys, boots and answers with no SAS licence, no metadata server and no Viya estate. This article covers what the capability is, what it is genuinely useful for, the five things to know before you rely on it, five working examples, and a step-by-step guide to making one of your own.

## The idea in one sentence

SASjs Server picks a runtime from the file extension, so `services/common/getdata.js` is a service in exactly the same sense as `getdata.sas`. That single decision is the whole capability: a service folder is a contract, and where the contract is met by JavaScript, the front end cannot tell the difference.

There are two ways to run such a backend, and the distinction matters.

The first is a **JavaScript-runtime server**. `@sasjs/server` started with `RUN_TIMES=js` deploys and executes your `.js` services on a real drive with real sessions, exactly as it would run SAS programs. Nothing is faked at the transport level - it is the same API, the same login, the same `/SASjsApi/...` routes. This is how Data Controller's Cypress suite and its Lighthouse run work, and it is how you would do local full-stack development without a SAS installation.

The second is the **browser build**, enabled by `mockWeb` in `streamConfig`. `sasjs build` then emits a second artefact: a static site - your frontend, your compiled services, a service worker, and a small runtime that executes them - in which the backend runs inside the browser. A service worker intercepts the calls the adapter makes, runs the matching JavaScript program, and resolves `webout`, log and headers back to the app. Requests still appear in the network tab. Anything the services write to the drive is kept in IndexedDB, so a refresh does not lose it. It is a directory of files, so it can be hosted anywhere a static site can.

The browser build is the one that changes what a link is worth. `mockWeb` is independent of `streamWeb`, so one config serves both the browser build and a normal `sasjs deploy`; the same repository still ships to Viya, to SAS 9 or to a real server.

## What it is good for

**Demos and evaluation without a licence.** A prospect, a conference audience or a new colleague opens a URL and uses the application. No VPN, no credentials, no provisioning. This is why `staging.datacontroller.io` exists: a release branch publishes it automatically, and it is deliberately shipped unconfigured, so a visitor lands on the deployment wizard and can walk the setup themselves.

**Review environments per change.** Because the artefact is static files, a pull request can publish its own build. A reviewer clicks a link and looks at the actual UI of the actual commit, instead of reading a diff and imagining it.

**Frontend development that does not wait for the backend.** The service contract is the interface. Once a stub answers the right shape, the Angular or React developer stops blocking on metadata, on a SAS 9 web tier, or on a colleague's availability.

**End-to-end tests in CI.** A mocked backend is deterministic and free. The suites run on every push without a SAS container, and they exercise the frontend, the adapter, the service contract and the rendering path - which is where most regressions actually live.

**Teaching and documentation.** Screenshots, recordings and tutorials that do not need a licence, and that cannot break because an environment moved.

**Air-gapped and constrained environments.** Two files of build output and a web server. Nothing to install on the estate.

## What it is not

Be honest about the boundary, because it is a hard one. A browser-hosted build has no SAS engine in it, so a service that reads a SAS table, runs a macro, uses a format or touches CAS cannot work there - the answer is not slow or different, it is absent. Some services are also only meaningful against real data: a row count, a join, an aggregation over a library.

Two consequences follow. First, the mocked build is a demo and review artefact; anything that needs SAS gets a real target. Second, when a mock answers a request it is answering with a *fixture*, and a fixture that drifts from the service it imitates is worse than no mock at all. The seed apps solve this by generating the fixture from the model and failing CI when the two disagree - more on that below.

There is also no authentication. This is a single-user, no-authority build; do not put one somewhere a permission boundary is supposed to exist.

## Five working examples

All of these are public, and all of them were verified against the live sites.

| Site | What it demonstrates |
|---|---|
| [minimal.sasjs.io](https://minimal.sasjs.io) | The smallest complete case: two services (`appinit`, `getdata`), one generated data file, a plain HTML page. The reference implementation to copy. |
| [angular.sasjs.io](https://angular.sasjs.io) | An Angular app with a file upload and a SAS log panel - and the mocks report logs too, so the panel has something to show with no SAS behind it. |
| [react.sasjs.io](https://react.sasjs.io) | The same shape in React, built from `build/` rather than `src/`, which is where `webSourcePath` earns its keep. |
| [staging.datacontroller.io](https://staging.datacontroller.io) | The real product. Data Controller's entire front end - editor, approvals, viewer, admin, Excel maps - on 63 JavaScript services over a captured drive of 64 entries, with a shipped licence so it is usable past the free tier. |
| [dash.sasjs.io](https://dash.sasjs.io) | Macro Dash, the SASjs platformer. The public build is the backend-free one (personal bests in localStorage), and the repository ships a `mock` target plus `npm run devsetup`, which stands up a local JS-runtime server where the leaderboard persists end to end. |

The scale is the interesting part of that table. The three seed apps are five to eight drive entries and two or three services each. Data Controller is sixty-odd services and a seeded drive, running the same code that ships to customers.

You can read the delivered configuration for any of them - it is a normal file in the build output:

```
https://minimal.sasjs.io/host/mock-config.json
```

```json
{
  "appLoc": "/Public/app/minimal-seed-app",
  "driveEntries": 5,
  "jsPrograms": 2,
  "snapshot": false,
  "identity": "default",
  "buildStamp": "96e405daa1",
  "builtAt": "2026-11-12T14:49:49.751Z"
}
```

That stamp is worth having on a site you send to people. "Which build am I looking at?" is otherwise a guess.

## How to get started

The quickest start is one of the seed apps - [minimal](https://github.com/sasjs/minimal-seed-app), [Angular](https://github.com/sasjs/angular-seed-app) or [React](https://github.com/sasjs/react-seed-app) - because each already ships a `mock` target, the mock services and a publishing workflow. Copy that structure into your own project. The steps below are what that structure is.

You need Node and a recent SASjs CLI. The browser build landed in CLI 6.1.0; the seed apps currently pin 6.27.x and the current release is 6.29.0, so pin something in that range rather than reaching for whatever is globally installed.

### Step 1 - add a mock target

A target, no more:

```json
{
  "name": "mock",
  "serverUrl": "",
  "serverType": "SASJS",
  "appLoc": "/Public/app/minimal-seed-app",
  "streamConfig": {
    "mockWeb": true,
    "mockWebFolder": "sasjsbuild/mock",
    "streamWeb": false,
    "webSourcePath": "src"
  }
}
```

Three things to get right. `webSourcePath` points at the built frontend: `src` for a hand-rolled page or a framework that serves from source, `build` for Create React App, `client/dist` for a CLI-built Angular app. `appLoc` has to match the location the frontend was built with, because the services are resolved from it - if the page asks for `/Public/app/foo` and the build deployed `/Public/app/bar`, every call misses. And the target's services have to be JavaScript: a target that compiles `.sas` cannot be built for the browser, and the build says so rather than producing something broken.

### Step 2 - write the twins

Keep the mock services in a folder that mirrors the real service folders, and add a `syncFolder` so they land on the drive beside the compiled programs:

```
sasjs/
  services/common/getdata.sas     <- the real service
  mocks/services/common/getdata.js <- the twin
```

```json
"serviceConfig": { "serviceFolders": ["sasjs/services/common"] },
"syncFolder": "sasjs/mocks"
```

A service folder is not restricted to `.sas` files. `sasjs compile` copies a non-SAS file through byte for byte - no macro inlining, no header rewriting - and reports the mix:

```
Compiled 0 SAS files; 12 files copied through unchanged (not SAS programs).
Packing 0 SAS services and 12 files.
```

Inside the program you get the same verbs the macro offers. Here is the whole of the minimal app's `appinit` twin: it reads a JSON fixture off the drive and answers exactly what `%webout(OBJ, areas)` would have answered.

```js
const path = require('path')

const DRIVE_FILES = path.resolve(weboutPath, '..', '..', '..', 'drive', 'files')
const APP_LOC = String(_program).replace(/\/(services|jobs|tests)\/.*$/, '')
const SPRINGS_FILE = path.join(DRIVE_FILES, APP_LOC, 'services', 'common', 'springs.json')

const springs = JSON.parse(fs.readFileSync(SPRINGS_FILE, 'utf-8'))

const areas = []
const seen = new Set()

springs.forEach((row) => {
  if (seen.has(row.AREA)) return
  seen.add(row.AREA)
  areas.push({ AREA: row.AREA })
})

areas.sort((a, b) => (a.AREA < b.AREA ? -1 : a.AREA > b.AREA ? 1 : 0))

webout('OPEN')
webout('OBJ', 'areas', areas)
webout('CLOSE')
```

Tables arrive the way they do on a real server: the adapter serialises an array of rows as CSV, and the program reads it back through the `_WEBIN_` variables. A download works the same way it does with `%mp_streamfile` - declare the response in `_SASJS_WEBOUT_HEADERS` and write the body, to `_webout` for text or to `weboutPath` for bytes.

### Step 3 - keep the fixture honest

This is the step people skip, and it is the one that decides whether the mock is a tool or a liability. Generate the fixture; do not hand-write it, and do not copy the dataset.

The seed apps do it in one script: `scripts/springs-data.js` writes `springs.json` from the dataset's model - same columns, same ranges, same nullability - with a fixed seed, so the file is reproducible. A companion check, `npm run check:data`, fails when the committed file is not what the generator produces. The mock and the real service have then agreed on shape, and cannot silently drift.

Determinism is not a nicety either: random data makes a recorded demo unreproducible and turns any UI assertion into a coin flip.

### Step 4 - build and serve it

Two scripts, and the whole mocked workflow:

```json
"mock:build": "sasjs compile -t mock && sasjs build -t mock",
"mock:start": "npx http-server ./sasjsbuild/mock -p 3001"
```

`mock:build` writes the site to `sasjsbuild/mock`: the frontend, the compiled JavaScript services, `sw.js`, and a `host/` folder with the runtime and the seed drive. Serve that folder over http or https - a service worker needs a secure context, so `localhost` and `https` both work and `file://` does not.

The seed apps go one step further and test the artefact rather than the source: `npm run test:mock` boots the built worker and asserts that each service answers. A build that produces files but answers nothing then fails in CI instead of in front of a customer.

### Step 5 - decide what the visitor starts with

Out of the box the visitor gets an empty drive: the services are there, the data they would have produced is not. A snapshot fixes that. Use the site until the drive is in the state you want, then run this in the browser console:

```js
await window.SASjsMock.download()
```

That saves `mock-snapshot.json`. Put it beside the build folder - `sasjsbuild/mock-snapshot.json` - and build again; the build copies it to `host/vfs-snapshot.json` and reports `"snapshot": true` in `mock-config.json`. Every visitor now starts from the captured state. `window.SASjsMock.reset()` clears the persisted drive and reseeds, which is how you start over.

Treat the snapshot as a generated build input rather than something to commit: it is a plain map of drive path to file content, and a real application's drive runs to megabytes.

### Step 6 - publish it

It is a directory of static files with no server-side requirement, so publish it like one. The seed apps use GitHub Pages: a workflow runs `mock:build` and `test:mock` on every pull request, adds a `CNAME` and `.nojekyll` to the output, and deploys the folder from `main` only. Data Controller publishes to its own instance with Surfer, as a named site on an alias domain, so a failed upload leaves the current site serving.

Whatever the host, ship `index.html` and `sw.js` together with everything else - those two carry the references. The runtime files under `host/` are requested with a `?v=<hash>` query that changes with their contents, so a redeploy replaces them for returning visitors.

## Five things that will catch you

- **`file://` does not work.** The service worker needs a secure context. `localhost` counts; a file opened from disk does not.
- **The snapshot is tied to where it was captured.** A licence issued for one origin will not decrypt on another. If an app asks to be licensed or configured after deployment while it worked locally, this is almost always the reason - capture the snapshot on the domain you deploy to.
- **Only two response headers are applied**, `Content-type` and `Content-Disposition`. There is no cache and no cookie to set on a static host. A request made with `_debug` returns the text frame instead, because its body is the webout wrapped in the log.
- **The drive holds text.** A file a service writes as bytes is stored as base64 and reads back as bytes, which is fine for a CSV or a small xlsx and wrong for a large binary. A filename outside ASCII belongs in RFC 6266 form.
- **A missing `appLoc` match looks like a broken app, not a configuration error.** The page loads, the adapter calls, and every service 404s.

## Where to read next

The authoritative references are [sasjs build](https://cli.sasjs.io/build/) (the browser build, snapshots and file responses), [JavaScript services](https://cli.sasjs.io/js-services/) (how non-SAS files travel through compile, build and deploy) and the [server component page](https://sasjs.io/components/server) for the JS runtime and its two modes. The seed app READMEs are the shortest path from reading to running, and their repositories are small enough to read in an afternoon.

The pattern is worth learning even if you never ship a mocked app. Once the service contract is the interface, every part of the stack becomes testable in isolation - and the demo, the review environment, the CI suite and the production deployment are all built from the same code.

<!-- Image prompt (regenerate with routstr-genimg.py):
Generate a 16:9 landscape illustration for a B2B developer blog cover, 1200x627.
Style: isometric flat-shaded 3D, translucent glass-like UI panels floating above a dark base, lime (#8AC640) and teal-cyan (#00A5D7) accents, soft diffused shadows, minimal and clean, dark background (#0D1F22 / #114F55), white bold headline with one lime highlight word, Poppins-like geometric sans.
Scene: two identical glass dashboard panels side by side, the left one connected by a cable to a large server cabinet labelled with a SAS-like logo shape, the right one standing free with a small circular arrow loop beneath it, and a browser window frame around the right panel to signal that it runs in the browser. Both panels show the same bar chart, identical in every respect, to signal that the front end cannot tell them apart. A thin lime dotted line joins the two panels at the top.
Minimal text, no logos, no watermarks.
Keep the subject in the central square (safe for a 1:1 crop); the outer left and right thirds are croppable background only.
-->
