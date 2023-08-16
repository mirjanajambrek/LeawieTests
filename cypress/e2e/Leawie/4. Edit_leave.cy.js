/// <reference types="cypress" />
describe("Editing leave", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
    cy.LoginToLeawie();
  });
  afterEach(() => {
    cy.get('*[id^="menu-button-"]').eq(2).click();
    cy.get("button").contains("Delete").click({ force: true });
    cy.get("button").contains("Yes, delete").click();
    cy.get("div")
      .contains("Leave request is successfully deleted")
      .should("be.visible");
  });

  it("Editing employee leave", () => {
    cy.get(".css-1lmuqff").click();
    cy.get("#userId").click();
    cy.get("#react-select-2-option-2").click();
    cy.get("#type").click();
    cy.get("#react-select-3-option-0").click();
    cy.get("#startsAt").clear();
    cy.get(".react-datepicker__navigation--next").click();
    cy.get(".react-datepicker__day--020").last().click();
    cy.get("#endsAt").click();
    cy.get(".react-datepicker__navigation--next").click();
    cy.get(".react-datepicker__day--025").last().click();
    cy.get("[form=createEditAbsence]").click();
    cy.get("div")
      .contains("New leave successfully created")
      .should("be.visible");
    cy.get("#search").type("Mirjana Jambrek").click();
    cy.get(".chakra-switch__thumb").click();
    cy.get(".chakra-table__container").scrollTo("right");
    cy.get('*[id^="menu-button-"]').eq(2).click();
    cy.get("button").contains("Edit").click({ force: true });
    cy.get("#type").click();
    cy.get("#react-select-5-option-1").click();
    cy.get("#reviewerId").click();
    cy.get("#react-select-7-option-2").click();
    cy.get("button").contains("Update").click();
    cy.get("div")
      .contains("Leave request is successfully updated")
      .should("be.visible");
  });
});
