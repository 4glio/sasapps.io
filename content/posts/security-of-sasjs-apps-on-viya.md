---
title: Security of 4GL Web Apps on Viya
date: 2025-08-19T09:00:00.000Z
layout: POST
path: /security-of-4GL-web-apps-on-viya
description: A security review of a typical 4GL Web App on Viya
category: Viya
featuredImage: ../assets/sasjs_server.png
tags:
  - Viya
  - SASjs
  - SAS Admin
  - SAS
---

What is a 4GL Web App and does it meet the standards of our Viya data platform?  A reasonable question from a SAS Administration team.  This article delves into the specifics of a typical 4GL App, deployed to a standard (Viya 2025.xx) platform.

## Introduction

4GL is a boutique SAS Web App development agency with a singular focus of building web apps on SAS platforms.  We also migrate legacy SAS 9 STP Web Apps to Viya, and have delivered multiple (successful) AF/SCL modernisations.

When not working on customer projects, we are extending our own products - Data Controller (a data ingestion tool for SAS) and SASjs.

SASjs is both a set of open-source tools as well as a _framework_ for the deployment and delivery of web applications on SAS platforms.  The core components are:

 - SASjs Core - a SAS macro library
 - SASjs Adapter - a Javascript library
 - SASjs CLI - a commandline tool for testing, linting, compilations, and deployments

All of our apps make use of the SASjs framework, being designed to accelerate and de-risk web app development projects.

## Architecture

A SASjs web app comprises of a _frontend_ (static web content) that uses the SASjs _adapter_ to invoke the _backend_ (SAS code in Viya Jobs).

## Frontend Development

The web app is built locally, on the developers laptop, often using mocked responses to simulate a real Viya server.  Typically we build using the React framework, over this [baseline repository](https://github.com/sasjs/react-seed-app).  Regardless of the framework, the build outputs (those that are actually deployed to SAS)

Here are some of the steps taken to improve security at build time:

 - **NPM Audit**. We [check dependencies](https://github.com/sasjs/react-seed-app/blob/main/.github/workflows/build.yml#L25) for CVEs and other issues with every build.  The automated build will fail if there are any critical errors or warnings.
 - **Type Safety**.  Apps are built with TypeScript in Strict mode to prevent mis-allocated variables.
 - **Adapter Input Sanitation**.  The content that is sent to SAS is normalised into "table format", so that columns have specific types (char/numeric) and lengths.  The adapter does not have the ability to enable "URL variables", which may be dangerously resolved in SAS code.
 - **Semantic Releases**.  Every release is numbered according to the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) standard, making it easy to see what was changed on a release by release basis
 - **Opinionated Framework**. SASjs is designed to mitigate the risk of code injection by ensuring that all data communication happens through the [adapter](https://github.com/sasjs/adapter), which ensures a specific format of data interchange (see the project README).
 - **Isolated Environment**.  The build happens locally, or in a pipeline, never on the SAS platform itself.


## Backend Development

The backend for a SASjs app is a series of self-contained Viya Jobs, containing regular SAS code, running on SPRE.  These jobs perform the backend logic and data processing needs of the frontend app.

The SASjs development approach ensures that all jobs are documented (as macros must be listed in the header in order to be compiled) and organised by reference to a central [configuration file](https://cli.sasjs.io/sasjsconfig/).

Points to note from a security perspective:

- **Input sanitation**.  Standard macros are used to parse the input files and create corresponding datasets in the WORK library for further processing.
- **Testing suite**.  [Tests](https://cli.sasjs.io/test/) can be created for Jobs, Services and Macros, and test coverage is measured in every compile.
- **Linting**.  The [lint](https://cli.sasjs.io/lint/) feature scans code for non-printable characters, SAS001/2 encoded passwords, nested macros, and other nasties.
- **Strict Mode**.  The [mp_init()](https://core.sasjs.io/mp__init_8sas.html) macro is typically used in every callable job


## Build Process

The build / development process may be performed on a laptop, or in a pipeline.  The goal of the build is to prepare the app in such a way that makes it easy to deploy (eg by a completely different team).

The flow typically looks like the below.

 - Build frontend
 - Compile the project (per SASjs project)
 - Remove tests (eg if a production deploy)
 - Build the project (per SASjs Config)
 - Share the deployment assets with the administrator

## Deploy Process

There are two ways to deploy a SASjs app on Viya:

1.  Using the SASjs CLI directly
2.  Using a SAS Deployment Program (generated using the CLI)

To use the CLI process, perform a [sasjs auth](https://cli.sasjs.io/auth/) followed by a [sasjs servicepack deploy](https://cli.sasjs.io/servicepack).  This will require a client/secret pair, and is performed from a laptop / pipeline.

The SAS deployment program approach simply requires running the code in SAS Studio (after adjusting the appLoc as desired).  The file can be very big, as it will contain the entire frontend, as well as all the SAS services.


## Production Environment

Once in Production, a SASjs app benefits from a number of protections:

 - Uses **standard SASLogon** (corporate auth)
 - **Static Content**.  The frontend (html, css, js, png) is deployed entirely to SAS Drive (files service).  There are zero "running services" to deploy outside of SAS.
 - The frontend is ONLY **visible once authenticated** and authorised.
 - Strict **Content Security Policy**.  Viya enforces a very tight ruleset on web content by default, and this cannot be bypassed.
 - **NOXCMD** by default
- **No filesystem dependency for SAS code**. The SASjs compilation process ensures that every job is fully self-contained - so is not vulnerable to changes on the filesystem.
- **No internet dependency**.  Apps are always designed to work without external dependencies such as fonts, images etc.
- Uses **standard Viya APIs**.  These include:
  - `DELETE /compute/sessions/${id}`
  - `GET /compute/contexts`
  - `GET /compute/sessions/${id}/jobs/${id}`
  - `GET /compute/sessions/${id}`
  - `GET /folders/folders/@item`
  - `GET /identities/users/@currentUser`
  - `GET /jobExecution/jobs/${id}`
  - `POST /compute/contexts/${id}/sessions`
  - `POST /compute/sessions/${id}/jobs`
  - `POST /jobExecution/jobs`
