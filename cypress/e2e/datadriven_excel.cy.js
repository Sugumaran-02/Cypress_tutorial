describe('Data Driven Login Tests using CSV', () => {
    let testdata = [];
  
    before(() => {
      cy.task('readExcel', 'cypress/fixtures/login_data.xlsx').then((data) => {
        testdata = data.filter(row => row.username && row.password && row.Verify_text);
      });
    });
  
    it('Loading data and creating tests dynamically', ()=> {
      testdata.forEach((dataRow, index) => {
    
        cy.log(`Login Test ${index + 1}: ${dataRow.username}`);
  
        cy.visit("https://www.saucedemo.com/");
        cy.get('input[name="user-name"]').clear().type(dataRow.username);
        cy.get('input[name="password"]').clear().type(dataRow.password);
        cy.get('input[name="login-button"]').click();
  
        if (dataRow.Verify_text && dataRow.Verify_text.trim() === "Valid login") {
          cy.url().should('include', '/inventory.html');
        } else if (dataRow.Verify_text && dataRow.Verify_text.trim() === "Invalid login") {
          cy.get('[data-test="error"]').should('be.visible');
        } else {
          cy.log('Invalid Verify_text in data:', JSON.stringify(dataRow));
        }
  
        cy.reload(); // reset for next iteration
      });
    });
  });
