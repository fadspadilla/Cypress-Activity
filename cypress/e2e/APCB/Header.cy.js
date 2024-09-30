import PageObject from "../../pages/pagesObject";

describe("APCB Header Tests", () => {
  const pageObj = new PageObject();

  let headerFix;
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("APCB/header.json").then((data) => {
      headerFix = data;
    });
  });

  it("Verify if services dropdown list redirects to corresponding page", () => {
    cy.get(`nav > ul > li:nth-child(2)`)
      .realHover()
      .find("li:not(.nav-panel-view)")
      .each(($el, $idx) => {
        const href = $el.find('a').attr('href');
        const menu_label = $el.find('span').text().trim();
        cy.get(`nav > ul > li:nth-child(2) > section > ul`)
          .find(`a.nav-panel-link`)
          .eq($idx)
          .click({force: true})
          .then(() => {         
            pageObj.getText("h1:nth-child(1)").should("eq", menu_label)   
            cy.url().should('include', href);
          })
      })
  });

  it("Verify if resources dropdown list redirects to corresponding page", () => {
    cy.get(`nav > ul > li:nth-child(3)`)
      .realHover()
      .find("li:not(.nav-panel-view)")
      .each(($el, $idx) => {
        const href = $el.find('a').attr('href');
        const menu_label = $el.find('span').text().trim();
        cy.get(`nav > ul > li:nth-child(3) > section > ul`)
          .find(`a`)
          .eq($idx)
          .click({force: true})
          .then(() => {
            pageObj.getText("h1:nth-child(1)").should("eq", menu_label)  
            cy.url().should('include', href);
          })
      })
  });
  it("Verify if company dropdown list redirects to corresponding page", () => {
    cy.get(`nav > ul > li:nth-child(4)`)
      .realHover()
      .find("li:not(.nav-panel-view)")
      .each(($el, $idx) => {
        const href = $el.find('a').attr('href');
        const menu_label = $el.find('span').text().trim();
        cy.get(`nav > ul > li:nth-child(4) > section > ul`)
          .find(`a`)
          .eq($idx)
          .click({force: true})
          .then(() => {
            pageObj.getText("h1").should("eq", menu_label)  
            cy.url().should('include', href);
          })
      })
  });
});
