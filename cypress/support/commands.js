// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("openHomePage",() =>{
    cy.visit('/')
})

Cypress.Commands.add("scrolltoview",(elementText) =>{
    // cy.get('.sidebar').scrollTo('bottom')
    cy.get(elementText).scrollIntoView().should('be.visible')

})

// Cypress.Commands.add("getSelector",(selectorType,selectorValue) =>{
//     return this.myElement(selectorType,selectorValue)
// })

// function myElement(selectorType, selectorValue) {
//     const selector;
//     switch(selectorType.toUpperCase()) {
//         case ID:
//             selector = cy.get('#'+selectorValue)
//             break;
//         case CLASS_NAME:
//             selector = cy.get('.'+selectorValue)
//           break;
//         case CLASS_COMPLEX:
//             selector =  cy.get('.'+selectorValue)
//         break;
//         case CLASS_VALUE:
//         // code block
//         break;
//         case TAG_NAME_VALUE:
//         // cy.get('[placeholder="Email"]')
//         selector = cy.get('['+selectorValue+']')
//         break;
//         case ATTRIBUTE:
//         // cy.get('[placeholder]')
//             selector =  cy.get('['+selectorType+']')
//         break;
//         case ATTRIBUTE_VALUE:
//         // cy.get('[placeholder="Email"]')

//            break;
//         default:
//             selector =  cy.get(selectorType)
//         }
//     return selector
// }