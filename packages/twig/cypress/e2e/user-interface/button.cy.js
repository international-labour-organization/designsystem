describe("button", () => {
  beforeEach(() => {
    cy.visit("/patterns/button");
    cy.getPreview("button").first().as("buttonSection");
  });

  it("renders the button component correctly", () => {
    cy.get("@buttonSection").within(() => {
      cy.contains("Button");

      cy.get("span").should("exist");
      cy.get("svg").should("exist");

      cy.get("span").should("have.text", "Button");
      cy.get("svg")
        .should("have.attr", "data-size", "24")
        .should("have.attr", "data-name", "add");
    });
  });
});
