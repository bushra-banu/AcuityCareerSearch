/**
 * @file Playwright test and expect, extended so tests can request page objects as fixtures.
 */

import { test as base } from "@playwright/test";
import { SearchPage } from "../pages/search.page.js";
import { JobsApplyPage } from "../pages/apply-jobs.page.js";
import { HomePage } from "../pages/home.page.js";
import { UserRegisterPage } from "../pages/user-register.page.js";

/**
 * Playwright test with a new instance of each page object for every test.
 */
export const test = base.extend({
  searchPage: async ({ page }, use) => use(new SearchPage(page)),
  applyJobPage: async ({ page }, use) => use(new JobsApplyPage(page)),
  homePage: async ({ page }, use) => use(new HomePage(page)),
  userRegisterPage: async ({ page }, use) => use(new UserRegisterPage(page)),
});

export { expect } from "@playwright/test";
