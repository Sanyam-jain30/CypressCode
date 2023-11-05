describe('Cross-Browser Print Ticket Testing', () => {
  it('log into website', () => {
    loadPage()
    verifyPage()
    performAction()
  })
})

function loadPage(){
  cy.visit('http://localhost/airline/pnr.php')
}

function verifyPage(){
  cy.get('input[name="pnr"]').should('be.visible')
  cy.get('input[name="u_sub"]').should('be.visible')
}

function performAction(){
  cy.get('input[name="pnr"]').type('2033264')
  cy.get('input[name="u_sub"]').click()
}