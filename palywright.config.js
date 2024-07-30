// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  use: {
    browserName: "chromium", // Can be 'chromium', 'firefox', or 'webkit'
  },
  testDir: "./tests", // Directory where your tests are located
});
