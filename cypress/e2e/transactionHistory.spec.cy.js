import userData from "../fixtures/users/userData.json"
import SignInPage from "../pages/singInPage"
import TransactionPage from "../pages/transactionPage"

const signInPage = new SignInPage()
const transactionPage = new TransactionPage()


describe('Real World App Test', () => {

    it('View successful transaction history', () => {
        signInPage.accessSigninPage()
        signInPage.puttingValidUser(userData.userSeccess.username, userData.userSeccess.password)
        signInPage.clickSinginButton()
        signInPage.checkingLoginSuccessfully()
        transactionPage.accessingTransactions()
        transactionPage.checkingTransaction()
        transactionPage.openTransaction()
    })

    it('Try to view transaction history with no previous transactions', () => {
        signInPage.accessSigninPage()
        signInPage.puttingValidUser(userData.userWithoutTransactions.username, userData.userWithoutTransactions.password)
        signInPage.clickSinginButton()
        signInPage.checkingLoginSuccessfully()
        transactionPage.accessingTransactions()
        transactionPage.noTransactionMessage()
    })
})