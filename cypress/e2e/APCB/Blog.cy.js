describe("APCB Blog Tests", () => {
    let blogFixture;
    beforeEach(() => {
        cy.visit('/')        
        cy.get('nav > ul > li:nth-child(5)').click()
        cy.get('h1').should('contain', 'Blog')
        cy.fixture("APCB/blogs.json").then((data) => {
            blogFixture = data;
        })
    })
    it.only("Verify Blog Card on Featured Article is working", () => {
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
    })
    it.skip("Verify Blog Cards on Editor's Picks section are working", () => {
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
    })
    it.skip("Verify Blog Cards on View All section are working", () => {
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
    })
    //inprogress
    it.skip("Verify 'By Tag' filter is working", () => {
        for(let i=0; i<blogFixture.tagsDropdown.length; i++){            
            cy.get(`div.layout\\:right > div[data-ktc-search-exclude=""] > .flex > :nth-child(2)`).select(`${blogFixture.tagsDropdown[i]}`);
            cy.get('h1').invoke('text').then(($h1) => {
                let selectedTag = $h1.trim();
                expect(selectedTag.toLowerCase()).to.eq(blogFixture.tagsDropdown[i].toLowerCase())
            })
        }
    })
    it.skip("Verify 'By Category' filter is working", () => {
        cy.get(':nth-child(2) > .gap-3 > :nth-child(3)').select('Benefits');
        cy.get('h1').invoke('text').then(($h1) => {
            let selectedTag = $h1.trim();
        })
    })
})