describe('Add new organization acccount',()=>{
it('User should create Organization account',()=>{
    cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
    cy.get(
      "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    ).type("superAdmin@gmail.com");
    cy.get('input[name="password"]').type("password");
    cy.contains('Log In').click()
    cy.wait(8000);
    cy.get(".sidebar-toggler > div").click();
    cy.contains('Super Data').scrollIntoView().should('be.visible').click(); 

    cy.get('[href="/dashboard/federation-accounts"]').click().should('have.attr', 'href', '/dashboard/federation-accounts');
    cy.contains('ADD NEW Account').click(); 
    cy.get('.PrivateSwitchBase-input').click().should('be.checked');
    cy.get('input[name="name"]').type('Dell').should('be.visible').invoke('val').then(value => {expect(value).not.to.be.empty});
    cy.get(':nth-child(3) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("co");
    cy.get(':nth-child(4) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('donalad010@gmail.com')
    cy.get(':nth-child(5) > .PhoneInputCountry > .PhoneInputCountrySelect').select('Pakistan')
    cy.get(':nth-child(5) > .PhoneInputInput').type('12345667{enter}', { force: true })
    cy.get(':nth-child(6) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('password123');
    cy.get(':nth-child(7) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('password123'); 

    cy.get(':nth-child(6) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').invoke('val').then(password => {
    cy.get(':nth-child(7) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').invoke('val').then(confirmPassword => {
    expect(confirmPassword).to.equal(password); 
  });
});

cy.get(':nth-child(9) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Dell intel')
cy.get(':nth-child(10) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('DI')
cy.get('.MuiNativeSelect-select').select('Local organization').wait(1000)
const Pic = "avatar.png";

cy.contains('UPLOAD').should('be.visible').click().then(() => {cy.get('input[type="file"]').attachFile(Pic) })

cy.get(':nth-child(14) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type(" Various versions have evolved over the years, sometimes by accident")
cy.get(':nth-child(16) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('jack123@gmail.com')
cy.get(':nth-child(17) > .PhoneInputCountry > .PhoneInputCountrySelect').select('Pakistan')
cy.get(':nth-child(17) > .PhoneInputInput').type('033222223',{force:true})
cy.get('input[name="website"]').type('https://www.google.com')
// cy.contains("SUBMIT").click()       ****disabled button**** 




    
  




      });
      
})

