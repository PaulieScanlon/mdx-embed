/// <reference types="cypress" />

context('<Buzzsprout />', () => {
  it('it loads buzzsprout player widget', () => {
    cy.visit('/iframe.html?id=components-buzzsprout--usage&viewMode=story');
    cy.get('[data-testId="buzzsprout"]').should('not.be.undefined');
    cy.getIframeBody().find('.buzzsprout-player').should('not.be.undefined');
    cy.getIframeBody().find('.artwork-container').should('not.be.undefined');
    cy.getIframeBody().find('.episode-container').should('not.be.undefined');
  });
});
