describe('Dropdown', () =>{

    it.only('dynamic_dropdown_gobio', ()=>{
      cy.visit("https://www.goibibo.com/")

   cy.get('[class="sc-koXPp bDtzaf"]').click()
   cy.wait(2000)
   //   cy.get('[class="sc-12foipm-22 kGtxGm"] [class="sc-12foipm-6 erPfRs"]').type("bangalore", { delay: 2000 })

   cy.get('[class="sc-12foipm-22 kGtxGm"] [class="sc-12foipm-6 erPfRs"]', { timeout: 7000 })
   .click()

   cy.get('[type="text"]')
  .type("bangalore", { delay: 150 }); 
  } )
   
    
  })

