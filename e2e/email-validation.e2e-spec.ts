import {
  browser,
  element,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Email validation', () => {

  it('should match previous email validation screenshot', (done) => {
    SkyHostBrowser.get('visual/email-validation');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#email-validation-input')).sendKeys('foobar');
    browser.executeScript('document.getElementById("email-validation-input").blur()');
    expect('#screenshot-email-validation').toMatchBaselineScreenshot(done);
  });

  it('should match previous email validation screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/email-validation');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#email-validation-input')).sendKeys('foobar');
    browser.executeScript('document.getElementById("email-validation-input").blur()');
    expect('#screenshot-email-validation').toMatchBaselineScreenshot(done);
  });

});
