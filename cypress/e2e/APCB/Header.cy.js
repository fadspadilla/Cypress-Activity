import Header from "../../pages/IBS/headerObject.js";
import PageObject from "../../pages/pagesObject";


describe("APCB Header Tests", () => {
    const headerObj = new Header();
    const pageObj = new PageObject();

    let headerFix;
    beforeEach(() => {
        cy.visit("/")
        cy.fixture("APCB/header.json").then((data) => {
            headerFix = data;
        });
    })

    it("Verify if services dropdown list redirects to corresponding page", () => {
        pageObj.hoverMenu("nav > ul > li:nth-child(2)").then(() => {
            cy.get("nav > ul > li:nth-child(2) > section > ul > li").each((element, index) => {
                cy.wait(2000)
                pageObj.clickElement(`nav > ul > li:nth-child(2) > section > ul > li:nth-child(${index + 1}) a > span`).then((text) => {
                    let headertext = text
                    pageObj.getText("h1:nth-child(1)").should("eq", headertext);
                    cy.url().should("eq", headerFix.servicesLinks[index]);
                })
            })
        })
    })

    it("Verify if resources dropdown list redirects to corresponding page", () => {
        pageObj.hoverMenu("nav > ul > li:nth-child(3)").then(() => {
            cy.get("nav > ul > li:nth-child(3) > section > ul > li").each((element, index) => {
                pageObj.clickElement(`nav > ul > li:nth-child(3) > section > ul > li:nth-child(${index + 1}) a > span`).then((text) => {
                    let headertext = text
                    pageObj.getText("h1").should("eq", headertext);
                    cy.url().should("eq", headerFix.resourcesLinks[index]);
                })
            })
        })
    })
    it.only("Verify if company dropdown list redirects to corresponding page", () => {
        pageObj.hoverMenu("nav > ul > li:nth-child(4)").then(() => {
            cy.wait(3000)
            cy.get("nav > ul > li:nth-child(4) > section > ul > li").each((element, index) => {
                pageObj.clickElement(`nav > ul > li:nth-child(4) > section > ul > li:nth-child(${index + 1}) a > span`).then((text) => {
                    let headertext = text
                    pageObj.getText("h1").should("eq", headertext);
                    cy.url().should("eq", headerFix.companyLinks[index]);
                })
            })
        })

    })
})