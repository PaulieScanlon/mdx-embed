/// <reference types="cypress" />

context('<SoundCloud />', () => {
  it('it loads soundcloud correctly', () => {
    cy.visit('/iframe.html?id=components-soundcloud--usage&viewMode=story');
    cy.getIframeBody().find('#widget').should('not.be.undefined');
    cy.getIframeBody().find('.soundContainer').should('not.be.undefined');
    cy.getIframeBody().find('.playButton').should('not.be.undefined');
  })

  it('it loads soundcloud with visual artwork', () => {
    cy.visit('http://localhost:6006/iframe.html?id=components-soundcloud--visual&viewMode=story');
    cy.getIframeBody().find('#widget').should('not.be.undefined');
    cy.getIframeBody().find('.visualSoundContainer').should('not.be.undefined');
    cy.getIframeBody().find('.sc-artwork').should('not.be.undefined');
  })
})
