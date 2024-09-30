import PageObject from "../../pages/pagesObject";

describe("APCB Footer Tests", () => {
  const pageObj = new PageObject();
  before(() => {
    cy.visit("/");
  });
  it("Verify if footer social media links are not empty", () => {
    cy.get(".footer-navigation > div.limit > div > div:nth-child(2)")
      .scrollIntoView() // Ensure the element is in view
      .should("be.visible") // Optional: Check if it's visible
      .find("a")
      .each((element) => {
        expect(element.attr("href")).to.exist; // Assert href exists
      });
  });
});
