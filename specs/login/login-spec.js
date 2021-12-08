
const LoginPage = require('../../page_objects/login/login-page');
const loginUrl = 'https://beta.gigturbo.com';


describe('Login', () => {
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('User should be able to Log In using phone number', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Type in code
        LoginPage.loginDashbord();
        // Wait for daschboard page displaid
        LoginPage.GigDashboardPage.waitForDisplayed();
    })

    it('User should not be able to log in without phone number', () => {
        // Navigate to login page
        browser.url(loginUrl);
        //Click “Log In” button
        LoginPage.buttonLogIn.click()
        //Click on arrow without typing phone number
        LoginPage.arrowLogin.click()
        // Wait for  textbox is highlighted 
        LoginPage.Logintextbox.waitForDisplayed();
    })

    it('User should be able to log out', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Login
        LoginPage.loginDashbord();
        //Click on Profile icon on the top right
        LoginPage.ProfileIcon.click()
        //Click on Logout batton
        LoginPage.LogoutButton.click()
        //Wait for home page displaid
        LoginPage.HomeGigPage.waitForDisplayed();
    })
});

