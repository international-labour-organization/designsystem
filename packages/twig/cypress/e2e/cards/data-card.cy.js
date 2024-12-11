describe("Data card", () => {
  it("renders the data card correctly", () => {
    cy.visit("/admin/appearance/ui/patterns/datacard");
    cy.getPreview("datacard")
      .first()
      .within(() => {
        cy.contains("Flagship report");
        cy.contains("Date of publication");
        cy.contains("17 March 2022");
        cy.contains("Files for download");
        cy.contains("PDF 3.2 MB");

        cy.contains("Also available in");
        cy.contains("English");
        cy.contains("Español");

        cy.get("picture").within(() => {
          cy.get("source").should("have.length", 1);
          cy.get("source")
            .should("have.attr", "srcset")
            .and("include", "/images/publication.jpg");
        });
      });
  });

  it("ensures all file buttons have a target property", () => {
    cy.visit("/admin/appearance/ui/patterns/datacard");
    cy.getPreview("datacard")
      .first()
      .within(() => {
        cy.get(".ilo--card__type__data--content-files")
          .find("a, button")
          .each(($el) => {
            cy.wrap($el).should("have.attr", "target");
          });
      });
  });

  it("Ensures file buttons have the correct target", () => {
    cy.visit("/admin/appearance/ui/patterns/datacard");
    cy.getPreview("datacard")
      .first()
      .within(() => {
        cy.get(".ilo--card__type__data--content-files")
          .find("a, button")
          .eq(0) // First element
          .should("have.attr", "target", "_blank");

        cy.get(".ilo--card__type__data--content-files")
          .find("a, button")
          .eq(1) // Second element
          .should("have.attr", "target", "_parent");

        cy.get(".ilo--card__type__data--content-files")
          .find("a, button")
          .eq(2) // Third element
          .should("have.attr", "target", "_self");
      });
  });
});
