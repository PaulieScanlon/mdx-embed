/// <reference types="cypress" />

context('<Replit />', () => {
    it('it loads replit embed', () => {
        cy.visit('/iframe.html?id=components-replit--usage&viewMode=story');
        cy.get('[data-testid="replit-embed"]').should('not.be.undefined');
        cy.getIframeBody().find('.replit-ui-theme-root').should('not.be.undefined');
    });
});