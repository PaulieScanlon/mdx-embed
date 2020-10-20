Cypress.Commands.add('getIframeBody', () => {
  cy.log('getIframeBody')

  return cy
  .get('iframe', { log: false })
  .its('0.contentDocument.body', { log: false }).should('not.be.empty')
  .then((body) => cy.wrap(body, { log: false }))
});
