class Header {    
    clickElement(selector){
        return cy.get(selector).click().invoke('text').then((text)=>{
            return text.trim();
        })
    }
    getText(selector){
        return cy.get(selector).invoke('text').then((text)=>{
            return text.trim();
        })
    }
    clickDropdown(index){
        return cy.get(`nav > ul > li:nth-child(${index})`).realHover();
    }
    verifyServicesDropdown(){
        cy.fixture("IBS/header.json").then((data) => {
            cy.get("nav > ul > li:nth-child(4)").realHover();

            cy.get("nav > ul > li:nth-child(4) > section > ul > li").each(($el, $index, $list) => {
                if ($index != $list.length - 1) {
                    cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                        cy.wrap($text).invoke('text').then(($links) => {
                            let linkName = $links.trim();
                            expect(linkName).to.eq(data.servicesDropdown[$index])
                        })
                    })
                }
            })
        })
    }

    clickServicesDropdown(){
        cy.fixture("IBS/header.json").then((data) => {
            for(let i=0; i < data.servicesDropdown.length; i++){
                cy.get("nav > ul > li:nth-child(4)").realHover();
                cy.wait(1000)
                cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                    cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                        let href = $text.trim();
                        cy.get(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${i+1}) a > span`).click().then(($link) => {
                            if(data.servicesDropdown[i] == "New Product Introductions"){
                                cy.get('h1').should('contain', "NPI")
                                cy.url().should('include', href)
                            }else {
                                cy.get('h1').should('contain', data.servicesDropdown[i])
                                cy.url().should('include', href)
                            }
                        })
                    })
                })
            }
        })
    }
    verifyMarketsDropdown(){
        cy.fixture("IBS/header.json").then((data) => {
            cy.get("nav > ul > li:nth-child(6)").realHover();

            cy.get("nav > ul > li:nth-child(6) > section > ul > li").each(($el, $index, $list) => {
                if ($index != $list.length - 1) {
                    cy.get(`nav > ul > li:nth-child(6) > section > ul > li:nth-child(${$index + 1}) > a > span`).then(($text) => {
                        cy.wrap($text).invoke('text').then(($links) => {
                            let linkName = $links.trim();                           
                            expect(linkName).to.eq(data.marketsDropdown[$index])                            
                        })
                    })
                }
            })
        })
    }

    clickMarketsDropdown(){
        cy.fixture("IBS/header.json").then((data) => {
            for(let i=0; i < data.marketsDropdown.length; i++){
                cy.get("nav > ul > li:nth-child(6)").realHover();
                cy.wait(1000)
                cy.get(`nav > ul > li:nth-child(6) > section > ul > li:nth-child(${i+1}) a`).then(($link) => {
                    cy.wrap(($link)).invoke('attr', 'href').then(($text) => {
                        let href = $text.trim();
                        cy.get(`nav > ul > li:nth-child(6) > section > ul > li:nth-child(${i+1}) a > span`).click().then(($link) => {
                            if(data.marketsDropdown[i] == "Aerospace & Aviation"){
                                cy.get('h1').should('contain', "Aerospace")
                                cy.url().should('include', href)
                            }else if(data.marketsDropdown[i] == "Automotive & Transportation"){
                                cy.get('h1').should('contain', "Automotive")
                                cy.url().should('include', href)
                            }else if(data.marketsDropdown[i] == "Power & Energy"){
                                cy.get('h1').should('contain', "Power")
                                cy.url().should('include', href)
                            }else {
                                cy.get('h1').should('contain', data.marketsDropdown[i])
                                cy.url().should('include', href)
                            }
                        })
                    })
                })
            }
        })
    }
    clickHeaderDropDown(indx){
        cy.get(`nav > ul > li:nth-child(${indx})`).realHover();
    }
    getHeaderText(){
        cy.get("nav > ul > li:nth-child(6) > section > ul > li")
    }
}
export default Header;