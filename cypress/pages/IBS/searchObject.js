class Search {
    inputText(selector, str){
        cy.get(selector).type(str)        
    }
    clickBtn(selector){
        cy.get(selector).click();
    }
}

export default Search;