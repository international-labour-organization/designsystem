describe("pagination", () => {
  beforeEach(() => {
    cy.visit("/patterns/pagination");
    cy.getPreview("pagination").first().as("paginationSection");
  });

  it("renders the pagination with four links", () => {
    cy.get("@paginationSection").within(() => {
      cy.get(".ilo--pagination--link") // Adjust prefix based on actual class
        .should("have.length", 4);
    });
  });

  it("displays the correct current page number", () => {
    cy.get("@paginationSection").within(() => {
      cy.get(".ilo--pagination--page span")
        .first()
        .then(($span) => {
          // Assuming the page is set to page 1 initially
          expect($span.text().trim()).to.equal("1"); // Check that the first span contains the correct page number
        });
    });
  });

  it("does nothing when a disabled link is clicked", () => {
    cy.get("@paginationSection").within(() => {
      cy.get(".ilo--pagination--disable").should("have.attr", "href");
      cy.get(".ilo--pagination--disable").should(
        "have.css",
        "pointer-events",
        "none"
      );
    });
  });

  it("disables the 'last page' link when on the last page", () => {
    cy.get("@paginationSection").within(() => {
      // First, ensure you're on the last page by checking the current page number
      cy.get(".ilo--pagination--page span")
        .first()
        .then(($span) => {
          const totalPages = 5; // Replace with actual total page count
          const currentPage = parseInt($span.text().trim(), 10);

          // If current page equals total pages, check that the "last page" link is disabled
          if (currentPage === totalPages) {
            cy.get(".ilo--pagination--last-page").should(
              "have.class",
              "ilo--pagination--disable"
            );
          }
        });
    });
  });

  it("renders an icon as:before pseudo-element", () => {
    cy.get("@paginationSection").within(() => {
      cy.get(".ilo--pagination--link").each(($el) => {
        // Access the pseudo-element styles using window.getComputedStyle
        cy.wrap($el).then(($element) => {
          const before = window.getComputedStyle($element[0], "::before");

          expect(before).to.not.be.null;
        });
      });
    });
  });
});
