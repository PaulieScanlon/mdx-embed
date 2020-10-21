/// <reference types="cypress" />

context('<TikTok />', () => {
  it('it loads tiktok video and controls', () => {
    cy.visit('/iframe.html?id=components-tiktok--usage&viewMode=story');

    // The video wrapper
    cy.getIframeBody().find('div[class*="_embed_video_wrapper"]').should('exist');
    // The layer info with the avatar and action buttons
    cy.getIframeBody().find('div[class*="_embed_video_layer-info"]').should('exist');
    // The video description
    cy.getIframeBody().find('div[class*="_embed_video_card-info"]').should('exist');
  });
});
