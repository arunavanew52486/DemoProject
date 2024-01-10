import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    loggedIn: boolean = false;
    
    constructor(private _router: Router, private _httpUserService: UserService) {
        if(localStorage.getItem('email')) this.loggedIn = true;
        else this.loggedIn = false;
    }

    navigate(destination: any) {
        this._router.navigateByUrl(destination)
    }

    logout() {
        this._httpUserService.logout();
        this.loggedIn = false;      // use signals
    }
}
