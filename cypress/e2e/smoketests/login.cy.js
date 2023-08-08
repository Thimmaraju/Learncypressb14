
import login from "../../Pages/loginpage.po"

import dasboard from "../../Pages/dasboarad.po"

describe('Validate Login functioanlity', () => {
    var username = "Admin"
    var password = "admin123"

    after("Testsuite complete message", ()=>{

        cy.log("Running all the Tests completed")
        
     })

     beforeEach("launch url", ()=>{
        cy.log("This will run before each it block")
        
        cy.visit("/web/index.php/auth/login")

     })



    it.only('Verify login with Valid input details', () => {
        

        cy.get(login.usernameInput()).type(username)

        cy.get(login.passwordInput()).type(password)

        cy.get(login.loginButton()).click()

        cy.contains(dasboard.dashBoardMenu()).should("be.visible")
    })


    specify.only('Verify login with Valid username and Invalid Password', () => {
        

        cy.get("input[name='username']").type("Admin")

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admerfgnjnfioin123")

        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })

    it.skip('Verify login with Invalid username and valid Password', () => {
     
        cy.get("input[name='username']").type("gvfdbufbwei")

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin123")

        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })


    it('Verify login with Invalid username and Invalid Password', () => {
       

        cy.get("input[name='username']").type("bfjoeiwhfih")

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("iehdiuewhiduhn")

        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })

    

})