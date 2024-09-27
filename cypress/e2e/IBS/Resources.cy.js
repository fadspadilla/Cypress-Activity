import PageObject from "../../pages/pagesObject";

describe("IBS Resources Tests", () => {
    const pageObj = new PageObject();

    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookiesIBS();
    })

    it("Verify if opening a blog from the blog post page is working", () => {
        pageObj.hoverMenu("nav > ul > li:nth-child(5)")
        pageObj.clickElement("nav > ul > li:nth-child(5) > section > ul > li:nth-child(1) > a > span").then(() => {
            cy.get('.divide-y > a').then((blogItems) => {
                const blogCount = blogItems.length;
                
                for(let i = 0; i < blogCount/2; i++){
                    let randomIndex = Math.floor(Math.random() * blogCount);
                    if(randomIndex > 0){
                        pageObj.clickElement(`.divide-y > a:nth-child(${randomIndex})  h3.mb-3`).then((text) => {
                            let headertext = text
                            pageObj.getText("h1").should("eq", headertext);
                            cy.get('#isPasted').should('not.be.empty'); //verify content should not be empty
                            cy.go('back')
                        })
                    }
                }                
            })
        })
    })
})