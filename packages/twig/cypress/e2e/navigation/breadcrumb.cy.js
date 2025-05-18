import fixture from "../../fixtures/breadcrumb.json";

const url = `/pattern-preview?id=breadcrumb&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("breadcrumb", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--breadcrumb").as("breadcrumb");
  });

  it("should render the correct number of links", () => {
    cy.get("@breadcrumb").within(() => {
      cy.get(".ilo--breadcrumb--link").should(
        "have.length",
        fixture.links.length
      );
    });
  });

  it("should render the first link as a home icon", () => {
    cy.get(".ilo--breadcrumb--item__first .ilo--breadcrumb--link").then(
      ($el) => {
        const afterContent = window.getComputedStyle($el[0], "::after");
        expect(afterContent.getPropertyValue("mask-image")).to.not.equal(
          "none"
        );
        expect(afterContent.getPropertyValue("width")).to.equal("24px");
        expect(afterContent.getPropertyValue("height")).to.equal("24px");
      }
    );
  });

  it("should render chevron icons between links", () => {
    cy.get(".ilo--breadcrumb--item:not(.ilo--breadcrumb--item__first)").each(
      ($item) => {
        const beforeContent = window.getComputedStyle($item[0], "::before");
        expect(beforeContent.getPropertyValue("mask-image")).to.not.equal(
          "none"
        );
        expect(beforeContent.getPropertyValue("width")).to.equal("24px");
        expect(beforeContent.getPropertyValue("height")).to.equal("24px");
      }
    );
  });

  it("should not render context menu links in mobile view initially", () => {
    cy.viewport(375, 667);
    cy.get(".ilo--breadcrumb--context--menu").should("be.hidden");
  });

  it("should have the correct number of links in the context menu", () => {
    cy.get("@breadcrumb").within(() => {
      // Middle links (excluding first and last)
      const middleLinksCount = fixture.links.length - 2;
      cy.get(".ilo--context-menu--item").should(
        "have.length",
        middleLinksCount
      );
    });
  });

  it("should render context menu links when the context button is clicked in mobile view", () => {
    cy.viewport(375, 1200);
    cy.get("@breadcrumb").within(() => {
      cy.get(".ilo--breadcrumb--context--button").click();
      cy.get(".ilo--breadcrumb--context--menu").should("not.be.hidden");
    });
  });

  it("should apply the correct theme class", () => {
    cy.get("@breadcrumb").should(
      "have.class",
      `ilo--breadcrumb__theme__${fixture.settings.theme}`
    );
  });

  it("should apply corner cut to the inner container", () => {
    cy.get(".ilo--breadcrumb--inner").should("have.css", "clip-path");
  });
});
