import fixture from "../../fixtures/accordion.json";

const url = `/pattern-preview?id=accordion&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("accordion", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--accordion").first().as("accordion");
  });

  it("should render all accordion items", () => {
    cy.get("@accordion").within(() => {
      cy.get(".ilo--accordion--item").should("have.length", 3);
    });
  });

  it("should use id from fixture for accordion items", () => {
    cy.get("@accordion").within(() => {
      cy.get(".ilo--accordion--item").each(($item, index) => {
        cy.wrap($item).should("have.attr", "id", fixture.items[index].id);
      });
    });
  });

  it("should assign correct IDs to accordion items", () => {
    cy.get("@accordion").within(() => {
      cy.get(".ilo--accordion--item").each(($item, index) => {
        cy.wrap($item).should("have.attr", "id", `accordion-${index + 1}`);
      });
    });
  });

  it("should expand first item by default", () => {
    cy.get("@accordion").within(() => {
      cy.get(".ilo--accordion--item")
        .first()
        .find(".ilo--accordion--panel")
        .should("have.class", "ilo--accordion--panel__open");
    });
  });

  it("should toggle content when clicking header", () => {
    cy.get("@accordion").within(() => {
      cy.get(".ilo--accordion--item").eq(1).as("secondItem");
      cy.get("@secondItem").find("button").click();
      cy.get("@secondItem")
        .find(".ilo--accordion--panel")
        .should("have.class", "ilo--accordion--panel__open");
    });
  });

  it("should allow multiple items to be expanded", () => {
    cy.get("@accordion").within(() => {
      cy.get("button").each(($button) => {
        if ($button.attr("aria-expanded") === "false") {
          cy.wrap($button).click();
        }
      });
      cy.get(".ilo--accordion--panel__open").should("have.length", 3);
    });
  });

  it("should have aria-expanded attribute on accordion item buttons", () => {
    cy.get("@accordion").within(() => {
      cy.get(".ilo--accordion--item button").each(($button) => {
        cy.wrap($button)
          .should("have.attr", "aria-expanded")
          .and("be.oneOf", ["true", "false"]);
      });
    });
  });
});
