import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-driven-form';

  firstName: string = '';
  lastname: string = '';
  mail: string = '';
  dob: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  username: string = '';

  defaultGender: string = 'male';
  defaultCountry: string = 'India';

  IsAgreed: boolean = false;

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
    console.log(this.form);

    this.firstName = this.form.value.firstname;
    this.lastname = this.form.value.lastname;
    this.mail = this.form.value.email;
    this.country = this.form.value.address.country;
    this.region = this.form.value.address.region;
    this.city = this.form.value.address.city;
    this.postal = this.form.value.address.postal;
    this.username = this.form.value.username;
    this.dob = this.form.value.dob;
    this.IsAgreed = this.form.value.agreement;

    // this.resetForm();
  }
  resetForm() {
    this.form.reset();
    this.form.form.patchValue({
      gender: 'male',
      address: {
        country: 'India',
      },
    });
  }

  generateUserName() {
    // this.firstName = this.form.value.firstname;
    // this.lastname = this.form.value.lastname;

    // this.dob = this.form.value.dob;
    let username = '';
    if (this.form.value.firstname.length >= 3) {
      username += this.form.value.firstname.slice(0, 3);
    } else {
      username += this.form.value.firstname;
    }
    if (this.form.value.lastname.length >= 3) {
      username += this.form.value.lastname.slice(0, 3);
    } else {
      username += this.form.value.lastname;
    }
    let datetime = new Date(this.form.value.dob);
    username += datetime.getFullYear();
    username = username.toLowerCase();

    this.form.form.patchValue({
      username: username,
    });
  }
}
