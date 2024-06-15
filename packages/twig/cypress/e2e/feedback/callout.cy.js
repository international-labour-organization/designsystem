describe("callout", () => {
  beforeEach(() => {
    cy.visit("/patterns/callout");
    cy.getPreview("callout").first().as("calloutSection");
  });

  it("renders the callout correctly", () => {
    cy.get("@calloutSection").within(() => {
      cy.contains("Optional Title");
      cy.contains("Button");
    });
  });
});
