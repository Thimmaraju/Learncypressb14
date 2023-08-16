import dasboard from "../../Pages/dasboarad.po"

describe('Verify add employee functionality', () => {
    it('verify add employee with valid details', () => {
       
        cy.login("Admin", "admin123")
        cy.contains(dasboard.dashBoardMenu).should("be.visible")

        cy.contains(dasboard.pimMenu()).click()

        cy.addEmployee("Raju", "G")

    })
  })