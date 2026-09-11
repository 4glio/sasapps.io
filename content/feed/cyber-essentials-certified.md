---
title: 'We Are Cyber Essentials Certified'
date: 2026-09-11T16:00:00.000Z
layout: POST
path: /cyber-essentials-certified
description: Bowe IO Ltd, trading as 4GL Apps, is now certified against the UK's Cyber Essentials scheme - what that covers, what it means for the organisations we work with, and the extra steps we take to protect client data.
category: SAS Apps
featuredImage: ../assets/cyber-essentials-certified.jpeg
tags:
  - Security
  - Cyber Essentials
  - SASjs
---

Bowe IO Ltd, trading as 4GL Apps, is now certified against the UK's Cyber Essentials scheme (certificate number c3125643-593c-4cf8-a1db-148073ed57f8, issued 2026-09-11, whole organisation scope). This post explains what Cyber Essentials is, which controls we were assessed against, what that means if you are a customer or partner - and the certificate is now a permanent part of this website at [sasapps.io/cyber-essentials.pdf](/cyber-essentials.pdf).

## What Cyber Essentials is

Cyber Essentials is a UK government-backed certification scheme, developed by the [National Cyber Security Centre (NCSC)](https://www.ncsc.gov.uk/cyberessentials/overview) and delivered through certification bodies licensed by [IASME](https://iasme.co.uk/cyber-essentials/). It defines a baseline of technical controls that stop the most common types of cyber attack, and it is a frequent requirement in UK public-sector tenders and commercial supply-chain due diligence.

## What we were assessed on

The scheme covers five technical controls:

* Firewalls - every internet-connected network boundary, cloud service and admin interface accounted for, with default-deny inbound rules and no management consoles exposed to the open internet
* Secure configuration - devices and services hardened to sensible defaults, no unnecessary accounts or open services
* Security update management - every operating system and piece of software in scope supported and kept up to date
* User access control - MFA across our accounts, least-privilege permissions, and a documented offboarding process so access ends when engagements do
* Malware protection - anti-malware enabled and kept current on all in-scope devices

Our assessment covered the whole organisation - staff devices, cloud accounts, and the services we use to build and run SAS applications. Our thanks go to John McMullan, who conducted the assessment - a pleasure to work with from start to finish.

## How we go further to protect client data

Certification sets a baseline, and some of our day-to-day practices go beyond it:

* **KasmVNC remote desktops.** Much of the work that touches client environments happens inside centrally managed, containerised remote desktops rather than on personal laptops. Nothing persists locally, sessions can be audited, and access can be revoked centrally.
* **No phone numbers.** We do not hold or publish a phone number - SMS is notoriously insecure for MFA (SIM swapping, interception, SS7 flaws), so our authentication uses authenticator apps and hardware keys instead, and there is no voice channel to social-engineer.
* **Managed Qubes isolation.** Staff machines run isolated, managed Qubes VMs, so client work is compartmentalised away from the host OS and from other engagements.

These choices make a real difference on the projects we run - the same discipline we apply to our own estate is what we bring to customer deployments, whether that is hardening SASjs Server installations, locking down Viya configurations or building access controls into the apps themselves.

## What's next: ISO 27001

Cyber Essentials is a strong baseline, but we are not stopping there. We are now working towards ISO 27001, building out a full information security management system to cover risk management, supplier assurance and the processes around the technical controls. More on that as the work progresses.

## What this means for you

If you are procuring, partnering or working with us, it means an independent certification body has confirmed our setup meets the UK government baseline for the five controls above, and that the certificate is verifiable - the document is permanently hosted at [sasapps.io/cyber-essentials.pdf](/cyber-essentials.pdf), so procurement and vendor-assessment teams can link to it directly.

<!--
LinkedIn version (paste as first comment under the LinkedIn post):

We are Cyber Essentials certified!

Bowe IO Ltd, trading as 4GL Apps, is now certified against the UK's Cyber Essentials scheme - certificate c3125643-593c-4cf8-a1db-148073ed57f8, issued 2026-09-11, whole organisation scope. The certificate is permanently hosted at sasapps.io/cyber-essentials.pdf.

The scheme covers five technical controls:
* Firewalls
* Secure configuration
* Security update management
* User access control
* Malware protection

Our thanks go to John McMullan, who conducted the assessment - a pleasure to work with from start to finish.

Certification sets a baseline, and some of our day-to-day practices go beyond it:
* KasmVNC remote desktops - work that touches client environments happens inside centrally managed, containerised remote desktops rather than on personal laptops. Nothing persists locally, sessions can be audited, access can be revoked centrally.
* No phone numbers - we do not hold or publish a phone number. SMS is notoriously insecure for MFA (SIM swapping, interception, SS7 flaws), so our authentication uses authenticator apps and hardware keys instead, and there is no voice channel to social-engineer.
* Managed Qubes isolation - staff machines run isolated, managed Qubes VMs, so client work is compartmentalised away from the host OS and from other engagements.

And we are not stopping there - we are now working towards ISO 27001, building out a full information security management system to cover risk management, supplier assurance and the processes around the technical controls.

If you are procuring, partnering or working with us, an independent certification body has confirmed our setup meets the UK government baseline - and procurement and vendor-assessment teams can verify the certificate directly.

Need a hand with Cyber Essentials readiness, or the security of your own SAS applications? Get in touch.

#cyberessentials #cybersecurity #sasjs
-->

If you would like to talk about the security of your own SAS applications - or need a hand with Cyber Essentials readiness for your own organisation - do [get in touch](/contact).
