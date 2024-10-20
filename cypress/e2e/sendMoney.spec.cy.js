import userData from "../fixtures/users/userData.json"
import SignInPage from "../pages/singInPage"
import PaymentPage from "../pages/paymentPage"

const signInPage = new SignInPage()
const paymentPage = new PaymentPage()

describe('Real World App Test', () => {

    it('Send money with sufficient balance', () => {
        signInPage.accessSigninPage()
        signInPage.puttingValidUser(userData.userSeccess.username, userData.userSeccess.password)
        signInPage.clickSinginButton()
        signInPage.checkingLoginSuccessfully()
        paymentPage.goToTransactionSection()
        paymentPage.selectContact()
        paymentPage.puttingAmount("100.00")
        paymentPage.puttingNote("debt payment")
        paymentPage.confirmingPayment()
        paymentPage.successMessage()
    })
})