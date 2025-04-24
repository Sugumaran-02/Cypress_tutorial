describe('template spec', () => {
    it('implicit assertion', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   //  cy.title().should('eq', 'OrangeHRM')
      cy.xpath("//input[@name='username']").type("Admin")
      cy.xpath("//input[@name='password']").type("admin123")
      cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()


cy.title().should('include', 'HRM')
cy.url().should('contain','orangehrmlive.com')
        .and('include','opensource-demo.orangehrmlive.com')

 cy.xpath("//input[@placeholder='Search']").should('be.visible')   
 cy.xpath("//input[@placeholder='Search']").type("Test")

 cy.xpath("//input[@placeholder='Search']").should('have.value','Test')

 let expect_name= "Orange Silva"
 
 
 cy.get('.oxd-userdropdown-tab').then( (x)=>{
 let act_name= x.text();

 //BDD
   expect(act_name).to.equal(expect_name)
   expect(act_name).to.not.equal("test")

 //TDD
 assert.equal(act_name,expect_name)  
 //assert.not.equal(act_name,expect_name)

 }


 );   




    })
  
    // it('implicit assertion', () => {
    //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //   cy.title().should('eq', 'OrangeHRM123')
    // })
  })