import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private _httpLogin: LoginService, private _router: Router, private _httpUser: UserService) {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        })
    }

    onSubmit() {
        // console.log(this.loginForm.value)
        this._httpLogin.login(this.loginForm.value).subscribe((data) => {
            console.log(data);
            // this._router.navigateByUrl('/userDetails');
        //     this._httpUser.getUserByEmail(this.loginForm.value!.email).subscribe((user) => {
        //         console.log(user)
        //     })
            // this._httpUser.getUserByEmail(this.loginForm.value!.email).subscribe((user) => {console.log(user)})
        })
    }
}
