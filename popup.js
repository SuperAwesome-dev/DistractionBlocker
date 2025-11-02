// DistractionBlocker - Popup Script
console.log('DistractionBlocker popup loaded');

class DistractionBlockerPopup {
  constructor() {
    this.init();
  }

  async init() {
    console.log('Initializing popup');
    await this.loadData();
    this.setupEventListeners();
    this.updateUI();
  }

  async loadData() {
    try {
      const data = await chrome.storage.sync.get(['blockedSites']);
      
      this.data = {
        blockedSites: data.blockedSites || []
      };
      
      console.log('Loaded data:', this.data);
    } catch (error) {
      console.error('Error loading data:', error);
      this.data = {
        blockedSites: []
      };
    }
  }

  async saveData() {
    try {
      await chrome.storage.sync.set(this.data);
      console.log('Data saved:', this.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  setupEventListeners() {
    // Add blocked site
    document.getElementById('addBlockedBtn').addEventListener('click', () => {
      this.addBlockedSite();
    });

    document.getElementById('blockedSiteInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.addBlockedSite();
      }
    });

    // Options button
    document.getElementById('optionsBtn').addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
    });
  }

  updateUI() {
    this.updateBlockedSites();
  }

  updateBlockedSites() {
    const container = document.getElementById('blockedSitesList');
    container.innerHTML = '';

    if (this.data.blockedSites.length === 0) {
      container.innerHTML = '<div class="empty-state">No blocked sites yet. Add some to get started!</div>';
      return;
    }

    this.data.blockedSites.forEach(site => {
      const item = document.createElement('div');
      item.className = 'site-item';
      item.innerHTML = `
        <div class="site-info">
          <div class="site-name">${site}</div>
        </div>
        <button class="remove-btn" onclick="popup.removeBlockedSite('${site}')">Remove</button>
      `;
      container.appendChild(item);
    });
  }

  async addBlockedSite() {
    const input = document.getElementById('blockedSiteInput');
    const site = this.normalizeSite(input.value.trim());
    
    if (!site) {
      alert('Please enter a valid website');
      return;
    }
    
    if (this.data.blockedSites.includes(site)) {
      alert('This site is already in your block list');
      return;
    }
    
    this.data.blockedSites.push(site);
    await this.saveData();
    this.updateBlockedSites();
    input.value = '';
    
    console.log('Added blocked site:', site);
    alert(`Added ${site} to block list!`);
  }

  async removeBlockedSite(site) {
    this.data.blockedSites = this.data.blockedSites.filter(s => s !== site);
    await this.saveData();
    this.updateBlockedSites();
    console.log('Removed blocked site:', site);
  }

  normalizeSite(site) {
    if (!site) return '';
    
    // Remove protocol and www
    site = site.replace(/^https?:\/\//, '').replace(/^www\./, '');
    
    // Remove trailing slash
    site = site.replace(/\/$/, '');
    
    return site.toLowerCase();
  }
}

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.popup = new DistractionBlockerPopup();
});