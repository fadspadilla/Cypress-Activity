describe("IBS Search Tests", () => {
    before(() => {
        cy.visit("https://www.ibselectronics.com/")
    })
    it("Verify if search function is working", () => {
        cy.get('#search-input').type("Amphenol Communications Solutions")
        cy.get('#searchButtonMain').click();
        cy.contains('Amphenol Communications Solutions').should('exist')
    })
})