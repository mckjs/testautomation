import { pNavigation } from "../../../support/page_objects/invictuscapital/navigationPage"

describe('Invictus Navigation', ()=>{
    beforeEach('open application',()=>{
        cy.openHomePage()
    })

    it('Verify navigation accross the pages',()=>{
        pNavigation.homeLogin()
        pNavigation.homeRegister()
    })

    
})