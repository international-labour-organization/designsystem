import fixture from "../../fixtures/button.json";

const url = `/pattern-preview?id=button&fields=${encodeURI(JSON.stringify(fixture))}`;

describe("Button Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--button").as("button");
  });

  it("should have the correct size applied", () => {
    cy.get("@button").should(
      "have.class",
      `ilo--button__${fixture.settings.size}`
    );
  });

  it("should have the correct type applied", () => {
    cy.get("@button").should(
      "have.class",
      `ilo--button__${fixture.settings.type}`
    );
  });

  it("should display an icon if the icon property is set", () => {
    if (fixture.icon) {
      cy.get("@button").should("have.class", `ilo--button--icon`);
      cy.get("@button").find(".ilo--icon").should("exist");
    } else {
      cy.get("@button").should("not.have.class", `ilo--button--icon`);
      cy.get("@button").find(".ilo--icon").should("not.exist");
    }
  });

  it("should be disabled if the disabled property is set", () => {
    if (fixture.settings.disabled) {
      cy.get("@button").should("have.class", "ilo--button__disabled");
      cy.get("@button").should("have.attr", "disabled");
    } else {
      cy.get("@button").should("not.have.class", "ilo--button__disabled");
      cy.get("@button").should("not.have.attr", "disabled");
    }
  });

  it("should render with only an icon if the icononly property is set", () => {
    if (fixture.settings.icononly) {
      cy.get("@button").should("have.class", "ilo--button--icon--only");
      cy.get("@button").find(".link__label").should("not.exist");
    } else {
      cy.get("@button").find(".link__label").should("exist");
    }
  });

  it("should render as an anchor when a URL is provided", () => {
    if (fixture.url) {
      cy.get("@button").should("match", "a");
      cy.get("@button").should("have.attr", "href", fixture.url);
    } else {
      cy.get("@button").should("match", "button");
    }
  });

  it("should contain the expected label", () => {
    cy.get("@button").should("contain", fixture.label);
  });

  it("should render as a button when a URL is not provided", () => {
    const newFixture = { ...fixture, url: false };
    const newUrl = `/pattern-preview?id=button&fields=${encodeURI(JSON.stringify(newFixture))}`;
    cy.visit(newUrl);
    cy.get("@button").should("match", "button");
  });

  it("should apply the custom class when className is provided", () => {
    if (fixture.className) {
      cy.get("@button").should("have.class", fixture.className);
    }
  });

  it("should have the correct ID when elementId is provided", () => {
    if (fixture.elementId) {
      cy.get("@button").should("have.attr", "id", fixture.elementId);
    }
  });
});
