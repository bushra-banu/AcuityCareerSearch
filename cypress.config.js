const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "j449eo",
  e2e: {
    baseUrl: "https://careers.acuityinc.com",
    // successFactorsUrl: 'https://career4.successfactors.com/careers?company=AcuityBrands',
    video: true,
    viewportWidth: 1400,
    viewportHeight: 1200,
    experimentalOriginDependencies: true,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
  },
});
