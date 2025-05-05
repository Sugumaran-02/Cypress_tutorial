describe('Login reuse', () => {
    before(() => {
      // Clear all sessions before test suite
      Cypress.session.clearAllSavedSessions();
    });
  
    beforeEach(() => {
      cy.loginUI();
      // Additional verification
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list').should('be.visible');
    });
  
    it('should maintain session between tests', () => {
      cy.get('.inventory_item').should('have.length.gt', 0);
      cy.contains('Products').should('be.visible');
    });
  });