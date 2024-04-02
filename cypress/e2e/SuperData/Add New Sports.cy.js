describe('Add new sports should be added',()=>{
   
  it('ADD NEW SPORT',()=>{
      cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
      cy.get(
        "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
      ).type("superAdmin@gmail.com");
      cy.get('input[name="password"]').type("password");
      cy.contains('Log In').click()
      cy.get(".sidebar-toggler > div").click();
      cy.contains('Super Data').scrollIntoView().should('be.visible').click(); 
      cy.get('[href="/dashboard/sports"]').click().wait(2000)
      cy.contains('ADD NEW SPORT').click()
      cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Golf')
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Golf')
      cy.get('#teamName').click()
      cy.get('.MuiList-root > [tabindex="0"]').click()
      cy.get('div[data-placeholder="Start typing"] > p').type('Conservative dress, modesty, respect for local customs and traditions.');
      const file='avatar.png'
      cy.get('input[type="file"]').attachFile(file)
      cy.get(':nth-child(6) > .MuiFormControlLabel-root ').click().should('not.have.attr', 'disabled')
    
      cy.get(':nth-child(8) > .MuiFormControlLabel-root ').click().should('not.have.attr', 'disabled')
      
      cy.get(':nth-child(10) > .MuiFormControlLabel-root ').click().should('not.have.attr', 'disabled')
      cy.get(':nth-child(11) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(12) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(15) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(16) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(9) > .MuiFormControlLabel-root ').click()
      cy.get(':nth-child(18) > .MuiFormControlLabel-root ').click()
      // cy.contains('SUBMIT').click()   ****Button Disabled ****
      

  })
})

