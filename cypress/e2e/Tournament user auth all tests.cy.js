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

//*****************         (2)          >>Add new user admin panal<<                      (2)             ********************\\
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

//user should successfully login with right creds for admin panal ====>>>(Pass)
it('user should login as admin with valid creds',()=>{
  cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('superAdmin@gmail.com')
  cy.get('input[name="password"]').type('password')
  cy.get('.PrivateSwitchBase-input').click()
  cy.contains('Log In').click()
  cy.wait(4000)
  cy.get('.sidebar-toggler > div').click()
  cy.get('.css-1a8w37c > :nth-child(2)').click()
  cy.wait(2000)
  cy.get('[href="/dashboard/users"]').click()
  cy.wait(5000)
  cy.get('[style="margin-top: 4px; padding-left: 5px;"] > div > .injected-svg > g > path').click()
  cy.wait(2000)
 

  // ****** General *****

  const profilePic = 'avatar.png'
  cy.get('input[type="file"]').attachFile(profilePic);
  
  
  // cy.get('.css-1bl0gvd').click()
  cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('John')
  cy.get(':nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Rohn')
  cy.get(':nth-child(3) > .css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root').type('Rohn@gmail.com')
  cy.get('.PhoneInputCountrySelect').select('Pakistan')
  cy.wait(2000)
  cy.get('.PhoneInputInput').type('3120401234', {focus:true})
  cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').click()
  cy.get(':nth-child(2) > :nth-child(3) > .MuiButtonBase-root').click()
  cy.get('.MuiDialogActions-root > :nth-child(2)').click()
  cy.get('.MuiDialogActions-root > :nth-child(2)').click()
  cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > #teamName').click()
  cy.get('.MuiList-root > [tabindex="0"]').click()
  cy.get(':nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > #teamName').click()
  cy.get('[data-value="ALA"]').click()
  cy.get(':nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > #teamName').click()
  cy.get('[data-value="AUT"]').click()
  cy.get(':nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Berlin')
  cy.get(':nth-child(7) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('alige 123# 755 nht')
  cy.get('.css-bc7mqo > :nth-child(5) > .MuiButton-root')
  cy.get('.css-bc7mqo > :nth-child(5) > .MuiButton-root').click()

  // ***** Career ******

  cy.get('.MuiGrid-container > :nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type(' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')
  cy.wait(2000)
  
  cy.get(':nth-child(2) > .MuiFormControlLabel-root').click()
  cy.get(':nth-child(3) > .MuiFormControlLabel-root').click()
  cy.get(':nth-child(4) > .MuiFormControlLabel-root ').click()
  cy.get(':nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.github.com/')
  cy.get(':nth-child(7) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.facebook.com/')
  cy.get(':nth-child(8) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.instagram.com')
  cy.get(':nth-child(9) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.linkedin.com')
  cy.get(':nth-child(10) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.tiktok.com')
  cy.get(':nth-child(11) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.youtube.com/')
  cy.contains('Go to Next').click()

  // ***** third party license page *****
  cy.wait(2000)
  cy.get('.MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('arbg1234')
  cy.contains('Go to Next').click()
  
// ***** Password *****
cy.wait(2000)
cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Password')
cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Password')
cy.contains('Go to Next').click()

//****   Login setting ****
cy.wait(2000)
cy.get('.MuiGrid-container > .MuiGrid-root > :nth-child(2)').click()
cy.get(':nth-child(3) > .MuiFormControlLabel-root').click()
cy.contains('Go to Next').click()

//****     Management ****
cy.wait(2000)
cy.contains('Save').click()
})





 })