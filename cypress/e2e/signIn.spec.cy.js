import userData from "../fixtures/users/userData.json"
import SignInPage from "../pages/SignInPage"

const signInPage = new SignInPage()


describe('Real World App Test', () => {

    it('Successfull Login', () => {
        signInPage.accessSigninPage()
        signInPage.puttingValidUser(userData.userSeccess.username, userData.userSeccess.password)
        signInPage.clickSinginButton()
        signInPage.checkingLoginSuccessfully()
    })

    it('Failed Login', () => {
        signInPage.accessSigninPage()
        signInPage.puttingValidUser(userData.userFail.username, userData.userFail.password)
        signInPage.clickSinginButton()
        signInPage.checkingErrorMessage()
    })
})