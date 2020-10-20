/// <reference types="cypress" />

context('<Lbry />', () => {
  it('it loads Lbry player widget', () => {
    cy.visit('/iframe.html?id=components-lbry--usage&viewMode=story');
    cy.getIframeBody().find('.lbry-player').should('not.be.undefined');
  });
});
