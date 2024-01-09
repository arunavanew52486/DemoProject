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
}
