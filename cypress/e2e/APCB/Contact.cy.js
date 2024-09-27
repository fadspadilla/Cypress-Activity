import PageObject from "../../pages/pagesObject";

describe("APCB Contact Us Tests", () => {
    const pageObj = new PageObject();

    let contactFix;
    beforeEach(() => {
        cy.visit("/")
        cy.fixture("APCB/contact.json").then((data) => {
            contactFix = data;
        });
        cy.get(".header-actions > a:nth-child(2)").click()
    })

    it.only("Verify that all 'Contact Us' input fields can successfully accept text", () => {
        cy.get('h3.mb-10').should('contain', 'Get In Touch Today')
        pageObj.inputText(`input[name = "firstname"]`, contactFix.firstname)
        cy.get(`input[name = "firstname"]`).should('have.value', contactFix.firstname)

        pageObj.inputText(`input[name = "lastname"]`, contactFix.lastname)
        cy.get(`input[name = "lastname"]`).should('have.value', contactFix.lastname)

        pageObj.inputText(`input[name = "email"]:nth-child(1)`, contactFix.email)
        cy.get(`input[name = "email"]:nth-child(1)`).should('have.value', contactFix.email)

        pageObj.inputText(`input[name = "company"]`, contactFix.company)
        cy.get(`input[name = "company"]`).should('have.value', contactFix.company)

        pageObj.inputText(`input[name = "address"]`, contactFix.street)
        cy.get(`input[name = "address"]`).should('have.value', contactFix.street)

        pageObj.inputText(`input[name = "city"]`, contactFix.city)
        cy.get(`input[name = "city"]`).should('have.value', contactFix.city)

        pageObj.inputText(`input[name = "state"]`, contactFix.state)
        cy.get(`input[name = "state"]`).should('have.value', contactFix.state)

        pageObj.inputText(`input[name = "jobtitle"]`, contactFix.jobTitle)
        cy.get(`input[name = "jobtitle"]`).should('have.value', contactFix.jobTitle)

        pageObj.inputText(`input[name = "phone"]`, contactFix.phoneNum)
        cy.get(`input[name = "phone"]`).should('have.value', contactFix.phoneNum)

        pageObj.inputText(`input[name = "message"]`, contactFix.message)
        cy.get(`input[name = "message"]`).should('have.value', contactFix.message)
        
    })
    it("Verify if contact us displays validation errors on submit if required fields are empty", () => {
        
        cy.get(`input[name = "firstname"]`).should('have.value', "")
        cy.get(`input[name = "lastname"]`).should('have.value', "")
        cy.get(`input[name = "email"]`).should('have.value', "")
        cy.get(`input[name = "company"]`).should('have.value', "")
        cy.get(`input[name = "address"]`).should('have.value', "")
        cy.get(`input[name = "city"]`).should('have.value', "")
        cy.get(`input[name = "state"]`).should('have.value', "")
        cy.get(`input[name = "jobtitle"]`).should('have.value', "")
        cy.get(`input[name = "phone"]`).should('have.value', "")
        cy.get(`input[name = "message"]`).should('have.value', "")
        cy.get('.actions > input[value="Submit"]').click()

        cy.get('ul > li > label.hs-error-msg').should('contain', contactFix.requiredMsg)
    })
})