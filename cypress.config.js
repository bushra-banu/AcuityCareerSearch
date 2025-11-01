const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: "https://careers.acuityinc.com/",
      viewportWidth: 1400,
      viewportHeight: 1200,
    },
  },
});
