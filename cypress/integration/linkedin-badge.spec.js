/// <reference types="cypress" />

context('<LinkedInBadge />', () => {
  it('it loads a LinkedInBadge ', () => {
    cy.visit('/iframe.html?id=components-linkedin-linkedinbadge--usage&viewMode=story');
    // cy.getIframeBody().find('.LI-badge-container').should('not.be.undefined');
    cy.get('[data-testid="linkedin-badge"]').should('not.be.undefined');
  });
});
