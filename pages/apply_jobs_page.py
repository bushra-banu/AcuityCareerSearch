class JobsApplyPage:
    """Page object for a job's details page on the careers site."""

    def __init__(self, page):
        self.page = page
        self.apply_button = page.locator('[class="btn btn-primary btn-large btn-lg dropdown-toggle"]')
        self.apply_now = page.locator('[id="applyOption-top-manual"]')
