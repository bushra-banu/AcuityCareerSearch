/**
 * @file Allure settings: builds the report as a single HTML file in reports/allure-report.
 */

export default {
  name: "Acuity Career Portal",
  output: "reports/allure-report",
  plugins: {
    awesome: {
      options: {
        reportName: "Acuity Career Portal",
        singleFile: true,
      },
    },
  },
};
