describe('Cross-Browser Book Flight Testing', () => {
  it('log into website', () => {
    loadPage()
    verifyPage()
    performAction()
  })
})

function loadPage(){
  cy.visit('http://localhost/airline/book_tickets.php')
}

function verifyPage(){
  cy.get('input[name="origin"]').should('be.visible')
  cy.get('input[name="destination"]').should('be.visible')
  cy.get('input[name="dep_date"]').should('be.visible')
  cy.get('input[name="no_of_pass"]').should('be.visible')
  cy.get('select[name="class"]').should('be.visible')
  cy.get('input[name="Search"]').should('be.visible')
}

function performAction(){
  cy.get('input[name="origin"]').type('Bengaluru')
  cy.get('input[name="destination"]').type('Chennai')
  cy.get('input[name="dep_date"]').type('2023-11-03')
  cy.get('input[name="no_of_pass"]').type('3')
  cy.get('select[name="class"]').select('Economy')
  cy.get('input[name="Search"]').click()
}