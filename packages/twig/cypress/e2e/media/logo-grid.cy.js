describe("logo grid", () => {
  beforeEach(() => {
    cy.visit("/patterns/logogrid");
    cy.getPreview("logogrid").first().as("logoGridSection");
  });

  it("renders all of the logo items", () => {
    cy.get("@logoGridSection").within(() => {
      cy.get(".ilo--logo-grid--logos").find("a").should("have.length", 11);
      cy.get(".ilo--logo-grid--item").should("exist");
    });
  });

  it("has all of the expected attributes", () => {
    cy.get(".ilo--logo-grid--item")
      .should("have.attr", "href")
      .and("not.be.empty");

    cy.get(".ilo--logo-grid--item")
      .first()
      .within(() => {
        cy.get("img").should("have.attr", "src").and("not.be.empty");
      });
  });

  it("at mobile breakpoint, shows items taking up full container width", () => {
    cy.viewport("iphone-6");
    cy.get(".ilo--logo-grid--logos").then(($container) => {
      const containerWidth = $container.outerWidth();
      cy.get(".ilo--logo-grid--item").each(($item) => {
        const itemWidth = $item.outerWidth();
        expect(itemWidth).to.equal(containerWidth);
      });
    });
  });

  it("should ensure that at the small breakpoint, the container width is equal to 2 items plus the gap", () => {
    cy.viewport("iphone-6+");
    cy.get(".ilo--logo-grid--logos").then(($container) => {
      const containerWidth = $container.outerWidth();
      cy.get(".ilo--logo-grid--item").each(($item) => {
        const itemWidth = $item.outerWidth();
        // check if the container width is equal to 2 of the items and its gap
        expect(containerWidth).to.equal(itemWidth * 2 + 16);
      });
    });
  });

  it("should ensure that at large breakpoints with more than 3 items, the container width is equal to 3 items plus the gap", () => {
    cy.get(".ilo--logo-grid--logos").then(($container) => {
      const containerWidth = $container.outerWidth();
      cy.get(".ilo--logo-grid--item").each(($item) => {
        const itemWidth = $item.outerWidth();
        // check if the container width is equal to 3 of the items and its gap
        expect(containerWidth).to.equal(Math.round(itemWidth * 3 + 32));
      });
    });
  });

  it("should ensure that at large breakpoints with less than 3 items, the container width is equal to 2 items plus the gap", () => {
    cy.get(".ilo--logo-grid--item").each(($item, index) => {
      if (index > 1) {
        $item.remove();
      }
    });

    cy.get(".ilo--logo-grid--logos").then(($container) => {
      const containerWidth = $container.outerWidth();
      cy.get(".ilo--logo-grid--item").each(($item) => {
        const itemWidth = $item.outerWidth();
        // check if the container width is equal to 2 of the items and its gap
        expect(containerWidth).to.equal(itemWidth * 2 + 16);
      });
    });
    ``;
  });
});
