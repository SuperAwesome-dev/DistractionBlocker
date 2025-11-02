# DistractionBlocker

A powerful Chrome extension that helps you block distracting websites and stay focused with time limits, schedules, whitelist mode, and gamification features.

## Features

### Core Functionality
- **Block List**: Add websites to a block list that redirects to a motivational block page
- **Time Limits**: Set daily time limits for specific sites with usage tracking
- **Scheduling**: Automatically block sites during specific hours and days
- **Whitelist Mode**: "Nuclear option" that only allows approved sites
- **Gamification**: Earn focus points and badges for staying focused

### Unique Features
- **Quick Toggle**: One-click switch between normal mode and whitelist-only mode
- **Focus Points System**: Earn points for completing focus sessions and staying under limits
- **Badge System**: Unlock achievements as you build better focus habits
- **Motivational Block Pages**: Inspiring messages and tips when sites are blocked
- **Temporary Unblock**: Option to temporarily unblock sites for 1 hour
- **Cross-Device Sync**: Settings sync across all your Chrome browsers

## Installation

### From Chrome Web Store (Recommended)
1. Visit the [Chrome Web Store](https://chrome.google.com/webstore)
2. Search for "DistractionBlocker"
3. Click "Add to Chrome"

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the DistractionBlocker folder
5. The extension will appear in your extensions list

### From GitHub
1. Go to [GitHub Repository](https://github.com/yourusername/DistractionBlocker)
2. Click "Code" → "Download ZIP"
3. Extract the ZIP file
4. Follow the manual installation steps above

## Usage

### Getting Started
1. Click the DistractionBlocker icon in your Chrome toolbar
2. Start by adding some distracting sites to your block list
3. Set time limits for sites you want to limit but not completely block
4. Create schedules for automatic blocking (e.g., work hours)

### Block List
- Add websites like `facebook.com`, `twitter.com`, `reddit.com`
- Sites will be blocked with a motivational page
- Use the "Temporarily Unblock" option for emergency access (1 hour)

### Time Limits
- Set daily limits (15 minutes to 8 hours) for specific sites
- Track your usage with visual progress bars
- Sites are blocked once you reach your daily limit

### Schedules
- Create recurring schedules (e.g., weekdays 9 AM - 5 PM)
- Perfect for work hours or study sessions
- Multiple schedules can be active simultaneously

### Whitelist Mode
- Toggle to "Whitelist Mode" for maximum focus
- Only approved sites will be accessible
- Great for deep work sessions or exam preparation

### Gamification
- Earn focus points for staying under time limits
- Unlock badges as you build better habits
- Track your progress in the Stats tab

## Settings

Access advanced settings by clicking the "Settings" button in the popup or going to the options page.

### General Settings
- **Show Motivational Messages**: Display quotes and tips on blocked pages
- **Allow Temporary Unblock**: Enable 1-hour temporary unblocking
- **Block in Incognito Mode**: Apply rules to private browsing
- **Reset Points Daily**: Reset daily focus points at midnight

### Data Management
- **Export Settings**: Backup your configuration
- **Import Settings**: Restore from backup
- **Reset All Data**: Clear all settings and start fresh

## Development

### Project Structure
```
DistractionBlocker/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for blocking
├── popup.html             # Main popup interface
├── popup.js               # Popup functionality
├── popup.css              # Popup styling
├── block_page.html        # Blocked site page
├── options.html           # Settings page
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── generate_icons.html    # Icon generator
├── create_icons.py        # Python icon generator
└── README.md             # This file
```

### Building Icons
1. Open `generate_icons.html` in a web browser
2. Right-click each icon and save as PNG
3. Or run: `python create_icons.py` (requires Pillow)

### Testing
1. Load the extension in developer mode
2. Test blocking functionality on various sites
3. Verify time tracking and scheduling work correctly
4. Check that settings persist across browser restarts

## Publishing

### Chrome Web Store
1. Create a ZIP file of the extension folder
2. Go to [Chrome Web Store Developer Console](https://chrome.google.com/webstore/devconsole)
3. Pay the one-time $5 developer fee
4. Upload the ZIP file
5. Fill in store details:
   - **Name**: DistractionBlocker
   - **Description**: Block distracting sites and stay focused with time limits, schedules, whitelist mode, and gamification
   - **Category**: Productivity
   - **Price**: Free
6. Add screenshots and promotional images
7. Submit for review

### GitHub
1. Create a new public repository
2. Upload all files including this README
3. Add a LICENSE file (MIT recommended)
4. Enable GitHub Pages for documentation if desired

## Contributing

We welcome contributions! Here's how you can help:

### Bug Reports
1. Check existing issues first
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser version and OS

### Feature Requests
1. Check existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Mockups or examples if applicable

### Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Setup
1. Clone the repository
2. Load the extension in Chrome developer mode
3. Make changes and test
4. Follow the existing code style
5. Add comments for complex functionality

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Privacy

DistractionBlocker is completely private:
- No data collection or analytics
- All settings stored locally in Chrome
- No external dependencies or tracking
- Open source and auditable

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/DistractionBlocker/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/DistractionBlocker/discussions)
- **Email**: support@distractionblocker.com (if applicable)

## Changelog

### Version 1.0.0
- Initial release
- Block list functionality
- Time limits with usage tracking
- Scheduling system
- Whitelist mode
- Gamification with points and badges
- Motivational block pages
- Cross-device sync
- Export/import settings

## Roadmap

- [ ] Mobile app companion
- [ ] Team/family sharing features
- [ ] Advanced analytics and insights
- [ ] Integration with productivity tools
- [ ] Custom block page themes
- [ ] API for third-party integrations

## Acknowledgments

- Inspired by the need for better focus in the digital age
- Built with modern web technologies
- Community feedback and contributions
- Open source libraries and tools

---

**Stay Focused, Stay Productive!** 🎯





