describe('template spec', () => {
    it('implicit assertion', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   //  cy.title().should('eq', 'OrangeHRM')
   cy.get('[class="orangehrm-login-slot"]').find('[name="username"]').type("Admin")
      //cy.xpath("//input[@name='username']").type("Admin")
      cy.xpath("//input[@name='password']").type("admin123")
      cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
      cy.contains('span','My Info').click()
      cy.get('[href*="contactDetails"]').click()
      cy.contains('label','Street 1').parent().parent().find("input").type("Sivan Kovil Street")
      
    })
})
   


