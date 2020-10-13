/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<SoundCloud />', () => {
  it('it loads soundcloud correctly', () => {
    cy.visit('/iframe.html?id=components-soundcloud--usage&viewMode=story');
    getIframeBody().find('#widget').should('not.be.undefined');
    getIframeBody().find('.soundContainer').should('not.be.undefined');
    getIframeBody().find('.playButton').should('not.be.undefined');
  })

  it('it loads soundcloud with visual artwork', () => {
    cy.visit('http://localhost:6006/iframe.html?id=components-soundcloud--visual&viewMode=story');
    getIframeBody().find('#widget').should('not.be.undefined');
    getIframeBody().find('.visualSoundContainer').should('not.be.undefined');
    getIframeBody().find('.sc-artwork').should('not.be.undefined');
  })
})