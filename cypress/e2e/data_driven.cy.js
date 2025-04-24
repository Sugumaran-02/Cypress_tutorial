describe('data_driven', () => {

    it('multi_data_driven', () => {
        

        cy.fixture("testdata.json").then((inputdatas) => {
            cy.visit("https://www.saucedemo.com/")
            inputdatas.forEach((data) => {
                cy.wait(3000)
                cy.get('input[name="user-name"]').clear().type(data.username)
                cy.get('input[name="password"]').clear().type(data.password)
                cy.get('input[name="login-button"]').click()

                if (data.username == "standard_user" && data.password == "secret_sauce") {
                    // cy,get("//*[@id='span[class='oxd-topbar-header-breadcrumb'] h6']/div[1]").contains('Dashboard')

                    cy.get('[id="react-burger-menu-btn"]').click()
                    cy.get('[id="logout_sidebar_link"]').click()
                    
                } else {

                    cy.get("[class='oxd-text oxd-text--p oxd-alert-content-text']").contains('Invalid credentials')
                }




            });

        })


    })

})