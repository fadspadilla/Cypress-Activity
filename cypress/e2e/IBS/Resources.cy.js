import Header from "../../pages/IBS/headerObject";

describe("IBS Resources Tests", () => {
    const headerObj = new Header;
    beforeEach(() => {
        cy.visit("https://www.ibselectronics.com/")
        cy.acceptCookiesIBS();
    })

    it("Verify if opening a blog from the blog post page is working", () => {
        headerObj.hoverMenu("nav > ul > li:nth-child(5)")
        headerObj.clickElement("nav > ul > li:nth-child(5) > section > ul > li:nth-child(1) > a > span").then(() => {
            cy.get('.divide-y > a').then((blogItems) => {
                const blogCount = blogItems.length;
                
                for(let i = 0; i < blogCount/2; i++){
                    let randomIndex = Math.floor(Math.random() * blogCount);
                    if(randomIndex > 0){
                        headerObj.clickElement(`.divide-y > a:nth-child(${randomIndex})  h3.mb-3`).then((text) => {
                            let headertext = text
                            headerObj.getText("h1").should("eq", headertext);
                            cy.get('#isPasted').should('not.be.empty'); //verify content should not be empty
                            cy.go('back')
                        })
                    }
                }
                
            })
        })
    })
})