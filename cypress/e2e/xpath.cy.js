describe('Xpath', () =>{

    it('xpath01', ()=>{
        cy.visit("https://automationexercise.com/products")

        cy.xpath('//input[@id="search_product"]').type("men") // css by xpath
        cy.xpath('button[id="submit_search"]').click() // css by atrribute

      
    })


    
})