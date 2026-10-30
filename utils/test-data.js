import { faker } from "@faker-js/faker";

// Site rule: 8-18 characters, upper and lower case, plus a number or punctuation.
export function generatePassword() {
  const upper = faker.string.alpha({ length: 1, casing: "upper" });
  const lower = faker.string.alpha({ length: 1, casing: "lower" });
  const numberOrSymbol = faker.helpers.arrayElement([
    faker.string.numeric({ length: 1 }),
    faker.helpers.arrayElement("!@#$%^&*".split("")),
  ]);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*".split("");
  const remaining = Array.from({ length: faker.number.int({ min: 5, max: 15 }) }, () =>
    faker.helpers.arrayElement(chars)
  ).join("");

  return faker.helpers.shuffle((upper + lower + numberOrSymbol + remaining).split("")).join("");
}

export function generateUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    // example.com is reserved, so account emails can never reach a real person's mailbox.
    email: faker.internet.email({ provider: "example.com" }),
    // The site allows one account per phone number. The 000 prefix stops it being a real person's number.
    phoneNumber: `000${faker.string.numeric(7)}`,
    password: generatePassword(),
  };
}
