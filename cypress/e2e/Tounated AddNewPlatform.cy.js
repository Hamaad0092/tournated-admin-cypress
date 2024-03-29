describe("User should create Add New Platform", () => {
  it("Admin login", () => {
    cy.visit("https://vertexo-admin-git-dev-waleedsaifi.vercel.app/dashboard");
    cy.get(
      "form > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    ).type("superAdmin@gmail.com");
    cy.get('input[name="password"]').type("password");
    cy.contains('Log In').click()
    cy.wait(8000);
    cy.get(".sidebar-toggler > div").click();
    cy.contains('Super Data').scrollIntoView().should('be.visible').click(); 
    cy.get(
      '[href="/dashboard/platforms"] > .MuiListItemText-root > .MuiTypography-root'
    ).click();
    cy.get(":nth-child(3) > .MuiButton-root").click();
    cy.get(".PrivateSwitchBase-input").click();
    cy.get(
      ":nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    )
      .clear()
      .type("John");
    cy.get(
    )
      .clear()
      .type("Dohn");
    cy.get(
      ":nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    )
      .clear()
      .type("Jack@gmail.com");
    cy.get(
      ":nth-child(2) > :nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    )
      .clear()
      .type("Password");
    cy.get(
      ":nth-child(2) > :nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root"
    )
      .clear()
      .type("Password");
    cy.get(
      ":nth-child(4) > .css-6wbyuk-MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    )
      .clear()
      .type("Harlay");
    cy.get(
      ":nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    )
      .clear()
      .type("H.H");
    cy.get("#teamName").click();
    cy.get('[data-value="National organization"]').click();
    cy.get('textarea[name="about"]').type("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that");
    cy.get('input[name="contactEmail"]').type("jack@gmail.com");
    cy.get(".PhoneInputCountrySelect").select("Pakistan");
    cy.get(".PhoneInputInput").type("3120109888", { focus: true });
    cy.get(
      ":nth-child(3) > :nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    ).type(
      "https://vertexo-admin-git-dev-waleedsaifi.vercel.app/__/#/specs/runner?file=cypress/e2e/Tounated+AddNewPlateform.cy.js"
    );
    cy.get(
      ":nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    ).type("https://www.instagram.com");
    cy.contains('Continue').click()

    //*******    >>>Plateform General<<< ******
    cy.get(
      ":nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input"
    ).type("Chelsea");
    cy.wait(4000);
    cy.get("#teamName").click();
    cy.get('[data-value="National"]').click();
    cy.get(
      ":nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-multiple-name"
    )
      .click()
      .type("Pakistan");
    cy.contains(".MuiAutocomplete-option", "Pakistan").click();
    cy.get(
      ":nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-multiple-name"
    )
      .click()
      .type("Chess");
    cy.contains(".MuiAutocomplete-option", "Chess").click();
    cy.wait(4000);
    cy.get(
      ":nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    )
      .click()
      .type("Asia");
    cy.contains(".MuiAutocomplete-option", "Asia").click();
    cy.get(
      ":nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #language-select"
    )
      .click()
      .type("USD");
    cy.contains(".MuiAutocomplete-option", "USD").click();
    cy.get(".ql-editor").type(
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    );
    cy.get(".MuiSwitch-input").click();
    cy.contains("Continue").click();

    //****** >>>Apperance<<< *****
    const Photo = "avatar.png";
    cy.get(
      ".MuiGrid-spacing-xs-3 > :nth-child(1) > .css-rzymmg > .css-6iggc8 > .MuiBox-root > .MuiTypography-root"
    ).attachFile(Photo);

    //***** >>>Apperance <<< *****
    const profilePic = "dv.PNG";

    cy.get(
      'input[type="file"]'
    ).attachFile(profilePic);

    

    cy.get(
        'input[type="file"]'
    ).eq(1).attachFile(profilePic);

    cy.get(
        'input[type="file"]'
    ).eq(2).attachFile(profilePic);
    
    // cy.get(':nth-child(1) > .jss84 > .css-1kw8um1 > .css-1lomthf > :nth-child(2) > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('0')
    // cy.get(':nth-child(1) > .jss84 > .css-1kw8um1 > .css-1lomthf > :nth-child(3) > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('255')
    // cy.get(':nth-child(2) > .jss84 > .css-1kw8um1 > :nth-child(1) > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('00ff69')
    // cy.get(':nth-child(2) > .jss84 > .css-1kw8um1 > .css-1lomthf > :nth-child(1) > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('0')
    // cy.get(':nth-child(2) > .jss84 > .css-1kw8um1 > .css-1lomthf > :nth-child(1) > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('255')
    // cy.get(':nth-child(2) > .jss84 > .css-1kw8um1 > .css-1lomthf > :nth-child(3) > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear().type('105')
    cy.contains('Continue').click()

//****** >>>Company Details<<< *****
cy.get('input[name="companyName"]').type('Harley')
cy.get(':nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('12223334444')
cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('hale 234 e rth')
cy.get('.MuiGrid-container > :nth-child(4) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Donald')
cy.get(':nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Random')
cy.get(':nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('Rohan@gmail.com')
cy.contains('Continue').click()

// ****** >>>Landing &Navigation<<< *******
cy.get('input.MuiSwitch-input').should('be.checked');
cy.get('.css-1wkwkk7 > :nth-child(1) > img').click()
cy.contains('Continue').click()
//**** >>>>Itegration<<<< */
cy.contains('Continue').click()
//*****          >>>> Additional request <<<<<  *********/
cy.get(':nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('It is a long established fact that a reader will be distracted by the readable')
const img = 'Capture.PNG';
cy.get('input[type="file"]').attachFile(img);
// cy.get('.css-n47iab-MuiButtonBase-root-MuiButton-root').click()    *****BUTTON DISABLED******

});
});
