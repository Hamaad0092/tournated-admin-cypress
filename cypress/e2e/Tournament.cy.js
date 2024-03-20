describe.skip('tournated app Tournament manager User authentication', () => {
  beforeEach(()=>{
   cy.visit('https://vertexo-tournament-git-dev-waleedsaifi.vercel.app/authentication/register')
  
 })
 
   // Sign up with Valid details. ====>>       (PASS)
   it('should Sign up user', () => {
     cy.get('.css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Demoemai11@gmail.com")
     cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get(':nth-child(1) > .jss14 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('.jss15 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get(':nth-child(1) > .jss14').click()
     cy.get(':nth-child(2) > .jss14').click()
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
   cy.get('.css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("hamaadsaeed0001121")
     cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("John")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("Doe")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get(':nth-child(1) > .jss14 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('.jss15 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get(':nth-child(1) > .jss14').click()
     cy.get(':nth-child(2) > .jss14').click()
     cy.get('#mui-component-select-role').click()
     cy.get('.MuiList-root > [tabindex="0"]').click()
     cy.get('.PrivateSwitchBase-input').click()
     cy.get('.MuiButton-label').click()
 })
 
 
 // Sign up with invalid name type (Fail) =====>>       (FAIL)
 it('Should not Sign up with invalid name type',()=>{
   cy.get('.css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("hamaadsaeed@gmail.com")
     cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("000000000000000000000000000000000")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("090909000000000909009090909")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("password@12")
     cy.get(':nth-child(1) > .jss14 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('.jss15 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get(':nth-child(1) > .jss14').click()
     cy.get(':nth-child(2) > .jss14').click()
     cy.get('#mui-component-select-role').click()
     cy.get('.MuiList-root > [tabindex="0"]').click()
     cy.get('.PrivateSwitchBase-input').click()
     cy.get('.MuiButton-label').click()
 })
 
 
 // sign up with space password  =====>>           (FAIL)
 it('Should not Sign up with space password',()=>{
   cy.get('.css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("hamaadsaeed3@gmail.com")
     cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("000000000000000000000000000000000")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("090909000000000909009090909")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get(':nth-child(1) > .jss14 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('.jss15 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get(':nth-child(1) > .jss14').click()
     cy.get(':nth-child(2) > .jss14').click()
     cy.get('#mui-component-select-role').click()
     cy.get('.MuiList-root > [tabindex="0"]').click()
     cy.get('.PrivateSwitchBase-input').click()
     cy.get('.MuiButton-label').click()
 })
 
 // sign up without select any sport  =====>>           (FAIL)
 it('Should not Sign up without select any sport',()=>{
   cy.get('.css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("hamaadsaeed3@gmail.com")
     cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("000000000000000000000000000000000")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("090909000000000909009090909")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get(':nth-child(1) > .jss14 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('.jss15 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('#mui-component-select-role').click()
     cy.get('.MuiList-root > [tabindex="0"]').click()
     cy.get('.PrivateSwitchBase-input').click()
     cy.get('.MuiButton-label').click()
 })
 
 
 // sign up without slect user role  =====>>           (PASS)
 it('Should not Sign up without select user role',()=>{
   cy.get('.css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("hamaadsaeed4@gmail.com")
     cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("000000000000000000000000000000000")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("090909000000000909009090909")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get(':nth-child(1) > .jss14 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('.jss15 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get(':nth-child(1) > .jss14').click()
     cy.get(':nth-child(2) > .jss14').click()
     cy.get('.PrivateSwitchBase-input').click()
     cy.get('.MuiButton-label').click()
 })
 
 // sign up without slect terms & conditions =====>>           (PASS)
 it('Should not Sign up without select terms & conditions',()=>{
   cy.get('.css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("hamaadsaeed4@gmail.com")
     cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("000000000000000000000000000000000")
     cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("090909000000000909009090909")
     cy.get('.MuiGrid-grid-md-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get('.MuiGrid-grid-md-6.jss12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("            ")
     cy.get(':nth-child(1) > .jss14 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get('.jss15 > .css-108b08z > .jss16 > :nth-child(1) > div').click()
     cy.get(':nth-child(1) > .jss14').click()
     cy.get(':nth-child(2) > .jss14').click()
     cy.get('#mui-component-select-role').click()
     cy.get('.MuiList-root > [tabindex="0"]').click()
     cy.get('.MuiButton-label').click()
 })
 })

//*****************         (2)          >>user login admin panal<<                      (2)             ********************\\
 describe("Login as admin ",()=>{

  beforeEach(()=>{
cy.visit('https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard')
})

// User should not login with wrong creds.  ====>> (Pass)   
it.skip('user should not login with wrong creds',()=>{
  cy.wait(2000)
  cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('superAdmin@gmail.com')
  cy.get('.jss14 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('    ')
  cy.get('.PrivateSwitchBase-input').click()
  cy.get('.css-1icgf7x > .MuiButton-root > .MuiButton-label').click()
})

//user should successfully login with right creds for admin panal ====>>>(Pass)
it('user should login as admin with valid creds',()=>{
  cy.get('form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('superAdmin@gmail.com')
  cy.get('.jss14 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('password')
  cy.get('.PrivateSwitchBase-input').click()
  cy.get('.css-1icgf7x > .MuiButton-root > .MuiButton-label').click()
  cy.wait(4000)
  cy.get('.sidebar-toggler > div').click()
  cy.get('.css-1a8w37c > :nth-child(2)').click()
  cy.wait(2000)
  cy.get('[href="/dashboard/users"]').click()
  cy.wait(5000)
  cy.get('[style="margin-top: 4px; padding-left: 5px;"] > div > .injected-svg > g > path').click()
  cy.wait(2000)
  // cy.fixture('avatar.png', 'base64').then(fileContent => {
  //   // Get the file input element and attach the file
  //   cy.get('input[type="file"]').attachFile({
  //     fileContent: fileContent.toString(),
  //     fileName: 'avatar.png',
  //     mimeType: 'image/png'
  //   });
  // });
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

  


  
})

// it('Get profile photo from local storage',()=>{
// cy.visit('https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard/users/new')
// })




 })