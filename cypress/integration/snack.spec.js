/// <reference types="cypress" />

context('<Snack />', () => {
  it('it loads snack embed', () => {
    cy.visit('/iframe.html?id=components-snack--usage&viewMode=story');
    cy.get('[data-testid="snack"]').should('not.be.undefined');
    cy.getIframeBody().find('a').first().should('not.be.undefined');
  });
});
