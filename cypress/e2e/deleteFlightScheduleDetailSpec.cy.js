describe('Cross-Browser Delete Flight Schedule Detail Testing', () => {
  it('log into website', () => {
    loadPage()
    verifyPage()
    performAction()
  })
})

function loadPage(){
  cy.visit('http://localhost/airline/delete_flight_details.php')
}

function verifyPage(){
  cy.get('input[name="flight_no"]').should('be.visible')
  cy.get('input[name="departure_date"]').should('be.visible')
  cy.get('input[name="Delete"]').should('be.visible')
}

function performAction(){
  cy.get('input[name="flight_no"]').type('AA101')
  cy.get('input[name="departure_date"]').type('2017-12-01')
  cy.get('input[name="Delete"]').click()
}