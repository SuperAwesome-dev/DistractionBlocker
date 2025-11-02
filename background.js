// DistractionBlocker - Background Script
console.log('DistractionBlocker background script loaded');

// Listen for tab updates
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // Only check when page is fully loaded
  if (changeInfo.status !== 'complete' || !tab.url) {
    return;
  }

  // Skip chrome:// and extension URLs
  if (tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://')) {
    return;
  }

  console.log('Checking URL:', tab.url);
  
  // Check if should block
  const shouldBlock = await checkIfShouldBlock(tab);
  
  if (shouldBlock) {
    await blockTab(tabId, tab.url);
  }
});

async function checkIfShouldBlock(tab) {
  try {
    const url = new URL(tab.url);
    const hostname = url.hostname.toLowerCase();
    
    const data = await chrome.storage.sync.get(['blockedSites']);

    // Check if site is in blocked list
    if (data.blockedSites && isSiteInList(hostname, data.blockedSites)) {
      console.log('Site in block list:', hostname);
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error checking if should block:', error);
    return false;
  }
}

async function blockTab(tabId, url) {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    const blockUrl = chrome.runtime.getURL('block_page.html') + '?site=' + encodeURIComponent(hostname);
    await chrome.tabs.update(tabId, { url: blockUrl });
    console.log('Blocked site:', hostname);
  } catch (error) {
    console.error('Error blocking tab:', error);
  }
}

function isSiteInList(hostname, siteList) {
  return siteList.some(site => {
    const siteHost = site.toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '');
    const currentHost = hostname.replace(/^www\./, '');
    return currentHost === siteHost || currentHost.endsWith('.' + siteHost);
  });
}

// Initialize default settings
chrome.runtime.onInstalled.addListener(async () => {
  console.log('DistractionBlocker installed');
  
  const defaultSettings = {
    blockedSites: []
  };
  
  const existing = await chrome.storage.sync.get(Object.keys(defaultSettings));
  const updates = {};
  
  for (const [key, value] of Object.entries(defaultSettings)) {
    if (!(key in existing)) {
      updates[key] = value;
    }
  }
  
  if (Object.keys(updates).length > 0) {
    await chrome.storage.sync.set(updates);
    console.log('Default settings initialized');
  }
});