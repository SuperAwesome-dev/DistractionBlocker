# Chrome Web Store Submission Answers - DistractionBlocker

## 1. Store Listing - Description

**Description (Required - 16,000 characters max):**

```
DistractionBlocker is a simple and effective Chrome extension that helps you block distracting websites and maintain focus while browsing.

KEY FEATURES:

Block List Management:
- Add any website to your block list with just a few clicks
- Easily remove sites from your block list at any time
- Supports all websites - social media, news sites, entertainment platforms, and more

Simple and Fast:
- Instant blocking - sites are blocked immediately when accessed
- Lightweight and fast - minimal resource usage
- No complex setup required - just add sites and start blocking

Privacy-Focused:
- All data stored locally on your device - your block list never leaves your browser
- No external servers or data collection
- No tracking or analytics
- Complete privacy and security

How It Works:
1. Click the DistractionBlocker icon in your browser toolbar
2. Add websites you want to block (e.g., facebook.com, reddit.com, twitter.com)
3. When you try to visit a blocked site, you'll see a simple block page
4. Remove sites from your block list anytime to allow access again

Perfect For:
- Students who need to focus on studying
- Professionals who want to avoid distracting sites during work
- Anyone looking to improve their productivity and time management
- Users who want a simple, no-nonsense website blocker

Why Choose DistractionBlocker:
- Simple and straightforward - no confusing features or settings
- Free and open source - completely free to use
- Privacy-first - your data stays on your device
- Fast and reliable - minimal overhead, maximum effectiveness

Get started today and take control of your browsing habits. Simply add the sites you want to block, and DistractionBlocker will help you stay focused and productive.
```

**Category (Required):**
Select: **Productivity**

**Language (Required):**
Select: **English (United States)** (or your primary language)

---

## 2. Single Purpose Description

**Single purpose description (Required - 1,000 characters max):**

```
DistractionBlocker has a single, clear purpose: to block websites that users add to their block list. When a user attempts to visit a blocked website, the extension redirects them to a simple block page, preventing access to the distracting site. The extension allows users to add and remove websites from their block list through a simple popup interface. All block list data is stored locally on the user's device using Chrome's storage API. The extension does not collect, transmit, or store any data externally - everything remains private and local to the user's browser. This focused functionality helps users maintain their focus and productivity by preventing access to distracting websites they have chosen to block.
```

---

## 3. Permission Justifications

### Storage Justification (Required - 1,000 characters max):

```
The "storage" permission is essential for DistractionBlocker's core functionality. The extension stores the user's block list locally on their device using Chrome's storage API. This includes the list of websites the user has chosen to block. Without this permission, the extension cannot remember which sites should be blocked, and users would need to re-add their block list every time they open their browser. The storage permission allows the extension to persist the block list across browser sessions, providing a consistent blocking experience. All data stored is user-generated (the list of sites they choose to block) and remains entirely local to the user's device. No data is transmitted to external servers or shared with third parties. The storage permission enables the single purpose of the extension: maintaining and applying the user's block list.
```

### Tabs Justification (Required - 1,000 characters max):

```
The "tabs" permission is required for DistractionBlocker's primary function of blocking websites. When a user navigates to a website, the extension needs to check if that website is on the user's block list. If it is, the extension redirects the tab to a block page, preventing access to the distracting site. The tabs permission allows the extension to: 1) Monitor when tabs are updated with new URLs, 2) Determine the hostname of the website being accessed, 3) Redirect the tab to the block page when a blocked site is detected. Without this permission, the extension cannot intercept navigation requests or redirect users away from blocked sites, which would render the extension non-functional. The tabs permission is used exclusively for this blocking functionality and is not used to read tab content, access browsing history, or collect any user data beyond checking URLs against the block list.
```

### Host Permission Justification (<all_urls>) (Required - 1,000 characters max):

```
The host permission "<all_urls>" is necessary because DistractionBlocker must be able to block any website that users choose to add to their block list. Users can block any domain on the internet - social media sites, news websites, entertainment platforms, etc. Since the extension cannot predict which specific domains users will want to block, it requires broad host access to check all websites against the user's block list. The extension only uses this permission to: 1) Inspect the URL of websites the user visits, 2) Compare the hostname against the user's block list, 3) Redirect to a block page if the site matches a blocked entry. The extension does not read page content, collect browsing data, or transmit any information externally. All processing happens locally on the user's device. Without this permission, users could only block a limited set of pre-approved domains, which would severely limit the extension's usefulness and prevent users from blocking the specific distracting sites they want to avoid.
```

---

## 4. Data Usage Declaration

**What user data do you plan to collect?**

**Check NONE of the boxes** - The extension does NOT collect any of the following:

- ❌ Personally identifiable information
- ❌ Health information
- ❌ Financial and payment information
- ❌ Authentication information
- ❌ Personal communications
- ❌ Location
- ❌ Web history
- ❌ User activity

**Explanation:** DistractionBlocker stores only the user's block list (the websites they choose to block) locally on their device using Chrome's storage API. This block list is user-generated data stored entirely locally - it never leaves the user's device and is not transmitted to any external servers. The extension does not track browsing history, collect any personal information, or monitor user activity beyond checking URLs against the block list for blocking purposes.

---

## 5. Privacy Policy & Certifications

### Certification Checkboxes (Check ALL three):

✅ **I do not sell or transfer user data to third parties, outside of the approved use cases**

✅ **I do not use or transfer user data for purposes that are unrelated to my item's single purpose**

✅ **I do not use or transfer user data to determine creditworthiness or for lending purposes**

### Privacy Policy URL (Required):

If you don't have a privacy policy URL yet, you can create one:

**Option 1: Create a simple privacy policy on GitHub:**
1. Create a new GitHub repository or use an existing one
2. Create a file called `PRIVACY_POLICY.md`
3. Add the content provided below
4. Enable GitHub Pages for the repository
5. Use the GitHub Pages URL as your privacy policy URL (e.g., `https://yourusername.github.io/DistractionBlocker/PRIVACY_POLICY.md`)

**Option 2: Create a privacy policy page on your website**

**Option 3: Use a privacy policy generator service**

---

## Privacy Policy Content Template

If you need to create a privacy policy, here's a template you can use:

```markdown
# DistractionBlocker Privacy Policy

Last updated: [Date]

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
- Block list: The list of websites you have chosen to block
- This data is stored using Chrome's `chrome.storage.sync` API

## How We Use Data

The block list stored locally is used solely for:
- Determining which websites to block when you attempt to visit them
- Maintaining your block list preferences across browser sessions

## Data Sharing

We do not share, sell, or transfer any data to third parties because:
- We do not collect any data
- All data remains on your device
- We do not have access to your block list

## Your Rights

Since all data is stored locally on your device:
- You have complete control over your block list
- You can add or remove sites at any time through the extension popup
- You can uninstall the extension at any time, which will remove all locally stored data
- You can clear your block list through the extension's settings

## Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.

## Contact

If you have any questions about this Privacy Policy, please contact us through [your contact method].
```

---

## Summary Checklist

Before submitting, make sure you have:

1. ✅ Written description (under 16,000 characters)
2. ✅ Selected category: **Productivity**
3. ✅ Selected language: **English (United States)**
4. ✅ Written single purpose description (under 1,000 characters)
5. ✅ Written storage justification (under 1,000 characters)
6. ✅ Written tabs justification (under 1,000 characters)
7. ✅ Written host permission justification (under 1,000 characters)
8. ✅ Checked **NO boxes** in data usage (extension collects no data)
9. ✅ Checked **ALL THREE** certification boxes
10. ✅ Created and provided a privacy policy URL

---

## Important Notes

- **Be honest and accurate** - All information must be truthful
- **Privacy policy is required** even if you collect no data
- **Host permission warning** - The "<all_urls>" permission will trigger an in-depth review, but your justifications explain why it's necessary
- **Review time** - May take longer due to host permissions, but should be approved if answers are clear and honest

Good luck with your submission! 🚀
