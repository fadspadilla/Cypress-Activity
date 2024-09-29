import PageObject from "../../pages/pagesObject";

describe("IBS Footer Tests", () => {
  let footerFix;
  const pageObj = new PageObject();

  beforeEach(() => {
    cy.visit("https://www.ibselectronics.com/");
    cy.acceptCookiesIBS();
    cy.fixture("IBS/footer.json").then((data) => {
      footerFix = data;
    });
  });
  it("Verify if footer support links redirects to the corresponding page", () => {

    footerFix.supportItems.forEach(element => {
      cy.get('.footer').find('a').contains(element).click().then(($el) => {
        const href = $el.attr('href')
        cy.wrap($el).invoke("text").then((text) => {
          let sprt_link = text.trim();
          if (sprt_link == "FAQs") {
            pageObj.getText("h1").should("eq", "Frequently Asked Questions");
          } else {
            pageObj.getText("h1").should("eq", sprt_link);
          }
          cy.url().should("include", href);
        })
      })
    });
  });
  it.only("Verify if footer social media links exists", () => {
    // cy.get(".footer .mt-3 > a").each(($el, $index) => {
    //   pageObj
    //     .getLink(`.footer .mt-3 > a:nth-child(${$index + 1})`)
    //     .then((href) => {
    //       expect(href).to.exist;
    //     });
    // });

    footerFix.mediaIcons.forEach(element => {
      cy.get('.footer').find('i').contains(element).click().then(($el) => {
        const href = $el.attr('href')
      })
    })

  });
});
