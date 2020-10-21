/// <reference types="cypress" />

context('<AirtableBase />', () => {
  it('it loads airtable base correctly', () => {
    cy.visit('/iframe.html?id=components-airtable-airtablebase--usage&viewMode=story');
    cy.getIframeBody().find('#applicationContainer').should('not.be.undefined');
    cy.getIframeBody().find('#table').should('not.be.undefined');
    cy.getIframeBody().find('#view').should('not.be.undefined');
    cy.getIframeBody().find('#searchButton').should('not.be.undefined');
  });

  it('it loads airtable base without controls', () => {
    cy.visit('/iframe.html?id=components-airtable-airtablebase--controls&viewMode=story');
    cy.getIframeBody().find('#applicationContainer').should('not.be.undefined');
    cy.getIframeBody().find('#table').should('not.be.undefined');
    cy.getIframeBody().find('#table .viewBarContainer').should('have.css', 'display', 'none');
  })

  it('it loads airtable base with card layout', () => {
    cy.visit('/iframe.html?id=components-airtable-airtablebase--layout&viewMode=story');
    cy.getIframeBody().find('#applicationContainer').should('not.be.undefined');
    cy.getIframeBody().find('#table').should('not.be.undefined');
    cy.getIframeBody().find('#gridViewWithCardLayout').should('not.be.undefined');
  });
});

context('<AirtableForm />', () => {
  it('it loads airtable form correctly', () => {
    cy.visit('/iframe.html?id=components-airtable-airtableform--usage&viewMode=story');
    cy.getIframeBody().find('#hyperbaseContainer').should('not.be.undefined');
    cy.getIframeBody().find('.formContent').should('not.be.undefined');
    cy.getIframeBody().find('.submitButton').should('not.be.undefined');
  });
});
