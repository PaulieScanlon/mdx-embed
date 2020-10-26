/// <reference types="cypress" />

context('<TwitterFollowButton />', () => {
  it('it loads twitter hashtag button', () => {
    cy.visit('/iframe.html?id=components-twitter-twitterhashtagbutton--usage&viewMode=story');

    cy.getIframeBody().find('.twitter-hashtag-button-rendered').should('not.be.undefined');
  });
});
