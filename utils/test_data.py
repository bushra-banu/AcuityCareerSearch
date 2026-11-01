"""Generates fake user data for the registration test."""

import random
import string

from faker import Faker

fake = Faker()


def generate_password():
    """Generates a password that meets the site's password rule.

    Site rule: 8-18 characters, upper and lower case, plus a number or punctuation.
    """
    symbols = "!@#$%^&*"
    required = [
        random.choice(string.ascii_uppercase),
        random.choice(string.ascii_lowercase),
        random.choice(string.digits + symbols),
    ]
    remaining = random.choices(string.ascii_letters + string.digits + symbols, k=random.randint(5, 15))

    password = required + remaining
    random.shuffle(password)
    return "".join(password)


def generate_user():
    """Generates the details for a new account."""
    return {
        "first_name": fake.first_name(),
        "last_name": fake.last_name(),
        # example.com is reserved, so account emails can never reach a real person's mailbox.
        "email": fake.email(domain="example.com"),
        # The site allows one account per phone number. The 000 prefix stops it being a real person's number.
        "phone_number": f"000{fake.numerify('#######')}",
        "password": generate_password(),
    }
