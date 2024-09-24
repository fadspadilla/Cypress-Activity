describe("IBS Header Tests", () => {
    before(() => {
        cy.visit("https://www.ibselectronics.com/")
    })
    it("Verify if header navigation links are working", () => {
        cy.get("nav > ul > li").each(($el, $index) => {
            cy.get(`nav > ul > li:nth-child(${$index + 1}) > a > span`).click().then(($link) => {
                cy.wrap($link).invoke("text").then(($text) => {
                    let linkName = $text.trim();
                    cy.get("h1").invoke("text").then(($pageTitle) => {
                        let title = $pageTitle.trim();
                        if(linkName == "About IBS"){
                            expect(title).to.eq("About Us")
                            cy.url().should('include', "about")   
                        } else if (linkName == "Services"){
                            expect(title).to.eq("IBS Services")
                            cy.url().should('include', "services")   
                        }else {
                            expect(title).to.eq(linkName)
                            cy.url().should('include', linkName.toLowerCase())
                        }
                    })
                })
            })
        })
    })
})