class Blog {
    verifyFeaturedBlog(){
        cy.get(".article-featured > div > a.card-hit-zone > span").then(($text) => {
            cy.wrap($text).invoke('text').then(($cardTitle) => {
                const cardTitle = $cardTitle.trim();
                cy.get(".article-featured > div > a.card-button").click().then(($link) => {
                    const href = $link.attr('href')
                    cy.url().should('contain', href) //assert link
                    cy.get('h1').should('contain', cardTitle) // assert title
                    cy.get('.raw.mb-8 > p:nth-child(1)').should('not.be.empty') //assert not empty           
                })
            })
        })
    }

    verifyAllEditorsPickBlog(){
        cy.get('.my-12  div.article-card-group > div').each(($el, $index) => {
            cy.get(`.my-12  div.article-card-group > div:nth-child(${$index + 1}) > h4`).then(($text) => {
                cy.wrap($text).invoke('text').then(($cardTitle) => {
                    let cardTitle = $cardTitle.trim();
                    cy.get(`.my-12  div.article-card-group > div:nth-child(${$index + 1})`).click().then(() => {
                        cy.get('h1').invoke('text').then(($text) => {
                            let h1 = $text.trim();
                            expect(h1).to.eq(cardTitle);
                            cy.get('.raw.mb-8 > p:nth-child(1)').should('not.be.empty')
                            cy.go('back')
                        })
                    })
                })
            })
        })
    }

    verifyRandomViewAllBlog(){
        cy.get(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div`).then(($blogs) => {
            const blogCount = $blogs.length;
            let randomCount = blogCount/2;
            for(let i =0; i< randomCount; i++){
                let randomIndex = Math.floor(Math.random() * blogCount);

                if(randomIndex > 0){
                    cy.get(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div:nth-child(${randomIndex}) > h4`).then(($text) => {
                        cy.wrap($text).invoke('text').then(($cardTitle) => {
                            let cardTitle = $cardTitle.trim();
                            cy.get(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div:nth-child(${randomIndex})`).click().then(() => {
                                cy.get('h1').invoke('text').then(($text) => {
                                    let h1 = $text.trim();
                                    expect(h1).to.eq(cardTitle);
                                    cy.get('.raw.mb-8 > p:nth-child(1)').should('not.be.empty')
                                    cy.go('back')
                                })
                            })
                        })
                    })
                }                
            }
        })
    }
    byTagFilter(str){
        cy.get(':nth-child(2) > .gap-3 > :nth-child(2)').select(str);
        cy.get('h1').should('contain', str)
    }
    byCategoryFilter(str){
        cy.get(':nth-child(2) > .gap-3 > :nth-child(3)').select(str);
        cy.get('h1').should('contain', str)
    }
    goToBlogPage(){
        cy.get('nav > ul > li:nth-child(5)').click()
        cy.get('h1').should('contain', 'Blog')
    }
}

export default Blog;