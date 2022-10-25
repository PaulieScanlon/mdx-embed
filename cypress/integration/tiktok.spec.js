/// <reference types="cypress" />

context('<TikTok />', () => {
  it('it loads tiktok video and controls', () => {
    cy.visit('/iframe.html?id=components-tiktok--usage&viewMode=story');

    // The video wrapper
    cy.getIframeBody().find('div[id*="embed-video-container"]').should('exist');
  });
});
