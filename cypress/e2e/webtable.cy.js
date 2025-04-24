describe('Webtable', () =>{


beforeEach('Login', ()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
   
    
})

    it.skip('webtable_count_rows_columns', ()=>{
       

       let rowcount= cy.get('[id="productTable"]>tbody>tr').should('have.length', '5')
    
       let columncount=cy.get('[id="productTable"]>thead>tr>th').should('have.length', '4')
   
      
    })


    it.skip('check specific cell data', () =>{
    
        cy.get('[id="productTable"]>tbody>tr:nth-child(2)>td:nth-child(2)').contains('Laptop')

    })

    it.skip('Read all cell data', () =>{
    
        cy.get('[id="productTable"]>tbody>tr').each(($row, index, $rows) => {

       cy.wrap($row).within(  ()=>{

        cy.get('td').each(($column, index, $columns) =>{
            cy.log( $column.text())

        }) 

      

       })

        })


    })


    it('pagination', ()=>{

        let totalpage=4

   for(let i=1; i<=totalpage; i++){

    if (totalpage>1){

        cy.log("Active page is ==="+ i)

        cy.get('[class="pagination"]>li:nth-child('+i+')').click()

        cy.get('[id="productTable"]>tbody>tr').each(($row, index, $rows) =>{

         cy.wrap($row).within(()=>{
          cy.get('td>input').each(($column, index, $columns)=>{
  

         cy.log($column.text())

         
         cy.wrap($column).click()

          })

         })
        })
    }

        }

    })

})

