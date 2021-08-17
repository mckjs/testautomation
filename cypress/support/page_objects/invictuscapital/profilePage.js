import ilogin from '../../../fixtures/identifiers/elogin.json'
import iurls from '../../../fixtures/identifiers/eurls.json'
import iprofile from '../../../fixtures/identifiers/eprofile.json'

export class profile{
    verifyCorrectUserLogin(fname,lname){
    cy.get(iprofile.iconAvatar).click()
    cy.get(iprofile.navCardProfile).contains(fname + ' ' + lname)
    }

    clickLogout(){
        cy.get(iprofile.navCardItem).eq(1).click()
        cy.url().should('include', iurls.logout)
    }

    example(){
        cy.get(iprofile.btnCircularProgress).click()
        cy.get(iprofile.navCardAuth).then(menu => {
            // cy.get('*[class^="intercom-chat-card"]', { timeout: itimeout }).should('be.visible');
            cy.wrap(menu).find(iprofile.btnNavCardAuthWrap)
        })
    }
}

export const pProfile = new profile()