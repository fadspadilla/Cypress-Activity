class Contact {    
    fnameSelector = "#firstname-2e8942ba-e520-49ee-8129-b8af636087b6"
    lnameSelector = "#lastname-2e8942ba-e520-49ee-8129-b8af636087b6"
    emailSelector = "#email-2e8942ba-e520-49ee-8129-b8af636087b6"
    comSelector = "#company-2e8942ba-e520-49ee-8129-b8af636087b6"
    addressSelector = "#address-2e8942ba-e520-49ee-8129-b8af636087b6"
    citySelector = "#city-2e8942ba-e520-49ee-8129-b8af636087b6"
    sateSelector = "#state-2e8942ba-e520-49ee-8129-b8af636087b6"
    jobtitleSelector = "#jobtitle-2e8942ba-e520-49ee-8129-b8af636087b6"
    phoneSeletor = "#phone-2e8942ba-e520-49ee-8129-b8af636087b6"
    msgSelector = "#message-2e8942ba-e520-49ee-8129-b8af636087b6"
    submitBtnSel = '.actions > input[value="Submit"]'
    

    verifyInputFields(){
        cy.fixture("APCB/contact.json").then((data) => {            
            cy.get(this.fnameSelector).type(data.firstname)
            cy.get(this.fnameSelector).should('have.value', data.firstname)
            
            cy.get(this.lnameSelector).type(data.lastname)
            cy.get(this.lnameSelector).should('have.value', data.lastname)
            
            cy.get(this.emailSelector).type(data.email)
            cy.get(this.emailSelector).should('have.value', data.email)
            
            cy.get(this.comSelector).type(data.company)
            cy.get(this.comSelector).should('have.value', data.company)
            
            cy.get(this.addressSelector).type(data.street)
            cy.get(this.addressSelector).should('have.value', data.street)
            
            cy.get(this.citySelector).type(data.city)
            cy.get(this.citySelector).should('have.value', data.city)
            
            cy.get(this.sateSelector).type(data.state)
            cy.get(this.sateSelector).should('have.value', data.state)
            
            cy.get(this.jobtitleSelector).type(data.jobTitle)
            cy.get(this.jobtitleSelector).should('have.value', data.jobTitle)
            
            cy.get(this.phoneSeletor).type(data.phoneNum)
            cy.get(this.phoneSeletor).should('have.value', data.phoneNum)
            
            cy.get(this.msgSelector).type(data.message)
            cy.get(this.msgSelector).should('have.value', data.message)
        })
    }
    verifyIfEmpty(){
        cy.get(this.fnameSelector).should('have.value', '')
        cy.get(this.lnameSelector).should('have.value', '')
        cy.get(this.emailSelector).should('have.value', '')
        cy.get(this.comSelector).should('have.value', '')
        cy.get(this.addressSelector).should('have.value', '')
        cy.get(this.citySelector).should('have.value', '')
        cy.get(this.sateSelector).should('have.value', '')        
        cy.get(this.jobtitleSelector).should('have.value', '')
        cy.get(this.phoneSeletor).should('have.value', '')
        cy.get(this.msgSelector).should('have.value', '')
        cy.get(this.submitBtnSel).click()

        cy.get('ul > li > label.hs-error-msg').should('contain', 'Please complete this required field.')
    }

}

export default Contact;