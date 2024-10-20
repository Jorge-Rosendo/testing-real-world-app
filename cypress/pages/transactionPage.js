class TransactionPage {

    selectorsList(){
        const selectors = {
            mineButton : "[data-test='nav-personal-tab']",
            transactionList : ".TransactionTitle-title",
            transactionPage : "[data-test='transaction-detail-header']",
            noTransactionConfirm : "[data-test='empty-list-header']"
        }
        return selectors
    }

    
    accessingTransactions(){
        cy.get(this.selectorsList().mineButton).click()
    }
    checkingTransaction(){
        cy.get(this.selectorsList().transactionList).should('be.visible')
        cy.get(this.selectorsList().transactionList).eq(2).scrollIntoView().click({ force: true })
    }
    openTransaction(){
        cy.get(this.selectorsList().transactionPage)
    }
    noTransactionMessage(){
        cy.get(this.selectorsList().noTransactionConfirm)
    }
}

export default TransactionPage