import {
  browser,
  element,
  by,
  ElementFinder,
  ExpectedConditions,
} from 'protractor';

import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

describe('URL validation', () => {
  it('should match previous url validation screenshot', async (done) => {
    await SkyHostBrowser.get('visual/url-validation');
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        element(by.id('url-validation-input'))
      )
    );
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await element(by.css('#url-validation-input')).sendKeys('foobar');
    await browser.executeScript(
      'document.getElementById("url-validation-input").blur()'
    );
    expect('#screenshot-url-validation').toMatchBaselineScreenshot(done, {
      screenshotName: 'url-validation',
    });
  });

  it('should match previous url validation screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.get('visual/url-validation');
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await browser.wait(
      ExpectedConditions.elementToBeClickable(
        element(by.id('url-validation-input'))
      )
    );
    await element(by.css('#url-validation-input')).sendKeys('foobar');
    await browser.executeScript(
      'document.getElementById("url-validation-input").blur()'
    );
    expect('#screenshot-url-validation').toMatchBaselineScreenshot(done, {
      screenshotName: 'url-validation-xs',
    });
  });
});
