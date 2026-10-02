---
title: 'New in SASjs Lint - Macro Hygiene, Libname Checks and Per-File Rules'
date: 2026-10-01T09:00:00.000Z
layout: POST
path: /sasjs-lint-new-rules
description: SASjs Lint shipped four releases this week, adding macro declaration checks, a libname check, per-file rule overrides and a set of default-behaviour fixes. A walkthrough of each new rule, with examples.
category: SASjs
featuredImage: ../assets/sasjs-lint.jpeg
tags:
  - SAS
  - SASjs
  - Linting
  - Open Source
---

![SASjs Lint](../assets/sasjs-lint.jpeg)

[SASjs Lint](https://github.com/sasjs/lint) is the open source linting and formatting engine behind `sasjs lint`, the SASjs VS Code extension and the SASjs Server editor. This week it shipped five releases - 2.6.0 through 4.1.0 - that add macro declaration checks, a libname check, a way for a single file to override the project rules, and a set of default-behaviour fixes. This post walks through each change, with examples you can lift into a project.

## Where the linter runs

There are three ways to use it, and all three call the same rules from `@sasjs/lint`:

* **The CLI** - `sasjs lint` reports every file's problems with a line and column index, and `sasjs lint fix` repairs the ones the formatter knows how to fix. It returns a non-zero exit code on error, which is what makes it usable in a [git pre-commit hook](https://github.com/sasjs/template_jobs/blob/main/.git-hooks/pre-commit).
* **The SASjs VS Code extension** - install SASjs from [Open VSX](https://open-vsx.org/extension/sasjs/sasjs-for-vscode) and select View -> Problems (or ctrl+shift+M) to see the current file's issues as you work. The extension also registers the formatter, so Format Document and format-on-save apply the same rules. Separately it runs the SAS language server shipped by `@sasjs/sas-language`, which adds hover documentation, completions, signature help and document symbols; the lint diagnostics stay the work of `@sasjs/lint`.
* **SASjs Server** - the Studio editor lints the buffer you are editing, unsaved changes included, and marks the problems inline. The rules come from the nearest `.sasjslint` at or above the file's folder on the drive, walking up to the drive root, so any folder in the drive tree can carry its own rules for everything beneath it. A drive-root `.sasjslint` is seeded on first start and shows up in the Studio file tree as `/.sasjslint`, which makes changing a rule a plain file edit.

## Macros are now checked in both directions

The headline change is two rules, both on by default, that keep the `<h4> SAS Macros </h4>` header honest.

`noUndeclaredMacros` warns when a file calls a macro it never declares. A macro counts as declared when the file defines it with `%macro`, or lists it under `<h4> SAS Macros </h4>` or `<h4> Other Macros </h4>`:

```sas{9}
/**
  @file
  @brief Loads the settlement feed

  <h4> SAS Macros </h4>
  @li mf_trim.sas

**/
%mf_getuser()
%mf_trim(&raw)
```

The header lists `mf_trim` but not `mf_getuser`, so the second call is reported. `sasjs lint` prints one row per diagnostic - the severity, the message, and the `[line, column]` position:

```text
Warning  [9, 1]  Macro 'mf_getuser' is not declared - add it to the <h4> SAS Macros </h4> or <h4> Other Macros </h4> section of the header
```

The macros that ship with SAS are always treated as declared - the macro language keywords (`%if`, `%then`, `%do`), the macro functions (`%scan`, `%index`, `%sysfunc`), and the autocall macros. That list is generated from the language data in `@sasjs/sas-language`, so it tracks the language rather than being maintained here. Macros supplied through `SASAUTOS` are not visible to the linter and are reported; declare those in the header, or switch the rule off for the file.

`noUnusedMacros` is the mirror image: a macro listed under `<h4> SAS Macros </h4>` that the file never calls is flagged, which usually means the header is out of date:

```sas{7}
/**
  @file
  @brief Settles the feed

  <h4> SAS Macros </h4>
  @li mf_used.sas
  @li mf_unused.sas

**/
%mf_used()
```

```text
Warning  [7, 7]  Macro 'mf_unused' is declared in the <h4> SAS Macros </h4> section but not used in the file
```

Both rules carry a formatter fix, so `sasjs lint fix` (or format-on-save) rewrites the section to list exactly the macros the file uses - adding the missing ones, de-duplicated and sorted alphabetically, and removing the stale ones.

## Single asterisk comments

`noSingleAsteriskComments` (off by default) reports comment statements that begin with a single asterisk:

```sas{6}
/**
  @file
  @brief Tidy up before release

**/
* tidy this up before release;

data want;
  set have;
  total = price * qty;
run;
```

```text
Warning  [6, 1]  Line contains a single asterisk comment
```

Line 6 is a comment statement; the asterisk in `price * qty` is arithmetic. The rule walks the file tracking statement boundaries, so it skips block comments, quoted strings, `%* ... ;` macro comments, `%str()` and `%nrstr()` arguments, `datalines` and `cards` sections, `proc lua` and `proc groovy` submit blocks, and arithmetic. It is worth turning on because a comment statement that loses its terminating semicolon turns the rest of the program into a comment, and it cannot be nested - neither is true of a block comment (`/* ... */`).

```json
{
  "noSingleAsteriskComments": true
}
```

## Unused libnames

`noUnusedLibnames` (new in 4.1.0, off by default) reports a libref that a file assigns and never mentions again. Assigning a libref opens a connection, and on a remote engine that costs time, so a `LIBNAME` statement the file never uses is worth knowing about:

```sas{6}
/**
  @file
  @brief Loads the remote table

**/
libname outData "&outdir";

proc sql;
  create table want as select * from sashelp.class;
quit;
```

`outData` is assigned and then never referenced, so it is reported:

```text
Warning  [6, 9]  Libref 'outData' is assigned but never used in this file - remove the LIBNAME statement, or list the libref in 'ignoredLibnames'
```

A libref counts as used when it appears anywhere outside a `LIBNAME` statement - as a two-level name, as a string passed to `pathname()`, as an option value, or as a macro argument. That test is deliberately generous, because SAS takes a libref as a string as often as a two-level name. A narrower version that looked only for `libref.` produced eleven flags over nearly fifteen hundred real SAS files, and every one was a false positive; the generous test produced a single flag, and that one was genuine. The rule is off by default because a file is not a complete job: a libref it assigns may be used by an autoexec, an `%include`, or another file in the same flow. List the ones to leave alone in the project config:

```json
{
  "noUnusedLibnames": true,
  "ignoredLibnames": ["outData", "TESTWORK"]
}
```

There is no formatter fix for this one - the linter cannot see the rest of the job, so the safe correction is not knowable.

## Per-file overrides

The rules above are project-wide, but a single file sometimes needs to differ: a URL in its header that runs past 80 characters, or a macro only that file uses. A file can adjust the configuration for itself with a `@sasjslint` block in its Doxygen header:

```sas
/**
  @file
  @brief Calls the settlement API

  @sasjslint {"maxHeaderLineLength": 200, "noUndeclaredMacros": false}

  <h4> SAS Macros </h4>
  @li mf_trim.sas

**/
```

The block holds a JSON object merged over the resolved `.sasjslint`: scalars replace, arrays are additive (so `allowedGremlins` and `ignoredLibnames` gain entries rather than replacing the project's), and objects merge key by key (so a file can set one `severityLevel` without dropping the others). The override applies to the formatter as well, so a file that switches `noUnusedMacros` off keeps the entries it would otherwise lose. Only the header is read, so an override cannot be hidden in the body of a file, and a block that is malformed is ignored rather than raised.

## Smaller changes worth knowing

* **The documented defaults are now the real defaults.** Two settings, `maxLineLength` and `hasMacroNameInMend`, were only applied when their key was present, so an empty `.sasjslint` behaved differently from no `.sasjslint` at all. They now fall back to their documented values - 80 characters, and macro names required in `%mend`. If you relied on omitting them to switch them off, set `"maxLineLength": 0` or `"hasMacroNameInMend": false`.
* **`strictMacroDefinition` is documented.** It warns about a parameter name containing a space (`%macro myMacro(my var);`) and an option SAS does not recognise (`%macro myMacro()/nonsense;`). It was already in the default block; now the README has a section for it.
* **`lintText` accepts an explicit configuration.** The library function now takes an optional `LintConfig`, the same way `formatText` already did. SASjs Server uses this to lint a buffer against the rules resolved from the file's own folder, rather than the server's working directory.

## Upgrading

All of the above is in `@sasjs/lint` 4.x - `noSingleAsteriskComments` in 2.7.0, the macro rules in 3.0.0, the per-file overrides and default fixes in 4.0.0, and `noUnusedLibnames` in 4.1.0. The CLI, extension and server pick the rules up as they upgrade. If your pipeline keys on the exit code, note that the new macro and libname rules are warnings, so a hook that fails on ERROR still passes. To keep the previous output, set `"noUndeclaredMacros": false` and `"noUnusedMacros": false`.

<!--
Image prompt (regenerate with routstr-genimg.py):
Generate a 16:9 landscape illustration for a B2B developer blog cover, 1200x627.
Style: isometric, flat-shaded 3D on a dark background (#0d1f22), translucent glass-like UI panels floating off a laptop, soft diffused shadows, lime green (#8ac640) as the primary accent with teal-cyan (#00a5d7) secondary, clean and modern, no clutter.
Scene: a floating code editor panel showing a few short lines of SAS code, with a lime green tick badge on one line and a small warning triangle on another; a magnifying glass hovers over the panel.
Minimal text, no logos, no watermarks.
Keep the subject in the central square (safe for 1:1 crop); the outer left and right thirds are croppable background only.

Source LinkedIn post:

SASjs Lint shipped five releases this week - new rules to catch problems before code review.

→ noUndeclaredMacros: a macro a file calls but never declares
→ noUnusedMacros: a macro in the header the file never calls
→ noSingleAsteriskComments: the comment statement that swallows the rest of your program when its semicolon goes missing
→ noUnusedLibnames: a libref that opens a connection and is never used again

The macro rules are on by default, and sasjs lint fix reconciles the SAS Macros header for you. Any single file can now override the project rules with a @sasjslint block in its Doxygen header.

One engine, three surfaces: the SASjs CLI, the SASjs VS Code extension, and SASjs Server Studio.

Full walkthrough with SAS examples ✅ https://sasapps.io/sasjs-lint-new-rules/

#SAS #SASjs #OpenSource #DataEngineering
-->
