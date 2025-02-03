import fixture from "../../fixtures/list.json";

const url = `/pattern-preview?id=list&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("List Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--list").as("list");
  });

  it("should have the correct theme applied", () => {
    cy.get("@list").should(
      "have.class",
      `ilo--list__theme__${fixture.settings.theme}`
    );
  });

  it("should be unstyled if ordered is not specified", () => {
    if (!fixture.settings.ordered || fixture.settings.ordered === "unstyled") {
      cy.get("@list").should("have.class", "ilo--list__unstyled");
    }
  });

  it("should be horizontal if alignment is set to horizontal", () => {
    if (fixture.alignment === "horizontal") {
      cy.get("@list").should("have.class", "ilo--list__horizontal");
    } else {
      cy.get("@list").should("not.have.class", "ilo--list__horizontal");
    }
  });

  it("should display a title if provided", () => {
    if (fixture.title) {
      cy.get("@list")
        .find(".ilo--list--title")
        .should("exist")
        .and("contain", fixture.title);
    } else {
      cy.get("@list").find(".ilo--list--title").should("not.exist");
    }
  });

  it("should render an ordered list if ordered is set to 'ordered'", () => {
    if (fixture.ordered === "ordered") {
      cy.get("@list").find("ol").should("exist");
    } else {
      cy.get("@list").find("ol").should("not.exist");
    }
  });

  it("should render an unordered list if ordered is not 'ordered'", () => {
    if (fixture.ordered !== "ordered") {
      cy.get("@list").find("ul").should("exist");
    } else {
      cy.get("@list").find("ul").should("not.exist");
    }
  });
});
