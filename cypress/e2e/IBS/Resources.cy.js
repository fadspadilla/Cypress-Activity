import Resource from "../../pages/IBS/resourceObject";

describe("IBS Resources Tests", () => {
    const resourceObj = new Resource;
    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookies();
    })

    it("Verify if opening a blog from the blog post page is working", () => {
        resourceObj.verifyResourceDropdown();
        resourceObj.goToBlogPage();        
        resourceObj.verifyRandomBlog();
    })
})