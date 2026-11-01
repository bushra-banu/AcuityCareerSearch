"""Searches for a job, filters the results and starts an application.

The application POST is blocked, so this test does not create anything on the live site.
Set EXPECTED_JOB_TITLE to override the job title expected in the results.
"""

import os

import allure
import pytest
from playwright.sync_api import expect

expected_job_title = os.environ.get("EXPECTED_JOB_TITLE", "Data Engineer")


def abort_post(route):
    if route.request.method == "POST":
        route.abort()
    else:
        route.fallback()


@pytest.fixture(autouse=True)
def block_tracking(page):
    page.route("**/li/track", abort_post)


@pytest.mark.search
def test_career_search_and_apply_for_job(page, search_page, apply_job_page):
    search_page.open()
    search_page.search_by_keyword.press_sequentially("QA Engineer", delay=50)
    search_page.search_by_location.press_sequentially("Ireland", delay=50)
    search_page.search_open_jobs_btn.click()
    # Assert
    expect(search_page.search_result_first_title.first).to_contain_text(expected_job_title)
    search_page.search_by_title.press_sequentially("Quality", delay=50)
    search_page.filter_btn.click()
    expect(search_page.select_job_link.first).to_contain_text("Quality")

    search_page.select_job_link.first.click()
    # Apply Now does nothing until the site's scripts have loaded, and they can take several seconds.
    page.wait_for_load_state("load")
    apply_job_page.apply_button.first.click()

    page.evaluate("() => { window.open = () => null; }")

    # The application POST is blocked so that nothing reaches the careers backend.
    page.route("**/careers?company=AcuityBrands", abort_post)

    with page.expect_request(
        lambda req: req.method == "POST" and "/careers?company=AcuityBrands" in req.url
    ) as apply_request:
        apply_job_page.apply_now.click()

    allure.attach(
        apply_request.value.post_data or "", name="form-data", attachment_type=allure.attachment_type.TEXT
    )
