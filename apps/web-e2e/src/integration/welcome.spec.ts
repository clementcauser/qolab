import { Routes } from '@qolab/constants';

describe('Welcome page', () => {
  it('should be visible', () => {
    cy.visit(Routes.WELCOME, { timeout: 5000 });

    cy.get('[data-cy="welcome-page"]').should('be.visible');
  });

  it('contains different sections', () => {
    const sectionsSelectors = [
      'welcome-moto',
      'welcome-need_section',
      'welcome-about_section',
      'welcome-qualities_section',
      'welcome-business_section',
      'welcome-developer_section',
    ];

    sectionsSelectors.forEach((selector) => {
      cy.get(`[data-cy="${selector}"]`).should('be.visible');
    });
  });

  it('redirects to homepage when call to action is clicked', () => {
    cy.get('[data-cy="welcome-lets_go_button"]').click();

    cy.location('pathname', { timeout: 60 * 1000 }).should(
      'equal',
      Routes.HOME
    );
  });
});
