describe("IBS Footer Tests", () => {
    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.get(".footer").scrollIntoView().should('be.visible')
    })
    it("Verify if footer support links are working", () => {

        cy.get(`.limit\\:self > .relative > :nth-child(2) > div`).each(($el, $index) => {
            if($index > 0){
                cy.get(`.limit\\:self > .relative > :nth-child(2) > :nth-child(${$index + 1}) > a`).click().then(($link) => {
                    let linkText = $el.text().trim();

                    cy.wrap($link).invoke("attr", "href").then(($href) => {
                        cy.get('h1').invoke('text').then(($pageTitle) => {
                            let title = $pageTitle.trim()
                            let href = $href.trim();
                            if(linkText == "FAQs"){
                                expect(title).to.eq("Frequently Asked Questions");
                                cy.url().should('contain', href)
                            }else{
                                expect(title).to.eq(linkText)
                                cy.url().should('contain', href)
                            }
                        })
                    })
                })
            }
        })
    })
    it("Verify if footer social media icons are working", () => {
        cy.get(".footer .mt-3 > a").each(($el, $index) => {
            cy.get(`.footer .mt-3 > a:nth-child(${$index + 1})`).then(() => {                
                const href = $el.attr('href');
                expect(href).to.exist;                
            })
        })

    })
    
      
})