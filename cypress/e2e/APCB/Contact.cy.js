import Contact from "../../pages/APCB/contactObject.js"
import Search from "../../pages/IBS/searchObject.js";

describe("APCB Contact Us Tests", () => {
    const contactObj = new Contact();
    const searchObj = new Search();
    let contactFix;
    beforeEach(() => {
        cy.visit("/")
        cy.fixture("APCB/contact.json").then((data) => {
            contactFix = data;
        });
        cy.get(".header-actions > a:nth-child(2)").click()
    })

    it("Verify that all 'Contact Us' input fields can successfully accept text", () => {
        cy.get('h3.mb-10').should('contain', 'Get In Touch Today')
        searchObj.inputText("#firstname-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.firstname)
        cy.get("#firstname-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.firstname)

        searchObj.inputText("#lastname-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.lastname)
        cy.get("#lastname-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.lastname)

        searchObj.inputText("#email-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.email)
        cy.get("#email-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.email)

        searchObj.inputText("#company-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.company)
        cy.get("#company-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.company)

        searchObj.inputText("#address-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.street)
        cy.get("#address-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.street)

        searchObj.inputText("#city-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.city)
        cy.get("#city-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.city)

        searchObj.inputText("#state-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.state)
        cy.get("#state-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.state)

        searchObj.inputText("#jobtitle-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.jobTitle)
        cy.get("#jobtitle-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.jobTitle)

        searchObj.inputText("#phone-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.phoneNum)
        cy.get("#phone-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.phoneNum)

        searchObj.inputText("#message-2e8942ba-e520-49ee-8129-b8af636087b6", contactFix.message)
        cy.get("#message-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', contactFix.message)
        
    })
    it("Verify if contact us displays validation errors on submit if required fields are empty", () => {
        
        cy.get("#firstname-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#lastname-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#email-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#company-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#address-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#city-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#state-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#jobtitle-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#phone-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get("#message-2e8942ba-e520-49ee-8129-b8af636087b6").should('have.value', "")
        cy.get('.actions > input[value="Submit"]').click()

        cy.get('ul > li > label.hs-error-msg').should('contain', contactFix.requiredMsg)
    })
})