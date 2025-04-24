describe('screenshots', ()=>{

it('capture teh screen', ()=>{
 cy.visit("https://www.amazon.in/")
 cy.screenshot();
 
 cy.get('[id="twotabsearchtextbox"]').type("Mobile{enter}")
 cy.get('[class="a-color-state a-text-bold"]').should('have.text','"Mobile"')
 cy.get('[class="_bGlmZ_container_1R4ul _bGlmZ_ar191To1_2MBoj"]').screenshot('Newmobile')
})



})