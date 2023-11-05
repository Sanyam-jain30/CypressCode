describe('Cross-Browser Activate Aircraft Testing', () => {
  it('log into website', () => {
    loadPage()
    verifyPage()
    performAction()
  })
})

function loadPage(){
  cy.visit('http://localhost/airline/activate_jet_details.php')
}

function verifyPage(){
  cy.get('input[name="jet_id"]').should('be.visible')
  cy.get('input[name="Activate"]').should('be.visible')
}

function performAction(){
  cy.get('input[name="jet_id"]').type('AIRBUS1001')
  cy.get('input[name="Activate"]').click()
}