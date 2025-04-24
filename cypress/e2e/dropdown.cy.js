describe('Dropdown', () =>{

    it.only('dynamic_dropdown_gobio', ()=>{
      cy.visit("https://www.goibibo.com/")

   cy.get('[class="logSprite icClose"]').click()
   cy.get('[class="sc-12foipm-22 kGtxGm"] [class="sc-12foipm-6 erPfRs"]',{timeout:7000}).type("bangalore")
  } )
   
    
  })

