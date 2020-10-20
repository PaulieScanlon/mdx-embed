/// <reference types="cypress" />

context('<Gist />', () => {
  it('it loads gist embed', () => {
    cy.visit('/iframe.html?id=components-gist--usage&viewMode=story');
    cy.get('[data-testid="gist"]').should('not.be.undefined');
    cy.get('.gist-meta').within(() => {
      cy.get('a').should('have.length', 3);
      cy.get('a:first').should(
        'have.attr',
        'href',
        'https://gist.github.com/PaulieScanlon/ca0cc9239176066492cb2aba435edbf7/raw/a245d34902db5ed7e6daf4fb2bd658ce97850739/gatsby-mdx-embed.html',
      );
    });
  });
});
