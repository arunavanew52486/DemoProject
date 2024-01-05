import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private _httpLogin: LoginService) {
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        })
    }

    onSubmit() {
        // console.log(this.loginForm.value)
        this._httpLogin.login(this.loginForm.value);
    }
}
