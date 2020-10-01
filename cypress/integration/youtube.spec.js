/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<YouTube />', () => {
  it('it loads youtube video correctly', () => {
    cy.visit('/iframe.html?id=components-youtube--usage&viewMode=story');
    getIframeBody().find('#player').should('not.be.undefined');
    getIframeBody().find('.ytp-title-text').should('not.be.undefined');
    getIframeBody().find('.ytp-large-play-button').should('not.be.undefined');
  });
});
