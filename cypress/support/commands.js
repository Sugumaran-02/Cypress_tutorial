// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"  />
/// <reference types="cypress-xpath"  />
/// <reference types="cypress-file-upload"  />
import 'cypress-mochawesome-reporter/register';

Cypress.Commands.add('getIframe', (iframe) =>{

return cy.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap)

})

Cypress.Commands.add('login', (username, password)=>{
    cy.visit("https://www.saucedemo.com/")
    cy.get('input[name="user-name"]').clear().type(username)
    cy.get('input[name="password"]').clear().type(password)
    cy.get('input[name="login-button"]').click()

})

Cypress.Commands.add('loginUI', () => {
    const username = 'standard_user';
    
    cy.session(username, () => {
      // Clear existing session data
      cy.clearCookies();
      cy.clearLocalStorage();
      
      // Perform login
      cy.visit('/');
      cy.get('[data-test="username"]').type(username);
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      
      // Verify successful login
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list').should('be.visible');
      cy.getCookie('session-username').should('exist');
    }, {
      validate() {
        // Check if we're already on the right page
        cy.url().then(currentUrl => {
          if (!currentUrl.includes('/inventory.html')) {
            cy.visit('/inventory.html', { failOnStatusCode: false });
          }
        });
        
        // Verify page elements
        cy.get('.inventory_list').should('exist');
        cy.getCookie('session-username').should('exist');
      },
      cacheAcrossSpecs: true
    });
  });