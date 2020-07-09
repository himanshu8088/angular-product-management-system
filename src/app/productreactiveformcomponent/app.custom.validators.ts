import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Product } from '../model/app.product.model';

export class CustomValidator {
  static CheckEven(ctrl: AbstractControl): any {
    // tslint:disable-next-line: radix
    const value: number = parseInt(ctrl.value);
    if (value % 2 === 0) {
      return null; // valid
    } else {
      return { odd: true }; // invalid
    }
  }

  static NotExistsIn(list: Array<string>): ValidatorFn {
    return function (ctrl: AbstractControl): any {
      const value: string = ctrl.value
      if (list.indexOf(value) !== -1)
        return { exists: true };
      else
        return null;
    }
  }
}
