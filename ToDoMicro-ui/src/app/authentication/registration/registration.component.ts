import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  registerUser(){
    console.warn(this.registerForm.value);
  }
}
