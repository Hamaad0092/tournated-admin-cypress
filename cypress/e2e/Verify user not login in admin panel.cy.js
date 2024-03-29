describe("Verify that User login according to role",()=>{
                                 // **** PASS *****
    it('user role should not login as admin',()=>{
        cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
        cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('test28mar@gmail.com')
        cy.get('input[name="password"]').type("password");
        cy.contains('Log In').click()
        cy.wait(2000)
        cy.get('.MuiFormHelperText-root').should('not.exist');

    })
                                            // **** Pass ****
    it('user should login for organization role',()=>{
        cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
        cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('33@gmail.com')
        cy.get('input[name="password"]').type("Password");
        // cy.contains('Log In').click()

    })
})