class PageObject {
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
    hoverMenu(selector){
        return cy.get(selector).realHover()
    }
    scroll(selector){
        return cy.get(selector).scrollIntoView()
    }    
    getLink(selector){
        return cy.get(selector).invoke("attr", "href").then((href) => {
            return href;
        })
    }
    inputText(selector, str){
        cy.get(selector).type(str)        
    }
    clickBtn(selector){
        cy.get(selector).click();
    }
    blogFilter(selector, str){
        cy.get(selector).select(str);
    }
}

export default PageObject