import { pRegister } from "../../../support/page_objects/invictuscapital/registerPage"
import { pNavigation } from "../../../support/page_objects/invictuscapital/navigationPage"
import { pLogin } from "../../../support/page_objects/invictuscapital/loginPage"
import { pDashboard } from "../../../support/page_objects/invictuscapital/dashboardPage"
import udetails from '../../../fixtures/userdetails.json'


describe('Invictus Register', ()=>{

    beforeEach('open application',()=>{
        cy.openHomePage()

    })

    it('Existing Account Login and verify account balance is $0.00',()=>{
        pNavigation.homeLogin()
        pRegister.setEmailAddress(udetails.username)
        pRegister.setPassword(udetails.password)
        pLogin.clickLogin()
        pDashboard.verifyWalletBalance("$0.00")
    })
})