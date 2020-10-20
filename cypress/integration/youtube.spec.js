/// <reference types="cypress" />

context('<YouTube />', () => {
  it('it loads youtube video correctly', () => {
    cy.visit('/iframe.html?id=components-youtube--usage&viewMode=story');
    cy.getIframeBody().find('#player').should('not.be.undefined');
    cy.getIframeBody().find('.ytp-title-text').should('not.be.undefined');
    cy.getIframeBody().find('.ytp-large-play-button').should('not.be.undefined');
  });
});
