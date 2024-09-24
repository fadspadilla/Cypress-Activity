describe("IBS Resources Tests", () => {
    before(() => {
        cy.visit("https://www.ibselectronics.com/")
    })

    it("Verify if opening a blog from the blog post page is working", () => {
        // Navigate to the 'Blog Posts' section
        cy.get("nav > ul > li:nth-child(5) > section > ul > li:nth-child(1)")
            .contains("Blog Posts").click({ force: true });

        // Verify that the blog page header contains the word 'Blog'
        cy.get('h1').should('contain', 'Blog');

        cy.get('.divide-y > a').each(($el, $index) => {
            cy.get(`.divide-y > a:nth-child(${$index + 1})  h3`).then(($text) => {
                cy.wrap($text).invoke('text').then(($linkTitle) => {
                    let linkTitle = $linkTitle.trim();
                    cy.get(`.divide-y > a:nth-child(${$index + 1})  h3.mb-3`).click().then(($text) => {
                        cy.get('h1').invoke('text').then(($pageTitle) => {
                            let pageTitle = $pageTitle.trim();
                            expect(pageTitle).to.eq(linkTitle)
                            cy.go('back')
                        })
                    })
                })
            })
        })

    })
})