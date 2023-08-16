/// <reference types="cypress" />
describe("Using filter test suite", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
    cy.LoginToLeawie();
  });

  it("Filtering leave by type and by status", () => {
    cy.get(".chakra-switch__thumb").click();
    cy.get("button").contains("Filter").click({ force: true });
    cy.get('button[id*="menu-list-"]')
      .children()
      .find("svg")
      .eq(4)
      .click({ force: true })
      .click({ force: true });
    cy.get("[class=' css-11attmn-option']").eq(0).click();
    cy.get(".css-1wy0on6").first().click();
    cy.get("[class=' css-11attmn-option']").eq(0).click();
    cy.get("[class=' css-tlfecz-indicatorContainer']").first().click().click();
    cy.get("#react-select-4-option-1").click();
    cy.get(".css-1lt9of0-control").first().click();
    cy.get("#react-select-4-option-2").click();
    cy.get("button").contains("Filter").click({ force: true });
    cy.get("td").contains("Approved").should("be.visible");
    cy.get("td").contains("Rejected").should("be.visible");
  });
});
