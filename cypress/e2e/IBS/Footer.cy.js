import PageObject from "../../pages/pagesObject";

describe("IBS Footer Tests", () => {
    let footerFix;
    const pageObj = new PageObject();

    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookiesIBS();
        cy.fixture("IBS/footer.json").then((data) => {
            footerFix = data;
        });
        pageObj.scroll(".footer").should('be.visible');
    })
    it("Verify if footer support links redirects to the corresponding page", () => {
        // pageObj.verifySupportLinks()       
        cy.get(`.limit\\:self > .relative > :nth-child(2) > div`).each((element, index) => {
            if(index > 0){
                pageObj.clickElement(`.limit\\:self > .relative > :nth-child(2) > :nth-child(${index + 1}) > a`)
                    .then((text) => {
                        let headertext = text;                    
                        if(headertext == "FAQs"){
                            pageObj.getText("h1").should("eq", "Frequently Asked Questions");
                            cy.url().should("eq", footerFix.supportLinks[index - 1]);
                        }else{
                            pageObj.getText("h1").should("eq", headertext);
                            cy.url().should("eq", footerFix.supportLinks[index - 1]);
                        }
                })
            }
        }) 
    })
    it("Verify if footer social media links exists", () => {
        cy.get(".footer .mt-3 > a").each(($el, $index) => {
            pageObj.getLink(`.footer .mt-3 > a:nth-child(${$index + 1})`)
                .then((href) => {
                    expect(href).to.exist;   
            })
        })
    })
})