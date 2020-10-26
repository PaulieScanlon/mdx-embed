/// <reference types="cypress" />

context('<Tweet />', () => {
  it('it loads tweet embed', () => {
    cy.visit('/iframe.html?id=components-twitter-tweet--usage&viewMode=story');

    cy.getIframeBody().find('.twitter-tweet-rendered').should('not.be.undefined');
  });
});
