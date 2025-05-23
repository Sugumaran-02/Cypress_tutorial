// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath'
import 'cypress-file-upload';
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    // if error message includes "adsbygoogle", ignore it
    if (err.message.includes('adsbygoogle')) {
      return false; // prevents Cypress from failing the test
    }
    
    // Let all other errors fail the test
    return true;
  });