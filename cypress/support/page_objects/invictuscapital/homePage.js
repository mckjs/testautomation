import dash from '../../../fixtures/identifiers/ehome.json'
import urls from '../../../fixtures/identifiers/eurls.json'

let btnCreateYourAcc = dash.btnCreateYourAccount

export class home{
    clickCreateYourAccount(){
        cy.get(btnCreateYourAcc).eq(1).click()
        cy.url().should('include', urls.login)

    }
}

export const pHome = new home()