# Testing DistractionBlocker - Core Functionality

## Core Features to Test

### 1. Basic Blocking
- ✅ Add a site to block list (e.g., `reddit.com`)
- ✅ Navigate to that site
- ✅ Should redirect to block page immediately

### 2. Whitelist Mode
- ✅ Add sites to whitelist (e.g., `google.com`, `wikipedia.org`)
- ✅ Toggle whitelist mode ON
- ✅ Try to visit a site NOT in whitelist (should be blocked)
- ✅ Try to visit a site IN whitelist (should work)

### 3. Time Limits
- ✅ Add a site with a time limit (e.g., `facebook.com` - 15 minutes)
- ✅ Visit the site and stay on it
- ✅ After limit is reached, site should be blocked

## Quick Test Steps

1. **Reload Extension**
   - Go to `chrome://extensions/`
   - Find "DistractionBlocker"
   - Click refresh/reload button

2. **Test Basic Blocking**
   - Click extension icon
   - Add `reddit.com` to block list
   - Open new tab and go to `https://www.reddit.com`
   - Should see block page immediately

3. **Test Whitelist Mode**
   - Add `google.com` to whitelist
   - Toggle whitelist mode ON
   - Try visiting `facebook.com` (should be blocked)
   - Try visiting `google.com` (should work)

4. **Verify Console**
   - Press F12 to open DevTools
   - Check Console tab for:
     - "DistractionBlocker background script loaded"
     - "Checking URL: ..."
     - "Site in block list: ..." or "Site not in whitelist: ..."
     - "Blocked site: ..."

## Expected Behavior

- **Blocking**: Immediate redirect to block page
- **Whitelist Mode**: Only whitelisted sites accessible
- **Time Limits**: Blocks when daily limit reached
- **No Errors**: Console should show no JavaScript errors

## Files Checked

✅ `background.js` - Core blocking logic
✅ `popup.js` - UI management
✅ `popup.html` - Interface
✅ `block_page.html` - Block page display
✅ `manifest.json` - Permissions and config

All code is clean with no references to removed features!
