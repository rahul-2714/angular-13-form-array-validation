import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

export function customValidateArrayGroup(): ValidatorFn {
  return (formArray: FormArray): { [key: string]: any } | null => {
    // console.log(formArray);

    let valid: boolean = true;
    const allValues = formArray.controls.map((x) => x.value.skillName);
    const alljobprofileValues = formArray.controls.map(
      (x) => x.value.jobprofile
    );

    formArray.controls.forEach((x: FormGroup) => {
      // valid = valid && x.value.name == 'a';
      // console.log(x.value.skillName);
      console.log(allValues);

      console.log(
        't',
        x.value.skillName,
        getElementCount(x.value.skillName, allValues)
      );
      if (getElementCount(x.value.skillName, allValues) > 1) {
        console.log(x.value.skillName);

        x['controls'].skillName.setErrors({ notUniqueskillName: true });
        valid = false;
      } else {
        x['controls'].skillName.setErrors({ notUniqueskillName: false });
      }

      // shdbfhdbfhdsbfh
      if (getElementCount(x.value.jobprofile, alljobprofileValues) > 1) {
        console.log(x.value.skillName);

        x['controls'].jobprofile.setErrors({ notUniqujobprofilee: true });
        valid = false;
      } else {
        x['controls'].jobprofile.setErrors({ notUniqujobprofilee: false });
      }
    });
    return valid ? null : { error: 'Not all values are unique' };
  };
}

function getElementCount(elem, arr: any[]) {
  return arr.filter((x) => x === elem).length;
}
