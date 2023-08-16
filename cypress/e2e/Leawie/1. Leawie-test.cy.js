/// <reference types="cypress" />

describe("Test Leawie suite", () => {
  beforeEach(() => {
    cy.visit("https://leawie.stg.servalit.com/login");
  });

  it("Image visible on login page", () => {
    cy.get("[id=image0]").should("be.visible");
  });

  it("Box for login", () => {
    cy.get(".chakra-stack").should("exist");
  });

  it("Email name", () => {
    cy.get("[class='chakra-form__label css-67eq2c']")
      .first()
      .should("have.text", "Email");
  });

  it("Email box", () => {
    cy.get("[maxlength=50]").first().should("exist");
  });

  it("Password name", () => {
    cy.get("label").contains("Password").should("exist");
  });

  it("Password box", () => {
    cy.get(".chakra-input").last();
  });

  it("Forgot password button", () => {
    cy.get("p").contains("Forgot password?").should("be.visible");
  });

  it("Login button", () => {
    cy.get(".chakra-button").should("exist");
  });
});
