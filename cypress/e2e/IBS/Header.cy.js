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
  it("Verify if services dropdown list redirects to corresponding page", () => {
    headerObj.clickDropdown("nav > ul > li:nth-child(4)").then(() => {
      cy.get(`nav > ul > li:nth-child(4) > section > ul > li`).each((element, index, list) => {
        cy.wait(1000)
        if (index != list.length - 1) {
          headerObj.clickElement(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${index + 1}) a > span`).then((text) => {
            let headertext = text
            if (text == "New Product Introductions") {
              headerObj.getText("h1:nth-child(1)").should("eq", "NPI");
              cy.url().should("eq", headerFix.servicesLinks[index]);
            } else {
              headerObj.getText("h1:nth-child(1)").should("eq", text);
              cy.url().should("eq", headerFix.servicesLinks[index]);
            }
          })
        }
      })
    })
  });
  it("Verify if markets dropdown list redirects to corresponding page", () => {
    headerObj.clickDropdown("nav > ul > li:nth-child(6)").then(() => {
      cy.get(`nav > ul > li:nth-child(6) > section > ul > li`).each((element, index, list) => {
        cy.wait(1000)
        if (index != list.length - 1) {
          headerObj.clickElement(`nav > ul > li:nth-child(6) > section > ul > li:nth-child(${index + 1}) a > span`).then((text) => {
            let headertext = text
            if (headertext == "Aerospace & Aviation") {
              headerObj.getText("h1").should("eq", "Aerospace");
              cy.url().should("eq", headerFix.marketsLinks[index]);
            }else if (headertext == "Automotive & Transportation") {
              headerObj.getText("h1").should("eq", "Automotive");
              cy.url().should("eq", headerFix.marketsLinks[index]);
            }else if (headertext == "Power & Energy") {
              headerObj.getText("h1").should("eq", "Power");
              cy.url().should("eq", headerFix.marketsLinks[index]);
            } else {
              headerObj.getText("h1").should("eq", headertext);
              cy.url().should("eq", headerFix.marketsLinks[index]);
            }
          })
        }
      })
    })
  });
});
