/// <reference types="cypress" />

context('<Pin />', () => {
  it('it loads pinterest PIN widget', () => {
    cy.visit('/iframe.html?id=components-pinterest-pin--usage&viewMode=story');
    cy.get('span:first-child').should('have.attr', 'data-pin-id', '637963103444140543');
  });
});

context('<PinterestBoard />', () => {
  it('it loads pinterest Board widget', () => {
    cy.visit('/iframe.html?id=components-pinterest-pinterestboard--usage&viewMode=story');
    cy.get('span:first-child').within(() => {
      cy.get('span')
        .eq(3)
        .should('have.attr', 'data-pin-href', 'https://www.pinterest.com/fromspacewithlove/astronauts/')
        .contains('Astronauts');
    });
  });
});

context('<PinterestFollowButton />', () => {
  it('it loads pinterest Follow button widget', () => {
    cy.visit('/iframe.html?id=components-pinterest-pinterestfollowbutton--usage&viewMode=story');
    cy.get('span')
      .should('not.be.undefined')
      .should('have.attr', 'data-pin-href')
      .and('contain', 'https://www.pinterest.com/pauliescanlon80/pins/follow/');
  });
});
