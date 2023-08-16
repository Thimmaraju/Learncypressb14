
import login from "../../Pages/loginpage.po"

import dasboard from "../../Pages/dasboarad.po"

import logindata from '../../fixtures/login.json'

describe('Validate Login functioanlity', () => {
    var username = "Admin"
    var password = "admin123"

    after("Testsuite complete message", ()=>{

        cy.log("Running all the Tests completed")
        
     })

  


    it.only('Verify login with Valid input details', () => {
        

        cy.login(logindata.username, logindata.password)
        cy.contains(dasboard.dashBoardMenu).should("be.visible")
    })


    specify.only('Verify login with Valid username and Invalid Password', () => {
        

        cy.login("Admin", "fkjfiohwef")

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })

    it.only('Verify login with Invalid username and valid Password', () => {
     
        cy.login("gdvfdiyv", "admin123")

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })


    it.only('Verify login with Invalid username and Invalid Password', () => {
       

       cy.login("bvefuyge", "dhyugbd")

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })

    

})