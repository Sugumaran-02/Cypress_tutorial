require('@4tw/cypress-drag-drop')

describe('Mousehover_drag_drop', () =>{

    it('Double_click', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

cy.get('[ondblclick="myFunction1()"]').scrollIntoView().dblclick()

    })


    it.only('Drag_drop', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

cy.get('#draggable').drag('#droppable')

    })

})