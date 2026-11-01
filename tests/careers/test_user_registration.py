"""Registers a new user through an open job, then signs out.

Each run creates a real, permanent account on the live SuccessFactors site.
"""

import re

import allure
import pytest
from playwright.sync_api import expect

from utils.test_data import generate_user


@pytest.fixture
def create_account_form(page, search_page, apply_job_page, user_register_page):
    # The registration link is tied to a job and breaks when that job closes, so get a new one from an open job.
    search_page.open()
    search_page.search_open_jobs_btn.click()
    search_page.select_job_link.first.click()
    page.wait_for_load_state("load")
    apply_job_page.apply_button.first.click()
    apply_job_page.apply_now.click()
    user_register_page.create_account_link.click()


@pytest.mark.registration
def test_user_registration_and_job_application(page, user_register_page, create_account_form):
    user = generate_user()
    allure.attach(user["email"], name="registered-email", attachment_type=allure.attachment_type.TEXT)
    # User registration details can be filled here and application can be submitted
    user_register_page.first_name_field.press_sequentially(user["first_name"], delay=50)
    user_register_page.last_name_field.press_sequentially(user["last_name"], delay=50)
    user_register_page.email_field.press_sequentially(user["email"], delay=50)
    user_register_page.retype_email_field.press_sequentially(user["email"], delay=50)
    user_register_page.password_field.press_sequentially(user["password"], delay=50)
    user_register_page.retype_password_field.press_sequentially(user["password"], delay=50)
    user_register_page.country_code_selection.select_option(label="Ireland (+353)")
    user_register_page.phone_number_field.press_sequentially(user["phone_number"], delay=50)
    user_register_page.country_selection_option.select_option(label="Ireland", force=True)
    user_register_page.term_and_condition_link.click()
    user_register_page.term_and_condition_accept_btn.click()
    page.wait_for_timeout(2000)
    user_register_page.create_account_btn.click()
    user_register_page.sign_out_btn.click()

    expect(user_register_page.sign_page).to_be_visible()
    expect(page).to_have_url(re.compile(r"login_ns=login.*showLogOutMsg=true"))
