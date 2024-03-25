describe('Add a New Leaguage',()=>{
    it('',()=>{
        cy.visit('https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard')
    cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('superAdmin@gmail.com')
    cy.get('input[name="password"]').type('password')
    cy.get('.PrivateSwitchBase-input').click()
    cy.contains('Log In').click()
    cy.wait(4000)
    cy.get('.sidebar-toggler > div').click()
    cy.get('.css-1a8w37c > :nth-child(2)').click()
    cy.wait(2000)
    cy.get('[href="/dashboard/leagues"]').click()
    cy.get(':nth-child(3) > .MuiButton-root').click()
    const img = 'avatar.png';
    cy.get('input[type="file"]').attachFile(img);                     //file attach
    cy.get('input[name="title"]').type('Spring')                       //title
    cy.get('input[name="abbreviation"]').type("Spring")                  // give abbrevation
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').eq(1).type("Harlay").wait(2000);
    cy.get('li[role="option"]').eq(0).click();
   
    
    // cy.get(':nth-child(11) > .MuiOutlinedInput-root > .MuiNativeSelect-select').click()
        // .select('option:eq(1)');
        cy.get('select[name="platform"]').select('Chelsea');

        cy.get('input[name="email"]').type("example@gmail.com")
        cy.get('select[name="phoneCountry"]').select('pakistan').type("99992223223")
        cy.get(':nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.google.com')
        cy.get(':nth-child(4) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.instagram.com')
        cy.contains('Go to Next').click()

        // Fact Sheet

        cy.contains('Add New Point').click()
        cy.get(':nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('HelloWorld')
        cy.get('select[name="fieldType"]').select('select')
        cy.contains('Save').click()
        cy.get('.css-6iggc8 > .MuiBox-root > .MuiTypography-root').attachFile(img)
        cy.get('select[name="status"]').select('Active')
        cy.get('input[name="enableRankings"]').click()
        cy.get('input[name="enableOnlinePayments"]').click()
        // cy.contains('Create League').click()


      






    });
});




    