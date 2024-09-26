import Contact from "../../pages/APCB/contactObject.js"

describe("APCB Contact Us Tests", () => {
    const contactObj = new Contact();
    beforeEach(() => {
        cy.visit("/")
        cy.get(".header-actions > a:nth-child(2)").click()
    })

    it("Verify that all 'Contact Us' input fields can successfully accept text", () => {
        cy.get('h3.mb-10').should('contain', 'Get In Touch Today')
        contactObj.verifyInputFields()
    })
    it("Verify if contact us displays validation errors on submit if required fields are empty", () => {
        contactObj.verifyIfEmpty()
    })
})