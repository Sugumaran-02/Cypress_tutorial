describe('Download file and verify', () => {
    it('downloads a report', () => {
      cy.visit('https://www.tutorialspoint.com/selenium/practice/upload-download.php');
      cy.wait(3000);
    //   cy.window().then((win) => {
    //     win.location.href = 'https://www.tutorialspoint.com/selenium/practice/sampleFile.jpeg'; // Direct link to the file
    //   });
      cy.get('[id="downloadButton"]').should('be.visible').click({force:true})
  
      cy.wait(5000); // wait for download (better to add dynamic waits later)
  
      cy.task('checkFile', { filePath: 'D:/Cypress_Tutorial/cypress/downloads/sampleFile.jpeg'}).then((exists) => {
        expect(exists).to.be.true;
      });
      //cy.readFile('C:/Users/sugum/Documents/Cypress_tutorial/cypress/downloads/sampleFile.jpeg').should('exist')
    });
  });