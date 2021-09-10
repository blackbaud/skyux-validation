import {
  browser,
  element,
  by, ExpectedConditions
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Email validation', () => {

  it('should match previous email validation screenshot', async (done) => {
    await SkyHostBrowser.get('visual/email-validation');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.id('email-validation-input'))));
    await element(by.css('#email-validation-input')).sendKeys('foobar');
    await browser.executeScript('document.getElementById("email-validation-input").blur()');
    expect('#screenshot-email-validation').toMatchBaselineScreenshot(done, {
      screenshotName: 'email-validation'
    });
  });

  it('should match previous email validation screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/email-validation');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.id('email-validation-input'))));
    await element(by.css('#email-validation-input')).sendKeys('foobar');
    await browser.executeScript('document.getElementById("email-validation-input").blur()');
    expect('#screenshot-email-validation').toMatchBaselineScreenshot(done, {
      screenshotName: 'email-validation-xs'
    });
  });

});
