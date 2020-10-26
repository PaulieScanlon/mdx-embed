/// <reference types="cypress" />

context('<TwitterMentionButton />', () => {
  it('it loads twitter follow button', () => {
    cy.visit('/iframe.html?id=components-twitter-twittermentionbutton--usage&viewMode=story');

    cy.getIframeBody().find('.twitter-mention-button-rendered').should('not.be.undefined');
  });
});
