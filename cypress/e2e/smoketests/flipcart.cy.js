describe('click on hidden element', () => {
    it('click on element', () => {
      cy.visit('https://www.cypress.io/')
  
      cy.contains('Installing Cypress').click({force:true})
    })
  })