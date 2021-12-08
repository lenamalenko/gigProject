
"use strict";

class Homefaq {

    get faqIcon() { return $('[href="/faq"]'); }
    get header() { return $('[class="faq_headerContainer__1dkuL"]'); }
    get communityGuidelinesIcon() { return $('[class="Button_button__sL3tD undefined "]'); }
    get communityGuidelinesSection() { return $('[class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 "]'); }
    get whoGigturboIsFor() { return $('h2=Who gigturbo is for');}
    get whoGigturboScope() { return $('[style="margin-top: 1rem;"]');}
    
}

module.exports = new Homefaq();