describe('tournated app Tournament manager User authentication', () => {
  beforeEach(()=>{
   cy.visit('https://vertexo-tournament-git-dev-waleedsaifi.vercel.app/authentication/register')
  
 })
 
   // Sign up with Valid details. ====>>       (PASS)
   it('should Sign up user', () => {
    cy.get('input[name="email"]').type("Demoemai11@gmail.com", { force: true });
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get(':nth-child(1) > .jss14').click()
     cy.contains('Beach Tennis').click()
     cy.get('#mui-component-select-role').click()
     cy.get('.MuiList-root > [tabindex="0"]').click()
     cy.get('.PrivateSwitchBase-input').click()
     cy.get('.MuiButton-label').click()
   })
 
   // Sign up with Blank form input deatails. ===>>     (PASS)
 it('should not Sign up with blank details. ',()=>{
 cy.get('.MuiButton-label').click()
 })
 
 //Sign up with invalid email type   =====>>      (PASS)
 it('should  not Sign up with invalid email type',()=>{
  cy.get('input[name="email"]').type("Demoemai112322@gmail.com", { force: true });
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
   cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
   cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get(':nth-child(1) > .jss14').click()
   cy.contains('Beach Tennis').click()
   cy.get('#mui-component-select-role').click()
   cy.get('.MuiList-root > [tabindex="0"]').click()
   cy.get('.PrivateSwitchBase-input').click()
   cy.get('.MuiButton-label').click()
 })
 
 
 // Sign up with invalid name type (Fail) =====>>       (FAIL)
 it('Should not Sign up with invalid name type',()=>{
  cy.get('input[name="email"]').type("Demoemai11@gmail.com", { force: true });
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("00000000000000000000")
   cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("121111111111111")
   cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get(':nth-child(1) > .jss14').click()
   cy.contains('Beach Tennis').click()
   cy.get('#mui-component-select-role').click()
   cy.get('.MuiList-root > [tabindex="0"]').click()
   cy.get('.PrivateSwitchBase-input').click()
   cy.get('.MuiButton-label').click()
 })
 
 
 // sign up with space password  =====>>           (FAIL)
 it('Should not Sign up with space password',()=>{
  cy.get('input[name="email"]').type("Demoemai11@gmail.com", { force: true });
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
   cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
   cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("      ")
   cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("      ")
   cy.get(':nth-child(1) > .jss14').click()
   cy.contains('Beach Tennis').click()
   cy.get('#mui-component-select-role').click()
   cy.get('.MuiList-root > [tabindex="0"]').click()
   cy.get('.PrivateSwitchBase-input').click()
   cy.get('.MuiButton-label').click()
 })
 
 // sign up without select any sport  =====>>           (FAIL)
 it('Should not Sign up without select any sport',()=>{
  cy.get('input[name="email"]').type("Demoemai11@gmail.com", { force: true });
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get('#mui-component-select-role').click()
     cy.get('.MuiList-root > [tabindex="0"]').click()
     cy.get('.PrivateSwitchBase-input').click()
     cy.get('.MuiButton-label').click()
 })
 
 
 // sign up without slect user role  =====>>           (PASS)
 it('Should not Sign up without select user role',()=>{
  cy.get('input[name="email"]').type("Demoemai11@gmail.com", { force: true });
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
   cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
   cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get(':nth-child(1) > .jss14').click()
   cy.contains('Beach Tennis').click()
   cy.get('.PrivateSwitchBase-input').click()
   cy.get('.MuiButton-label').click()
 })
 
 // sign up without slect terms & conditions =====>>           (PASS)
 it('Should not Sign up without select terms & conditions',()=>{
  cy.get('input[name="email"]').type("Demoemai11@gmail.com", { force: true });
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
   cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
   cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
   cy.get(':nth-child(1) > .jss14').click()
   cy.contains('Beach Tennis').click()
   cy.get('#mui-component-select-role').click()
   cy.get('.MuiList-root > [tabindex="0"]').click()
   cy.get('.MuiButton-label').click()
 })
 })
 describe("Login as admin",()=>{

  beforeEach(()=>{
cy.visit('https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard')
})

// User should not login with wrong creds.  ====>> (Pass)   
it('user should not login with wrong creds',()=>{
  cy.wait(2000)
  cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('superAdmin@gmail.com')
  cy.get('input[name="password"]').type('    ')
  cy.get('.PrivateSwitchBase-input').click()
  cy.contains('Log In').click()
})
 })
