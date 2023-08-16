const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://leawie.stg.servalit.com",
    env: {
      Email: "developer@servalit.com",
      Password: "u4ZWG23gPj4sfne",
    },
  },
});
