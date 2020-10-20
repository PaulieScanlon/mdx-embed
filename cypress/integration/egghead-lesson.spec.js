/// <reference types="cypress" />

context('Egghead Lesson', () => {
  it('it loads egghead lesson player', () => {
    cy.visit('/iframe.html?id=components-egghead-eggheadlesson--usage&viewMode=story');
    cy.get(
      '[data-testId="egghead-gatsby-set-up-a-gatsby-site-to-use-mdx-with-gatsby-plugin-mdx-with-a-default-layout"]',
    ).should('not.be.undefined');
    cy.getIframeBody()
      .find('#egghead-set-up-a-gatsby-site-to-use-mdx-with-gatsby-plugin-mdx-with-a-default-layout-HyV65y0XI')
      .should('not.be.undefined');
    cy.getIframeBody()
      .find(
        '#bitmovinplayer-video-egghead-set-up-a-gatsby-site-to-use-mdx-with-gatsby-plugin-mdx-with-a-default-layout-HyV65y0XI',
      )
      .should('not.be.undefined');
  });
});
