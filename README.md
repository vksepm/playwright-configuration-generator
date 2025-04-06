# Playwright Configuration Generator

A user-friendly web application for generating Playwright test configuration files (`playwright.config.ts`) with an intuitive interface. This tool helps developers configure their Playwright test environments without needing to memorize all available options and their formats.

## Features

- **Visual Configuration Interface**: Easy-to-use form interface for all Playwright configuration options
- **Real-time Preview**: Instant preview of the generated configuration file
- **Configuration Categories**:
  - Basic Settings (test directory, parallel execution, timeouts)
  - Filters (test pattern matching)
  - Snapshots Management
  - Reporting Options
  - Browser Settings
  - Geolocation
  - Language and Timezone
  - HTTP Headers
  - Project Settings
  - Test Sharding
  - Expect Assertions Configuration

## Key Configuration Options

### Basic Settings
- Test directory configuration
- Parallel execution control
- Global and per-test timeouts
- Retry settings for failed tests
- Worker count management

### Browser Control
- Multiple browser support (Chromium, Firefox, WebKit)
- Viewport configuration
- JavaScript and touch events control
- User agent customization
- Download behavior management

### Testing Features
- Screenshot and video recording
- Trace recording
- Geolocation simulation
- Custom HTTP headers
- Locale and timezone settings

### Advanced Features
- Test sharding for parallel execution
- Snapshot testing configuration
- Expect assertion timeouts
- Screenshot comparison settings

## Usage

1. Open the application in your web browser
2. Configure your desired settings using the form interface
3. Click "Generate Config" to preview the configuration
4. Click "Download Config" to save the `playwright.config.ts` file
5. Place the downloaded file in your Playwright project root directory

## Technical Details

- Built with vanilla JavaScript
- Styled using Tailwind CSS
- Supports dark/light mode
- Includes configuration history feature
- Generates TypeScript configuration files

## Default Settings

The generator comes with sensible defaults:
- Test Directory: `./tests`
- Timeout: 30 seconds
- Browser: Chromium
- Viewport: 1280x720
- Screenshot on Failure: Enabled
- Parallel Execution: Enabled

## Installation

No installation required. This is a standalone web application that can be run directly in a browser.

## Development

The project consists of three main files:
- `index.html`: Main application interface
- `script.js`: Application logic and configuration generation
- `style.css`: Styling with Tailwind CSS

## Contributing

Feel free to submit issues and enhancement requests through GitHub issues.

## License

MIT License - Feel free to use this tool for your Playwright testing needs.

## Support

For questions about Playwright configuration options, please refer to the [official Playwright documentation](https://playwright.dev/docs/test-configuration).