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

    verifyInputFields(fname, lname, email, company, street, city, state, jobtitle, phonenum, msg){
        cy.get(this.fnameSelector).type(fname)
        cy.get(this.fnameSelector).should('have.value', fname)

        cy.get(this.lnameSelector).type(lname)
        cy.get(this.lnameSelector).should('have.value', lname)

        cy.get(this.emailSelector).type(email)
        cy.get(this.emailSelector).should('have.value', email)

        cy.get(this.comSelector).type(company)
        cy.get(this.comSelector).should('have.value', company)

        cy.get(this.addressSelector).type(street)
        cy.get(this.addressSelector).should('have.value', street)

        cy.get(this.citySelector).type(city)
        cy.get(this.citySelector).should('have.value', city)

        cy.get(this.sateSelector).type(state)
        cy.get(this.sateSelector).should('have.value', state)
        
        cy.get(this.jobtitleSelector).type(jobtitle)
        cy.get(this.jobtitleSelector).should('have.value', jobtitle)

        cy.get(this.phoneSeletor).type(phonenum)
        cy.get(this.phoneSeletor).should('have.value', phonenum)

        cy.get(this.msgSelector).type(msg)
        cy.get(this.msgSelector).should('have.value', msg)
    }
    verifyIfEmpty(fname, lname, email, company, street, city, state, jobtitle, phonenum, msg){
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