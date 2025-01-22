describe('Log Test', () => {
    it('logs messages', () => {
      console.log('Console Test');
      cy.log('Cypress Test');
    });
  });