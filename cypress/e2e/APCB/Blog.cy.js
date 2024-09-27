import PageObject from "../../pages/pagesObject";

describe("APCB Blog Tests", () => {
    const pageObj = new PageObject();

    beforeEach(() => {
        cy.visit('/')        
        cy.get('nav > ul > li:nth-child(5)').click()
        cy.get('h1').should('contain', 'Blog')
    })
    it("Verify Blog Card on Featured Article is working", () => {
        pageObj.getText(".article-featured > div > a.card-hit-zone > span").then((text) => {
            let cardTitle = text.trim();
            pageObj.clickElement(".article-featured > div > a.card-button").then(() => {
                pageObj.getText('h1').should('eq', cardTitle)
                cy.get('.raw.mb-8 > p:nth-child(1)').should('not.be.empty') //assert not empty
            })
        })
    })
    it("Verify Blog Cards on Editor's Picks section are working", () => {
        cy.get('.my-12  div.article-card-group > div').each((element, index) => {
            pageObj.getText(`.my-12  div.article-card-group > div:nth-child(${index + 1}) > h4`).then((text)=> {
                let cardTitle = text.trim();
                pageObj.clickElement(`.my-12  div.article-card-group > div:nth-child(${index + 1})`).then((text) => {
                    pageObj.getText('h1').should('eq', cardTitle)
                    cy.get('.raw.mb-8 > p:nth-child(1)').should('not.be.empty')
                    cy.go('back')
                })
            })
        })
    })
    it("Verify Blog Cards on View All section are working", () => {
        cy.get(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div`).then((blogs) => {
            const blogCount = blogs.length;
            for(let i=0; i < blogCount/2; i++){
                let randomIndex = Math.floor(Math.random() * blogCount);

                if(randomIndex > 0){
                    pageObj.getText(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div:nth-child(${randomIndex}) > h4`).then((text) => {
                        let blogCardTitle = text.trim();
                        pageObj.clickElement(`div.layout\\:right > div >div > div.article-card-group:nth-child(1) > div:nth-child(${randomIndex})`).then(() => {
                            pageObj.getText('h1').should('eq', blogCardTitle)
                            cy.get('.raw.mb-8 > p:nth-child(1)').should('not.be.empty')
                            cy.go('back')
                        })
                    })
                }
            }
        })
    })    
    it.only("Verify 'By Tag' filter is working", () => {        
        pageObj.blogFilter(':nth-child(2) > .gap-3 > :nth-child(2)', 'Benefits')     
        cy.get('h1').should('contain', 'Benefits')
    })
    it.only("Verify 'By Category' filter is working", () => {
        pageObj.blogFilter(':nth-child(2) > .gap-3 > :nth-child(3)', 'Aerospace')     
        cy.get('h1').should('contain', 'Aerospace')
    })
})