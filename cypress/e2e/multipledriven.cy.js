describe('Handle nested array of login data', () => {
    it('multiple data array',() => {
      cy.fixture('testdata2').then((data) => {
        // Loop through each array (e.g., data[0], data[1])
        data.forEach((userArray, index) => {
          context(`Login group ${index + 1}`, () => {
            userArray.forEach((user, userIndex) => {
              it(`Test case ${userIndex + 1}: ${user.username}`, () => {
                cy.visit('https://www.saucedemo.com/v1/'); // change as per your app
                cy.get('id="user-name"').type(user.username);
                cy.log(user.username)
                cy.get('id="password"').type(user.password);
                cy.log(user.password)
                cy.get('id="login-button"').submit();
  
                // Replace this with your actual verification method
               // cy.contains(user.Verify_text).should('be.visible');
              });
            });
          });
        });
      });
    });
  });