describe('Cross-Browser Add Aircraft Detail Testing', () => {
  it('log into website', () => {
    loadPage()
    verifyPage()
    performAction()
  })
})

function loadPage(){
  cy.visit('http://localhost/airline/add_jet_details.php')
}

function verifyPage(){
  cy.get('input[name="jet_id"]').should('be.visible')
  cy.get('input[name="jet_type"]').should('be.visible')
  cy.get('input[name="jet_capacity"]').should('be.visible')
  cy.get('input[name="Submit"]').should('be.visible')
}

function performAction(){
  cy.get('input[name="jet_id"]').type('AIRBUS1001')
  cy.get('input[name="jet_type"]').type('ATR')
  cy.get('input[name="jet_capacity"]').type('100')
  cy.get('input[name="Submit"]').click()
}