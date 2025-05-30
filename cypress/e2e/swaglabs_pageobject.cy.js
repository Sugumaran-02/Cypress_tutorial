
import swagpage from '../Pageobjects/swaglabs_page.js'

describe('Swaglabs_pageobject', ()=>{

    it('pageobject', ()=>{

        cy.visit("/")
        var swagpage_01=new swagpage()
        swagpage_01.login("standard_user", "secret_sauce")
        cy.wait(4000)
        const productname=["Sauce Labs Backpack","Sauce Labs Fleece Jacket"]
        swagpage_01.add_cart(productname)
      cy.wait(10000)
    })

    
})

