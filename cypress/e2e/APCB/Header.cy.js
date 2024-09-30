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
        pageObj.checkDropdownCorrectRedirect(2, $idx, `a.nav-panel-link`, href).then((isRedirectCorrect) => {
          expect(isRedirectCorrect).to.be.true;
          pageObj.getText("h1:nth-child(1)").should("eq", menu_label)   
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
        pageObj.checkDropdownCorrectRedirect(3, $idx, `a`, href).then((isRedirectCorrect) => {
          expect(isRedirectCorrect).to.be.true;
          pageObj.getText("h1:nth-child(1)").should("eq", menu_label)   
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
        pageObj.checkDropdownCorrectRedirect(4, $idx, `a`, href).then((isRedirectCorrect) => {
          expect(isRedirectCorrect).to.be.true;
          pageObj.getText("h1").should("eq", menu_label)   
        })         
      })
  });
});
