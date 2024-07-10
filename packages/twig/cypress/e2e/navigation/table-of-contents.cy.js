describe("tableofcontents", () => {
  beforeEach(() => {
    cy.visit("/patterns/tableofcontents");
    cy.getPreview("tableofcontents").first().as("tableOfContentsSection");
  });

  it("renders the link correctly and navigates to the correct URL when clicked", () => {
    cy.get("@tableOfContentsSection").within(() => {
      cy.contains("Item One");
      cy.contains("Item Three");
      cy.contains("Item Five");

      cy.get(".ilo--table-of-contents--wrapper")
        .children("nav")
        .children("ul")
        .children("li");
    });
  });
});
