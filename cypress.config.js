const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": true,
      "html": true,
      "json": true,
      "charts": true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
