/// <reference types="cypress" />

context('<SimplecastEpisode />', () => {
  it('it loads SimplecastEpisode player', () => {
    cy.visit('/iframe.html?id=components-simplecast-simplecastepisode--usage&viewMode=story');
    cy.getIframeBody().find('.simplecast-player').should('not.be.undefined');
  });
});
