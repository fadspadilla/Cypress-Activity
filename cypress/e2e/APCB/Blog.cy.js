import Blog from "../../pages/APCB/blogObject";

describe("APCB Blog Tests", () => {
    const blogObject = new Blog;
    let blogFixture;
    beforeEach(() => {
        cy.visit('/')        
        cy.get('nav > ul > li:nth-child(5)').click()
        cy.get('h1').should('contain', 'Blog')
        cy.fixture("APCB/blogs.json").then((data) => {
            blogFixture = data;
        })
    })
    it("Verify Blog Card on Featured Article is working", () => {
        blogObject.verifyFeaturedBlog();
    })
    it("Verify Blog Cards on Editor's Picks section are working", () => {
        blogObject.verifyAllEditorsPickBlog();
    })
    it("Verify Blog Cards on View All section are working", () => {
        blogObject.verifyRandomViewAllBlog();
    })    
    it.only("Verify 'By Tag' filter is working", () => {        
        blogObject.byTagFilter('Benefits')   
    })
    it.only("Verify 'By Category' filter is working", () => {
        blogObject.byCategoryFilter('Aerospace')
    })
})