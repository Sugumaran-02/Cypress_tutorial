
describe('session cache pratice', ()=>{

beforeEach('session cache', ()=>{

cy.Login_cache('test','test')

})


it('After session login', ()=>{
cy.visit("https://demoblaze.com/")
cy.get('[class="card-title"]>[href="prod.html?idp_=1"]').should('have.text','Samsung galaxy s6')

})

it('After session login', ()=>{
cy.visit("https://demoblaze.com/")
cy.get('[class="card-title"]>[href="prod.html?idp_=5"]').should('have.text','Iphone 6 32gb')

})
    
})