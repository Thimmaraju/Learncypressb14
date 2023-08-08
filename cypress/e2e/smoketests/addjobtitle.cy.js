import data from "../fixtures/addjobtitle.json"

import login from "../../Pages/loginpage.po"
describe('Verify Add Job Functionality', () => {
    it.only(`Verify adding job title with mandatory inputs`, () => {
     
        cy.visit("/web/index.php/auth/login")

        cy.get(login.usernameInput()).type(Cypress.env("username"))

        cy.get(login.passwordInput()).type("admin123")

        cy.get(login.loginButton()).click()

        cy.contains("Dashboard").should("be.visible")

        cy.contains("Admin").click()

        cy.contains('Job').click()

        cy.contains('Job Titles').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').last().type(data.jobtitle+r)

        cy.get('textarea[placeholder="Type description here"]').type(data.jobdescription)

        cy.get('button[type="submit"]').click()

        cy.contains("Successfully Saved").should("be.visible")

    })

    it('Verify character limits for Job title field', () => {
     
        cy.visit("/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin")

        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin123")

        cy.get("button[type='submit']").click()

        cy.contains("Dashboard").should("be.visible")

        cy.contains("Admin").click()

        cy.contains('Job').click()

        cy.contains('Job Titles').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(2).type("Direcytor HR Write or paste your text into this online character counter Write or paste your text into this o")

        cy.contains("Should not exceed 100 characters").should("be.visible")

    })

  })