import PageObject from "../../pages/pagesObject";

describe("APCB Contact Us Tests", () => {
  const pageObj = new PageObject();

  let contactFix;
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("APCB/contact.json").then((data) => {
      contactFix = data;
    });
    cy.get(".header-actions > a:nth-child(2)").click();
  });

  it("Verify that all 'Contact Us' input fields can successfully accept valid text", () => {
    cy.get("h3.mb-10").should("contain", "Get In Touch Today");
    // Load the fixture data before running the test
    contactFix.formFields.forEach((field) => {
        pageObj.inputText(field.selector, field.value); // Use the inputText function
        cy.get(field.selector).should("have.value", field.value); // Assert that the value is correct
      });
  });
  it.only("Verify if contact us displays validation errors on submit if required fields are empty", () => {
    contactFix.formFields.forEach((field) => {
        cy.get(field.selector).should("have.value", ""); // Assert that the value is correct
    })
    cy.get('.actions > input[value="Submit"]').click();
    cy.get("ul > li > label.hs-error-msg").should("be.visible").should("contain",contactFix.requiredMsg);
  });
});
