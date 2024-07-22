describe("footer", () => {
  beforeEach(() => {
    cy.visit("/patterns/footer");
    cy.getPreview("footer").first().as("footerSection");
  });

  it("renders the footer correctly", () => {
    cy.get("@footerSection").within(() => {
      cy.contains("Advancing social justice, promoting decent work");
      cy.contains("ILO is a specialized agency of the United Nations");
      cy.contains("International Labour Organization");
      cy.contains("Contact us");
      cy.contains("Stay informed");
      cy.contains("Subscribe for updates");
    });
  });

  it("checks if social media renders as expected", () => {
    cy.get("@footerSection").within(() => {
      cy.get(".ilo--social-media")
        .should("exist")
        .find(".ilo--social-media--list--item")
        .first()
        .find("a")
        .should("have.attr", "title", "X");
    });
  });
});
