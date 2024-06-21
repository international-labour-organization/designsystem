describe("link", () => {
  beforeEach(() => {
    cy.visit("/patterns/link");
    cy.getPreview("link").first().as("linkSection");
  });

  it("renders the link correctly and navigates to the correct URL when clicked", () => {
    cy.get("@linkSection").within(() => {
      cy.contains("Link");

      // Check the link element
      cy.get(".ilo--link")
        .should("exist")
        .should("have.attr", "href", "http://www.ilo.org")
        .should("have.attr", "target", "_blank")
        .find("span")
        .contains("Link");

      // Stub the link's navigation
      cy.get(".ilo--link").should("have.attr", "href", "http://www.ilo.org");

      // Intercept the click event and prevent navigation
      cy.get(".ilo--link").then(($link) => {
        const href = $link.prop("href");
        cy.request(href).its("status").should("eq", 200);
      });
    });
  });
});
