import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    user: any;
    email: string|null;
    profilepic = {
        user: 'assets/gifs/user.gif',
        male: 'assets/gifs/male.gif',
        female: 'assets/gifs/female.gif'
    }

    constructor(private _router: Router, private _httpUserService: UserService) {
        this.email = localStorage.getItem('email');
    }

    ngOnInit(): void {
        this._httpUserService.getUserByEmail(this.email).subscribe((data) => {
            this.user = data;
        })
    }

    logout() {
        this.email = null;
        this.user = null;
        this._httpUserService.logout();
    }

    navigate(route: string) {
        this._router.navigateByUrl(route);
    }

    selectPic(gender: string) {
        switch (gender) {
            case 'MALE':
                return this.profilepic.male;
            case 'FEMALE':
                return this.profilepic.female;
        
            default:
                return this.profilepic.user;
        }
    }
}
