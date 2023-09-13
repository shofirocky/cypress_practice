describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.browserstack.com/users/sign_in')
      
      cy.get('#user_email_login').type("srocky.com")
      cy.get('#user_password').type("r12345678")
      cy.get('#user_submit').click()

      
      
     
    })
})