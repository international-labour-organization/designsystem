import fixture from "../../fixtures/tags.json";

const url = `/pattern-preview?id=tags&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Tags Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--tags").as("tags");
  });

  it("should render a list of tag items", () => {
    cy.get("@tags")
      .find(".ilo--tag--item")
      .should("have.length", fixture.items.length);
  });

  fixture.items.forEach((item) => {
    it(`should render the tag with content: ${item.content}`, () => {
      cy.get("@tags")
        .find(`#${item.elementId}`)
        .should("exist")
        .and("contain", item.content);
    });

    it(`should render the correct type for ${item.content}`, () => {
      cy.get(`#${item.elementId}`).should(
        "have.class",
        `ilo--tag__type__${fixture.tagType}`
      );
    });

    it(`should have the correct href for ${item.content} if type is 'anchor'`, () => {
      if (fixture.tagType === "anchor") {
        cy.get(`#${item.elementId}`).should("have.attr", "href", item.url);
      }
    });

    it(`should handle disabled state correctly for ${item.content}`, () => {
      if (item.disabled) {
        cy.get(`#${item.elementId}`).should("have.class", "ilo--tag__disabled");
        cy.get(`#${item.elementId}`).should("have.attr", "disabled");
      } else {
        cy.get(`#${item.elementId}`).should(
          "not.have.class",
          "ilo--tag__disabled"
        );
        cy.get(`#${item.elementId}`).should("not.have.attr", "disabled");
      }
    });

    it(`should display an icon if showIcon is true for ${item.content}`, () => {
      if (fixture.showIcon) {
        cy.get(`#${item.elementId}`).find(".ilo--icon").should("exist");
      } else {
        cy.get(`#${item.elementId}`).find(".ilo--icon").should("not.exist");
      }
    });
  });
});
