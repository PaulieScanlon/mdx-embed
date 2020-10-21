/// <reference types="cypress" />

context('<Wikipedia />', () => {
  it('it loads wikipedia content', () => {
    cy.visit('/iframe.html?id=components-wikipedia--usage&viewMode=story');

    cy.get('[data-testid="wikipedia"]').should('not.be.undefined');
    cy.getIframeBody().find('#mwAA').should('not.be.undefined');
    cy.getIframeBody().find('.mw-body-content').should('not.be.undefined');
    cy.getIframeBody().find('.shortdescription').should('not.be.undefined');
  })

  it('it loads wikipedia content with specified height', () => {
    cy.visit('/iframe.html?id=components-wikipedia--height&viewMode=story');

    cy.get('[data-testid="wikipedia"]').should('not.be.undefined');
    cy.get('.wikipedia-mdx-embed').should('have.attr', 'style', 'width: 100%; min-height: 400px;');
    cy.getIframeBody().find('#mwAA').should('not.be.undefined');
    cy.getIframeBody().find('.mw-body-content').should('not.be.undefined');
  })
})