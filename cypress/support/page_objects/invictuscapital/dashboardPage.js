import dash from '../../../fixtures/identifiers/edashboard.json'
let walletBalance = dash.balanceCard

export class dashboard{

       verifyWalletBalance(sAmount){
        cy.scrolltoview(walletBalance)
        cy.get(walletBalance).contains(sAmount)

    }
}

export const pDashboard = new dashboard()