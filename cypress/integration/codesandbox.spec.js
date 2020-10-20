/// <reference types="cypress" />

context('<CodeSandbox />', () => {
  it('it loads codesandbox iframe', () => {
    cy.visit('/iframe.html?id=components-codesandbox--usage&viewMode=story');
    cy.get('[data-testid="codesandbox"]').should('not.be.undefined');
    cy.getIframeBody().find('#embed-nav').should('not.be.undefined');
    cy.getIframeBody().find('#output').should('not.be.undefined');
    cy.getIframeBody().find('#embed-footer').should('not.be.undefined');
  });
});
