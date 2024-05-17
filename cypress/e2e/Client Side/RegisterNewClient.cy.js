
describe(`Register a new Client `, () => {
    
    it('Register a new client as a athlete ', () => {
            
        cy.visit("https://client.spadasoft.com/");
        
        // Click on the initial button to open the menu
        cy.get('.MuiIconButton-label > .MuiTypography-root').click();
        
        // Click on the Sign Up button
        cy.contains("Sign up").click();
        
        // Fill in the sign-up form
        cy.get("input[name='name']").type("Test");
        cy.get("input[name='surname']").type('001');
        cy.get("input[name='email']").type("test002@gmail.com");
        cy.get("input[name='password']").type('password');
        cy.get("input[name='reEnter']").type('password');
        
        // Continue to the next step
        cy.contains("Continue").click();
        
        // Select the sport and continue
        cy.get('input[type="checkbox"]').eq(7).check(); // Ensure the selector is correct for the sport field
        cy.contains("Continue").click();
        
        // Fill in additional details
        cy.get('input[name="fideId"]').type('12345');
        cy.get('[name="phoneCountry"]').select("Pakistan").wait(2000)
        cy.get('input[type="tel"]').type('3120000000');
        cy.get('input[name="citizenship"]').type("Pakistan").click();
        
        // Handle date of birth selection
        cy.get('.MuiInputAdornment-root > img').click();
        cy.get("input[name='dob']").click();
        cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click();
        cy.get(':nth-child(2) > .MuiButton-label').click();
        
        // Select gender and continue
        cy.get('.MuiNativeSelect-select').select('Male');
        cy.contains("Continue").click();
        cy.contains("Continue").click();
        
        // Wait for the page to load and ensure that "Federation member" button is visible
        cy.get('input[type="checkbox"]').eq(1).check();
        
        // Click on the Register button and verify if it is enabled
        // cy.contains("Register").should('not.be.disabled').click();             ********Button Disabled*******
        });
   

    it('if client is registered with blank email', () => {
        
            
            cy.visit("https://client.spadasoft.com/");
            cy.get('.MuiIconButton-label > .MuiTypography-root').click()
            cy.contains("Sign up").click()
            cy.get("input[name='name']").type("Lebron");
            cy.get("input[name='surname']").type('James');
            cy.get("input[name='email']").type("      ");
            cy.get("input[name='password']").type('password');
            cy.get("input[name='reEnter']").type('password');
            cy.contains("Continue").click()
            // ********Button Disabled*******
        });

    it('if client is registered with all blank fields', () => {
        
            
            cy.visit("https://client.spadasoft.com/");
            cy.get('.MuiIconButton-label > .MuiTypography-root').click()
            cy.contains("Sign up").click()
            cy.get("input[name='name']").type("Lebron");
            cy.get("input[name='surname']").type('James');
            cy.get("input[name='email']").type("Dell666@gmail.com");
            cy.get("input[name='password']").type('        ');
            cy.get("input[name='reEnter']").type('        ');
            cy.contains("Continue").click()
            cy.wait(8000)
            
            cy.contains("Continue").click()
            cy.get('.PhoneInputInput').clear().type("+923120000000")
            cy.get('input[name="citizenship"]').clear().type("Pakistan")
            cy.get('.MuiInputAdornment-root > img').click()
            cy.get("input[name='dob']").click()
            cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click()
            cy.get(':nth-child(2) > .MuiButton-label').click()
            cy.get('.MuiNativeSelect-select').select('Male')
            cy.contains("Continue").click()
            cy.contains("Continue").click()
            cy.contains("Athlete").click()
            // cy.contains("Register").click()              ********Button Disabled*******
       
    });

    it('if client is an Organization Member', () => {
        // Visit the client's page
        cy.visit("https://client.spadasoft.com/");
        
        // Click on the initial button to open the menu
        cy.get('.MuiIconButton-label > .MuiTypography-root').click();
        
        // Click on the Sign Up button
        cy.contains("Sign up").click();
        
        // Fill in the sign-up form
        cy.get("input[name='name']").type("Test");
        cy.get("input[name='surname']").type('001');
        cy.get("input[name='email']").type("test002@gmail.com");
        cy.get("input[name='password']").type('password');
        cy.get("input[name='reEnter']").type('password');
        
        // Continue to the next step
        cy.contains("Continue").click();
        
        // Select the sport and continue
        cy.get('input[type="checkbox"]').eq(7).check(); // Ensure the selector is correct for the sport field
        cy.contains("Continue").click();
        
        // Fill in additional details
        cy.get('input[name="fideId"]').type('12345');
        cy.get('[name="phoneCountry"]').select("Pakistan").wait(2000)
        cy.get('input[type="tel"]').type('3120000000');
        cy.get('input[name="citizenship"]').type("Pakistan").click();
        
        // Handle date of birth selection
        cy.get('.MuiInputAdornment-root > img').click();
        cy.get("input[name='dob']").click();
        cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root').click();
        cy.get(':nth-child(2) > .MuiButton-label').click();
        
        // Select gender and continue
        cy.get('.MuiNativeSelect-select').select('Male');
        cy.contains("Continue").click();
        cy.contains("Continue").click();
        
        // Wait for the page to load and ensure that "Federation member" button is visible
        cy.get('input[type="checkbox"]').eq(2).check();
        
        
        // cy.contains("Register").should('not.be.disabled').click();
    });
    
    });

