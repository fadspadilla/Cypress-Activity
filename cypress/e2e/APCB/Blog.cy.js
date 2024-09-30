import PageObject from "../../pages/pagesObject";

describe("APCB Blog Tests", () => {
  const pageObj = new PageObject();

  beforeEach(() => {
    cy.visit("/");
    cy.get("nav > ul > li:nth-child(5)").click();
    cy.get("h1").should("contain", "Blog");
  });
  it("Verify Blog Card on Featured Article is working", () => {
    pageObj.getText(".article-featured > div > a.card-hit-zone > span")
      .then((text) => {
        let cardTitle = text.trim();
        pageObj.clickElement(".article-featured > div > a.card-button")
          .then(() => {
            pageObj.getText("h1").should("eq", cardTitle);
            pageObj.getText(".raw.mb-8 > p:nth-child(1)").should("not.be.empty"); //assert not empty
          });
      });
  });
  it("Verify Blog Cards on Editor's Picks section are working", () => {
    cy.get(`.article-card-group:eq(0)`)
      .find(".article-card")
      .each(($el, $idx) => {
        cy.get(".article-card-group:eq(0) .article-card")
          .eq($idx)
          .click()
          .then(() => {
            let card_title = $el.find("span").text().trim();
            pageObj.getText("h1").should("eq", card_title);
            pageObj.getText(".raw.mb-8 > p:nth-child(1)").should("not.be.empty");
            cy.go("back");
          });
      });
  });
  it("Verify Blog Cards on View All section are working", () => {
    cy.get(`.article-card-group:eq(1)`)
      .find(".article-card")
      .then((blogItems) => {
        const blogCount = blogItems.length;

        for (let i = 0; i < blogCount / 2; i++) {
          let randomIndex = Math.floor(Math.random() * blogCount);
          if (randomIndex > 0) {
            cy.get(".article-card-group:eq(1) .article-card")
              .eq(randomIndex)
              .click()
              .then(($el) => {
                let card_title = $el.find("span").text().trim();
                pageObj.getText("h1").should("eq", card_title);
                pageObj.getText(".raw.mb-8 > p:nth-child(1)").should("not.be.empty");
                cy.go("back");
              });
          }
        }
      });
  });
  it("Verify 'By Tag' filter is working", () => {
    pageObj.blogFilter(":nth-child(2) > .gap-3 > :nth-child(2)", "Benefits");
    cy.get("h1").should("contain", "Benefits");
  });
  it("Verify 'By Category' filter is working", () => {
    pageObj.blogFilter(":nth-child(2) > .gap-3 > :nth-child(3)", "Aerospace");
    cy.get("h1").should("contain", "Aerospace");
  });
});
