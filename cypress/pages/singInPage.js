class SignInPage {

    selectorsList(){
        const selectors = {
            usernameField : "[name='username']",
            passwordField : "[name='password']",
            singinButton: "[type='submit']",
            homeButton : "[data-test='sidenav-home']",
            errorMessage : "[data-test='signin-error']"
        }
        return selectors
    }

    accessSigninPage(){
        cy.visit("/signin")
    }
    puttingValidUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
    }
    clickSinginButton(){
        cy.get(this.selectorsList().singinButton).click()
    }
    checkingLoginSuccessfully(){
        cy.get(this.selectorsList().homeButton)
    }
    checkingErrorMessage(){
        cy.get(this.selectorsList().errorMessage)
    }


}
export default SignInPage