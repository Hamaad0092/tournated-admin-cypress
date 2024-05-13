describe("Add Third Party Lincence",()=>{
it('Add lincense data',()=>{
    cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
    cy.get(
      "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    ).type("superAdmin@gmail.com");
    cy.get('input[name="password"]').type("password");
    cy.contains('Log In').click()
    cy.wait(4000);
    cy.get(".sidebar-toggler > div").click();
    cy.contains('Super Data').scrollIntoView().should('be.visible').click();  
    cy.get('[href="/dashboard/third-party-license"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get(':nth-child(3) > .MuiButton-root > .MuiButton-label').click()
    cy.get('#language-select').type('Ten').wait(1000)
    cy.get('li[id="language-select-option-0"]').click()
    cy.get('.MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Harley')
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('hly')
    cy.get('.MuiGrid-container > :nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Normal')
    cy.get('select[placeholder="License type"]').select('National')
    cy.get(':nth-child(6) > .MuiFormControlLabel-root').click()
    cy.get(':nth-child(7) > .MuiFormControlLabel-root').click()
    cy.get(':nth-child(8) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.google.com')
    // cy.contains('SUBMIT').click()
})    

})