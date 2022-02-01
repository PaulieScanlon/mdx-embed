/// <reference types="cypress" />

context('<Pin />', () => {
  it('it loads pinterest PIN widget', () => {
    cy.visit('/iframe.html?id=components-pinterest-pin--usage&viewMode=story');
    // cy.get('span:first-child').should('have.attr', 'data-pin-log', 'embed_pin');
    cy.get('span:first-child').should('exist');
  });
});

context('<PinterestBoard />', () => {
  it('it loads pinterest Board widget', () => {
    cy.visit('/iframe.html?id=components-pinterest-pinterestboard--usage&viewMode=story');
    // cy.get('span:first-child').should('have.attr', 'data-pin-log', 'embed_grid');
    cy.get('span:first-child').should('exist');
  });
});

context('<PinterestFollowButton />', () => {
  it('it loads pinterest Follow button widget', () => {
    cy.visit('/iframe.html?id=components-pinterest-pinterestfollowbutton--usage&viewMode=story');
    // cy.get('span:first-child').should('have.attr', 'data-pin-log', 'button_follow');
    cy.get('span:first-child').should('exist');
  });
});
