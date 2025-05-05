import { describe } from "mocha";

describe('shadowdom', ()=>{

it('orangeHRMS', ()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get('[name="username"]').type("Admin")
cy.get('[name="password"]').type("admin123")
cy.get('[type="submit"]').click()
cy.get('[href="/web/index.php/pim/viewPimModule"]').click()

cy.get('[class="oxd-select-wrapper"]').eq(0).click()

cy.xpath("//div[@role='option']//span[contains(text(),'Freelance')]")
      .should('be.visible')
      .click();




})

})