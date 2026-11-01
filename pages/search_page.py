class SearchPage:
    """Page object for the job search page and its results."""

    def __init__(self, page):
        self.page = page
        self.search_by_keyword = page.locator('[class="keywordsearch-q columnized-search"]')
        self.search_by_location = page.locator('[class="keywordsearch-locationsearch columnized-search"]')
        self.search_open_jobs_btn = page.locator('[class="btn keywordsearch-button"]')
        self.search_result_first_title = page.locator('[id="searchresults"]')
        self.search_by_title = page.locator('[id="title"]')
        self.filter_btn = page.locator('[class="btn btn-default"]')
        # Target the link: the centre of the colTitle cell is empty space past the title text.
        self.select_job_link = page.locator('[class="colTitle"] a.jobTitle-link')

    def open(self):
        """Opens the job search page."""
        self.page.goto("/search")
