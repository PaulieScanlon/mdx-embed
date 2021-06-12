/// <reference types="cypress" />

context('<MsStreamVideo />', () => {
  it('it loads stream video correctly', () => {
    cy.visit('/iframe.html?id=components-msstreamvideo--usage&viewMode=story');
    cy.getIframeBody().then((data) => {
      console.log({data});
    });
    cy.getIframeBody().find('#streamLoading');
    cy.getIframeBody().find('#playButton');
    cy.getIframeBody().find('#loginButton');
  });
});
