import Blog from "../../pages/APCB/blogObject";

describe("APCB Blog Tests", () => {
    const blogObject = new Blog;
    beforeEach(() => {
        cy.visit('/')        
        blogObject.goToBlogPage();
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
    it("Verify 'By Tag' filter is working", () => {        
        blogObject.byTagFilter('Benefits')   
    })
    it("Verify 'By Category' filter is working", () => {
        blogObject.byCategoryFilter('Aerospace')
    })
})