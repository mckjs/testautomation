cy.generate = {
    name: () => {
        return cy.faker.name.firstName()
    },
    lastname: () => {
        return  cy.faker.name.lastName()
    },
    email: () => {
        return cy.faker.internet.userName() + '@rhyta.com'
    },
    password: () => {
        return  "1234567890"
    }
}