describe("APCB Header Tests", () => {
    let headerFixture;
    beforeEach(() => {
        cy.visit("/")
        cy.fixture("APCB/header.json").then((data) => {
            headerFixture = data;
        })
    })

    it("Verify if services dropdown list redirects to corresponding page", () => {
        cy.get("nav > ul > li:nth-child(2)").realHover();

        //Check the dropdown list
        cy.get("nav > ul > li:nth-child(2) > section > ul > li").each(($el, $index, $list) => {
            if($index != $list.length - 1){
                cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                    cy.wrap($text).invoke('text').then(($links) => {
                        let linkName = $links.trim();
                        expect(linkName).to.eq(headerFixture.servicesDropdown[$index])
                    })
                })
            }
        })

        //navigate each dropdown list
        cy.get("nav > ul > li:nth-child(2) > section > ul > li").each(($el, $index, $list) => {
            if($index != $list.length - 1){
                cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${$index + 1})`).click().then(($text) => {
                    
                })
            }
        })

        
    })
})