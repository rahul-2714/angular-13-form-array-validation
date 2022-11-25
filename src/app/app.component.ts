import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { customValidateArrayGroup } from './validatorRet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  jobFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.jobFormGroup = this.formBuilder.group({
      fullName: [''],
      skills: this.formBuilder.array(
        [this.getSkillFormGroup()],
        customValidateArrayGroup()
      ),
    });
  }

  addSkill() {
    let skillsArray = <FormArray>this.jobFormGroup.controls.skills;
    skillsArray.push(this.getSkillFormGroup());
    console.log(this.jobFormGroup);
  }

  getSkillFormGroup() {
    return this.formBuilder.group({
      skillName: [''],
      jobprofile: [''],
    });
  }

  get f() {
    return this.jobFormGroup.get('skills')['controls'];
  }
}
