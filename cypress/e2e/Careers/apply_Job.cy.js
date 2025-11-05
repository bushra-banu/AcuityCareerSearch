
import userRegisterPage from "../../page_Objects/userRegisterPage";
import { faker } from "@faker-js/faker";




let generatedFirstName;
let generatedLastName;
let generatedCommonEmail;
let generatedPassword;
describe("REGISRATION FLOW TEST", () => {
  before(() => {
   generatedCommonEmail= `${faker.internet.userName()}${faker.number.int(999)}@example.com`;
   
    });
  });
  
    beforeEach(() => {
       
      const upper = faker.string.alpha({ count: 1, casing: 'upper' });
     const lower = faker.string.alpha({ count: 1, casing: 'lower' });
     const numberOrSymbol = faker.helpers.arrayElement([
     faker.string.numeric({ length: 1 }),
     faker.helpers.arrayElement('!@#$%^&*')
     ]);

     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
     const remaining = Array.from(
     { length: faker.number.int({ min: 5, max: 15 }) },
      () => faker.helpers.arrayElement(chars)
      ).join('');

   
    generatedPassword = faker.helpers.shuffle((upper + lower + numberOrSymbol + remaining).split('')).join('');
    generatedFirstName = faker.person.firstName();
    generatedLastName = faker.person.lastName();
    //generatedPassword = faker.string.uuid();
    generatedCommonEmail = faker.internet.email();
    cy.visit(Cypress.env('urls').RegistrationURL);
  });
it("Verify UserRegistration and JobApplication", () => {
    // Second URL test
    
    
      //User registration details can be filled here and application can be submitted

      userRegisterPage.firstNameField.type(generatedFirstName, { delay: 50 });
      userRegisterPage.lastNameField.type(generatedLastName, { delay: 50 });
      userRegisterPage.emailField.type(generatedCommonEmail  , { delay: 50 });
      userRegisterPage.retypeEmailField.type(generatedCommonEmail, {delay: 50,});
      userRegisterPage.passwordField.type(generatedPassword, { delay: 50 });
      userRegisterPage.retypePasswordField.type(generatedPassword, { delay: 50 })
      userRegisterPage.countrySelectionOption.select('Ireland',{force: true,})
      userRegisterPage.termAndConditionLink.click();
      userRegisterPage.termAndConditionAcceptBtn.click();
      cy.wait(2000);
       userRegisterPage.createAccountBtn.click();
      
    });
  





