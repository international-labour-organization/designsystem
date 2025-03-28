import fixture from "../../fixtures/tabs.json";

const url = `/pattern-preview?id=tabs&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

console.log(url);

describe("Tabs Component", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--tabs").as("tabs");
  });

  it("should render the tabs component with correct number of items", () => {
    cy.get("@tabs")
      .find(".ilo--tabs--selection--item")
      .should("have.length", fixture.items.length);
  });

  it("should render tab labels correctly", () => {
    fixture.items.forEach((item, index) => {
      cy.get("@tabs")
        .find(".ilo--tabs--selection--label")
        .eq(index)
        .should("contain", item.label);
    });
  });

  it("should show first tab content by default", () => {
    cy.get("@tabs")
      .find("[role='tabpanel']")
      .first()
      .should("have.attr", "aria-expanded", "true");
  });

  it("should switch content when clicking different tabs", () => {
    // Click second tab
    cy.get("@tabs").find(".ilo--tabs--selection--button").eq(1).click();

    // First tab panel should be hidden
    cy.get("@tabs")
      .find("[role='tabpanel']")
      .first()
      .should("have.attr", "aria-expanded", "false");

    // Second tab panel should be visible
    cy.get("@tabs")
      .find("[role='tabpanel']")
      .eq(1)
      .should("have.attr", "aria-expanded", "true");
  });

  it("should render icons when provided", () => {
    const fixtureWithIcons = {
      ...fixture,
      items: fixture.items.map((item) => ({
        ...item,
        icon: "notification_info_outlined",
      })),
    };

    cy.visit(
      `/pattern-preview?id=tabs&fields=${encodeURI(
        JSON.stringify(fixtureWithIcons)
      )}`
    );

    cy.get("@tabs")
      .find(".ilo--tabs--selection--button")
      .should("have.class", "icon");

    cy.get("@tabs").find(".ilo--icon").should("exist");
  });

  it("should apply the correct theme class", () => {
    const themes = ["light", "dark"];

    themes.forEach((theme) => {
      cy.visit(
        `/pattern-preview?id=tabs&fields=${encodeURI(
          JSON.stringify({ ...fixture, settings: { theme } })
        )}`
      );

      cy.get(`.ilo--tabs`).should("have.class", `ilo--tabs__theme__${theme}`);
    });
  });
});
