describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.browserstack.com/users/sign_in')
      
      cy.get('#signin_signup_form > .auth-form-container > .row > .auth-form-tablet > .auth-form-fieldset > .action-links > .input-wrapper > .sign-up-link').click()
      cy.get('#user_full_name').type("srocky")
      cy.get('#user_email_login').type("srocky@gmail.com")
      cy.get('#user_password').type("sr12345678")
      cy.get('#tnc_checkbox').click()
      cy.get('#user_submit').click()
     
    })
})