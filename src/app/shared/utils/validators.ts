import { FormGroup } from '@angular/forms';

export class CustomValidators {
  static equalValues(key1: string, key2: string): {} {
    return (group: FormGroup): { [key: string]: boolean } | null => {
      const control1 = group.get(key1);
      const control2 = group.get(key2);

      if (control1 && control1.value && control2 && control2.value) {
        return control1.value === control2.value ? null : { notEquals: true };
      } else {
        return null;
      }
    };
  }
}
