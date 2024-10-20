class SignUpPage {

    selectorsList(){
        const selectors = {
            accessSignUpPage : "[data-test='signup']",
            checkingSignUpPage : "[data-test='signup-title']",
            firstNameField : "[name='firstName']",
            lastNameField : "[name='lastName']",
            usernameField : "[name='username']",
            passwordField : "[name='password']",
            confirmPasswordField : "[name='confirmPassword']",
            signUpButton : "[type='submit']",
            invalidSignUp : "[aria-invalid='true']"
        }
        return selectors
    }

    accessSignUpPage(){
        cy.get(this.selectorsList().accessSignUpPage).click()
    }
    checkingSignUpPage(){
        cy.get(this.selectorsList().checkingSignUpPage)
    }
    firstNameAdd(firstName){
        cy.get(this.selectorsList().firstNameField).type(firstName)
    }
    lastNameAdd(lastName){
        cy.get(this.selectorsList().lastNameField).type(lastName)
    }
    usernameAdd(username){
        cy.get(this.selectorsList().usernameField).type(username)
    }
    passwordAdd(password){
        cy.get(this.selectorsList().passwordField).type(password)
    }
    confirmPasswordAdd(confirmPassword){
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }
    clickSignUpButton(){
        cy.get(this.selectorsList().signUpButton).click()
    }
    checkingInvalidSignUp(){
        cy.get(this.selectorsList().invalidSignUp)
    }

}
export default SignUpPage