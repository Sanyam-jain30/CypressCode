describe('Cross-Browser Customer Testing', () => {
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
  cy.get('input[name="username"]').type('sanyam')
  cy.get('input[name="password"]').type('sanyam007')
  cy.get('[type="radio"]').check('Customer')
  cy.get('input[name="Login"]').click()
}