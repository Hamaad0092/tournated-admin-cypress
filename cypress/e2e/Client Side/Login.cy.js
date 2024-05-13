const resScreen = [350, 750, 1350, 1800];

resScreen.forEach((value) => {
describe(`client user Login verification check on screen ${value}`, () => {
       
           beforeEach(() => {
               cy.viewport(value, 1000);
           });

           it('client should not be login with wrong creds', () => {
               cy.visit("https://client.spadasoft.com/authentication/login");
               cy.get("input[name='email']").type("Test@gmail.com");
               cy.get("input[name='password']").type("123456");
               cy.contains("Log In").click();
           });

           it('password should not be a blank space', () => {
               cy.visit("https://client.spadasoft.com/authentication/login");
               cy.get("input[name='email']").type("Test@gmail.com");
               cy.get("input[name='password']").type("     ");
               cy.contains("Log In").click();
           });

           it('email should not be a blank', () => {
               cy.visit("https://client.spadasoft.com/authentication/login");
               cy.get("input[name='email']").type("     ");
               cy.get("input[name='password']").type("password");
               cy.contains("Log In").click();
           });

           it('Client user should be login with valid creds', () => {
               cy.visit("https://client.spadasoft.com/authentication/login");
               cy.get("input[name='email']").type("superAdmin@gmail.com");
               cy.get("input[name='password']").type("password");
               cy.contains("Log In").click();
           });
       });
   });

