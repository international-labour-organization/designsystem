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
        cy.get(".ilo--subsite-nav-complex__branding-main__logo")
          .should("exist")
          .and("have.class", "ilo--subsite-nav-complex__branding-main__logo")
          .first(() => {
            cy.get("img")
              .should("exist")
              .and("have.attr", "src", fixture.branding.logo.main)
              .and("have.attr", "alt", fixture.branding.logo.alt)
              .and(
                "have.class",
                "ilo--subsite-nav-complex__branding-main__logo-img"
              );
          });
      });
    });

    it("wraps the logo in a link when link data is provided", () => {
      cy.get("@subsiteNav").within(() => {
        cy.get(".ilo--subsite-nav-complex__branding-main__logo--link")
          .first()
          .should("match", "a")
          .and("have.attr", "href", fixture.branding.logo.link.href)
          .and("have.attr", "aria-label", fixture.branding.logo.link.label);
      });
    });

    it("renders the logo without a link when no link data is provided", () => {
      // Create a modified fixture without the logo link
      const fixtureWithoutLink = { ...fixture };
      delete fixtureWithoutLink.branding.logo.link;

      cy.visit(
        `/pattern-preview?id=nav&fields=${encodeURI(
          JSON.stringify(fixtureWithoutLink)
        )}`
      );

      cy.get(".ilo--subsite-nav-complex").within(() => {
        cy.get(".ilo--subsite-nav-complex__branding-main__logo")
          .should("match", "img")
          .and("not.match", "a")
          .and(
            "have.class",
            "ilo--subsite-nav-complex__branding-main__logo-img"
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
  });
});

describe("MainNav", () => {
  const mainNavFixtures = Object.assign({}, fixture, {
    navtype: "main",
    branding: {
      tag: {
        main: "Advancing social justice, promoting decent work",
        sub: "ILO is a specialized agency of the United Nations",
      },
      logo: {
        main: "images/logo_en_horizontal_white.svg",
        mobile: "images/logo_en_horizontal_white.svg",
        drawer: "images/logo_en_horizontal_blue.svg",
        alt: "ILO Logo",
        link: {
          href: "https://live.ilo.org",
          label: "ILO Live Homepage",
        },
      },
    },
  });

  const mainNavUrl = `/pattern-preview?id=nav&fields=${encodeURI(
    JSON.stringify(mainNavFixtures)
  )}`;

  beforeEach(() => {
    cy.visit(mainNavUrl);
    cy.get(".ilo--main-nav").as("mainNav");
  });

  describe("Initial Render", () => {
    it("renders the main navigation with branding", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--main-nav__branding").should("exist");
        cy.get(".ilo--main-nav__branding-main__logo-img")
          .should("exist")
          .and("have.attr", "src", mainNavFixtures.branding.logo.main)
          .and("have.attr", "alt", mainNavFixtures.branding.logo.alt);
        cy.get(".ilo--main-nav__branding-tag__main").should(
          "contain",
          mainNavFixtures.branding.tag.main
        );
        cy.get(".ilo--main-nav__branding-tag__sub").should(
          "contain",
          mainNavFixtures.branding.tag.sub
        );
      });
    });
  });

  describe("Dropdown Interactions", () => {
    it("opens navigation dropdown when clicking more button", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--nav-menu__more").click();
      });

      cy.get(".ilo--nav-dropdown").should("be.visible");
      cy.get(".ilo__nav-extra-menu").should("exist");
      cy.get(".ilo--nav-menu__more").should(
        "have.attr",
        "aria-expanded",
        "true"
      );
    });

    it("opens search dropdown when clicking search button", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--main-nav__nav-search").click();
      });

      cy.get(".ilo--nav-dropdown").should("be.visible");
      cy.get(".ilo--main-nav__nav-search-dropdown").should("exist");
      cy.get(".ilo--main-nav__nav-search").should(
        "have.attr",
        "aria-expanded",
        "true"
      );
    });

    it("closes navigation dropdown when search dropdown opens", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--nav-menu__more").click();
      });
      cy.get(".ilo__nav-extra-menu").should("be.visible");
      cy.get(".ilo--nav-menu__more").should(
        "have.attr",
        "aria-expanded",
        "true"
      );

      cy.get("@mainNav").within(() => {
        cy.get(".ilo--main-nav__nav-search").click();
      });

      cy.get(".ilo__nav-extra-menu").should("not.be.visible");
      cy.get(".ilo--main-nav__nav-search-dropdown").should("be.visible");
      cy.get(".ilo--nav-menu__more").should(
        "have.attr",
        "aria-expanded",
        "false"
      );
      cy.get(".ilo--main-nav__nav-search").should(
        "have.attr",
        "aria-expanded",
        "true"
      );
    });

    it("closes search dropdown when navigation dropdown opens", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--main-nav__nav-search").click();
      });
      cy.get(".ilo--main-nav__nav-search-dropdown").should("be.visible");
      cy.get(".ilo--main-nav__nav-search").should(
        "have.attr",
        "aria-expanded",
        "true"
      );

      cy.get("@mainNav").within(() => {
        cy.get(".ilo--nav-menu__more").click();
      });

      cy.get(".ilo--main-nav__nav-search-dropdown").should("not.be.visible");
      cy.get(".ilo__nav-extra-menu").should("be.visible");
      cy.get(".ilo--main-nav__nav-search").should(
        "have.attr",
        "aria-expanded",
        "false"
      );
      cy.get(".ilo--nav-menu__more").should(
        "have.attr",
        "aria-expanded",
        "true"
      );
    });

    it("closes both dropdowns when clicking outside", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--nav-menu__more").click();
      });
      cy.get(".ilo--nav-dropdown").should("be.visible");

      cy.get("body").click(0, 0);
      cy.get(".ilo--nav-dropdown").should("not.be.visible");
      cy.get(".ilo--nav-menu__more").should(
        "have.attr",
        "aria-expanded",
        "false"
      );

      cy.get("@mainNav").within(() => {
        cy.get(".ilo--main-nav__nav-search").click();
      });
      cy.get(".ilo--nav-dropdown").should("be.visible");

      cy.get("body").click(0, 0);
      cy.get(".ilo--nav-dropdown").should("not.be.visible");
      cy.get(".ilo--main-nav__nav-search").should(
        "have.attr",
        "aria-expanded",
        "false"
      );
    });

    it("toggles navigation dropdown on multiple clicks", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--nav-menu__more").click();
      });
      cy.get(".ilo--nav-dropdown").should("be.visible");
      cy.get(".ilo--nav-menu__more").should(
        "have.attr",
        "aria-expanded",
        "true"
      );

      cy.get("@mainNav").within(() => {
        cy.get(".ilo--nav-menu__more").click();
      });
      cy.get(".ilo--nav-dropdown").should("not.be.visible");
      cy.get(".ilo--nav-menu__more").should(
        "have.attr",
        "aria-expanded",
        "false"
      );
    });

    it("toggles search dropdown on multiple clicks", () => {
      cy.get("@mainNav").within(() => {
        cy.get(".ilo--main-nav__nav-search").click();
      });
      cy.get(".ilo--nav-dropdown").should("be.visible");
      cy.get(".ilo--main-nav__nav-search").should(
        "have.attr",
        "aria-expanded",
        "true"
      );

      cy.get("@mainNav").within(() => {
        cy.get(".ilo--main-nav__nav-search").click();
      });
      cy.get(".ilo--nav-dropdown").should("not.be.visible");
      cy.get(".ilo--main-nav__nav-search").should(
        "have.attr",
        "aria-expanded",
        "false"
      );
    });
  });
});
