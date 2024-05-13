describe('Add New Disciplines',()=>{
    it('User should create New Discipline',()=>{
        cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
        cy.get(
          "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
        ).type("superAdmin@gmail.com");
        cy.get('input[name="password"]').type("password");
        cy.contains('Log In').click()
        cy.wait(4000);
        cy.get(".sidebar-toggler > div").click();
        cy.contains('Super Data').scrollIntoView().should('be.visible').click(); 
        cy.get('[href="/dashboard/disciplines"]').click()
        cy.get(':nth-child(3) > .MuiButton-root > .MuiButton-label').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Startup time").wait(2000)
        cy.get('#teamName1').click();
        cy.get('li[data-value="1"]').click(); 
        const file='avatar.png';
        cy.get('input[type="file"]').attachFile(file)
        // cy.get('button[type="submit"]').click() 

    })
    })