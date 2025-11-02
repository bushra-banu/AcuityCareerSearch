
import userRegisterPage from "../../page_Objects/userRegisterPage";


describe("Job Application Tests", () => {
it("Verify UserRegistration and JobApplication", () => {
    // Second URL test
    
    cy.visit("https://career4.successfactors.com/career?company=AcuityBrands&site=&lang=en_US&requestParams=VjV47T3Ezm6SK3yrqaCN%2fRwHhI142m1R3UpCQRCeNFFTSgm66xVE84eii7LAEooCsZsuTuOeybOy%0a7TnujqkEPVE9RPQEddkLRBe9Q6sFdbCFWdj5vp35vpmHT0hZA8UB3mJpxFKVjtEGpxil0m9PzxtX%0aL0lItGBFhei3UHBo2pDlwJANQuVPor19mJ38OOPugoscw7KVTCMD65cn86oKdb%2fUYSN1f%2ffx9eL9%0aY%2fPuKAEwiRx9iQEYMkJJ0tz2R0O4h%2bR3PjMIe3ZrTD2GokBDZDyX8QwNPRkjpiqVRqPKkLOhkKia%0aUaSmMfwalSWHu%2b%2fnMiIlNcXwMw7IMKyK0BhSyDLUXlxLbqdeq9Zq9e1KueyI0rY1k9GoupbMf73S%0aIryJUP%2fqSDDkm2IkeXpgUPt24Zn98ajt33prM8voHEkx1%2bWmOxtnrCVpr9thKLiVjJvKOTk0hEz%2b%0aoq7JF9L2jTE%3d&login_ns=register&career_ns=job%5fapplication&career_job_req_id=11663&jobPipeline=Other&clientId=jobs2web&_s.crb=SA%2fiUSdlk3vTXrap1vUgaZFPUIeIXNnicjN96OXZSUo%3d");
      //User registration details can be filled here and application can be submitted

      userRegisterPage.firstNameField.type("Bushra", { delay: 50 });
      userRegisterPage.lastNameField.type("Banu", { delay: 50 });
      userRegisterPage.prefferedNameField.type("Bushra", { delay: 50 });
      userRegisterPage.emailField.type("bushra.banu8@gmail.com", { delay: 50 });
      userRegisterPage.retypeEmailField.type("bushra.banu8@gmail.com", {
        delay: 50,
      });
      userRegisterPage.passwordField.type("Acuity@1234", { delay: 50 });
      userRegisterPage.retypePasswordField.type("Acuity@1234", { delay: 50 });
      userRegisterPage.phoneNumberField.type("0894375134", { delay: 50 });
      userRegisterPage.countrySelection.click();
      userRegisterPage.countrySelectionOption.contains("Ireland").click();
      userRegisterPage.addressField.type("42,Mews,Eden", { delay: 50 });
      userRegisterPage.cityField.type("Cork", { delay: 50 });
      userRegisterPage.zipCodeField.type("T12 YX22", { delay: 50 });
      userRegisterPage.employmentInfoOption.contains("NO").click();
    });
  });


