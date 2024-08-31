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

  it("at small breakpoint, shows items taking up half container width", () => {
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

  it("at large breakpoints ensure that there are 3 grid items in a row when there are 3 or more items.", () => {
    cy.get(".ilo--logo-grid--logos").then(($container) => {
      const containerWidth = $container.outerWidth();
      cy.get(".ilo--logo-grid--item").each(($item) => {
        const itemWidth = $item.outerWidth();
        // check if the container width is equal to 3 of the items and its gap
        expect(containerWidth).to.equal(Math.round(itemWidth * 3 + 32));
      });
    });
  });
});
