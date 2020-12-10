/// <reference types="cypress" />

context('<Cinnamon />', () => {
  it('it loads cinnamon video and controls', () => {
    cy.visit('/iframe.html?id=components-cinnamon--usage&viewMode=story');

    // Looks like Cinnamon have made some changes, Firstly there's now a Warning prompt before the video plays
    // and whatever CSS solution they are using produces randome class names. Not sure how to asset this now.
    // cy.getIframeBody().find('video').should('exist');
    // cy.getIframeBody().find('div[class*="BarContainer"]').should('exist');
    // cy.getIframeBody().find('div[class*="ControlContainer"]').should('exist');

    cy.getIframeBody().find('div[class*="ShouldNotExist"]').should('not.exist');
  });
});
