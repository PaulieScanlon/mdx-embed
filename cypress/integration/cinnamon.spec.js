/// <reference types="cypress" />

context('<Cinnamon />', () => {
  it('it loads cinnamon video and controls', () => {
    cy.visit('/iframe.html?id=components-cinnamon--usage&viewMode=story');

    cy.getIframeBody().find('video').should('exist'); // The video
    cy.getIframeBody().find('div[class*="BarContainer"]').should('exist'); // The playback scroll bar
    cy.getIframeBody().find('div[class*="ControlContainer"]').should('exist'); // The control (buttons, volume) bar

    // Sanity test to make sure the tests actually work
    cy.getIframeBody().find('div[class*="ShouldNotExist"]').should('not.exist');
  });
});
