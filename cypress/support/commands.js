const getIframeDocument = () => {
  return cy.get('iframe').its('0.contentDocument').should('not.be.empty');
};

const getIframeBody = () => {
  return cy.get('iframe').its('0.contentDocument.body').then(cy.wrap);
};

Cypress.Commands.add('getIframeBody', () => {
  cy.log('getIframeBody')

  return cy
  .get('iframe', { log: false })
  .its('0.contentDocument.body', { log: false }).should('not.be.empty')
  .then((body) => cy.wrap(body, { log: false }))
});

export { getIframeBody };
