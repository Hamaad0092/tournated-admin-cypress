describe("User Setting",()=>{
    beforeEach(()=>{
        cy.visit('https://client.spadasoft.com/userSettings/')
    })
    it("User should be editable and can change their record successfully",()=>{
        const photo='avatar.png'
        cy.get('input[type="file"]').attachFile(photo)
        cy.get('input[name="name"]').type("test")
        cy.get('input[name="surname"]').type("test2")
        cy.get('input[name="phone"]').clear().type("+923120000000")
        cy.get('input[name="dob"]').click()
        cy.get(':nth-child(2) > :nth-child(4) > .MuiButtonBase-root').click()
        cy.contains("OK").click()
        cy.get('#teamName').click()
        cy.contains('Male').click()
        cy.get('input[name="citizenship"]').clear().type("Pakistan").wait(1000)
        cy.get('li[data-option-index="0"]').click()
        cy.get('input[name="nation"]').clear().type("Pakistan").click()
        cy.get('li[data-option-index="0"]').click()
        cy.get('input[name="city"]').type('Lahore')
        cy.get('input[name="user_address"]').type('demo@gmail.com')
        
        cy.contains('Career').click().wait(2000)
      
        // cy.get('input[name="country"][placeholder="coach"]').type('Rehman').click().wait(500);
        cy.get('div[id="teamName"]').click().wait(2000)
        cy.get('[data-value="3"]').click()

        // cy.get('input[name="country"][placeholder="parent"]').type('rehman').click().wait(2000)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('this is test data')
        cy.get(':nth-child(2) > .MuiFormControlLabel-root').then(box => {
            box.is(':disabled') ? 
                cy.log("Checkbox is disabled") : 
                (cy.get(':nth-child(2) > .MuiFormControlLabel-root').click(), cy.log("Checkbox is enabled, so clicked to disable it"));
        });
        
        cy.get(':nth-child(4) > .MuiFormControlLabel-root').then(box => {
            box.is(':disabled') ? 
                cy.log("Checkbox is disabled") : 
                (cy.get(':nth-child(4) > .MuiFormControlLabel-root').click(), cy.log("Checkbox is enabled, so clicked to disable it"));
        });
        cy.get('input[name="website"]').type("https://www.google.com")
        cy.get('input[name="facebook"]').type("https://www.facebook.com")
        cy.get('input[name="instagram"]').type("https://www.instagram.com")
        cy.get('input[name="linkedIn"]').type("https://www.linkedIn.com")
        cy.get('input[name="tiktok"]').type("https://www.tiktok.com")
        cy.get('input[name="youtube"]').type("https://www.youtube.com")

        cy.contains('Third Party Licences').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get('.MuiGrid-container > :nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("1234")
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get(':nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get(':nth-child(9) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')
        cy.get(':nth-child(10) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('1234')

        cy.contains("Password").click()
        cy.get('input[name="password"]').type("12345678")
        cy.get('input[name="reEnter"]').type("12345678")



          


        // cy.contains("Save").click()


    })
})