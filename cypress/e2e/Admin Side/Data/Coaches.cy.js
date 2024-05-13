/// <Reference types="cypress"/>
describe('add new couch',()=>{
    it('add new couch',()=>{
        cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
        cy.get(
          "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
        ).type("superAdmin@gmail.com");
        cy.get('input[name="password"]').type("password");
        cy.contains('Log In').click()
        cy.get('#combo-box-demo').click()
        cy.get('#combo-box-demo-option-5 > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(2000);
        cy.get(".sidebar-toggler > div").click();
        cy.get('.css-1a8w37c > :nth-child(4)').click();
        cy.get('[href="/dashboard/coaches"]').click()
        cy.contains('ADD NEW COACH').click()
        cy.get('.css-15fev7r-MuiGrid-root > .MuiGrid-root > .MuiBox-root > .MuiButton-root').click()
        cy.get(':nth-child(1) > :nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('test')
        cy.get(':nth-child(4) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('test')
        cy.get(':nth-child(6) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('test@gmail.com')
        cy.get(':nth-child(3) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('2')
        cy.get(':nth-child(5) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('lorem22krkrklr')
        cy.get('.MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').click().get(':nth-child(1) > :nth-child(3) > .MuiButtonBase-root').click()
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        // cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').type('i')
    })
})