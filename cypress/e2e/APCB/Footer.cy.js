import PageObject from "../../pages/pagesObject";


describe("IBS Footer Tests", () => {
    const pageObj = new PageObject();

    before(() => {
        cy.visit("/")
        pageObj.scroll('.footer').should('be.visible')        
    })
    it.only("Verify if footer social media links are not empty", () => {
        cy.get(".footer-navigation > div.limit > div > div:nth-child(2) > a").each((element) => {
            expect(element.attr('href')).to.exist;   
        })   
    })
})