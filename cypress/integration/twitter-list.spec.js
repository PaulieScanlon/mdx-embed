/// <reference types="cypress" />

context('<TwitterList />', () => {
  it('it loads twitter follow button', () => {
    cy.visit('/iframe.html?id=components-twitter-twitterlist--usage&viewMode=story');

    cy.getIframeBody().find('.twitter-timeline-rendered').should('not.be.undefined');
  });
});
