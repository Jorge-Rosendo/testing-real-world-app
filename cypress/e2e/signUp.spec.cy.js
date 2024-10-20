import SignInPage from "../pages/SignInPage"
import SignUpPage from "../pages/SignUpPage"

const signInPage = new SignInPage()
const signUpPage = new SignUpPage()

describe('Real World App Test', () => {

    it('Successfull Registration', () => {
        signInPage.accessSigninPage()
        signUpPage.accessSignUpPage()
        signUpPage.checkingSignUpPage()
        signUpPage.firstNameAdd("Jorge")
        signUpPage.lastNameAdd("Rosendo")
        signUpPage.usernameAdd("QARos")
        signUpPage.passwordAdd("test123")
        signUpPage.confirmPasswordAdd("test123")
        signUpPage.clickSignUpButton()
    })
    it('Failed Registration', () => {
        signInPage.accessSigninPage()
        signUpPage.accessSignUpPage()
        signUpPage.checkingSignUpPage()
        signUpPage.lastNameAdd("Rosendo")
        signUpPage.usernameAdd("QARos")
        signUpPage.passwordAdd("test123")
        signUpPage.confirmPasswordAdd("test123")
        signUpPage.checkingInvalidSignUp()
    })
})