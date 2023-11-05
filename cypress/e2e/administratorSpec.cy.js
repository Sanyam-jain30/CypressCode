describe('Cross-Browser Adminstrator Testing', () => {
  it('log into website', () => {
    loadLoginPage()
    verifyLoginPage()
    performLogin()
  })
})

function loadLoginPage(){
  cy.visit('http://localhost/airline/login_page.php')
}

function verifyLoginPage(){
  cy.get('input[name="username"]').should('be.visible')
  cy.get('input[name="password"]').should('be.visible')
  cy.get('[type="radio"]').should('be.visible')
  cy.get('input[name="Login"]').should('be.visible')
}

function performLogin(){
  cy.get('input[name="username"]').type('admin')
  cy.get('input[name="password"]').type('passpass')
  cy.get('[type="radio"]').check('Administrator')
  cy.get('input[name="Login"]').click()
}