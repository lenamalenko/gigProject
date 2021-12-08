const GigTurboFaqPage = require('../../page_objects/login/homefaq-page');
const faqPageUrl = 'https://beta.gigturbo.com/';

const timeout = 20000;

describe('Faq page', () => {
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it('GT-47 User should be able to Navigate to Community Guidelines section', () => {
        // Navigate to Homepage
        browser.url(faqPageUrl);
        //Click on the section FAQ
        GigTurboFaqPage.faqIcon.click();
        // Wait for load FAQ page
        GigTurboFaqPage.header.waitForDisplayed();
        // Click on section Community Guidelines
        GigTurboFaqPage.communityGuidelinesIcon.click();
        // Wait for load Community Guidelines section
        GigTurboFaqPage.communityGuidelinesSection.waitForDisplayed();
    })

    it('GT-48 User should be able to expand "Who Gigturbo is for?" in Gigturbo basic', () => {
        // Navigate to Homepage
        browser.url(faqPageUrl);
        browser.pause(2000)
        //Click on the section FAQ
        GigTurboFaqPage.faqIcon.click();
        // Wait for load FAQ page
        GigTurboFaqPage.header.waitForDisplayed();
        // Click on section Gigturbo basic
        GigTurboFaqPage.communityGuidelinesIcon.click();
        // Click on section 'Who Gigturbo is for?
        GigTurboFaqPage.whoGigturboIsFor.click();
        // Section has to expand
        GigTurboFaqPage.whoGigturboScope.waitForDisplayed();
    })

    it('GT-53 User should take to FAQ page upon click on FAQ menu link in the header menu', () => {
        // Navigate to Homepage
        browser.url(faqPageUrl);
        browser.pause(2000)
        //Click on the section FAQ
        GigTurboFaqPage.faqIcon.click();
        // Wait for load FAQ page
        GigTurboFaqPage.header.waitForDisplayed();
    })
});