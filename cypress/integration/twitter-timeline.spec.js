/// <reference types="cypress" />

context('<TwitterTimeline />', () => {
  it('it loads twitter follow button', () => {
    cy.visit('/iframe.html?id=components-twitter-twittertimeline--usage&viewMode=story');

    cy.getIframeBody().find('.twitter-timeline-rendered').should('not.be.undefined');
  });
});
