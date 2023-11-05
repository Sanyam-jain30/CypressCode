describe('Cross-Browser Cancel Ticket Testing', () => {
  it('log into website', () => {
    loadPage()
    verifyPage()
    performAction()
  })
})

function loadPage(){
  cy.visit('http://localhost/airline/cancel_booked_tickets.php')
}

function verifyPage(){
  cy.get('input[name="pnr"]').should('be.visible')
  cy.get('input[name="Cancel_Ticket"]').should('be.visible')
}

function performAction(){
  cy.get('input[name="pnr"]').type('2369143')
  cy.get('input[name="Cancel_Ticket"]').click()
}