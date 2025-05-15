import fixture from "../../fixtures/nav.json";

const url = `/pattern-preview?id=nav&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("MobileNav", () => {
  beforeEach(() => {
    cy.visit(url);
    // Set viewport to mobile size
    cy.viewport(320, 568);
  });

  describe("Initial State", () => {
    it("should render the burger menu button", () => {
      cy.get("[class$='burger']").should("exist");
    });

    it("renders the mobile logo with correct attributes", () => {
      cy.get(".ilo--subsite-nav-complex__nav-mobile__logo")
        .should("exist")
        .and("have.class", "ilo--subsite-nav-complex__nav-mobile__logo")
        .first(() => {
          cy.get("img")
            .should("exist")
            .and("have.attr", "src", fixture.branding.logo.mobile)
            .and("have.attr", "alt", fixture.branding.logo.alt)
            .and(
              "have.class",
              "ilo--subsite-nav-complex__nav-mobile__logo-img"
            );
        });
    });

    it("wraps the mobile logo in a link when link data is provided", () => {
      cy.get(".ilo--subsite-nav-complex__nav-mobile__logo--link")
        .first()
        .should("match", "a")
        .and("have.attr", "href", fixture.branding.logo.link.href)
        .and("have.attr", "aria-label", fixture.branding.logo.link.label);
    });

    it("renders the mobile logo without a link when no link data is provided", () => {
      // Create a modified fixture without the logo link
      const fixtureWithoutLink = { ...fixture };
      delete fixtureWithoutLink.branding.logo.link;

      cy.visit(
        `/pattern-preview?id=nav&fields=${encodeURI(
          JSON.stringify(fixtureWithoutLink)
        )}`
      );

      cy.get(".ilo--subsite-nav-complex__nav-mobile__logo")
        .should("match", "img")
        .and("not.match", "a")
        .and("have.class", "ilo--subsite-nav-complex__nav-mobile__logo-img");
    });
  });

  describe("Main Drawer", () => {
    it("clicking the burger menu button opens the main drawer", () => {
      cy.get("[class$='burger']").click();
      cy.get("#ilo--nav-mobile-drawer__main").should("be.visible");
    });

    it("clicking the close button closes the main drawer", () => {
      cy.get("[class$='burger']").click();
      cy.get(".ilo--nav-mobile-drawer__header-close").first().click();
      cy.get("#ilo--nav-mobile-drawer__main").should("not.be.visible");
    });

    it("updates burger menu aria-expanded attribute when drawer is opened/closed", () => {
      cy.get("[class$='burger']")
        .click()
        .should("have.attr", "aria-expanded", "true");
      cy.get(".ilo--nav-mobile-drawer__header-close").first().click();
      cy.get("[class$='burger']").should("have.attr", "aria-expanded", "false");
    });

    it("renders the correct number of menu items in the main drawer", () => {
      cy.get("[class$='burger']").click();
      cy.get("#ilo--nav-mobile-drawer__main").within(() => {
        cy.get(".ilo--nav-mobile-menu__link").should(
          "have.length",
          fixture.facadeItems.length
        );
      });
    });

    it("the currently selected menu item includes a marked icon", () => {
      cy.get("[class$='burger']").click();
      cy.get("#ilo--nav-mobile-drawer__main").within(() => {
        cy.get(".ilo--nav-mobile-menu__item--active").within(() => {
          cy.get(".ilo--nav-mobile-menu__marked").should("exist");
        });
      });
    });

    it("the first item in the main drawer has focus when the drawer opens", () => {
      cy.get("[class$='burger']").click();
      cy.press(Cypress.Keyboard.Keys.TAB);
      cy.get("#ilo--nav-mobile-drawer__main").within(() => {
        cy.get("a[href], button").first().should("have.focus");
      });
    });

    it("the language and more drawers are inert when only the main drawer is open", () => {
      cy.get("[class$='burger']").click();
      cy.get("#ilo--nav-mobile-drawer__languages").should("have.attr", "inert");
      cy.get("#ilo--nav-mobile-drawer__more").should("have.attr", "inert");
    });
  });

  describe("Language Drawer", () => {
    beforeEach(() => {
      // Open main drawer first
      cy.get("[class$='burger']").click();
    });

    it("clicking the language button opens the language drawer", () => {
      cy.get(".ilo--nav-mobile__widgets-language").click();
      cy.get("#ilo--nav-mobile-drawer__languages").should("be.visible");
    });

    it("clicking the close button closes the language drawer", () => {
      cy.get(".ilo--nav-mobile__widgets-language").click();
      cy.get(".ilo--nav-mobile-drawer__header-close").eq(1).click();
      cy.get("#ilo--nav-mobile-drawer__languages").should("not.be.visible");
    });

    it("clicking the menu home button closes the language drawer but not the main drawer", () => {
      cy.get(".ilo--nav-mobile__widgets-language").click();
      cy.get(".ilo--nav-mobile__nested__header").first().click();
      cy.get("#ilo--nav-mobile-drawer__languages").should("not.be.visible");
      cy.get("#ilo--nav-mobile-drawer__main").should("be.visible");
    });

    it("renders the correct languages in the language drawer", () => {
      cy.get(".ilo--nav-mobile__widgets-language").click();
      cy.get("#ilo--nav-mobile-drawer__languages").within(() => {
        cy.get(".ilo--nav-mobile-menu__link").should(
          "have.length",
          fixture.widgets.language.links.length
        );
      });
    });

    it("the first focusable item in the language drawer has focus when the drawer opens", () => {
      cy.get(".ilo--nav-mobile__widgets-language").click();
      cy.press(Cypress.Keyboard.Keys.TAB);
      cy.get("#ilo--nav-mobile-drawer__languages").within(() => {
        cy.get("a[href], button").first().should("have.focus");
      });
    });

    it("the currently selected language includes a marked icon", () => {
      cy.get(".ilo--nav-mobile__widgets-language").click();
      cy.get("#ilo--nav-mobile-drawer__languages").within(() => {
        cy.get(".ilo--nav-mobile-menu__item--active").within(() => {
          cy.get(".ilo--nav-mobile-menu__marked").should("exist");
        });
      });
    });
  });

  describe("More Options Drawer", () => {
    beforeEach(() => {
      // Open main drawer first
      cy.get("[class$='burger']").click();
    });

    it("clicking the more button opens the more drawer", () => {
      cy.get(".ilo--nav-mobile__more").click();
      cy.get("#ilo--nav-mobile-drawer__more").should("be.visible");
    });

    it("clicking the close button closes the more drawer", () => {
      cy.get(".ilo--nav-mobile__more").click();
      cy.get(".ilo--nav-mobile-drawer__header-close").eq(2).click();
      cy.get("#ilo--nav-mobile-drawer__more").should("not.be.visible");
    });

    it("clicking the menu home button closes the more drawer but not the main drawer", () => {
      cy.get(".ilo--nav-mobile__more").click();
      cy.get(".ilo--nav-mobile__nested__header").eq(1).click();
      cy.get("#ilo--nav-mobile-drawer__more").should("not.be.visible");
      cy.get("#ilo--nav-mobile-drawer__main").should("be.visible");
    });

    it("renders the correct number of more items in the more drawer", () => {
      cy.get(".ilo--nav-mobile__more").click();
      cy.get("#ilo--nav-mobile-drawer__more").within(() => {
        cy.get(".ilo--nav-mobile-menu__link").should(
          "have.length",
          fixture.moreItems.length
        );
      });
    });

    it("the first focusable item in the more drawer has focus when the drawer opens", () => {
      cy.get(".ilo--nav-mobile__more").click();
      cy.press(Cypress.Keyboard.Keys.TAB);
      cy.get("#ilo--nav-mobile-drawer__more").within(() => {
        cy.get("a[href], button").first().should("have.focus");
      });
    });
  });
});
