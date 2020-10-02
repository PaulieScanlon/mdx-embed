/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<Vimeo />', () => {
  it('it loads vimeo player, title and controls', () => {
    cy.visit('/iframe.html?id=components-vimeo--usage&viewMode=story');
    getIframeBody().find('#player').should('not.be.undefined');
    getIframeBody().find('.vp-controls').should('not.be.undefined');
    getIframeBody().find('.vp-title-header').should('not.be.undefined');
  });
});
