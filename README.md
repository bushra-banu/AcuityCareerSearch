# Acuity Career Portal - Playwright E2E

Playwright suite for the Acuity careers portal.

## Setup

```
npm install
npx playwright install chromium
```

## Run

| Command | What it does |
| --- | --- |
| `npm run test:search` | Career search and apply flow. Blocks the application POST. |
| `npm run test:registration` | **Creates a real account on the live SuccessFactors site.** |
| `npm test` | Both specs, so it also creates a real account. |
| `npm run test:headed` | All specs with a visible browser. |
| `npm run report` | Opens the HTML report. |
| `npm run allure:generate` | Builds the Allure report from `reports/allure-results`. |
| `npm run allure:open` | Serves the generated Allure report. |

`EXPECTED_JOB_TITLE` overrides the job title the search test expects. The default is `Quality Assurance Engineer`.

PowerShell:

```
$env:EXPECTED_JOB_TITLE = "Quality Engineering Leader"; npm run test:search
```

## Layout

| Path | Purpose |
| --- | --- |
| `playwright.config.js` | Base URL, viewport, timeouts, reporters |
| `pages/` | Page objects |
| `fixtures/pages.js` | Injects page objects into tests |
| `utils/test-data.js` | Faker user and password generation |
| `tests/careers/` | Specs |

## Results

Each run writes to `reports/`:

- `html/` - HTML report
- `junit.xml` - JUnit results for CI
- `results.json` - JSON results
- `artifacts/` - video, screenshot and trace for each test
- `allure-results/` - raw Allure results. These build up across runs, so delete the folder to report on one run only.
- `allure-report/index.html` - Allure report in a single file, created by `npm run allure:generate`
