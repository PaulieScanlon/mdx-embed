/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<CodePen />', () => {
  it('it loads codeopen nav, output and footer', () => {
    cy.visit('/iframe.html?id=components-codepen--usage&viewMode=story');
    getIframeBody().find('#embed-nav').should('not.be.undefined');
    getIframeBody().find('#output').should('not.be.undefined');
    getIframeBody().find('#embed-footer').should('not.be.undefined');
  });
});
