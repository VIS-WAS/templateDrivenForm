import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registrationForm') form: NgForm;
  genders = [
    {
      id: 'check-male',
      value: 'male',
      display: 'Male',
    },
    {
      id: 'check-female',
      value: 'female',
      display: 'Female',
    },
    {
      id: 'check-other',
      value: 'other',
      display: 'Prefer not to say',
    },
  ];

  OnFormSubmit() {
    console.log(this.form.valid);
    console.log(this.form.controls['firstname'].value);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.country);
    console.log(this.form.value.gender);
  }
}
