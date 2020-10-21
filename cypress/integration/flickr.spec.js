/// <reference types="cypress" />

context('<Flickr />', () => {
  it('it loads flickr image', () => {
    cy.visit('/iframe.html?id=components-flickr--usage&viewMode=story');

    cy.get('[data-flickr-embed]').find('img[src^="https://live.staticflickr.com"]').should('exist');
  });
});
