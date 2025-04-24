import 'cypress-file-upload';

describe('File_upload', () =>{

it('file_normal', ()=>{

    cy.visit("https://testautomationpractice.blogspot.com/")

    //Single file upload
//     cy.get('[id="singleFileInput"]').attachFile('102707.jpg')
//     cy.get('#singleFileForm > button').click()
   
//    cy.get('[id="singleFileStatus"]').should('contain', 'Single file selected: 102707.jpg' )



  //Multiple files upload
   cy.get('[id="multipleFilesInput"]').attachFile(["102707.jpg","jsonformatter.txt"])
   cy.get('#multipleFilesForm > button').click()
   cy.get('[id="multipleFilesStatus"]').should('contain', 'Multiple files selected: ' )


  //Rename upload file 
   cy.get('[id="singleFileInput"]').attachFile({filePath:'102707.jpg', fileName:'file02.jpg'})
   cy.get('#singleFileForm > button').click()
  
  cy.get('[id="singleFileStatus"]').should('contain', 'Single file selected: file02.jpg' )

})

it('fileupload_drag',()=>{

cy.visit("https://the-internet.herokuapp.com/upload")

cy.get('[id="drag-drop-upload"]').attachFile('jsonformatter.txt', {subjectType:'drag-n-drop'})

cy.get('[class="dz-filename"]>span:nth-child(1)').contains('jsonformatter')

})




})