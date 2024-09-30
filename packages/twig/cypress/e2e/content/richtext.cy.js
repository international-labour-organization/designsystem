describe("Richtext", () => {
  beforeEach(() => {
    cy.visit("/patterns/richtext");
    cy.getPreview("richtext").first().as("richtextSection");
  });

  describe("Check desktop margins", () => {
    beforeEach(() => {
      // Ensure we are in desktop mode
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
      const elements = ["h1", "h2", "h3", "h4", "p"];

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
      const headingElements = ["h1", "h2", "h3", "h4"];

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

    it("Blockquote, figure, and article elements have 64px top and bottom margin", () => {
      const elements = ["blockquote", "figure", "article"];

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
      const elements = ["h1", "h2", "h3", "h4"];

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
      const headingElements = ["h1", "h2", "h3", "h4"];

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

    it("Blockquote, figure, and article elements have 56px top and bottom margin", () => {
      const elements = ["blockquote", "figure", "article"];

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

  describe("Utility classes", () => {
    beforeEach(() => {
      // Ensure we are in desktop mode
    });

    it("should display an iframe with a 16:9 aspect ratio", () => {
      cy.get("@richtextSection")
        .find(".responsive-video-embed")
        .then(($el) => {
          // Get the width of the element
          const width = $el.width();
          // Calculate the expected padding-bottom in pixels
          const expectedPaddingBottom = (width * 9) / 16;

          // Assert the CSS styles
          cy.wrap($el)
            .should("have.css", "position", "relative")
            .and("have.css", "padding-bottom")
            .then((paddingBottom) => {
              // Convert the padding-bottom value (which is in 'px') to a number
              const actualPaddingBottom = parseFloat(paddingBottom);
              // Assert that the actual padding-bottom is close to the expected value
              expect(actualPaddingBottom).to.be.closeTo(
                expectedPaddingBottom,
                1
              ); // Allow small margin for rounding
            });
        });

      // Ensure the iframe inside the wrapper is positioned and sized correctly
      cy.get("@richtextSection")
        .find(".responsive-video-embed iframe")
        .then(($iframe) => {
          const top = $iframe.css("top");
          const left = $iframe.css("left");
          const width = $iframe.width();
          const height = $iframe.height();

          // Assert top and left are close to 0px
          expect(parseFloat(top)).to.be.closeTo(0, 1); // Allow a small margin for rounding
          expect(parseFloat(left)).to.be.closeTo(0, 1);

          // Assert width and height are close to 100% of the container
          cy.wrap($iframe)
            .parent()
            .then(($parent) => {
              const parentWidth = $parent.width();
              const parentHeight = parseFloat($parent.css("padding-bottom"));
              expect(width).to.be.closeTo(parentWidth, 1); // Allow small rounding margin
              expect(height).to.be.closeTo(parentHeight, 1);
            });
        });
    });

    it("should resize the iframe responsively", () => {
      // Check initial viewport size
      cy.viewport(1280, 720); // Standard 16:9 screen
      cy.get("@richtextSection")
        .find(".responsive-video-embed")
        .then(($iframeWrapper) => {
          const initialWidth = $iframeWrapper.width();
          const initialHeight = parseFloat(
            $iframeWrapper.css("padding-bottom")
          );
          expect(initialHeight / initialWidth).to.be.closeTo(9 / 16, 0.01); // Check 16:9 ratio
        });

      // Resize viewport and check again
      cy.viewport(800, 600); // Change viewport size
      cy.get("@richtextSection")
        .find(".responsive-video-embed")
        .then(($iframeWrapper) => {
          const newWidth = $iframeWrapper.width();
          const newHeight = parseFloat($iframeWrapper.css("padding-bottom"));
          expect(newHeight / newWidth).to.be.closeTo(9 / 16, 0.01); // Should still maintain 16:9 ratio
        });
    });
  });
});
