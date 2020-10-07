/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<Lbry />', () => {
  it('it loads Lbry player widget', () => {
    cy.visit('/iframe.html?id=components-lbry--usage&viewMode=story');
    cy.get('[data-testId="lbry"]').should('not.be.undefined');
    getIframeBody().find('.lbry-player').should('not.be.undefined');
  });
});
