import addjobtiltledata from '../../fixtures/addjobtitle.json'
import logindata from '../../fixtures/login.json'

import login from "../../Pages/loginpage.po"

import dasboard from "../../Pages/dasboarad.po"

import jobtitle from "../../Pages/addjobtitle.po"

describe('Verify Add Job Functionality', () => {
    it(`Verify adding job title with mandatory inputs`, () => {
     
        cy.login("Admin", "admin123")

        cy.contains(dasboard.dashBoardMenu).should("be.visible")

        cy.contains(dasboard.adminMenu()).click()

        jobtitle.navigateToAddJobtitle()

        let r = (Math.random() + 1).toString(36).substring(7);
        jobtitle.addingJobTitle(addjobtiltledata.jobtitle+r, addjobtiltledata.jobdescription )
    })

    it('Verify character limits for Job title field', () => {
     
         cy.login("Admin", "admin123")

         cy.contains(dasboard.dashBoardMenu).should("be.visible")

         cy.contains(dasboard.adminMenu()).click()
 
         cy.contains(jobtitle.jobSubMenu()).click()
 
         cy.contains(jobtitle.jobTitleOption()).click()

         cy.get(jobtitle.addButton()).click()

        cy.get(jobtitle.jobTitleInput()).last().type("Direcytor HR Write or paste your text into this online character counter Write or paste your text into this o")

        cy.contains(jobtitle.jobTitleErrorMessage()).should("be.visible")

    })

  })