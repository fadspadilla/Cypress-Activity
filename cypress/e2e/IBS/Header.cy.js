import PageObject from "../../pages/pagesObject";
describe("IBS Header Tests", () => {
  let headerFix;
  const pageObj = new PageObject();
  beforeEach(() => {
    cy.visit("https://www.ibselectronics.com/");
    cy.acceptCookiesIBS();
    cy.fixture("IBS/header.json").then((data) => {
      headerFix = data;
    });
  });
  it("Verify if header navigation links redirect to the corresponding page", () => {
    cy.get("nav > ul > li").each((element, index) => {
      pageObj
        .clickElement(`nav > ul > li:nth-child(${index + 1}) > a > span`)
        .then((text) => {
          let headertext = text;
          if (headertext == "About IBS") {
            pageObj.getText("h1").should("eq", "About Us");
            cy.url().should("eq", headerFix.headerLinks[index]);
          } else if (headertext == "Services") {
            pageObj.getText("h1").should("eq", "IBS Services");
            cy.url().should("eq", headerFix.headerLinks[index]);
          } else {
            pageObj.getText("h1").should("eq", headertext);
            cy.url().should("eq", headerFix.headerLinks[index]);
          }
        });
    });
  });
  it("Verify if services dropdown list redirects to corresponding page", () => {
    pageObj.hoverMenu("nav > ul > li:nth-child(4)").then(() => {
      cy.get(`nav > ul > li:nth-child(4) > section > ul`)
        .find("li:not(.nav-panel-view)")
        .each((element, index) => {
          pageObj
            .clickElement(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${index + 1}) a > span`)
            .then((text) => {
              let headertext = text;
              if (headertext == "New Product Introductions") {
                pageObj.getText("h1:nth-child(1)").should("eq", "NPI");
                cy.url().should("eq", headerFix.servicesLinks[index]);
              } else {
                pageObj.getText("h1:nth-child(1)").should("eq", headertext);
                cy.url().should("eq", headerFix.servicesLinks[index]);
              }
            });
        });
    });
  });
  it.only("Verify if markets dropdown list redirects to corresponding page", () => {
    pageObj.hoverMenu("nav > ul > li:nth-child(6)").then(() => {
      cy.get(`nav > ul > li:nth-child(6) > section > ul`)
        .find("li:not(.nav-panel-view)")
        .each((element, index, list) => {
          pageObj
            .clickElement(`nav > ul > li:nth-child(6) > section > ul > li:nth-child(${index + 1}) a > span`)
            .then((text) => {
              let headertext = text;
              if (headertext == "Aerospace & Aviation") {
                pageObj.getText("h1").should("eq", "Aerospace");
                cy.url().should("eq", headerFix.marketsLinks[index]);
              } else if (headertext == "Automotive & Transportation") {
                pageObj.getText("h1").should("eq", "Automotive");
                cy.url().should("eq", headerFix.marketsLinks[index]);
              } else if (headertext == "Power & Energy") {
                pageObj.getText("h1").should("eq", "Power");
                cy.url().should("eq", headerFix.marketsLinks[index]);
              } else {
                pageObj.getText("h1").should("eq", headertext);
                cy.url().should("eq", headerFix.marketsLinks[index]);
              }
            });
        });
    });    
  });
});
