import {Directive, forwardRef} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: 'input[ngModel][ticketRequireFalse]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RequireFalseDirective), multi: true }
  ]
})
export class RequireFalseDirective implements Validator {

  validate(c: FormControl) {
    return this.requireFalse(c);
  }

  constructor() {
    console.log('here');
  }


  private requireFalse(c: FormControl) {
    if (c.value === false) {
      return null;
    } else {
      return {
        requireFalse: {
          message: 'Feld muss den Wert "false" enthalten'
        }
      };
    }
  }

}
