///  <reference types="cypress"/>

describe('Test Login functionality', () => {

  beforeEach(() => {

    cy.visit('/')

  })

  it('should open application under test', () => {
    cy.fixture('example').then(function (data) {

      this.data = data

      cy.login(this.data.username, this.data.password)

      cy.contains('Epic sadface: Username and password do not match any user in this service').should('not.exist')

      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')



    })


  })

  it.skip('should not open application under test', () => {

    cy.login('Admin', 'ain')

    cy.contains('Epic sadface: Username and password do not match any user in this service').should('exist')

    cy.url().should('eq', 'https://www.saucedemo.com/')

  })

  it('should navigate to product page when clicking on a product', () => {
  
    
    cy.login('standard_user', 'secret_sauce');
  
    // Click on the first product
    cy.get('.inventory_item').first().find('.inventory_item_name').click();
  
    // Verify URL includes /inventory-item
    cy.url().should('include', 'https://www.saucedemo.com/inventory-item.html?id=4');
  
  });
  

  afterEach(() => {

    cy.logout()

  })

})
