import PageObject from "../../pages/pagesObject";

describe("IBS Resources Tests", () => {
  const pageObj = new PageObject();

  beforeEach(() => {
    cy.visit("https://www.ibselectronics.com/");
    cy.acceptCookiesIBS();
  });

  it.only("Verify if opening a blog from the blog post page is working", () => {
    cy.get("nav > ul > li:nth-child(5)")
      .realHover()
      .find("a")
      .contains("Blog Posts")
      .click();
    cy.get(".divide-y > a").then((blogItems) => { //get blog container
      const blogCount = blogItems.length;

      for (let i = 0; i < blogCount / 2; i++) {
        let randomIndex = Math.floor(Math.random() * blogCount);
        if (randomIndex > 0) {
          cy.get(".divide-y > a")
            .eq(randomIndex)
            .click()
            .then(($el) => {
              let card_title = $el.find("h3").text().trim();
              pageObj.getText("h1").should("eq", card_title);
              pageObj.getText("#isPasted").should("not.be.empty")
              // cy.get("#isPasted").should("not.be.empty"); 
              cy.go("back");
            });
        }
      }
    });
  });
});
