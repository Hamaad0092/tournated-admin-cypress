
describe(`Register a new Client `, () => {
    
    it('Register a new client as a athlete ', () => {
            
            cy.visit("https://client.spadasoft.com/");
            cy.get('.MuiIconButton-label > .MuiTypography-root').click()
            cy.contains("Sign up").click()
            cy.get("input[name='name']").type("Lebron");
            cy.get("input[name='surname']").type('James');
            cy.get("input[name='email']").type("Dell666@gmail.com");
            cy.get("input[name='password']").type('password');
            cy.get("input[name='reEnter']").type('password');
            cy.contains("Continue").click()
            cy.contains("Chess").wait(10000).click()
            cy.contains("Continue").click()
            cy.get('input[name="fideId"]').type("12334")
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

            // cy.get("input[name='policy']").click();
            // cy.contains("Register").click()              ********Button Disabled*******
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
            cy.contains("Chess").click()
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

    it('if client is an Oranization Memeber', () => {
       
          
            cy.visit("https://client.spadasoft.com/");
            cy.get('.MuiIconButton-label > .MuiTypography-root').click()
            cy.contains("Sign up").click()
            cy.get("input[name='name']").type("Lebron");
            cy.get("input[name='surname']").type('James');
            cy.get("input[name='email']").type("Dell666@gmail.com");
            cy.get("input[name='password']").type('password');
            cy.get("input[name='reEnter']").type('password');
            cy.contains("Continue").click()
            cy.contains("Chess").wait(8000).click()
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
            cy.contains("Federation Member").click()
            // cy.contains("Register").click()              ********Button Disabled*******
        });
    });

