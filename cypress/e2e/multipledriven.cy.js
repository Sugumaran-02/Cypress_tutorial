// describe('Handle nested array of login data', () => {












// // Load the fixture before defining tests
//   let testData;

//   before(() => {
//     cy.fixture('testdata2').then((data) => {
//       testData = data;
//     });
//   });

//   // Define tests after fixture is loaded
//   Object.entries({
//     customers: () => 'customers',
//     admins: () => 'admins',
//     invalidUsers: () => 'invalidUsers'
//   }).forEach(([groupName, keyFn]) => {
//     context(`Login group: ${groupName}`, () => {
//       // Note: We can't loop here until testData is available
//       before(function () {
//         if (!testData) {
//           throw new Error('Fixture not loaded yet');
//         }
//       });

    


//         it(`runs tests for group: ${groupName}`, function () {
//         const users = testData[groupName];
//         if (!Array.isArray(users)) {
//           throw new Error(`${groupName} is not an array`);
//         }

//         users.forEach((user, index) => {
//           cy.visit('https://www.saucedemo.com/v1/');
//           cy.get('#user-name').type(user.username);
//           cy.get('#password').type(user.password);
//           cy.get('#login-button').click();

//           cy.log(`Verifying login for ${user.username}`);

//           // Replace with real assertion if needed
//           // cy.contains(user.Verify_text).should('be.visible');
//         });
//       });
//     });
//   });

















//     // it('multiple data array',() => {
//     //   cy.fixture('testdata2').then((data) => {
//     //     // Loop through each array (e.g., data[0], data[1])
//     //     Object.entries(data).forEach(([groupName, userArray]) => {
//     //       context(`Login group  ${groupName}`, () => {
//     //         userArray.forEach((user, userIndex) => {
//     //           it(`Test case ${userIndex + 1}: ${user.username}`, () => {
//     //             cy.visit('https://www.saucedemo.com/v1/'); // change as per your app
//     //             cy.get('id="user-name"').type(user.username);
//     //             cy.log(user.username)
//     //             cy.get('id="password"').type(user.password);
//     //             cy.log(user.password)
//     //             cy.get('id="login-button"').submit();
  
//     //             // Replace this with your actual verification method
//     //            // cy.contains(user.Verify_text).should('be.visible');
//     //           });
//     //         });
//     //       });
//     //     });
//     //   });
//     // });
//   });


describe('Handle nested array of login data', function () {
  // Load fixture data before all tests
  before(function () {
    cy.fixture('testdata2').then((data) => {
      this.testData = data;
    });
  });

  const userGroups = ['customers', 'admins', 'invalidUsers'];

  userGroups.forEach(function (group) {
    context(`Login group: ${group}`, function () {
      it(`runs tests for ${group}`, function () {
        const users = this.testData[group];

        // Check data is loaded correctly
        expect(users, `${group} data should be defined`).to.not.be.undefined;
        expect(Array.isArray(users), `${group} should be an array`).to.be.true;

        users.forEach((user) => {
          cy.visit('https://www.saucedemo.com/v1/');
          cy.get('#user-name').clear().type(user.username);
          cy.get('#password').clear().type(user.password);
          cy.get('#login-button').click();

          // Assertion (adjust depending on expected behavior)
          if (user.Verify_text === 'Valid login') {
            cy.url().should('include', '/inventory.html');
          } else if (user.Verify_text === 'Invalid login') {
            cy.get('[data-test="error"]').should('be.visible');
          }

          cy.log(`Checked login for user: ${user.username}`);
        });
      });
    });
  });
});
