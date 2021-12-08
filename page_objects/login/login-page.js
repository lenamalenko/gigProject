"use strict";

class Login {
    
    get Logintextbox() { return $('[class="Input_contentContainer__2qM_i d-flex align-items-center Input_error__2x-lH"]'); }
    get buttonLogIn() { return $('[href="/login"]'); }
    get arrowLogin() { return $('[class="Button_button__sL3tD Button_signupButton__pGlka undefined"]'); }
    get GigDashboardPage() { return $('h1=Get access to your full membership'); }
    get ProfileIcon() { return $('[class="TopMenu_noImage__1RMpC"]'); }
    get LogoutButton() { return $('[class="far fa-sign-out-alt"]'); }
    get HomeGigPage() { return $('[alt="graph"]'); }


    // Helper method to avoid code duplication
    loginDashbord(phone = '14154009912', pin = '000000') {
        this.buttonLogIn.click();
        $('[type="tel"]').waitForClickable();
        $('[type="tel"]').click();
        $('[type="tel"]').setValue(phone);
        $('[class="Button_button__sL3tD Button_signupButton__pGlka undefined"]').click();
        $('[class="d-flex justify-content-center position-relative"] input').setValue(pin);
    }


    login() {
        this.Logintextbox.waitForDisplayed();
        this.arrowLogin.click();
        this.GigDashboardPage.waitForDisplayed();
        this.ProfileIcon.click();
        this.LogoutButton.click()
        this.HomeGigPage.waitForDisplayed();
    }
}
module.exports = new Login();