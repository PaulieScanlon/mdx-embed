/// <reference types="cypress" />

context('<Vimeo />', () => {
  it('it loads vimeo player, title and controls', () => {
    cy.visit('/iframe.html?id=components-vimeo--usage&viewMode=story');
    cy.getIframeBody().find('#player').should('not.be.undefined');
    cy.getIframeBody().find('.vp-controls').should('not.be.undefined');
    cy.getIframeBody().find('.vp-title-header').should('not.be.undefined');
  });
});
