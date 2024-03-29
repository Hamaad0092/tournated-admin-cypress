describe('Add a New League', () => {
    it('', () => {
      cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
      cy.get("form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input").type("superAdmin@gmail.com");
      cy.get('input[name="password"]').type("password");
      cy.contains('Log In').click();
      cy.get(".sidebar-toggler > div").click();
    cy.contains('Super Data').scrollIntoView().should('be.visible').click(); 
    cy.get('[href="/dashboard/leagues"]').click()
    cy.contains('Create new League', { timeout: 10000 }).as('createLeagueBtn').should('be.visible');
cy.get('@createLeagueBtn').click();

      const img = 'avatar.png';
      cy.get('input[type="file"]').attachFile(img); // File attachment
      cy.get('input[name="title"]').type('Spring'); // Title
      cy.get('input[name="abbreviation"]').type("Spring"); // Abbreviation
      cy.get('input[name="federation"]', { timeout: 10000 }).should('be.visible').type("Harlay").wait(1000)
      cy.get('li[data-option-index="4"]').click()
          //Promise issue in dev side
      cy.get('select[name="platform"]').select('Tournated Test') 
      cy.get('select[name="sports"]')
      cy.get('select[placeholder="League Type"]').select('National')
      cy.get('select[name="priority"]').select('Normal Priority') 
              //***************error ********////

      cy.get('input[name="email"]').type("example@gmail.com");
      cy.get('select[name="phoneCountry"]').select('Pakistan'); // Selecting phone country
      cy.get('input[name="phone"]').type("99992223223"); // Typing phone number
      cy.get(':nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.google.com');
      cy.get(':nth-child(4) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.instagram.com');
      cy.contains('Go to Next').click();
  
      // Fact Sheet
      cy.contains('Add New Point').click();
      cy.get(':nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('HelloWorld');
      cy.get('select[name="fieldType"]').select('select');
      cy.contains('Save').click();
      cy.get('select[name="status"]').select('Active');
      cy.get('input[name="enableRankings"]').click();
    //cy.get('input[name="enableOnlinePayments"]').click();  *****BUTTON DISABLED******
    });
  });
  