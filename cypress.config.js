const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "1f5byj",
  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
