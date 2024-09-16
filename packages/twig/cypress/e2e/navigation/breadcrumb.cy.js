describe("breadcrumb", () => {
  beforeEach(() => {
    cy.visit("/patterns/breadcrumb");
    cy.getPreview("breadcrumb").first().as("breadcrumbSection");
  });

  it("should render five links in desktop view", () => {
    cy.viewport(1280, 720);
    cy.get(".ilo--breadcrumb--link").should("have.length", 5);
  });

  it("should render the first link with an :after pseudo-element that has a background image", () => {
    cy.get(".ilo--breadcrumb--item__first .ilo--breadcrumb--link").then(
      ($el) => {
        const afterContent = window.getComputedStyle($el[0], "::after");
        expect(afterContent.getPropertyValue("background-image")).to.not.equal(
          "none"
        );
      }
    );
  });

  it("should not render context menu links in mobile view initially", () => {
    cy.viewport(375, 667);
    cy.get(".ilo--breadcrumb--context--menu").should("be.hidden");
  });

  it("should have the correct number of links in the context menu", () => {
    cy.get(".ilo--context-menu--item").should("have.length", 3);
  });

  it("should render context menu links when the context button is clicked in mobile view", () => {
    cy.viewport(375, 1200);
    cy.get(".ilo--breadcrumb--context--button").click();
    cy.get(".ilo--breadcrumb--context--menu").should("not.be.hidden");
  });
});
