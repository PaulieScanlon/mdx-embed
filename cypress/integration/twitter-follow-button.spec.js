/// <reference types="cypress" />

context('<TwitterFollowButton />', () => {
  it('it loads twitter follow button', () => {
    cy.visit('/iframe.html?id=components-twitter-twitterfollowbutton--usage&viewMode=story');

    cy.getIframeBody().find('.twitter-follow-button-rendered').should('not.be.undefined');
  });
});
