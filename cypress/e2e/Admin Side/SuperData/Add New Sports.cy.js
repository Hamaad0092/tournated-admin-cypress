/// <reference types='cypress' />
describe('Add new sports should be added',()=>{
   
  it('ADD NEW SPORT',()=>{
    cy.visit("https://vertexo-admin-git-add-test-ids-waleedsaifis-projects.vercel.app/dashboard")
      cy.get(
        "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
      ).type("superAdmin@gmail.com");
      cy.get('input[name="password"]').type("password");
      cy.contains('Log In').click()
      cy.get('[data-testid="129-1l"]').click();
      cy.get('[data-testid="wcr-17k"] > :nth-child(2)').click()
      cy.get('[href="/dashboard/sports"]').click().wait(2000)
      cy.get('[data-testid="137-1c"]').click()
      cy.get('[data-testid="1b2-1b2"]').should('have.css', 'font-weight','600').should('contain','Add New Sport')
      cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Golf')
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Golf')
      cy.get('#teamName').click()
      // cy.get('data-testid="14i-19a"').click()
      cy.get('.MuiList-root > [tabindex="0"]').click()
      cy.get('div[data-placeholder="Start typing"] > p').type('Conservative dress, modesty, respect for local customs and traditions.');
      const file='avatar.png'
      cy.get('input[type="file"]').attachFile(file)
      cy.get(':nth-child(6) > .MuiFormControlLabel-root ').click().should('not.have.attr', 'disabled')
    
      cy.get(':nth-child(8) > .MuiFormControlLabel-root ').click().should('not.have.attr', 'disabled')
      
      cy.get(':nth-child(10) > .MuiFormControlLabel-root').click().should('not.be.disabled');

      cy.get(':nth-child(11) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(12) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(15) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(16) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(9) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(18) > .MuiFormControlLabel-root ').click()
      // cy.contains('SUBMIT').click()   ****Button Disabled ****
      

  })
})

