describe("Detail card", () => {
  it("renders the detail card correctly", () => {
    cy.visit("/patterns/detailcard");
    cy.getPreview("detailcard").within(() => {
      cy.contains("Podcast");
      cy.contains("Can digital technology be an equality machine?");
      cy.contains("A toxic combination");
      cy.contains("20 September 2022 | Geneva");

      cy.get("picture").within(() => {
        cy.get("source").should("have.length", 3);
        cy.get("source")
          .should("have.attr", "srcset")
          .and("include", "/images/large.jpg");
        cy.get("img")
          .should("have.attr", "src")
          .and("include", "/images/small.jpg");
      });
    });
  });
});
