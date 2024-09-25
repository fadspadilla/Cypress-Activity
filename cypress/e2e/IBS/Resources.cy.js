describe("IBS Resources Tests", () => {
    let resourceFixture ;
    before(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.get('#cookieBannerCollapse').click();
        cy.wait(1000)
        cy.fixture("resources.json").then((data) => {
            resourceFixture = data;
        })
    })

    it("Verify if opening a blog from the blog post page is working", () => {
        cy.get("nav > ul > li:nth-child(5)").realHover();
        
        //Check the dropdown list
        cy.get("nav > ul > li:nth-child(5) > section > ul > li").each(($el, $index, $list) => {
            if($index != $list.length - 1){
                cy.get(`nav > ul > li:nth-child(5) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                    cy.wrap($text).invoke('text').then(($links) => {
                        let linkName = $links.trim();
                        expect(linkName).to.eq(resourceFixture.desktopDropdown[$index])
                    })
                })
            }
        })

        //Navigate to Blog Posts
        cy.get("nav > ul > li:nth-child(5) > section > ul > li:nth-child(1) > a").click()

        // Verify that the blog page header contains the word 'Blog'
        cy.get('h1').should('contain', 'Blog');

        cy.get('.divide-y > a').then(($blogs) => {
            const blogCount = $blogs.length;

            let randomCount = blogCount/2;
            
            for(let i =0; i< randomCount; i++){
                let randomIndex = Math.floor(Math.random() * blogCount);
                if(randomIndex > 0){
                    cy.get(`.divide-y > a:nth-child(${randomIndex})  h3`).then(($text) => {
                        cy.wrap($text).invoke('text').then(($linkTitle) => {
                            let linkTitle = $linkTitle.trim();
        
                            cy.get(`.divide-y > a:nth-child(${randomIndex})  h3.mb-3`).click().then(($text) => {
                                cy.get('h1').invoke('text').then(($pageTitle) => {
                                    let pageTitle = $pageTitle.trim();
                                    expect(pageTitle).to.eq(linkTitle) // Verify if selected blog is the same
                                    cy.get('#isPasted').should('not.be.empty'); //verify content should not be empty
                                    cy.go('back')
                                })
                            })
                        })
                    })
                }              
            }                              
        })

    })
})