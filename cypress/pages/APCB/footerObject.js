class Footer {
    verifySocialMediaLinks(){
        cy.get(".footer-navigation > div.limit > div > div:nth-child(2) > a").each(($el, $index) => {
            const href = $el.attr('href');
            expect(href).to.exist;
        })
    }
}

export default Footer;