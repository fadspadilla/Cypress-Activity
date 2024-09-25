describe("Header Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verify menu redirects to corresponding page", () => {
    cy.get("nav > ul > li").each(($el, $index, $list) => {
      if ($index != $list.length - 1) {
        cy.get(`nav > ul > li:nth-child(${$index + 1}) > a > span`).click().then(($menu) => {
          cy.wrap($menu).invoke('text').then(($text) => {
            var menu = $text.trim();
            cy.get('h1').invoke('text').then(($text) => {
              var h1 = $text.trim();
              expect(h1).to.eq(menu); //assertion 1
              cy.url().should('include', menu.toLowerCase()) //assertion 2
            })
          })
        })
      }
    });
  });
  it("Verify featured blog is not empty", () => {
    cy.get('nav > ul > li:nth-child(5)').click()
    cy.get('div.article-featured > div > h4').then(($blogtitle) => {
      cy.wrap($blogtitle).invoke('text').then(($text) => {
        var blogtitle = $text.trim()
        cy.get('div.article-featured > div > a.card-button').click()
        cy.get('h1').invoke('text').then((text) => {
          expect((text.trim)).to.eq(blogtitle)
        })
      })
    })
  })
});
