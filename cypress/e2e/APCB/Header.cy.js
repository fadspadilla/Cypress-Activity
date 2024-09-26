import Header from "../../pages/APCB/HeaderObject.js";

describe("APCB Header Tests", () => {
    const headerObj = new Header();
    beforeEach(() => {
        cy.visit("/")
    })

    it("Verify if services dropdown list redirects to corresponding page", () => {
        headerObj.verifyServicesDropdown();
        headerObj.clickServicesDropdown();
    })

    it("Verify if resources dropdown list redirects to corresponding page", () => {
        headerObj.verifyServicesDropdown();
        headerObj.clickResourcesDropdown();
    })
    it("Verify if company dropdown list redirects to corresponding page", () => {
        headerObj.verifyCompanyDropdown();
        headerObj.clickCompanyDropdown();

    })
})