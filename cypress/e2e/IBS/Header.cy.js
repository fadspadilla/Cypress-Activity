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
  it.only("Verify if header navigation links redirect to the corresponding page", () => {
    cy.get('nav > ul > li').each(($el, $idx) => {
      const href = $el.find('a').attr('href');
      pageObj.clickElement(`nav > ul > li:nth-child(${$idx + 1}) > a > span`).then((text) => {
        let header_text = text.trim();
        if (header_text == "About IBS") {
          pageObj.getText('h1').should('eq', "About Us")
        } else if (header_text == "Services") {
          pageObj.getText('h1').should('eq', "IBS Services")
        } else {
          pageObj.getText('h1').should('eq', headerFix.mainMenu[$idx])
        }
        cy.url().should('include', href);
      })
    })
  })
  it("Verify if services dropdown list redirects to corresponding page", () => {
    cy.get(`nav > ul > li:nth-child(4)`)
      .realHover()
      .find("li:not(.nav-panel-view)")
      .each(($el, $idx) => {
        const href = $el.find('a').attr('href');
        const menu_label = $el.find('span').text().trim();
        cy.get(`nav > ul > li:nth-child(4) > section > ul`)
          .find(`a`)
          .eq($idx)
          .click()
          .then(() => {
            if (menu_label == "New Product Introductions") {
              pageObj.getText("h1:nth-child(1)").should("eq", "NPI");
            } else {
              pageObj.getText("h1:nth-child(1)").should("eq", menu_label);
            }
            cy.url().should('include', href);
          })
      })
  });
  it("Verify if markets dropdown list redirects to corresponding page", () => {
    cy.get(`nav > ul > li:nth-child(6)`)
      .realHover()
      .find("li:not(.nav-panel-view)")
      .each(($el, $idx) => {
        const href = $el.find('a').attr('href');
        const menu_label = $el.find('span').text().trim();
        cy.get(`nav > ul > li:nth-child(6) > section > ul`)
          .find(`a`)
          .eq($idx)
          .click()
          .then(() => {
            if (menu_label == "Aerospace & Aviation") {
              pageObj.getText("h1").should("eq", "Aerospace");
            } else if (menu_label == "Automotive & Transportation") {
              pageObj.getText("h1").should("eq", "Automotive");
            } else if (menu_label == "Power & Energy") {
              pageObj.getText("h1").should("eq", "Power");
            } else {
              pageObj.getText("h1").should("eq", menu_label);
            }
            cy.url().should('include', href);
          })
      });
  });
});
