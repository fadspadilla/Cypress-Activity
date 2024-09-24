describe("IBS Footer Tests", () => {
    before(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.get(".footer").scrollIntoView().should('be.visible')
    })
    it.skip("Verify if footer support links are working", () => {

        cy.get(`.limit\\:self > .relative > :nth-child(2) > div`).each(($el, $index) => {
            if($index > 1){
                cy.get(`.limit\\:self > .relative > :nth-child(2) > :nth-child(${$index}) > a`).click().then(($link) => {
                    let titlePage = $el.text().trim();
                    cy.log(titlePage)
                    cy.wrap($link).invoke("attr", "href").then(($href) => {
                        let href = $href.trim();
                        cy.url().should('contain', href)
                    })
                })
            }
        })
    })
    it.only("Verify if footer social media icons are working", () => {
        cy.get(".mt-3 > a").each(($el, $index) => {
            cy.get(`.mt-3 > a:nth-child(${$index + 1})`).then(($link) => {                
                const href = $el.attr('href');
                cy.wrap($link).invoke("removeAttr", "target").click().then(($ref) => {                    
                    cy.url().should('include', href.toLowerCase())
                })
                
            })
        })

    })
    
      
})