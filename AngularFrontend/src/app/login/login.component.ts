import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private _httpLogin: LoginService, private _router: Router) {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        })
    }

    onSubmit() {
        // console.log(this.loginForm.value)
        this._httpLogin.login(this.loginForm.value).subscribe((data) => {
            localStorage.setItem('email', this.loginForm.value.email );
            this._router.navigateByUrl('/userDetails');
        })
    }
}
