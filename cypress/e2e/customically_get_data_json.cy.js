
describe('Login Tests for Selected Users (User2 and User4)', () => {



const testdata= require("../fixtures/testdata2.json")

const selectedusers=["User1","User2"]

selectedusers.forEach((userkey)=>{

const user=testdata[userkey]

if(user){
    it(`should perform login for ${userkey} - ${user.username}` , ()=>{

        cy.log(`Testing login for ${user.username}`)
    
        cy.login(user.username, user.password)
    
    
        //Verification
    
        if(user.Verify_text === "Valid login")
        {
      cy.url().should('eq','https://www.saucedemo.com/inventory.html')
      cy.get('[class="title"]').should('have.text','Products') 
      //cy.get('.app_logo').should('be.visible');
        cy.log('Login Successful!')
    
      cy.wait(2000)
      cy.get('[id="react-burger-menu-btn"]').click()
      cy.get('[id="logout_sidebar_link"]').click()
    
        }else{
            cy.get('[data-test=error]').should('be.visible');
            cy.log('Login Failed as expected!');
        }
    
    
    
    })
    
}

else{
    it(`User '${userKey}' not found in fixture file`, () => {
        throw new Error(`User '${userKey}' not found in testdata`);
      });
}


})

})