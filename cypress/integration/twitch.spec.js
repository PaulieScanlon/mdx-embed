/// <reference types="cypress" />

context('<Twitch />', () => {
  it('it loads twitch video', () => {
    cy.visit('/iframe.html?id=components-twitch--usage&viewMode=story');

    cy.get('[data-testid="twitch"]').should('not.be.undefined');
    cy.getIframeBody().find('.video-player').should('exist');
    cy.getIframeBody().find('.player-controls').should('exist');
  });

  it('it loads twitch video skipped to defined time', () => {
    cy.visit('/iframe.html?id=components-twitch--skip-to&viewMode=story');

    cy.get('[data-testid="twitch"]').should('not.be.undefined');
    cy.getIframeBody().find('.video-player').should('exist');
    cy.getIframeBody().find('[aria-label="Play"]').should('exist');
    cy.getIframeBody().find('.player-controls').should('exist');
    cy.getIframeBody().find('.tw-absolute').should('not.have.css', 'left', '0%');
  });

  it.skip('it loads twitch channel', () => {
    cy.visit('/iframe.html?id=components-twitch--channel&viewMode=story');

    cy.get('[data-testid="twitch"]').should('not.be.undefined');
    cy.getIframeBody().find('.video-player').should('exist');
    cy.getIframeBody().find('.player-overlay-background').should('exist');
    cy.getIframeBody().find('.offline-recommendations-video-card').should('exist');
  });
});
