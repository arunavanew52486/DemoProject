import { Component } from '@angular/core';
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

    constructor(private _httpRegister: RegisterService) {
        this.registerForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            name: new FormGroup({
                firstName: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]*$/)]),
                lastName: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]*$/)]),
            }),
            mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]),
            gender: new FormControl(null),
            age: new FormControl(null, [Validators.min(0), Validators.max(150)]),
            address: new FormGroup({
                country: new FormControl(null, Validators.pattern(/^[A-Za-z\s]*$/)),
                state: new FormControl(null, Validators.pattern(/^[A-Za-z\s]*$/)),
                city: new FormControl(null, Validators.pattern(/^[A-Za-z\s]*$/)),
                pin: new FormControl(null, [Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)]),
                area: new FormControl(null, [Validators.pattern(/^[A-Za-z\s,.]*$/), Validators.maxLength(100)]),
                landmark: new FormControl(null, Validators.pattern(/^[A-Za-z\s,]*$/)),
            }),
            password: new FormControl(null, Validators.required)
            // password: new FormControl(null, Validators.compose([Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$-_])[0-9a-zA-Z!@#$-_]*$/)]))
            // password: new FormControl(null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]*$/), Validators.pattern(/^[a-zA-Z]*$/), this.containsSpecialCharacterValidator]))
        })
    }

    // containsSpecialCharacterValidator(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: any } | null => {
    //       const value = control.value;
      
    //       if (value === null || value === undefined || value === '') {
    //         // Return null if the value is empty or undefined
    //         return null;
    //       }
      
    //       // Define an array of special characters
    //       const specialCharacters = ['!', '@', '#', '$', '-', '_'];
      
    //       // Check if any special character is present in the value
    //       const containsSpecialCharacter = specialCharacters.some(char => value.indexOf(char) !== -1);
      
    //       // If no special character is found, return an error object
    //       return containsSpecialCharacter ? null : { noSpecialCharacter: true };
    //     };
    // }

    onSubmit() {
        // console.log(this.registerForm)

        this._httpRegister.login(this.registerForm.value);
        this.registerForm.reset();
    }
}
