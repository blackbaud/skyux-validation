import {
  browser,
  element,
  by
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('URL validation', () => {

  it('should match previous url validation screenshot', (done) => {
    SkyHostBrowser.get('visual/url-validation');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('#url-validation-input')).sendKeys('foobar');
    browser.executeScript('document.getElementById("url-validation-input").blur()');
    expect('#screenshot-url-validation').toMatchBaselineScreenshot(done);
  });

  it('should match previous url validation screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/url-validation');
    SkyHostBrowser.setWindowBreakpoint('xs');
    element(by.css('#url-validation-input')).sendKeys('foobar');
    browser.executeScript('document.getElementById("url-validation-input").blur()');
    expect('#screenshot-url-validation').toMatchBaselineScreenshot(done);
  });

});
