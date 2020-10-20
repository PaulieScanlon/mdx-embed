/// <reference types="cypress" />

context('<CodePen />', () => {
  it('it loads codeopen nav, output and footer', () => {
    cy.visit('/iframe.html?id=components-codepen--usage&viewMode=story');

    cy.getIframeBody().find('#embed-nav').should('exist');
    cy.getIframeBody().find('#output').should('exist');
    cy.getIframeBody().find('#embed-footer').should('exist');
  });
});
