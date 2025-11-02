# Simple Test Instructions

## How to Test the Extension

1. **Reload the Extension**:
   - Go to `chrome://extensions/`
   - Find "DistractionBlocker"
   - Click the refresh/reload button (🔄)

2. **Add www.reddit.com to Block List**:
   - Click the DistractionBlocker icon in your toolbar
   - Make sure you're on the "Block List" tab
   - Type: `www.reddit.com`
   - Click "Add"
   - You should see a success message

3. **Test the Blocking**:
   - Open a new tab
   - Go to `https://www.reddit.com`
   - You should be redirected to a block page with "Stay Focused!" message

4. **Check Console for Debugging**:
   - Press F12 to open DevTools
   - Go to Console tab
   - Look for messages like:
     - "DistractionBlocker background script loaded"
     - "Checking URL: https://www.reddit.com"
     - "Site should be blocked!"
     - "Blocking site: www.reddit.com"

## What Should Happen

✅ **When you visit www.reddit.com**: You should be immediately redirected to a motivational block page
✅ **Block page shows**: "Stay Focused!" message and the blocked site name
✅ **Console shows**: Debugging messages confirming the blocking is working

## If It Still Doesn't Work

1. **Check the console** for any error messages
2. **Make sure you added the exact domain** (www.reddit.com)
3. **Try refreshing the extension** and testing again
4. **Check that the site was actually added** to the block list in the popup

The extension is now much simpler and should work reliably!





