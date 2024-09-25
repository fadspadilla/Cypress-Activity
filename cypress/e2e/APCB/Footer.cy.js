describe("IBS Footer Tests", () => {
    before(() => {
        cy.visit("/")
        cy.get(".footer").scrollIntoView().should('be.visible')
    })
    it.only("Verify if footer social media icons are working", () => {
        cy.get(".footer-navigation > div.limit > div > div:nth-child(2) > a").each(($el, $index) => {
            cy.get(`.footer-navigation > div.limit > div > div:nth-child(2) > a:nth-child(${$index + 1})`).then(($link) => {                
                cy.wrap($link).invoke('attr', 'href').then(($href) => {
                    const href = $href.trim();
                    expect(href).to.exist;                
                })
            })
        })

    })
    
      
})