const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    watchForFileChanges: false,
    responseTimeout: 60000,
    screenshotOnRunFailure: false,
    video: false,
    reporter: "mochawesome",
    reporterOptions:{
      code: false,
      overwrite: false,
      reportFilename: "cypress-Report",
      autoOpen: true,
      charts: true
    }

  },
});
