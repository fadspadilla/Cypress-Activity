class Footer{
    scroll(selector){
        cy.get(selector).scrollIntoView().should('be.visible')
    }    
    getLink(selector){
        return cy.get(selector).invoke("attr", "href").then((href) => {
            return href;
        })
    }
}

export default Footer;