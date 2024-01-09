import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm: FormGroup;

    constructor(private _router: Router, private _httpRegister: RegisterService) {
        this.registerForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(150)]),
            name: new FormGroup({
                firstName: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]*$/), Validators.minLength(2), Validators.maxLength(50)]),
                lastName: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]*$/), Validators.minLength(2), Validators.maxLength(50)]),
            }),
            mobileNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]),
            gender: new FormControl(null),
            age: new FormControl(null, [Validators.min(0), Validators.max(150)]),
            address: new FormGroup({
                country: new FormControl(null, [Validators.pattern(/^[A-Za-z\s]*$/), Validators.maxLength(25)]),
                state: new FormControl(null, [Validators.pattern(/^[A-Za-z\s]*$/), Validators.maxLength(25)]),
                city: new FormControl(null, [Validators.pattern(/^[A-Za-z\s]*$/), Validators.maxLength(25)]),
                pin: new FormControl(null, [Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)]),
                area: new FormControl(null, [Validators.pattern(/^[A-Za-z\s:,.-]*$/), Validators.maxLength(100)]),
                landmark: new FormControl(null, [Validators.pattern(/^[A-Za-z\s,]*$/), Validators.maxLength(50)]),
            }),
            password: new FormControl(null, [Validators.required, Validators.maxLength(50)])
        })
    }

    onSubmit() {
        this._httpRegister.register(this.registerForm.value).subscribe(data => {
            console.log("Registered new User: ", data);
            this.registerForm.reset();
            this._router.navigateByUrl('/');
        });
    }
}
