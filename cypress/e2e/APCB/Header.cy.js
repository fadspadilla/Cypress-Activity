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

        // Check the dropdown list
        cy.get("nav > ul > li:nth-child(2) > section > ul > li").each(($el, $index, $list) => {
            if ($index != $list.length - 1) {
                cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                    cy.wrap($text).invoke('text').then(($links) => {
                        let linkName = $links.trim();
                        expect(linkName).to.eq(headerFixture.servicesDropdown[$index])
                    })
                })
            }
        })

        for(let i=0; i < headerFixture.servicesDropdown.length; i++){
            cy.get("nav > ul > li:nth-child(2)").realHover();
            cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                    let href = $text.trim();
                    cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${i+1}) a > span`).click({ force: true }).then(($link) => {
                        cy.get('h1').should('contain', headerFixture.servicesDropdown[i])
                        cy.url().should('include', href)
                    })
                })
            })
        }
    })

    it("Verify if resources dropdown list redirects to corresponding page", () => {
        cy.get("nav > ul > li:nth-child(3)").realHover();

        //Check the dropdown list
        cy.get("nav > ul > li:nth-child(3) > section > ul > li").each(($el, $index, $list) => {
            if ($index != $list.length - 1) {
                cy.get(`nav > ul > li:nth-child(3) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                    cy.wrap($text).invoke('text').then(($links) => {
                        let linkName = $links.trim();
                        expect(linkName).to.eq(headerFixture.resourcesDropdown[$index])
                    })
                })
            }
        })

        //navigate each dropdown list
        for(let i=0; i < headerFixture.resourcesDropdown.length; i++){
            cy.get("nav > ul > li:nth-child(3)").realHover();
            cy.get(`nav > ul > li:nth-child(3) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                    let href = $text.trim();
                    cy.get(`nav > ul > li:nth-child(3) > section > ul > li:nth-child(${i+1}) a > span`).click({ force: true }).then(($link) => {
                        cy.get('h1').should('contain', headerFixture.resourcesDropdown[i])
                        cy.url().should('include', href)
                    })
                })
            })
        }
    })
    it("Verify if company dropdown list redirects to corresponding page", () => {
        cy.get("nav > ul > li:nth-child(4)").realHover();

        //Check the dropdown list
        cy.get("nav > ul > li:nth-child(4) > section > ul > li").each(($el, $index, $list) => {
            if ($index != $list.length - 1) {
                cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                    cy.wrap($text).invoke('text').then(($links) => {
                        let linkName = $links.trim();
                        expect(linkName).to.eq(headerFixture.companyDropdown[$index])
                    })
                })
            }
        })

        //navigate each dropdown list
        for(let i=0; i < headerFixture.companyDropdown.length; i++){
            cy.get("nav > ul > li:nth-child(4)").realHover();
            cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                    let href = $text.trim();
                    cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${i+1}) a > span`).click({ force: true }).then(($link) => {
                        cy.get('h1').should('contain', headerFixture.companyDropdown[i])
                        cy.url().should('include', href)
                    })
                })
            })
        }
    })
})