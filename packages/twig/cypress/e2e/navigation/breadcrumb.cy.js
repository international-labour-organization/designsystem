describe("breadcrumb", () => {
  beforeEach(() => {
    cy.visit("/patterns/breadcrumb");
    cy.getPreview("breadcrumb").first().as("breadcrumbSection");
  });

  it("renders the breadcrumb correctly", () => {
    cy.get("@breadcrumbSection").within(() => {
      cy.get(".ilo--breadcrumb--items")
        .should("not.contain", "Link One")
        .find("ol")
        .should("exist");

      cy.contains("Link Two");
      cy.contains("Link Three");
      cy.contains("Link Four");
      cy.contains("Link Five");
    });
  });
});
