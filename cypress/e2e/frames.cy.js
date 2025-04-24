import 'cypress-iframe'

describe('Frames_practice', () =>{

    it('frame_normal_approch', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     
     const iframe=   cy.get('#courses-iframe')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);


        iframe.xpath('/html/body/div/header/div[3]/div/div/div[2]/nav/div[2]/ul/li[2]/a').click()
        cy.wait(4000)

      
    })


    it('frame_custom_command_approch', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     
       cy.getIframe('#courses-iframe') .xpath("(//a[contains(text(),'Job Support')])[1]").click()
        cy.wait(4000)

      
    })


    it.only('frame_third_party_plugin_approch', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     cy.frameLoaded('#courses-iframe') //loaded the frame


       cy.iframe('#courses-iframe') .xpath("(//a[contains(text(),'Job Support')])[1]").click()
        cy.wait(4000)

      
    })


})