import Search from "../../pages/IBS/searchObject"

describe("IBS Search Tests", () => {
    const searchObj = new Search;
    before(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookiesIBS();
    })
    it("Verify if search function is working", () => {
        searchObj.searchItem('Amphenol Communications Solutions')
    })
})