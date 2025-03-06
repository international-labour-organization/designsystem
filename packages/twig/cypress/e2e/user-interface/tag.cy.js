import fixture from "../../fixtures/tag.json";

const url = `/pattern-preview?id=tag&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("Tag Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--tag").as("tag");
  });

  it("should have the correct type applied", () => {
    cy.get("@tag").should(
      "have.class",
      `ilo--tag__type__${fixture.settings.tagType}`
    );
  });

  it("should be disabled if the disabled property is set", () => {
    if (fixture.settings.disabled) {
      cy.get("@tag").should("have.class", "ilo--tag__disabled");
      cy.get("@tag").should("have.attr", "disabled");
    } else {
      cy.get("@tag").should("not.have.class", "ilo--tag__disabled");
      cy.get("@tag").should("not.have.attr", "disabled");
    }
  });

  it("should render as a button when tagType is 'button'", () => {
    if (fixture.settings.tagType === "button") {
      cy.get("@tag").should("match", "button");
    } else {
      cy.get("@tag").should("not.match", "button");
    }
  });

  it("should render as an anchor when tagType is 'anchor'", () => {
    if (fixture.settings.tagType === "anchor") {
      cy.get("@tag").should("match", "a");
      cy.get("@tag").should("have.attr", "href", fixture.settings.url);
    } else {
      cy.get("@tag").should("not.match", "a");
    }
  });

  it("should render as a span when tagType is 'display'", () => {
    if (fixture.settings.tagType === "display") {
      cy.get("@tag").should("match", "span");
    } else {
      cy.get("@tag").should("not.match", "span");
    }
  });

  it("should display an icon if showIcon is true", () => {
    if (fixture.settings.showIcon) {
      cy.get("@tag").find(".ilo--icon").should("exist");
    } else {
      cy.get("@tag").find(".ilo--icon").should("not.exist");
    }
  });

  it("should contain the expected content", () => {
    cy.get("@tag").should("contain", fixture.content);
  });
});
