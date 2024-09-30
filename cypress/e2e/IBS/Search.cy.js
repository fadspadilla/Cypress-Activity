import PageObject from "../../pages/pagesObject";


describe("IBS Search Tests", () => {
    const pageObj = new PageObject();

    before(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookiesIBS();
    })
    it("Verify if search function is working", () => {
        pageObj.inputText('#search-input', 'Amphenol Communications Solutions')
        pageObj.clickBtn('#searchButtonMain')
        // cy.wait(1000)
        cy.get('.search-results').should('contain', 'Amphenol Communications Solutions')
    })
})