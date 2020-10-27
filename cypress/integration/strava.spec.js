/// <reference types="cypress" />

context('<Strava />', () => {
  it('it loads strava activity with header, footer and optional content', () => {
    cy.visit('/iframe.html?id=components-strava--usage&viewMode=story');

    // Make sure the activity is there
    cy.getIframeBody().find('#activity').should('exist');

    // The activity should have a header with an avatar
    cy.getIframeBody().find('.header').should('exist');
    cy.getIframeBody().find('.header').find('.avatar').should('exist');


    // The activity should have a content
    /* Info
    Not all activities have actual content (i.e. a map or photos),
    so the .content div might actually be empty, but it will still be there.
    For example, indoor running will have no content.
    Some activities have maps and some have photos, so it's not reliable to check for either
    using this setup with storybook running.
    */
   cy.getIframeBody().find('.content').should('exist');

   // To check for a map
   // cy.getIframeBody().find('.activity-map').should('exist');

   // The activity should have a footer
   cy.getIframeBody().find('.footer').should('exist');
  });
});
