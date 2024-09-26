class Header {
    verifyServicesDropdown(){
        cy.fixture("APCB/header.json").then((data) => {
            cy.get("nav > ul > li:nth-child(2)").realHover();

            cy.get("nav > ul > li:nth-child(2) > section > ul > li").each(($el, $index, $list) => {
                if ($index != $list.length - 1) {
                    cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                        cy.wrap($text).invoke('text').then(($links) => {
                            let linkName = $links.trim();
                            expect(linkName).to.eq(data.servicesDropdown[$index])
                        })
                    })
                }
            })
        })
    }

    verifyResourcesDropdown(){
        cy.fixture("APCB/header.json").then((data) => {
            cy.get("nav > ul > li:nth-child(3)").realHover();

            cy.get("nav > ul > li:nth-child(3) > section > ul > li").each(($el, $index, $list) => {
                if ($index != $list.length - 1) {
                    cy.get(`nav > ul > li:nth-child(3) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                        cy.wrap($text).invoke('text').then(($links) => {
                            let linkName = $links.trim();
                            expect(linkName).to.eq(data.resourcesDropdown[$index])
                        })
                    })
                }
            })
        })
    }

    verifyCompanyDropdown(){
        cy.fixture("APCB/header.json").then((data) => {
            cy.get("nav > ul > li:nth-child(4)").realHover();

            cy.get("nav > ul > li:nth-child(4) > section > ul > li").each(($el, $index, $list) => {
                if ($index != $list.length - 1) {
                    cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                        cy.wrap($text).invoke('text').then(($links) => {
                            let linkName = $links.trim();
                            expect(linkName).to.eq(data.companyDropdown[$index])
                        })
                    })
                }
            })
        })
    }

    clickServicesDropdown(){
        cy.fixture("APCB/header.json").then((data) => {
            for(let i=0; i < data.servicesDropdown.length; i++){
                cy.get("nav > ul > li:nth-child(2)").realHover();
                cy.wait(1000)
                cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                    cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                        let href = $text.trim();
                        cy.get(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${i+1}) a > span`).click().then(($link) => {
                            cy.get('h1').should('contain', data.servicesDropdown[i])
                            cy.url().should('include', href)
                        })
                    })
                })
            }
        })
    }

    clickResourcesDropdown(){
        cy.fixture("APCB/header.json").then((data) => {
            for(let i=0; i < data.resourcesDropdown.length; i++){
                cy.get("nav > ul > li:nth-child(3)").realHover();
                cy.wait(1000)
                cy.get(`nav > ul > li:nth-child(3) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                    cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                        let href = $text.trim();
                        cy.get(`nav > ul > li:nth-child(3) > section > ul > li:nth-child(${i+1}) a > span`).click().then(($link) => {
                            cy.get('h1').should('contain', data.resourcesDropdown[i])
                            cy.url().should('include', href)
                        })
                    })
                })
            }
        })
    }

    clickCompanyDropdown(){
        cy.fixture("APCB/header.json").then((data) => {
            for(let i=0; i < data.companyDropdown.length; i++){
                cy.get("nav > ul > li:nth-child(4)").realHover();
                cy.wait(1000)
                cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                    cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                        let href = $text.trim();
                        cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${i+1}) a > span`).click().then(($link) => {
                            cy.get('h1').should('contain', data.companyDropdown[i]) //validate page name
                            cy.url().should('include', href) //validate url
                        })
                    })
                })
            }
        })
    }

    
}

export default Header;