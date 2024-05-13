describe("Login and Viewport Tests", () => {
    it('Client user should be login with valid creds', () => {
        cy.visit("https://client.spadasoft.com/authentication/login");
        cy.get("input[name='email']").type("superAdmin@gmail.com");
        cy.get("input[name='password']").type("password");
        cy.contains("Log In").click();
        cy.wait(4000);

        // Test with viewport size 1200x1000
        cy.viewport(1200, 1000);
        cy.wait(5000)
        cy.contains("Start managing your").should('have.css', 'font-size', '20px');
        cy.get('.slick-current > :nth-child(1) > .css-1jjfo90 > .css-1lfaydl > .css-53mwl7 > .css-1ohl72f > .css-1we3dl0 > .css-1yz4mcl > .MuiTypography-root').should('have.css','font-size','16px')
        cy.viewport(765,498)
        cy.get(':nth-child(7) > .MuiGrid-container > .MuiGrid-root > .slick-slider > .slick-list > .slick-track > .slick-current > :nth-child(1) > .MuiBox-root')
          .should('have.css', 'width', '367px');
          

});



    });

