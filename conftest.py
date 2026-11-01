"""Browser settings shared by all tests, and fixtures that give tests their page objects."""

import pytest
from playwright.sync_api import expect

from pages.apply_jobs_page import JobsApplyPage
from pages.home_page import HomePage
from pages.search_page import SearchPage
from pages.user_register_page import UserRegisterPage

expect.set_options(timeout=10_000)


@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    return {**browser_context_args, "viewport": {"width": 1400, "height": 1200}}


@pytest.fixture
def context(context):
    context.set_default_timeout(10_000)
    context.set_default_navigation_timeout(30_000)
    return context


@pytest.fixture
def search_page(page):
    return SearchPage(page)


@pytest.fixture
def apply_job_page(page):
    return JobsApplyPage(page)


@pytest.fixture
def home_page(page):
    return HomePage(page)


@pytest.fixture
def user_register_page(page):
    return UserRegisterPage(page)
