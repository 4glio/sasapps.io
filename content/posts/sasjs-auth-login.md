---
title: SASjs CLI Auth Login - Connect to Viya Without a Client/Secret
date: 2026-08-18T09:00:00.000Z
layout: POST
path: /sasjs-auth-login
description: The new sasjs auth login command lets you authenticate to SAS Viya with just a username and password - no registered OAuth client or secret required.
category: SASjs
featuredImage: ../assets/sasjs-auth-login.jpeg
tags:
  - SASjs
  - SAS
  - Viya
  - SAS Admin
---

The SASjs CLI has always required a registered OAuth client and secret to authenticate against SAS Viya. If you are a developer who just wants to run a SAS program from the command line, getting an administrator to register an OAuth client for you is friction you do not need. The new `sasjs auth login` command removes that barrier - you log in with your regular SAS username and password, and the CLI handles the rest.

## What it does

```bash
sasjs auth login -t myviyatarget
```

That is it. You are prompted for your SAS username and password (the password input is masked), the CLI exchanges them for an access/refresh token pair, verifies the token, and persists it. From that point on, the stored token can be used by any command that accepts an access token - `sasjs run`, `sasjs deploy`, `sasjs job execute`, `sasjs flow`, `sasjs fs`, `sasjs request`, `sasjs context`, `sasjs folder`, `sasjs test`. No client or secret is needed for the initial login or for silent token refreshes (the built-in `sas.cli` public client handles those).

## Why it matters

Before this feature, authenticating to Viya from the SASjs CLI meant:

1. Asking a SAS administrator to register an OAuth client in SAS Viya
2. Obtaining the CLIENT ID and CLIENT SECRET
3. Running `sasjs auth` (or `sasjs add cred`), which uses the authorisation code flow - you visit a URL in your browser, sign in, grant access, and paste back an authorisation code

That is fine for production CI pipelines, but painful for a developer who just wants to test something quickly on a demo Viya instance. The new `sasjs auth login` command uses the OAuth2 resource owner password grant against the built-in, secret-less `sas.cli` public client - the same client the official SAS Viya CLI uses. No client registration, no secret, no browser redirect.

## How it works

Under the hood, `sasjs auth login` does the following:

1. **Password grant request** - sends a POST to `/SASLogon/oauth/token` with `grant_type=password`, your username, and your password, authenticated with a Basic auth header for the `sas.cli` client (which has no secret).
2. **Token verification** - calls `GET /identities/users/@currentUser` with the access token to confirm it is valid and to identify the logged-in user.
3. **Token persistence** - saves the access token and refresh token to the same locations as the existing `sasjs auth` flow: `.env.[target name]` for local targets, `~/.sasjsrc` for global targets.
4. **Automatic refresh** - when the access token is close to expiry, the CLI silently refreshes it using the stored refresh token (again via the `sas.cli` client). No client/secret is needed for the refresh either.

Viya refresh tokens are single-use and rotate on every refresh. The CLI persists the rotated pair automatically after every refresh - including refreshes that happen inside long-running job executions - so you never end up with a stale refresh token.

## Quick start

First, make sure you have a target configured for your Viya server. If you do not have one yet, create one with the interactive wizard:

```bash
sasjs add
```

The command prompts you for the target name, server type (pick SAS Viya), server URL, and app location. You can skip the authentication step at the end - `sasjs auth login` will handle that separately.

Then log in:

```bash
sasjs auth login -t myviyatarget
# Please enter your SAS username: viyademo01
# Please enter your SAS password: ********
# Logged in as viyademo01 (Viya Demo User) on https://your-viya-server.com.
```

Now run any command:

```bash
sasjs run myprogram.sas -t myviyatarget
```

When the access token expires (12 hours by default, though some estates configure shorter TTLs for the `sas.cli` client), the CLI will silently refresh it. If the refresh token itself expires, just run `sasjs auth login -t myviyatarget` again.

## Security notes

- **The password is never persisted.** It is used only to mint the token pair and is not written to any file. The password stays in memory for the lifetime of the short-lived CLI process, which exits within seconds.
- **No `--password` command-line flag exists.** Passing a password as a command-line argument would leak it via shell history and process listings (`ps`). The CLI deliberately does not offer this option.
- **Refresh tokens are rotated and stored.** Because Viya refresh tokens are single-use, the CLI persists the new pair after every refresh. This is handled automatically.
- **`--insecure` flag for self-signed certs.** If your Viya server uses self-signed certificates, pass `--insecure` (or `-i`) to bypass TLS validation: `sasjs auth login -t myviyatarget --insecure`. This is not recommended for production.

## Non-interactive usage (CI pipelines and agents)

`sasjs auth login` supports both interactive and non-interactive credential input. For CI pipelines and automated environments, there are three non-interactive patterns:

**Environment variables:**

```bash
SAS_USERNAME=viyademo01 SAS_PASSWORD=secret sasjs auth login -t myviyatarget
```

When both `SAS_USERNAME` and `SAS_PASSWORD` are set, the CLI skips the prompts entirely.

**Password via stdin (avoids shell history leakage):**

```bash
echo "$SAS_PASSWORD" | sasjs auth login --password-stdin -t myviyatarget
```

When `--password-stdin` is set, the password is read from stdin and the username must come from the `SAS_USERNAME` environment variable (stdin is reserved for the password, so interactive prompting is not possible).

**Credential precedence:**

- Username: `SAS_USERNAME` env var > interactive prompt (TTY only)
- Password: `--password-stdin` > `SAS_PASSWORD` env var > interactive prompt (TTY only)

If no TTY is available and no env var or stdin flag supplies the credential, the command throws with a clear message pointing at the env vars or `--password-stdin`. This makes it safe to call from CI pipelines and non-interactive agents.

## Requirements and limitations

- The password grant must be enabled for the `sas.cli` client. This is the default on most Viya deployments, but administrators can disable it.
- The account must be a local or LDAP account. `sasjs auth login` cannot work on SSO/SAML/MFA-only estates - those require the browser-based authorisation code flow.
- On a cold Viya estate, the first compute session creation can take several minutes while pods spin up. The first `sasjs run` may appear to hang. Subsequent runs are fast.
- If `sasjs run` fails with a 403 when creating a compute session, your account may not be authorised for the configured compute context. Check the available contexts and update the `contextName` on your target accordingly.
- The password grant is deprecated in OAuth 2.1. This flow is intended for dev/demo estates where obtaining a registered client/secret is impractical. For CI pipelines and production use, a properly registered client/secret (via `sasjs auth`) remains the recommended approach.

## Backward compatibility

The bare `sasjs auth` command (without the `login` subcommand) still works exactly as before - it is an alias for `sasjs add cred` and uses the client/secret authorisation code flow. Nothing changes for existing setups. The `login` subcommand is purely additive.

---

The `sasjs auth login` command is available in the latest SASjs CLI release. If you have been putting off trying the SASjs CLI because you did not want to deal with OAuth client registration, this is your excuse to give it a go.

<!-- Featured image: ~/QubesIncoming/workmodel/proxy.jpeg (provided externally) -->

<!-- Source LinkedIn post:

Authenticating to SAS Viya from the command line used to mean getting an admin to register an OAuth client, obtaining a secret, and doing a browser redirect dance.

Not anymore.

The new "sasjs auth login" command lets you log in to Viya with just your SAS username and password. No client, no secret, no browser.

Just:
- sasjs auth login -t yourtarget
- Enter username and password
- Done. Run sasjs run, sasjs request, anything.

It uses the built-in sas.cli public client (same one the official SAS Viya CLI uses) with the OAuth2 password grant. The password is never stored. Refresh tokens rotate automatically.

CI pipelines are covered too - set SAS_USERNAME and SAS_PASSWORD env vars, or pipe the password with --password-stdin.

One caveat: it needs a local/LDAP account, so it will not work on SSO/MFA-only estates. For those, the existing client/secret flow is still there.

If you have been holding off on the SASjs CLI because OAuth client registration was too much hassle, this is for you.

#sas #sasjs #sasviya #devops #cli
-->
