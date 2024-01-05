import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm: FormGroup;

    constructor(private _httpRegister: RegisterService) {
        this.registerForm = new FormGroup({
            email: new FormControl(''),
            mobile: new FormControl(''),
            name: new FormGroup({
                firstName: new FormControl(''),
                lastName: new FormControl(''),
            }),
            gender: new FormControl(''),
            age: new FormControl(null),
            address: new FormGroup({
                country: new FormControl(''),
                state: new FormControl(''),
                pin: new FormControl(''),
                city: new FormControl(''),
                landmark: new FormControl(''),
                area: new FormControl(''),
            }),
            password: new FormControl('')
        })
    }

    onSubmit() {
        // console.log(this.registerForm.value)
        this._httpRegister.login(this.registerForm.value);
        this.registerForm.reset();
    }
}
