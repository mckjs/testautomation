import { pProfile } from "../../../support/page_objects/invictuscapital/profilePage"
import { pRegister } from "../../../support/page_objects/invictuscapital/registerPage"
import { pNavigation } from "../../../support/page_objects/invictuscapital/navigationPage"
import { pLogin } from "../../../support/page_objects/invictuscapital/loginPage"
import { pDashboard } from "../../../support/page_objects/invictuscapital/dashboardPage"

let fname = cy.generate.name()
let lname= cy.generate.lastname()
let email= cy.generate.email()
let password= cy.generate.password()

describe('Invictus Register', ()=>{
    beforeEach('open application',()=>{
        cy.openHomePage()
     
    })

    it('Verify user can register successfully',()=>{
        pNavigation.homeLogin()
        pLogin.clickCreateAccount()
        pRegister.setFirstName(fname)
        pRegister.setLastName(lname)
        pRegister.setEmailAddress(email)
        pRegister.setPassword(password)
        pRegister.setTerms()
        pRegister.clickCreateAccount()
        pProfile.verifyCorrectUserLogin(fname,lname)
    })

    it('Login and verify account balance is $0.00',()=>{
        pNavigation.homeLogin()
        pRegister.setEmailAddress(email)
        pRegister.setPassword(password)
        pLogin.clickLogin()
        pDashboard.verifyWalletBalance("$0.00")
    })
})