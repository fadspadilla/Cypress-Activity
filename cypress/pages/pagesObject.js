class PageObject {
  clickElement(selector) {
    return cy
      .get(selector)
      .click()
      .invoke("text")
      .then((text) => {
        return text.trim();
      });
  }
  getText(selector) {
    return cy
      .get(selector)
      .invoke("text")
      .then((text) => {
        return text.trim();
      });
  }
  hoverMenu(selector) {
    cy.get(selector).realHover().wait(2000);
  }
  scroll(selector) {
    cy.get(selector).scrollIntoView().wait(1000);
  }
  getLink(selector) {
    return cy
      .get(selector)
      .invoke("attr", "href")
      .then((href) => {
        return href;
      });
  }
  inputText(selector, str) {
    cy.get(selector).type(str);
  }
  clickBtn(selector) {
    cy.get(selector).click();
  }
  blogFilter(selector, str) {
    cy.get(selector).select(str);
  }
  getAttribute(selector, attribute) {
    return cy.get(selector).invoke("attr", attribute).then((attr) => {
      return attr.trim();
    });
  }
  checkDropdownCorrectRedirect($menu_idx, $idx, $find_key, $href) {
    return cy.get(`nav > ul > li:nth-child(${$menu_idx}) > section > ul`)
      .find(`${$find_key}`)
      .eq($idx)
      .click({force: true})
      .then(() => {
        return cy.url().should('include', $href).then(() => true);
      })
  }
}

export default PageObject;
