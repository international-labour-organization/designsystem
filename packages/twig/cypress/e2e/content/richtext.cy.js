describe("Richtext", () => {
  beforeEach(() => {
    cy.visit("/patterns/richtext");
    cy.getPreview("richtext").first().as("richtextSection");
  });

  describe("Check desktop margins", () => {
    beforeEach(() => {
      // Ensure we are in desktop mode (you can adjust the viewport size as needed)
      cy.viewport(1280, 720);
    });

    it("The first child of the component has 0 top magin", () => {
      cy.get("@richtextSection")
        .find(".ilo--richtext")
        .children()
        .first()
        .then(($firstChild) => {
          const marginTop = parseFloat(
            window.getComputedStyle($firstChild[0]).marginTop
          );
          expect(marginTop).to.equal(0);
        });
    });

    it("Heading elements have a 24px bottom margin", () => {
      const elements = ["h1", "h2", "h3", "h4", "h5", "p"];

      // Loop through each element type and check the calculated margin-bottom
      elements.forEach((element) => {
        cy.get("@richtextSection")
          .find(element)
          .each(($el) => {
            // Use jQuery to access the element's computed style for margin-bottom
            cy.wrap($el).then(($element) => {
              const marginBottom = parseFloat(
                window.getComputedStyle($element[0]).marginBottom
              );
              expect(marginBottom).to.equal(24);
            });
          });
      });
    });

    it("Heading elements have a 64px top margin, except the first-child of the component", () => {
      const headingElements = ["h1", "h2", "h3", "h4", "h5"];

      // Loop through each heading element type
      headingElements.forEach((element) => {
        cy.get("@richtextSection")
          .find(element)
          .then(($elements) => {
            // Ensure there are more than one heading element of this type
            if ($elements.length > 0) {
              // Iterate over all heading elements except the first one
              $elements.slice(1).each(($el) => {
                cy.wrap($el).then(() => {
                  const el = $elements[$el]; // Adjust index for slice
                  const marginTop = parseFloat(
                    window.getComputedStyle(el).marginTop
                  );
                  expect(marginTop).to.equal(64);
                });
              });
            }
          });
      });
    });

    it("Paragraph elements that are immediate children of the component have 24px top and bottom margin", () => {
      cy.get("@richtextSection")
        .find(".ilo--richtext > p")
        .each(($el) => {
          cy.wrap($el).then(($element) => {
            // Check for 24px top margin
            const marginTop = parseFloat(
              window.getComputedStyle($element[0]).marginTop
            );

            expect(marginTop).to.equal(24);

            // Check for 24px bottom margin
            const marginBottom = parseFloat(
              window.getComputedStyle($element[0]).marginBottom
            );
            expect(marginBottom).to.equal(24);
          });
        });
    });

    it("Blockquote, figure, and iframe elements have 64px top and bottom margin", () => {
      const elements = ["blockquote", "figure", "iframe"];

      // Loop through each element type and check the calculated margin-top and margin-bottom
      elements.forEach((element) => {
        cy.get("@richtextSection")
          .find(element)
          .each(($el) => {
            cy.wrap($el).then(($element) => {
              // Check for 64px top margin
              const marginTop = parseFloat(
                window.getComputedStyle($element[0]).marginTop
              );
              expect(marginTop).to.equal(64);

              // Check for 64px bottom margin
              const marginBottom = parseFloat(
                window.getComputedStyle($element[0]).marginBottom
              );
              expect(marginBottom).to.equal(64);
            });
          });
      });
    });
  });

  describe("Check mobile margins", () => {
    beforeEach(() => {
      // Ensure we are in desktop mode (you can adjust the viewport size as needed)
      cy.viewport("iphone-x");
    });

    it("The first child of the component has 0 top margin", () => {
      cy.get("@richtextSection")
        .find(".ilo--richtext")
        .children()
        .first()
        .then(($firstChild) => {
          const marginTop = parseFloat(
            window.getComputedStyle($firstChild[0]).marginTop
          );
          expect(marginTop).to.equal(0);
        });
    });

    it("Heading elements have a 16px bottom margin", () => {
      const elements = ["h1", "h2", "h3", "h4", "h5"];

      // Loop through each element type and check the calculated margin-bottom
      elements.forEach((element) => {
        cy.get("@richtextSection")
          .find(element)
          .each(($el) => {
            // Use jQuery to access the element's computed style for margin-bottom
            cy.wrap($el).then(($element) => {
              const marginBottom = parseFloat(
                window.getComputedStyle($element[0]).marginBottom
              );
              expect(marginBottom).to.equal(16);
            });
          });
      });
    });

    it("Heading elements have a 56px top margin, except the first-child of the component", () => {
      const headingElements = ["h1", "h2", "h3", "h4", "h5"];

      // Loop through each heading element type
      headingElements.forEach((element) => {
        cy.get("@richtextSection")
          .find(element)
          .then(($elements) => {
            // Ensure there are more than one heading element of this type
            if ($elements.length > 0) {
              // Iterate over all heading elements except the first one
              $elements.slice(1).each(($el) => {
                cy.wrap($el).then(() => {
                  const el = $elements[$el]; // Adjust index for slice
                  const marginTop = parseFloat(
                    window.getComputedStyle(el).marginTop
                  );
                  expect(marginTop).to.equal(56);
                });
              });
            }
          });
      });
    });

    it("Paragraph elements that are immediate children of the component have 16px top and bottom margin", () => {
      cy.get("@richtextSection")
        .find(".ilo--richtext > p")
        .each(($el) => {
          cy.wrap($el).then(($element) => {
            // Check for 24px top margin
            const marginTop = parseFloat(
              window.getComputedStyle($element[0]).marginTop
            );

            expect(marginTop).to.equal(16);

            // Check for 24px bottom margin
            const marginBottom = parseFloat(
              window.getComputedStyle($element[0]).marginBottom
            );
            expect(marginBottom).to.equal(16);
          });
        });
    });

    it("Blockquote, figure, and iframe elements have 56px top and bottom margin", () => {
      const elements = ["blockquote", "figure", "iframe"];

      // Loop through each element type and check the calculated margin-top and margin-bottom
      elements.forEach((element) => {
        cy.get("@richtextSection")
          .find(element)
          .each(($el) => {
            cy.wrap($el).then(($element) => {
              // Check for 64px top margin
              const marginTop = parseFloat(
                window.getComputedStyle($element[0]).marginTop
              );
              expect(marginTop).to.equal(56);

              // Check for 64px bottom margin
              const marginBottom = parseFloat(
                window.getComputedStyle($element[0]).marginBottom
              );
              expect(marginBottom).to.equal(56);
            });
          });
      });
    });
  });
});
