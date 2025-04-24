describe('web_action', ()=>{

it('Page_refresh', ()=>{
   cy.visit("https://www.amazon.in/")

   cy.get('[id="twotabsearchtextbox"]').type("Mobile{enter}")
   cy.get('[class="a-color-state a-text-bold"]').should('have.text','"Mobile"')
   cy.go('back')
  cy.title().should('contain','Online Shopping site in India:')
  cy.go('forward')
  cy.get('[class="a-color-state a-text-bold"]').should('have.text','"Mobile"')
  cy.reload()
})

})