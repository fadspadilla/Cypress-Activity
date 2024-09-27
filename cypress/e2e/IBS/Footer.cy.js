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
  it.only("Verify if footer support links redirects to the corresponding page", () => {
    var support = ["FAQs", "Purchase Terms", "Sales Terms", "Request a Quote"];

    support.forEach(element => {
        cy.get('.footer').find('a').contains(element).click().then((el)=>{
            cy.wrap(el).invoke("text").then((text)=>{
                let sprt_link = text.trim();
                cy.log(sprt_link)
                if(sprt_link == "FAQs"){
                    pageObj.getText("h1").should("eq", "Frequently Asked Questions");
                    cy.url().should("eq", footerFix.supportLinks[index - 1]);
                }else{
                    pageObj.getText("h1").should("eq", sprt_link);
                    cy.url().should("eq", footerFix.supportLinks[index - 1]);
                }
            })
        })
    });
  });
  it("Verify if footer social media links exists", () => {
    cy.get(".footer .mt-3 > a").each(($el, $index) => {
      pageObj
        .getLink(`.footer .mt-3 > a:nth-child(${$index + 1})`)
        .then((href) => {
          expect(href).to.exist;
        });
    });
  });
});
