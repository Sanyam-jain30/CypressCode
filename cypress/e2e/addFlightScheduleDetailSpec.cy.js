describe('Cross-Browser Add Flight Schedule Detail Testing', () => {
  it('log into website', () => {
    loadPage()
    verifyPage()
    performAction()
  })
})

function loadPage(){
  cy.visit('http://localhost/airline/add_flight_details.php')
}

function verifyPage(){
  cy.get('input[name="flight_no"]').should('be.visible')
  cy.get('input[name="origin"]').should('be.visible')
  cy.get('input[name="destination"]').should('be.visible')
  cy.get('input[name="dep_date"]').should('be.visible')
  cy.get('input[name="arr_date"]').should('be.visible')
  cy.get('input[name="dep_time"]').should('be.visible')
  cy.get('input[name="arr_time"]').should('be.visible')
  cy.get('input[name="seats_eco"]').should('be.visible')
  cy.get('input[name="seats_bus"]').should('be.visible')
  cy.get('input[name="price_eco"]').should('be.visible')
  cy.get('input[name="price_bus"]').should('be.visible')
  cy.get('input[name="jet_id"]').should('be.visible')
  cy.get('input[name="Submit"]').should('be.visible')
}

function performAction(){
  cy.get('input[name="flight_no"]').type('BB107')
  cy.get('input[name="origin"]').type('Bengaluru')
  cy.get('input[name="destination"]').type('Chennai')
  cy.get('input[name="dep_date"]').type('2023-10-01')
  cy.get('input[name="arr_date"]').type('2023-10-01')
  cy.get('input[name="dep_time"]').type('10:33:00')
  cy.get('input[name="arr_time"]').type('13:40:00')
  cy.get('input[name="seats_eco"]').type('100')
  cy.get('input[name="seats_bus"]').type('15')
  cy.get('input[name="price_eco"]').type('1000')
  cy.get('input[name="price_bus"]').type('2000')
  cy.get('input[name="jet_id"]').type('10001')
  cy.get('input[name="Submit"]').click()
}