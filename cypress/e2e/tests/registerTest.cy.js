    import RegisterPage, { regObj } from '../../pages/registerPage.js';
    import registerData from '../../fixtures/registerData.json';


    describe('User Registration', () => {
        it('should register a new user', () => {
            regObj.openUrl();
            regObj.enterFirstName(registerData.firstName)
            regObj.enterLasttName(registerData.lastName)
            regObj.enterEmail(registerData.email)
            regObj.enterTelephone(registerData.telephone)
            regObj.enterPassword(registerData.password)
            regObj.clickOnAgreeCheckBox()
            regObj.clickOnContinueBtn()
            });

        });