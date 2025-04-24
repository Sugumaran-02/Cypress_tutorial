

describe('Radio_Checkbox', () =>{

    it('radio_button', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.xpath('//input[@id="female"]').check().should('be.checked')// radio button is checked 
        cy.xpath('//input[@id="male"]').should('not.be.checked') // verfiy the  checked status of radio button
        //cy.xpath('//input[@id="female"]').uncheck().should('not.be.checked')// radio button is Unchecked 

      
    })


    it.only('Check_box', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        // cy.xpath('//input[@id="sunday"]').check().should('be.checked') // checkbox is checked 
        // cy.xpath('//input[@id="tuesday"]').check().should('be.checked') // checkbox is checked

        //cy.xpath('//input[@class="form-check-input" and @type="checkbox" ]').check()
         
 cy.xpath('//input[@class="form-check-input" and @type="checkbox" ]').each(($product)=>{
    if($product.prop('value')=='tuesday'){

        $product.click()
    }
 })
        
// for (const element of listoftext) {
//   let textofelement=  element.contains()
//   console.log(textofelement);
// }

        
        

      
    })


    
})