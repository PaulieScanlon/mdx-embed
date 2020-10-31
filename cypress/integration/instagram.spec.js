/// <reference types="cypress" />

context('<Instagram />', () => {
  it('it loads instagram posr', () => {
    cy.visit('/iframe.html?id=components-instagram--usage&viewMode=story');

    cy.getIframeBody().find('.Embed').should('exist');
    cy.getIframeBody().find('.Header').should('exist');
    cy.getIframeBody().find('.Content').should('exist');
    cy.getIframeBody().find('.HoverCard').should('exist');
    cy.getIframeBody().find('.Feedback').should('exist');
    cy.getIframeBody().find('.Footer').should('exist');
  });
});
