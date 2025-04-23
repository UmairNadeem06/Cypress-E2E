export class registerPage {
    weblocatores = {
      
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        agreeCheckBox: 'input[name="agree"]',
        continueBtn: 'input[value="Continue"]'                           
    }

    openUrl(){
        cy.visit(Cypress.env('registerUrl'))
    }

    enterFirstName(FName){
        cy.get(this.weblocatores.firstName).type('Umair')

    }

    enterLasttName(LName){
        cy.get(this.weblocatores.lastName).type('Nadeem')
        
    }

    enterEmail(email){
        cy.get(this.weblocatores.email).type('uminadeem06@gmail.com')
    }

    enterTelephone(telephone){
        cy.get(this.weblocatores.telephone).type('03001234567')
    }

    enterPassword(password){
        cy.get(this.weblocatores.password).type('password123')
        cy.get(this.weblocatores.confirmPassword).type('password123')
    }

    clickOnAgreeCheckBox(){
        cy.get(this.weblocatores.agreeCheckBox).check()
    }

    clickOnContinueBtn(){
        cy.get(this.weblocatores.continueBtn).click()
    }

}

export const regObj = new registerPage();
