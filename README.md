# Acuity Career Portal - Pytest and Playwright E2E

Pytest suite for the Acuity careers portal, using Playwright for Python.

## Setup

PowerShell:

```
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
playwright install chromium
```

## Run

| Command | What it does |
| --- | --- |
| `pytest -m search` | Career search and apply flow. Blocks the application POST. |
| `pytest -m registration` | **Creates a real account on the live SuccessFactors site.** |
| `pytest` | All tests, so it also creates a real account. |
| `pytest -m search --headed` | Search test with a visible browser. |
| `npx allure@3.22.1 generate reports/allure-results` | Builds the Allure report from `reports/allure-results`. Needs Node. |
| `npx allure@3.22.1 open reports/allure-report` | Serves the generated Allure report. Needs Node. |

`EXPECTED_JOB_TITLE` overrides the job title the search test expects. The default is `Data Engineer`.

PowerShell:

```
$env:EXPECTED_JOB_TITLE = "Quality Engineering Leader"; pytest -m search
```

## CI

`.github/workflows/e2e.yml` runs the suite on GitHub Actions.

| Trigger | Test | Why |
| --- | --- | --- |
| Pull request to `main` | Search | Checks test changes before they merge. |
| Monday to Friday, 06:17 UTC | Search | Catches changes on the live site. |
| Manual, from the Actions tab | Search or registration | Registration creates a real account, so it only runs on request. |

Search runs upload `reports/` as the `playwright-reports` artifact for 14 days. Registration runs upload nothing, because the repo is public and their traces record the account's password.

## Layout

| Path | Purpose |
| --- | --- |
| `pytest.ini` | Base URL, browser, reporters, recorded artifacts, markers |
| `conftest.py` | Viewport, timeouts and page object fixtures |
| `allurerc.mjs` | Allure report settings |
| `pages/` | Page objects |
| `utils/test_data.py` | Faker user and password generation |
| `tests/careers/` | Tests |

## Results

Each run writes to `reports/`:

- `html/index.html` - HTML report
- `junit.xml` - JUnit results for CI
- `results.json` - JSON results
- `artifacts/` - video, screenshot and trace for each test
- `allure-results/` - raw Allure results. These build up across runs, so delete the folder to report on one run only.
- `allure-report/index.html` - Allure report in a single file, created by the Allure generate command
