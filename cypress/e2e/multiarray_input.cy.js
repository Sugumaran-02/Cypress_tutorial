describe('Input data from multiarray', ()=>{

const testdata= require('../fixtures/multi_array_datas.json')


  

  testdata.customers.forEach((userdata)=>{

    it(`should login successfully as customer: ${userdata.username}`, ()=>{

      cy.visit("https://www.saucedemo.com/")
      cy.login(userdata.username, userdata.password)
    
if(userdata.Verify_text === "Valid login"){
  
  cy.get('[class="title"]').should('have.text','Products') 
  cy.get('.app_logo').should('be.visible');
    cy.log('Login Successful!')
}
else{
  cy.get('[data-test=error]').should('be.visible');
  cy.log('Login Failed as expected!');
}

 
    
    
    })
    
    
    })



    testdata.admins.forEach((userdata)=>{

      it(`should login successfully as customer: ${userdata.username}`, ()=>{
        cy.visit("https://www.saucedemo.com/")
  cy.login(userdata.username, userdata.password)
      
        if(userdata.Verify_text === "Valid login"){
          cy.visit("https://www.saucedemo.com/")
          cy.login(userdata.username, userdata.password)
          cy.get('[class="title"]').should('have.text','Products') 
          cy.get('.app_logo').should('be.visible');
            cy.log('Login Successful!')
        }else{
          cy.get('[data-test=error]').should('be.visible');
          cy.log('Login Failed as expected!');
      }
  
      
      
      })
      
      
      })


      testdata.invalidUsers.forEach((userdata)=>{

        it(`should login successfully as customer: ${userdata.username}`, ()=>{

          cy.visit("https://www.saucedemo.com/")
  cy.login(userdata.username, userdata.password)
        
          if(userdata.Verify_text === "Valid login"){
            cy.visit("https://www.saucedemo.com/")
            cy.login(userdata.username, userdata.password)
            cy.get('[class="title"]').should('have.text','Products') 
            cy.get('.app_logo').should('be.visible');
              cy.log('Login Successful!')
          }else{
            cy.get('[data-test=error]').should('be.visible');
            cy.log('Login Failed as expected!');
        }
    
        
        
        })
        
        
        })
    

})


