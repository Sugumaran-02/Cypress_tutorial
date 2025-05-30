// describe('Login via API', () => {
//   it('should login and visit dashboard', () => {
//     cy.loginByApi()


    
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//     cy.url().should('include', '/dashboard');
//   });
// });

// describe('Login with cy.session()', () => {
//   beforeEach(() => {
//     cy.session('Admin', () => {
//       cy.request({
//         method: 'POST',
//         url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
//         form: true,
//         body: {
//           username: 'Admin',
//           password: 'admin123',
//         },
//       }).then((res) => {
//         expect(res.status).to.eq(200);
//       });
//     });
//   });

//   it('should load the dashboard after session login', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     cy.get('h6.oxd-text.oxd-text--h6').should('contain.text', 'Dashboard');
//   });
// });

describe('Login using cy.session() with UI flow', () => {
  beforeEach(() => {
    cy.session('Admin', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();

      // Wait for dashboard to load
      cy.url().should('include', '/dashboard');
      cy.get('h6.oxd-text.oxd-text--h6').should('contain.text', 'Dashboard');
    });
  });

  it('should reuse session and access dashboard', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    cy.get('h6.oxd-text.oxd-text--h6').should('contain.text', 'Dashboard');
  });
});