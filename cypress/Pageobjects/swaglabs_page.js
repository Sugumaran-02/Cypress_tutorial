class swaglabs_page{


  username= '[id="user-name"]'
  password= '[id="password"]'
  Login_button= '[id="login-button"]'
  product_list= '[class="inventory_list"]>div'


  login(username, password){
   cy.get(this.username).type(username)
   cy.get(this.password).type(password)
   cy.get(this.Login_button).click()
  }

  add_cart(product_name){

   product_name.forEach((product) => {

    cy.get(this.product_list).each(($el, indexedDB, $list) =>{
     cy.wrap($el).find(".inventory_item_name").invoke('text').then((name)=>{

     if(name.trim()=== product){

      cy.wrap($el).find('[class="btn btn_primary btn_small btn_inventory"]').click()
     }

     })

    })
    
   });

   }






}

export default swaglabs_page