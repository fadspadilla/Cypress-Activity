import Footer from "../../pages/IBS/footerObject"
import Header from "../../pages/IBS/headerObject";
describe("IBS Footer Tests", () => {
    let footerFix;
    const footerObj = new Footer;
    const headerObj = new Header;
    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookiesIBS();
        cy.fixture("IBS/footer.json").then((data) => {
            footerFix = data;
        });
        footerObj.scroll(".footer");
    })
    it("Verify if footer support links redirects to the corresponding page", () => {
        // footerObj.verifySupportLinks()       
        cy.get(`.limit\\:self > .relative > :nth-child(2) > div`).each((element, index) => {
            if(index > 0){
                headerObj.clickElement(`.limit\\:self > .relative > :nth-child(2) > :nth-child(${index + 1}) > a`)
                    .then((text) => {
                        let headertext = text;                    
                        if(headertext == "FAQs"){
                            headerObj.getText("h1").should("eq", "Frequently Asked Questions");
                            cy.url().should("eq", footerFix.supportLinks[index - 1]);
                        }else{
                            headerObj.getText("h1").should("eq", headertext);
                            cy.url().should("eq", footerFix.supportLinks[index - 1]);
                        }
                })
            }
        }) 
    })
    it.only("Verify if footer social media links exists", () => {
        cy.get(".footer .mt-3 > a").each(($el, $index) => {
            footerObj.getLink(`.footer .mt-3 > a:nth-child(${$index + 1})`)
                .then((href) => {
                    expect(href).to.exist;   
            })
        })
    })
})