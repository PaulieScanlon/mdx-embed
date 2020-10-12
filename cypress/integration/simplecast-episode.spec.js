/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<SimplecastEpisode />', () => {
  it('it loads SimplecastEpisode player', () => {
    cy.visit('/iframe.html?id=components-simplecast-simplecastepisode--usage&viewMode=story');
    getIframeBody().find('.simplecast-player').should('not.be.undefined');
  });
});
