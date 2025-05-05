import 'cypress-iframe'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

describe('Test with 360 degree', ()=>{

it('rotate the image to 360 degree',()=>{
cy.visit('https://www.iconasys.com/360-product-view-examples/multi-purpose-tool/')
cy.frameLoaded('iframe.sh-spinner__frame');
cy.iframe('iframe.sh-spinner__frame').find('[id="hotspotContainer"]') .trigger('mousedown', { clientX: 100, clientY: 100 })
.trigger('mousemove', { clientX: 200, clientY: 100 })
.trigger('mouseup');

cy.get('.iframe-class').trigger('mousedown', { clientX: 100, clientY: 100 })
.trigger('mousemove', { clientX: 200, clientY: 100 })
 .trigger('mouseup');



})
})
// // it('Test360', ()=>{
// // cy.visit('https://www.google.com/maps/uv?pb=!1s0x3a5267557ceb7837%3A0x40dbc8e5e08ff850!3m1!7e115!4s%2Fmaps%2Fplace%2Fnityo%2Binfotech%2Bpvt%2Blimited%2Breviews%2F%4013.0535092%2C80.2344473%2C3a%2C75y%2C263.31h%2C90t%2Fdata%3D*213m4*211e1*213m2*211s3laCoO2kygN5jrVcnAfraA*212e0*214m2*213m1*211s0x3a5267557ceb7837%3A0x40dbc8e5e08ff850%3Fsa%3DX%26ved%3D2ahUKEwjY-vm__P6MAxWATGwGHbraAT4Qpx96BAg8EAA!5snityo%20infotech%20pvt%20limited%20reviews%20-%20Google%20Search!15sCgIgARICCAI&imagekey=!1e2!2s3laCoO2kygN5jrVcnAfraA&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111')
// // cy.get('[class="aFsglc widget-scene-canvas"]').trigger('mousedown', { clientX: 100, clientY: 100, force: true })
// // .trigger('mousemove', { clientX: 200, clientY: 100, force: true })
// //   .trigger('mouseup');
// // })

// // })

// const testRotations = [0, 90, 180, 270];

// testRotations.forEach(angle => {
//   it(`should display correct view at ${angle} degrees`, () => {
//     cy.visit('https://www.google.com/maps/uv?pb=!1s0x3a5267557ceb7837%3A0x40dbc8e5e08ff850!3m1!7e115!4s%2Fmaps%2Fplace%2Fnityo%2Binfotech%2Bpvt%2Blimited%2Breviews%2F%4013.0535092%2C80.2344473%2C3a%2C75y%2C263.31h%2C90t%2Fdata%3D*213m4*211e1*213m2*211s3laCoO2kygN5jrVcnAfraA*212e0*214m2*213m1*211s0x3a5267557ceb7837%3A0x40dbc8e5e08ff850%3Fsa%3DX%26ved%3D2ahUKEwjY-vm__P6MAxWATGwGHbraAT4Qpx96BAg8EAA!5snityo%20infotech%20pvt%20limited%20reviews%20-%20Google%20Search!15sCgIgARICCAI&imagekey=!1e2!2s3laCoO2kygN5jrVcnAfraA&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111')
    
//     // Set rotation programmatically
//     cy.get('[aria-label="Rotate the view counterclockwise"]')
//       .invoke('setRotation', angle);
      
//     // Verify expected image is shown
//     cy.get('[class="aFsglc widget-scene-canvas"]')
//       .should('have.attr', 'src')
//       .and('include', `angle-${angle}`);
//   });
// });
// });
