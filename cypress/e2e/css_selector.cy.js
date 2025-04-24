describe('CSS_Selector', () =>{

    it('Css_selector01', ()=>{
        cy.visit("https://automationexercise.com/products")

        cy.get("#search_product").type("men") // css by xpath
        cy.get('button[id="submit_search"]').click() // css by atrribute

      
    })


    
})


