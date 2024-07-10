describe("social media", () => {
  beforeEach(() => {
    cy.visit("/patterns/socialmedia");
    cy.getPreview("socialmedia").first().as("socialMediaSection");
  });

  it("checks if social media renders as expected", () => {
    cy.get("@socialMediaSection").within(() => {
      cy.get(".ilo--social-media")
        .should("exist")
        .within(() => {
          cy.get(".ilo--social-media--list--item")
            .first()
            .within(() => {
              cy.get("a").should("have.attr", "title", "X");
            });

          cy.get(".ilo--social-media--list--item")
            .last()
            .within(() => {
              cy.get("a").should("have.attr", "title", "Youtube");
            });
        });
    });
  });

  it("checks for navigation in social media icons", () => {
    cy.get("@socialMediaSection").within(() => {
      cy.get(".ilo--social-media")
        .should("exist")
        .within(() => {
          cy.get(".ilo--social-media--list--item")
            .eq(2)
            .within(() => {
              cy.get("a")
                .should(
                  "have.attr",
                  "href",
                  "https://www.linkedin.com/company/international-labour-organization-ilo"
                )
                .should("have.attr", "target", "_blank");
            });
        });
    });
  });
});
