import Header from "../../pages/IBS/headerObject";

describe("IBS Header Tests", () => {
  let headerFix;
  const headerObj = new Header();
  beforeEach(() => {
    cy.visit("https://www.ibselectronics.com/");
    cy.acceptCookiesIBS();
    cy.fixture("IBS/header.json").then((data) => {
      headerFix = data;
    });
  });
  it("Verify if header navigation links redirect to the corresponding page", () => {
    cy.get("nav > ul > li").each((element, index) => {
      headerObj
        .clickElement(`nav > ul > li:nth-child(${index + 1}) > a > span`)
        .then((text) => {
          let headertext = text;
          if (headertext == "About IBS") {
            headerObj.getText("h1").should("eq", "About Us");
            cy.url().should("eq", headerFix.headerLinks[index]);
          } else if (headertext == "Services") {
            headerObj.getText("h1").should("eq", "IBS Services");
            cy.url().should("eq", headerFix.headerLinks[index]);
          } else {
            headerObj.getText("h1").should("eq", headertext);
            cy.url().should("eq", headerFix.headerLinks[index]);
          }
        });
    });
  });
  it.only("Verify if services dropdown list redirects to corresponding page", () => {
    for (let i = 0; i < headerFix.servicesDropdown.length; i++) {
    //   cy.get("nav > ul > li:nth-child(4)").realHover();
    headerObj.clickDropdown(4)
      cy.wait(1000);
      headerObj
        .clickElement(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${i + 1}) a > span`)
        .then((text) => {
          let href = text;
          if (
            headerFix.servicesDropdown[i] == "New Product Introductions"
          ) {
            cy.get("h1").should("contain", "NPI");
            // cy.url().should("include", href);
          } else {
            cy.get("h1").should("contain", headerFix.servicesDropdown[i]);
            // cy.url().should("include", href);
          }
        });
    }
  });
  it("Verify if markets dropdown list redirects to corresponding page", () => {
    headerObj.verifyMarketsDropdown();
    headerObj.clickMarketsDropdown();
  });
});
