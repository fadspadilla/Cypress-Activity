import Footer from "../../pages/APCB/footerObject"

describe("IBS Footer Tests", () => {
    const footerObj = new Footer;
    before(() => {
        cy.visit("/")
        cy.get(".footer").scrollIntoView().should('be.visible')
    })
    it.only("Verify if footer social media links are not empty", () => {
        footerObj.verifySocialMediaLinks();        
    })
})