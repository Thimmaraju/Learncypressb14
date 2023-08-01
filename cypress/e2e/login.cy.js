describe('Validate Login functioanlity', () => {
    var username = "Admin"
    var password = "admin123"

    logincreds = {

         "username" : "Admin",
         "password" : "admin123",
         "wrongusername" : "Admiewfhuiwehnn",
         "wrongpassword" : "adfywhfbmin123",
    }

    logincredentials = ["Admin", "admin123", "wdbfbwejf", "webvdfyugweiudg"]

    it('Verify login with Valid input details', () => {
        cy.visit("/web/index.php/auth/login")

        cy.get("input[name='username']").type(username)

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type(password)

        cy.get("button[type='submit']").click()

        cy.contains("Dashboard").should("be.visible")
    })


    it('Verify login with Valid username and Invalid Password', () => {
        cy.visit("/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin")

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admerfgnjnfioin123")

        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })

    it('Verify login with Invalid username and valid Password', () => {
        cy.visit("/web/index.php/auth/login")

        cy.get("input[name='username']").type(logincredentials[2])

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type(logincredentials[1])

        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })


    it('Verify login with Invalid username and Invalid Password', () => {
        cy.visit("/web/index.php/auth/login")

        cy.get("input[name='username']").type(logincreds.wrongusername)

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type(logincreds.wrongpassword)

        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })

    

})