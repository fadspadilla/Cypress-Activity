import Footer from "../../pages/IBS/footerObject"
describe("IBS Footer Tests", () => {
    const footerObj = new Footer;
    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.get(".footer").scrollIntoView().should('be.visible')
    })
    it("Verify if footer support links redirects to the corresponding page", () => {
        footerObj.verifySupportLinks()        
    })
    it("Verify if footer social media links exists", () => {
        footerObj.verifySocialMediaLinks();
    })
})