Cypress.Commands.add("getPreview", (variant = "default") => {
  cy.get(`.pattern-preview__markup--${variant}`);
});

Cypress.Commands.add("visitPreview", (variant = "default", fields) => {
  if (fields) {
    return cy.visit(
      `/pattern-preview?id=${variant}&fields=${encodeURI(JSON.stringify(fields))}`
    );
  }
  return cy.visit(`/pattern-preview?id=${variant}`);
});
