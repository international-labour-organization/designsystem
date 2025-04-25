import fixture from "../../fixtures/nav.json";

const url = `/pattern-preview?id=nav&fields=${encodeURI(
  JSON.stringify(fixture)
)}`;

describe("SubsiteNav", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.get(".ilo--subsite-nav-complex").as("subsiteNav");
  });

  describe("Branding Section", () => {
    it("renders the logo if provided", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__branding-main__logo-img")
          .should("exist")
          .and("have.attr", "src", fixture.branding.logo.main)
          .and("have.attr", "alt", fixture.branding.logo.alt);
      });
    });

    it("renders the subsite name", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__branding-main__name").should(
          "contain",
          fixture.branding.name
        );
      });
    });

    it("renders the tag line", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__branding-tag__main").should(
          "contain",
          fixture.branding.tag.main
        );
        cy.get(".ilo--subsite-nav-complex__branding-tag__sub").should(
          "contain",
          fixture.branding.tag.sub
        );
      });
    });
  });

  describe("Widgets Section", () => {
    it("renders the main website link", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__widgets-bar__link")
          .should("have.attr", "href", fixture.widgets.link.href)
          .should("contain", fixture.widgets.link.label);
      });
    });

    it("renders the language toggle", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__widgets-bar__language").should(
          "exist"
        );
      });
    });

    it("renders the search widget", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__nav-search")
          .should("have.attr", "href", fixture.widgets.search.url)
          .should("have.attr", "aria-label", fixture.widgets.search.label);
      });
    });
  });

  describe("Navigation Menu", () => {
    it("renders the facade menu items", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__nav-menu")
          .find("a")
          .should("have.length", fixture.facadeItems.length)
          .first()
          .should("have.attr", "href", fixture.facadeItems[0].href)
          .should("contain", fixture.facadeItems[0].label);
      });
    });

    it("renders the more menu items in dropdown", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__nav-menu")
          .find(".ilo--nav-menu__more")
          .should("contain", fixture.labels.more)
          .click();
      });

      // Check dropdown at body level since it's rendered there
      cy.get(".ilo--nav-dropdown").as("dropdown");
      cy.get("@dropdown").should("be.visible");
      cy.get("@dropdown")
        .find("a")
        .should("have.length", fixture.moreItems.length)
        .first()
        .should("have.attr", "href", fixture.moreItems[0].href)
        .should("contain", fixture.moreItems[0].label);
    });

    describe("Dropdown Behavior", () => {
      it("toggles dropdown visibility when clicking the more button", () => {
        cy.get("@subsiteNav").within(() => {
          cy.get(".ilo--nav-menu__more").click();
        });
        cy.get(".ilo--nav-dropdown").should("be.visible");

        cy.get("@subsiteNav").within(() => {
          cy.get(".ilo--nav-menu__more").click();
        });
        cy.get(".ilo--nav-dropdown").should("not.be.visible");
      });

      it("the more button should have aria-expanded attribute set to false when dropdown is closed", () => {
        cy.get(".ilo--nav-dropdown").should("not.be.visible");
        cy.get(".ilo--nav-menu__more").should(
          "have.attr",
          "aria-expanded",
          "false"
        );
      });

      it("the more button should have aria-expanded attribute set to true when dropdown is open", () => {
        cy.get("@subsiteNav").within(() => {
          cy.get(".ilo--nav-menu__more").click();
        });
        cy.get(".ilo--nav-dropdown").should("be.visible");
        cy.get(".ilo--nav-menu__more").should(
          "have.attr",
          "aria-expanded",
          "true"
        );
      });

      it("closes dropdown when clicking outside", () => {
        cy.get("@subsiteNav").within(() => {
          cy.get(".ilo--nav-menu__more").click();
        });
        cy.get(".ilo--nav-dropdown").should("be.visible");

        // Click outside the navigation
        cy.get("body").click(0, 0);
        cy.get(".ilo--nav-dropdown").should("not.be.visible");
      });

      it("updates dropdown width to match nav width", () => {
        cy.get("@subsiteNav").within(() => {
          cy.get(".ilo--nav-menu__more").click();
        });

        // Store initial width
        cy.get(".ilo--nav-dropdown").then(($dropdown) => {
          const initialWidth = $dropdown[0].style.width;

          // Resize viewport
          cy.viewport(1100, 800);

          // Check if width updated
          cy.get(".ilo--nav-dropdown").should(($newDropdown) => {
            expect($newDropdown[0].style.width).not.to.equal(initialWidth);
          });
        });
      });
    });

    describe("Keyboard Navigation", () => {
      it("traps focus within dropdown when open", () => {
        cy.get(".ilo--nav-menu__more").click();
        cy.wait(100);
        cy.press(Cypress.Keyboard.Keys.TAB);
        cy.get(".ilo--nav-dropdown a").first().should("be.focused");
        for (let i = 0; i < fixture.moreItems.length; i++) {
          cy.press(Cypress.Keyboard.Keys.TAB);
        }
        cy.get(".ilo--nav-dropdown a").first().should("be.focused");
      });

      it("closes dropdown and returns focus to more button on escape", () => {
        cy.get(".ilo--nav-menu__more").click();
        cy.wait(100);
        cy.get(".ilo--nav-menu__more").type("{esc}");
        cy.get(".ilo--nav-dropdown").should("not.be.visible");
        cy.get(".ilo--nav-menu__more").should("be.focused");
      });
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes on interactive elements", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__branding-main__logo")
          .should("have.attr", "role", "button")
          .should("have.attr", "aria-label", "Branding")
          .should("have.attr", "tabindex", "0");
      });
    });

    it("maintains proper heading hierarchy", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__branding-main__name").should(
          "have.prop",
          "tagName",
          "H3"
        );
        cy.get(".ilo--subsite-nav-complex__branding-tag__main").should(
          "have.prop",
          "tagName",
          "H4"
        );
      });
    });
  });
});
