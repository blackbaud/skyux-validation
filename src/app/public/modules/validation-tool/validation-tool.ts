export class SkyValidationTool {
  public static validateEmailAddress(emailAddress: string): boolean {
    // The regex was obtained from http://emailregex.com/
    // which claims to correctly handle ~99% of all email addresses.
    // tslint:disable-next-line:max-line-length
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(emailAddress);
  }

  public static validateUrl(url: string): boolean {
    let regex = /^((http|https):\/\/)?([\w\-]+\.)+[\w\-]+/i;
    return regex.test(url);
  }
}
