describe('Alerts', () =>{

    it('Alert_01', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       

cy.on('window:alert', (t)=>{
expect(t).to.contains('Hello , share this practice page and share your knowledge')

})
     
cy.get('[id="alertbtn"]').click()   
    })

    it('Alert_confirm', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       

cy.on('window:alert', (t)=>{
expect(t).to.contains('Hello , Are you sure you want to confirm?')

})
   cy.on('window:confirm', () => false)   // cancel the confirm alert

cy.get('[id="confirmbtn"]').click()   
    })

    

    it('Alert_prompt', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       

cy.window().then((win) =>{
 cy.stub(win,'prompt').returns('TEST');

})

cy.get("button[onclick='jsPrompt()']").click()   

cy.on('window:confirm', (t)=>{
expect(t).to.contains('Please enter your name:')

})
 //  cy.on('window:confirm', () => false)   // cancel the confirm alert
 cy.get("[id='result']").should('have.text','You entered: TEST')

    })


})
