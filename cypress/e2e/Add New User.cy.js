describe("Add new User",()=>{
  it('Add new user',()=>{
    cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
    cy.get(
      "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    ).type("superAdmin@gmail.com");
    cy.get('input[name="password"]').type("password");
    cy.contains('Log In').click()
    cy.wait(4000);
    cy.get(".sidebar-toggler > div").click();
    cy.contains('Super Data').scrollIntoView().should('be.visible').click();  
        cy.get('[href="/dashboard/users"]').click()
    cy.wait(5000)
    cy.contains('ADD NEW USER').click()
    cy.wait(2000)
   
  
    // ****** General *****
  
    const profilePic = 'avatar.png'
    cy.get('input[type="file"]').attachFile(profilePic);
    
    
    // cy.get('.css-1bl0gvd').click()
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('John')
    cy.get(':nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Rohn')
    cy.get(':nth-child(3) > .css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root').type('Rohn@gmail.com')
    cy.get('.PhoneInputCountrySelect').select('Pakistan')
    cy.wait(2000)
    cy.get('.PhoneInputInput').type('3120401234', {focus:true})
    cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').click()
    cy.get(':nth-child(2) > :nth-child(3) > .MuiButtonBase-root').click()
    cy.get('.MuiDialogActions-root > :nth-child(2)').click()
    cy.get('.MuiDialogActions-root > :nth-child(2)').click()
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > #teamName').click()
    cy.get('.MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > #teamName').click()
    cy.get('[data-value="ALA"]').click()
    cy.get(':nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > #teamName').click()
    cy.get('[data-value="AUT"]').click()
    cy.get(':nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Berlin')
    cy.get(':nth-child(7) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('alige 123# 755 nht')
    cy.get('.css-bc7mqo > :nth-child(5) > .MuiButton-root')
    cy.get('.css-bc7mqo > :nth-child(5) > .MuiButton-root').click()
  
    // ***** Career ******
  
    cy.get('.MuiGrid-container > :nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type(' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')
    cy.wait(2000)
    
    cy.get(':nth-child(2) > .MuiFormControlLabel-root').click()
    cy.get(':nth-child(3) > .MuiFormControlLabel-root').click()
    cy.get(':nth-child(4) > .MuiFormControlLabel-root ').click()
    cy.get(':nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.github.com/')
    cy.get(':nth-child(7) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.facebook.com/')
    cy.get(':nth-child(8) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.instagram.com')
    cy.get(':nth-child(9) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.linkedin.com')
    cy.get(':nth-child(10) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.tiktok.com')
    cy.get(':nth-child(11) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.youtube.com/')
    cy.contains('Go to Next').click()
  
    // ***** third party license page *****
    cy.wait(2000)
    cy.get('.MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('arbg1234')
    cy.contains('Go to Next').click()
    
  // ***** Password *****
  cy.wait(2000)
  cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Password')
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Password')
  cy.contains('Go to Next').click()
  
  //****   Login setting ****
  cy.wait(2000)
  cy.get('.MuiGrid-container > .MuiGrid-root > :nth-child(2)').click()
  cy.get(':nth-child(3) > .MuiFormControlLabel-root').click()
  cy.contains('Go to Next').click()
  
  //****     Management ****
  cy.wait(2000)
  // cy.contains('Save').click()        **********button disabled *****
  })
  
  
  
  
  
   })