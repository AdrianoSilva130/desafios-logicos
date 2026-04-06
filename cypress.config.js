const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9cf1ca",

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/my-account/",
    setupNodeEvents(on, config) {
      return config;
    }
  }
});