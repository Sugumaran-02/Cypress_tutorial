
// import Papa from 'papaparse'

// describe('datadriven_using_csv', () => {
//     let testdata = [];

//     before(() => {

//         cy.readFile('cypress/fixtures/login_data.csv').then((csvdata) => {

//             const result = Papa.parse(csvdata, { header: true })

//             testdata = result.data;

//         })
//     })


//it("datadriven", () => {

//          testdata.forEach((dataRow, index) => {

//             
//                 cy.visit("https://www.saucedemo.com/");
//                 cy.get('input[name="user-name"]').clear().type(dataRow.username);
//                 cy.get('input[name="password"]').clear().type(dataRow.password);
//                 cy.get('input[name="login-button"]').click();
//                 cy.log("login count")

//                 // Example: Verify text based on expected output
//                 if (dataRow.Verify_text === "Valid login") {
//                     cy.url().should('include', '/inventory.html'); // after successful login
//                 } else if (dataRow.Verify_text === "Invalid login") {
//                     cy.get('[data-test="error"]').should('be.visible'); // error message appears
//                 }
//             });
//         });
//     });
// });

//---------------------------------------------------------------
//---------------------------------------------------------------


describe('Data Driven Login Tests using CSV', () => {
    let testdata = [];
  
    before(() => {
      cy.task('readCsv', 'cypress/fixtures/login_data.csv').then((data) => {
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
  
        if (dataRow.Verify_text === "Valid login") {
          cy.url().should('include', '/inventory.html');
        } else if (dataRow.Verify_text === "Invalid login") {
          cy.get('[data-test="error"]').should('be.visible');
        } else {
          cy.log('Invalid Verify_text in data:', JSON.stringify(dataRow));
        }
  
        cy.reload(); // reset for next iteration
      });
    });
  });


//------------------------------------------------
//  //