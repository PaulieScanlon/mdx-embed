/// <reference types="cypress" />

const getIframeDocument = () => {
  return cy.get('iframe').its('0.contentDocument').should('exist');
};

const getIframeBody = () => {
  return getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);
};

context('<CodePen />', () => {
  it('it loads codeopen nav, output and footer', () => {
    cy.visit('/iframe.html?id=components-codepen--usage&viewMode=story');
    getIframeBody().find('#embed-nav').should('not.be.undefined');
    getIframeBody().find('#output').should('not.be.undefined');
    getIframeBody().find('#embed-footer').should('not.be.undefined');
  });
});
