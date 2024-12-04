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
        cy.request({
          url: href,
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
            "Accept-Language": "en-US,en;q=0.5",
          },
        })
          .its("status")
          .should("eq", 200);
      });
    });
  });
});
