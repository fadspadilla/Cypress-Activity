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
    clickDropdown(selector){
        return cy.get(selector).realHover();
    }
}
export default Header;