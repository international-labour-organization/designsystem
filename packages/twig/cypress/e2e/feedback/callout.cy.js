describe("callout", () => {
  beforeEach(() => {
    cy.visit("/admin/appearance/ui/patterns/callout");
    cy.getPreview("callout").first().as("calloutSection");
  });

  it("renders the callout correctly", () => {
    cy.get("@calloutSection").within(() => {
      cy.contains("This is a callout component");
      cy.contains("Take action");
    });
  });
});
