describe("linklist", () => {
  beforeEach(() => {
    cy.visit("/patterns/linklist");
    cy.getPreview("linklist").first().as("linkListSection");
  });

  it("renders the link correctly", () => {
    cy.get("@linkListSection").within(() => {
      // Section 1
      cy.contains("Section Headline");
      cy.contains("Link One");
      cy.contains("Link Three");
      cy.contains("Link Five");

      // Section 2
      cy.contains("Section 2");
      cy.contains("Section 2 Link One");
      cy.contains("Section 2 Link Three");
      cy.contains("Section 2 Link Five");
    });
  });

  it("checks if links render as expected", () => {
    cy.get("@linkListSection").within(() => {
      cy.get(".ilo--link-list--links--item")
        .should("exist")
        .first()
        .find("a")
        .should("have.attr", "href", "http://www.google.com")
        .find("span");
    });
  });
});
