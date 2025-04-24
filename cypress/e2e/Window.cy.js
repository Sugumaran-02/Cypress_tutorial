describe('Window', () => {

    let productname = 'Samsung Galaxy M16 5G (Mint Green, 6GB RAM, 128 GB Storage) | MediaTek Dimensity 6300 | AnTuTu Score 422K+ | Super Amoled Display | 25W Fast Charging | 6 Gen. of OS Upgrades | Without Charger'

    it.only('Window_approch1_amazon', () => {
        cy.visit("https://www.amazon.in/")
        cy.xpath("//input[@id='twotabsearchtextbox']").type('mobile')
        cy.get("#nav-search-submit-button").click()
        cy.get('[data-cy="title-recipe"]').each(($prod) => {            // take the all window tab text and compare with expected and click the expected window link
            if ($prod.text().includes(productname)) {
                cy.wrap($prod).find('a').invoke('removeAttr', 'target').click()
            }
        })

    })
    it('window_revoke', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('removeAttr', 'target').click()  // delete the target attribute so that new window will open in a same window
        cy.go("back")
    })

    it('window_seprate_tab', () => {

        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.get('.example > a').then((e) => {
            const URL = e.prop('href')
            cy.visit(URL)  // IT get the URL and again visit to the new url
        })
        cy.go("back")

    })

})