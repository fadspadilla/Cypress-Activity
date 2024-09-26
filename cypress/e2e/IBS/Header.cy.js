import Header from "../../pages/IBS/headerObject"

describe("IBS Header Tests", () => {
    const headerObj = new Header;
    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookies();
    })
    it("Verify if header navigation links redirect to the corresponding page", () => {
        headerObj.verifyHeaderLinks();
    })
})