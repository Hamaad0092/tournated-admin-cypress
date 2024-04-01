describe("Verify that User login according to role",()=>{
   // **** PASS *****
    it('user role should not login as admin', () => {
        cy.fixture("users.json").then((users) => {
          users.users.forEach((user) => {
            cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
            cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type(user.email);
            cy.get('input[name="password"]').type(user.password);
            cy.contains('Log In').click();
          });
        });
      });
      
//             // **** Pass ****
//         it('user should login for organization role',()=>{
//         cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
//         cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('six@gmail.com')
//         cy.get('input[name="password"]').type("Password");
//         cy.contains('Log In').click()
//         cy.log("user login successfully Because this user has organization role")
//         cy.get('MuiModal-root-MuiPopover-root > .MuiBackdrop-root').click()
// })
//                                             // **** Pass ****
//     it('user should login for organization role',()=>{
//         cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
//         cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('33@gmail.com')
//         cy.get('input[name="password"]').type("Password");
//         cy.contains('Log In').click()

//     })
})