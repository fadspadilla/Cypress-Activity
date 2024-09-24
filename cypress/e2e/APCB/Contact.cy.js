describe("APCB Contact Us Tests", () => {
    before(() => {
        cy.visit("/")
    })

    it("Verify if Contact Us with valid credentials is working", () => {
        // Navigate to the 'Blog Posts' section
        cy.get(".header-actions > a:nth-child(2)").click()
        cy.get('h3.mb-10').should('contain', 'Get In Touch Today')
        cy.get('#firstname-2e8942ba-e520-49ee-8129-b8af636087b6').type("Fadelyn")
        cy.get('#lastname-2e8942ba-e520-49ee-8129-b8af636087b6').type("Padilla")
        cy.get('#email-2e8942ba-e520-49ee-8129-b8af636087b6').type("fpadilla@innovuze.com")
        cy.get('#company-2e8942ba-e520-49ee-8129-b8af636087b6').type("QA Company")
        cy.get('#address-2e8942ba-e520-49ee-8129-b8af636087b6').type("1 Summit Crossing")
        cy.get('#city-2e8942ba-e520-49ee-8129-b8af636087b6').type("Hollywood")
        cy.get('#state-2e8942ba-e520-49ee-8129-b8af636087b6').type("Florida")
        cy.get('#jobtitle-2e8942ba-e520-49ee-8129-b8af636087b6').type("QA Engineer")
        cy.get('#phone-2e8942ba-e520-49ee-8129-b8af636087b6').type("305-637-1768")
        cy.get('#message-2e8942ba-e520-49ee-8129-b8af636087b6').type("I’m interested in learning more about your services. Could you please provide more information?")
        cy.get(`#LEGAL_CONSENT\\.subscription_type_303139330-2e8942ba-e520-49ee-8129-b8af636087b6`).check().should('be.checked')
        // cy.get('.actions > input[value="Submit"]').click()
    })
})