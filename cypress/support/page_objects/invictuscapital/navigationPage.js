let itimeout = 3000
import ilogin from '../../../fixtures/identifiers/elogin.json'
import idash from '../../../fixtures/identifiers/edashboard.json'
import iurls from '../../../fixtures/identifiers/eurls.json'
export class navigation{
    homeLogin(){
        cy.visit(iurls.login)
        cy.url().should('include', iurls.login)

    }

    homeRegister(){
        cy.get(ilogin.btnCreateYourAccount).click()
        cy.url().should('include', iurls.signup)
    }

    verifyCorrectRedirectUrl(surl){
        cy.wait(itimeout)
        cy.url().should('include', surl)

    }
}

export const pNavigation = new navigation()