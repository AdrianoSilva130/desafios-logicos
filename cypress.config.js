import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "9cf1ca",

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/my-account/",
    specPattern: "cypress/**/*.js",
    supportFile: false,
    setupNodeEvents(on, config) {
      return config;
    }
  }
});