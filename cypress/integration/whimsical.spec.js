/// <reference types="cypress" />

// Whimsical is very slow sometimes to respond, so we need to increase the timeout or the tests will fail
// Only the current spec is affected, as per the docs: https://docs.cypress.io/api/cypress-api/config.html#Syntax
Cypress.config('defaultCommandTimeout', 12000);

context('<Whimsical />', () => {
  it('it loads whimsical diagrams', () => {
    cy.visit('/iframe.html?id=components-whimsical--usage&viewMode=story');

    // The canvas
    cy.getIframeBody().find('canvas').should('exist');
    // The zoom controls
    cy.getIframeBody().find('.no-user-select').should('exist');
    // The link to the whimsical diagram
    cy.getIframeBody().find('a[href^="https://whimsical.com"]').should('exist');
  });
});
