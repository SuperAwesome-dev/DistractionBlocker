# DistractionBlocker Privacy Policy

**Last Updated:** October 2024

## Overview

DistractionBlocker ("we", "our", or "the extension") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our Chrome extension.

## Data Collection

**We do not collect, store, or transmit any personal data.**

DistractionBlocker stores only your block list (the websites you choose to block) locally on your device using Chrome's built-in storage API. This block list:
- Is stored entirely on your device
- Never leaves your browser
- Is not transmitted to any external servers
- Is not shared with third parties
- Is not used for any purpose other than blocking the websites you specify

## What Data Is Stored Locally

The extension stores the following data locally on your device:
- **Block list**: The list of websites you have chosen to block

This data is stored using Chrome's `chrome.storage.sync` API, which syncs data across your Chrome browsers but keeps it private to your Google account.

## How We Use Data

The block list stored locally is used solely for:
- Determining which websites to block when you attempt to visit them
- Maintaining your block list preferences across browser sessions

## Data Sharing

**We do not share, sell, or transfer any data to third parties** because:
- We do not collect any data
- All data remains on your device
- We do not have access to your block list
- The extension does not connect to any external servers

## Permissions Used

### Storage Permission
Used to store your block list locally on your device. This data never leaves your device.

### Tabs Permission
Used to detect when you visit websites and check if they are on your block list. We only check URLs - we do not read tab content, access browsing history, or collect any browsing data.

### Host Permissions (<all_urls>)
Used to check any website you visit against your block list. Since users can block any website, we need broad access to check all sites. We only use this to check URLs against your block list - we do not read page content or collect any data.

## Your Rights

Since all data is stored locally on your device:
- You have complete control over your block list
- You can add or remove sites at any time through the extension popup
- You can uninstall the extension at any time, which will remove all locally stored data
- You can clear your block list by removing all sites through the extension interface

## Data Security

Your block list is stored securely using Chrome's built-in storage API. All data is:
- Encrypted by Chrome's storage system
- Only accessible by the extension itself
- Never transmitted over the network

## Children's Privacy

DistractionBlocker does not knowingly collect any information from children. Since we do not collect any data, this policy applies to users of all ages.

## Third-Party Services

DistractionBlocker does not use any third-party services, analytics, tracking tools, or external APIs. The extension operates entirely locally on your device.

## Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. You are advised to review this Privacy Policy periodically for any changes.

## Contact

If you have any questions about this Privacy Policy or how we handle data, please contact us through:
- GitHub Issues: [Your GitHub Repository URL]
- Email: [Your Email Address]

## Open Source

DistractionBlocker is an open-source extension. You can review the source code at: [Your GitHub Repository URL]

---

**Summary:** DistractionBlocker is a privacy-first extension that stores your block list locally on your device. We do not collect, transmit, or share any data. Your privacy is our priority.
