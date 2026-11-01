class HomePage:
    """Page object for the careers site home page."""

    def __init__(self, page):
        self.page = page
        self.join_our_team_button = page.locator('[class="last-on-desktop"]')
