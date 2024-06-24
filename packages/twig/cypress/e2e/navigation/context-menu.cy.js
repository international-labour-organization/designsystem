describe("context menu", () => {
  beforeEach(() => {
    cy.visit("/patterns/contextmenu");
    cy.getPreview("contextmenu").first().as("contextMenuSection");
  });

  it("renders the context menu correctly", () => {
    cy.get("@contextMenuSection").within(() => {
      cy.contains("Link One");
      cy.contains("Link Three");
      cy.contains("Link Five");

      cy.get(".ilo--context-menu").children("li");
    });
  });

  it("checks if sections work as expected", () => {
    cy.get("@contextMenuSection").within(() => {
      cy.get(".endsection").should("exist").contains("Link Three");
    });
  });
});
