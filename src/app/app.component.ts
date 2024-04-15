import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-driven-form';

  firstName: string = 'Vishwas';
  lastname: string = 'MS';
  mail: string = '';
  dob: string = '';

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
    // console.log(this.form.controls['firstname'].value);
    // console.log(this.form.value.lastname);
    // console.log(this.form.value.email);
    // console.log(this.form.value.country);
    // console.log(this.form.value.gender);
    // console.log(this.form.value.address.country);
    // console.log(this.dob);
  }

  generateUserName() {
    let username = '';
    if (this.firstName.length >= 3) {
      username += this.firstName.slice(0, 3);
    } else {
      username += this.firstName;
    }
    if (this.lastname.length >= 3) {
      username += this.lastname.slice(0, 3);
    } else {
      username += this.lastname;
    }
    let datetime = new Date(this.dob);
    username += datetime.getFullYear();
    username = username.toLowerCase();

    //this.form.value.username = username   /// property value is updated but it will not be populated in formcontrol
    // this.form.controls['username'].value = username;     // will throw error -> read-only

    // this.form.setValue({
    //   address: {
    //     city: this.form.value.address.city,
    //     country: this.form.value.address.country,
    //     postal: this.form.value.address.postal,
    //     region: this.form.value.address.region,
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //   },
    //   dob: this.form.value.dob,
    //   email: this.form.value.email,
    //   firstname: this.form.value.firstname,
    //   gender: this.form.value.gender,
    //   lastname: this.form.value.lastname,
    //   phone: this.form.value.phone,
    //   username: username,
    // });

    this.form.form.patchValue({
      username: username,
      address: {
        country: 'Japan',
      },
    });
  }
}
