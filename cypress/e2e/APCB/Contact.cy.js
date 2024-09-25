import Contact from "../../pages/APCB/contactObject.js"

describe("APCB Contact Us Tests", () => {
    let cfix;
    const contactObj = new Contact();
    beforeEach(() => {
        cy.visit("/")
        cy.get(".header-actions > a:nth-child(2)").click()
        cy.fixture("APCB/contact.json").then((data) => {
            cfix = data;
        })

    })

    it("Verify that all 'Contact Us' input fields can successfully accept text", () => {
        cy.get('h3.mb-10').should('contain', 'Get In Touch Today')
        contactObj.verifyInputFields(cfix.firstname, cfix.lastname, cfix.email, cfix.company, cfix.street, cfix.city, cfix.state, cfix.jobTitle, cfix.phoneNum, cfix.message)
    })
    it.only("Verify if contact us displays validation errors on submit if required fields are empty", () => {
        //verify if empty
        contactObj.verifyIfEmpty(cfix.firstname, cfix.lastname, cfix.email, cfix.company, cfix.street, cfix.city, cfix.state, cfix.jobTitle, cfix.phoneNum, cfix.message)
    })
})