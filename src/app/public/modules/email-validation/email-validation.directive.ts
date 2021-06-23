import {
  Directive,
  forwardRef
} from '@angular/core';

import {
  Validator,
  NG_VALIDATORS,
  AbstractControl
} from '@angular/forms';

import {
  SkyValidation
} from '../validation/validation';

// tslint:disable:no-forward-ref no-use-before-declare
const SKY_EMAIL_VALIDATION_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => SkyEmailValidationDirective),
  multi: true
};
// tslint:enable

/**
 * Creates an input to validate email addresses. Place this attribute on an `input` element.
 * If users enter values that are not valid email addresses, an error message appears.
 * The directive uses `NgModel` to bind data.
 */
@Directive({
  selector: '[skyEmailValidation]',
  providers: [SKY_EMAIL_VALIDATION_VALIDATOR]
})

export class SkyEmailValidationDirective implements Validator {

  public validate(control: AbstractControl): {[key: string]: any} | null {
    let value = control.value;

    if (!value) {
      // tslint:disable-next-line: no-null-keyword
      return null;
    }

    if (!this.emailIsValid(value)) {
      return {
        'skyEmail': {
          invalid: control.value
        }
      };
    }

    // tslint:disable-next-line: no-null-keyword
    return null;
  }

  public emailIsValid(email: string): boolean {
    return SkyValidation.isEmail(email);
  }
}
