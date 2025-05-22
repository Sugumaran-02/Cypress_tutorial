// flight_search.cy.js
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Flight Search on Ixigo', () => {

  it('Search flight from Madurai to Bengaluru', () => {
    // Visit the Ixigo flights page
    cy.visit('https://www.ixigo.com/');

    // Wait for the page to fully load
    cy.wait(3000);

    // Enter From city
    cy.xpath("//p[contains(text(),'From')]/following::p[@data-testid='originId']").click({force: true})
    cy.xpath("//label[contains(text(),'From')]/following::input[contains(@class,'font-medium text-lg !pt-5')]").type('Madurai');
    cy.wait(1000);
    cy.contains('Madurai').click();  // Click the option that appears

    // Enter To city
    //cy.xpath("//p[contains(text(),'To')]/following::p[@data-testid='destinationId']").click({force:true})
    cy.xpath("//label[contains(text(),'From')]/following::input[contains(@class,'lg !pt-5')]").type('Bengaluru', {force:true});
    cy.wait(1000);
    cy.contains('Bengaluru').click();  // Click the option that appears

    // Select Departure Date (optional: picking today's or fixed)
    // cy.get('input[placeholder="Departure"]').click();
    // cy.contains('13').click(); // Click on 13th May - adjust selector as needed

    // Click Search Button
    cy.contains('Search').click();

    // Verify that search results are shown (basic check)
    //cy.url().should('include', '/flights/results'); // It should navigate to results page
  });

});