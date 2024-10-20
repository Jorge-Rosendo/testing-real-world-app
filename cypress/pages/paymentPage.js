class PaymentPage {

    selectorsList(){
        const selectors = {
            newTransactionButton : "[data-test='nav-top-new-transaction']",
            contacts : ".MuiGrid-spacing-xs-1",
            amountField : "[name='amount']",
            noteField : "[placeholder='Add a note']",
            payButton : "[data-test='transaction-create-submit-payment']",
            successMessage : "[data-test='alert-bar-success']"
        }
        return selectors
    }

    goToTransactionSection(){
        cy.get(this.selectorsList().newTransactionButton).click()
    }
    selectContact(){
        cy.get(this.selectorsList().contacts).eq(0).click()
    }
    puttingAmount(value){
        cy.get(this.selectorsList().amountField).type(value)
    }
    puttingNote(note){
        cy.get(this.selectorsList().noteField).type(note)
    }
    confirmingPayment(){
        cy.get(this.selectorsList().payButton).click()
    }
    successMessage(){
        cy.get(this.selectorsList().successMessage)
    }
}
export default PaymentPage