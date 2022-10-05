///reference types="Cypress"

class SearchObject {
    open() {
        cy.visit ('https://store.google.com/us/?hl=en-US&regionRedirect=true')
    }

   SearchButton(){
        return cy.get ('div[aria-label="Search the Google store"]')
   }

   SearchElement(){
        return cy.get ('input[placeholder="Search Google Store"]').type(`pixel 6a{enter}`)
    }


    GoToElementPage(){
        return cy.contains ('Pixel 6a').should('exist')
    }

    SearchGoogleStoreLogoButton(){
        return cy.get('[aria-label="Google Store home. Google Store logo."]')
    }

  }

export default  new SearchObject();
