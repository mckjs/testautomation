import { pNavigation } from "../../../support/page_objects/invictuscapital/navigationPage"
let itimeout = 1500
import iurls from '../../../fixtures/identifiers/eurls.json'
import iregister from '../../../fixtures/identifiers/eregister.json'

export class register{
    setFirstName(fname){
        cy.get(iregister.inputFname).type(fname)
    }

    setLastName(lname){
        cy.get(iregister.inputLname).type(lname)
    }

    setEmailAddress(email){
        cy.get(iregister.inputEmail).type(email)
    }


    setPassword(password){
        cy.get(iregister.inputPassword).type(password)
    }

    setTerms(){
        cy.get(iregister.checkTerms).not('[disabled]').check().should('be.checked')
    }

    clickCreateAccount(){
        // cy.get('*[class^="intercom-chat-card"]', { timeout: itimeout }).should('be.visible');
        cy.wait(itimeout)
        cy.get(iregister.btnCreateAccount).click()
        cy.wait(itimeout * 5)
        pNavigation.verifyCorrectRedirectUrl(iurls.dashboard)
    }
}

export const pRegister = new register()