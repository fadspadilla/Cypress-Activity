describe("APCB Blog Tests", () => {
    before(() => {
        cy.visit('/')        
        cy.get('nav > ul > li:nth-child(5)').click()
        cy.get('h1').should('contain', 'Blog')
    })
    it("Editor's Pick", () => {
        cy.get('.my-12  div.article-card-group > div').each(($el, $index) => {
            cy.get(`.my-12  div.article-card-group > div:nth-child(${$index + 1}) > h4`).then(($text) => {
                cy.wrap($text).invoke('text').then(($cardTitle) => {
                    let cardTitle = $cardTitle.trim();
                    cy.get(`.my-12  div.article-card-group > div:nth-child(${$index + 1})`).click().then(() => {
                        cy.get('h1').invoke('text').then(($text) => {
                            let h1 = $text.trim();
                            expect(h1).to.eq(cardTitle);
                            cy.go('back')
                        })
                    })
                })
            })
        })
    })
    it("View All", () => {
        cy.get('div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div').each(($el, $index) => {
            cy.get(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div:nth-child(${$index + 1}) > h4`).then(($text) => {
                cy.wrap($text).invoke('text').then(($cardTitle) => {
                    let cardTitle = $cardTitle.trim();
                    cy.get(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div:nth-child(${$index + 1})`).click().then(() => {
                        cy.get('h1').invoke('text').then(($text) => {
                            let h1 = $text.trim();
                            expect(h1).to.eq(cardTitle);
                            cy.go('back')
                        })
                    })
                })
            })
        })
    })
    it.only("By Tag", () => {
        cy.get(`div.layout\\:right > div[data-ktc-search-exclude=""] > .flex > :nth-child(2)`).select('Benefits');
        cy.get('h1').invoke('text').then(($h1) => {
            let selectedTag = $h1.trim();
        })
    })
})