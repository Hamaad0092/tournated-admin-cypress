/// <reference types='cypress' />
describe('Add new Club',()=>{
    it('Club should be added',()=>{
        cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
        cy.get(
          "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
        ).type("superAdmin@gmail.com");
        cy.get('input[name="password"]').type("password");
        cy.contains('Log In').click()
        cy.wait(8000);
        cy.get(".sidebar-toggler > div").click();
        cy.get('.css-1a8w37c > :nth-child(4)').click();
        cy.get('[href="/dashboard/clubs"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get(':nth-child(3) > .MuiButton-root').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Al Nassr')
        const photo='avatar.png'
        cy.get('input[type="file"]').attachFile(photo)
        cy.get('input[name="country"]').type('i').wait(1000)
        cy.get('li[data-option-index="0"]').click()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('chichawatni')
        cy.get(':nth-child(2) > :nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('jorgi 234a est')
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.google.com')
        cy.contains('Go to Next').click()

        //  *********Contact Details******

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("jorgie89@gmail.com")
        cy.get('select[name="phoneCountry"]').select('Pakistan')
        cy.get('input[name="phone"]').type('3337896543')
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.google.com')
        cy.get('.css-1a8w37c > :nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type("https://www.instagram.com")
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.facebook.com')
        cy.get(':nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.tiktok.com')
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.twiter.com')
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('https://www.linkedIn.com')
        cy.contains('Go to Next').click()

        // **********Services & Resources**********

        cy.get(':nth-child(1) > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-multiple-name').click().wait(1000)
        cy.get('li[data-option-index="0"]').click()

        cy.get(':nth-child(2) > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-multiple-name').click().wait(1000)
        cy.get('li[data-option-index="0"]').click()

        cy.contains('Add Resources').click().wait(1000)

        cy.get(':nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('abc')
        cy.get(':nth-child(4) > .MuiOutlinedInput-root > .MuiNativeSelect-select').select('pickleball')
        
        cy.get(':nth-child(6) > .MuiOutlinedInput-root > .MuiNativeSelect-select').select('indoor')

        cy.contains('Save').click()
        cy.contains('Go to Next').click()
        cy.contains('Go to Next').click()

        // *******Management********

        cy.get(':nth-child(2) > .MuiOutlinedInput-root > .MuiNativeSelect-select').select('zaman').wait(1000)
        cy.get('#demo-multiple-name').click().wait(1000)
        cy.get('li[data-option-index="0"]').click()

        // cy.contains("Save").click() ********Button Disabled*******
    })
})