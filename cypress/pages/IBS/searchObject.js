class Search {
    searchItem(str){
        cy.get('#search-input').type(str)
        cy.get('#searchButtonMain').click();
        cy.get('.search-results').should('contain', str)
    }
}

export default Search;