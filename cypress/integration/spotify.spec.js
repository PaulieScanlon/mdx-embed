context('<Spotify />', () => {
  it('it loads spotify base correctly', () => {
    cy.visit('/iframe.html?id=components-spotify--usage&viewMode=story');
    cy.get('[data-testId="spotify"]').should('not.be.undefined');
    cy.getIframeBody().find('#main').should('not.be.undefined');
    cy.getIframeBody().find('span[dir="auto"]').should('not.be.undefined').contains('Public Service Broadcasting');
    cy.getIframeBody().find('#view').should('not.be.undefined');
    cy.getIframeBody().find('#searchButton').should('not.be.undefined');
  });
});
