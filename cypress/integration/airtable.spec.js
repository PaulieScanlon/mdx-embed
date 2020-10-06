/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<AirtableBase />', () => {
  it('it loads airtable base correctly', () => {
    cy.visit('/iframe.html?id=components-airtable-airtablebase--usage&viewMode=story');
    getIframeBody().find('#applicationContainer').should('not.be.undefined')
    getIframeBody().find('#table').should('not.be.undefined')
    getIframeBody().find('#view').should('not.be.undefined')
    getIframeBody().find('#searchButton').should('not.be.undefined')
  })

  it('it loads airtable base without controls', () => {
    cy.visit('/iframe.html?id=components-airtable-airtablebase--controls&viewMode=story')
    getIframeBody().find('#applicationContainer').should('not.be.undefined')
    getIframeBody().find('#table').should('not.be.undefined')
    getIframeBody().find('#table .viewBarContainer').should('not.exist')
  })

  it('it loads airtable base with card layout', () => {
    cy.visit('/iframe.html?id=components-airtable-airtablebase--layout&viewMode=story')
    getIframeBody().find('#applicationContainer').should('not.be.undefined')
    getIframeBody().find('#table').should('not.be.undefined')
    getIframeBody().find('#gridViewWithCardLayout').should('not.be.undefined')
  })
})

context('<AirtableForm />', () => {
  it('it loads airtable form correctly', () => {
    cy.visit('/iframe.html?id=components-airtable-airtableform--usage&viewMode=story');
     getIframeBody().find('#hyperbaseContainer').should('not.be.undefined')
     getIframeBody().find('.formContent').should('not.be.undefined')
     getIframeBody().find('.submitButton').should('not.be.undefined')
  })
})


