Cypress.Commands.add("getPreview", (variant = "default") => {
  cy.get(`.pattern-preview__markup--variant_${variant}`);
});
