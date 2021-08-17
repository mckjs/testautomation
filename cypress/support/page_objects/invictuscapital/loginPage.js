import { pNavigation } from "../../../support/page_objects/invictuscapital/navigationPage"
import ilogin from '../../../fixtures/identifiers/elogin.json'
import dash from '../../../fixtures/identifiers/edashboard.json'
import urls from '../../../fixtures/identifiers/eurls.json'

export class login{
    clickCreateAccount(){
        cy.get(ilogin.btnCreateYourAccount).click()
        cy.url().should('include', urls.signup)
    }

    clickLogin(){
        cy.get(ilogin.btnLogin).click()
        pNavigation.verifyCorrectRedirectUrl(urls.dashboard)
    }

    verifyWalletBalance(sAmount){
        cy.get(dash.balanceCard).contains(sAmount)
    }
}

export const pLogin = new login()