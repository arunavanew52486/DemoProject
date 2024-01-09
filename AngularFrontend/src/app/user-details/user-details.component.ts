import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    user: any;
    
    email = 'arunava@gmail.com';

    constructor(private _httpUserService: UserService) {
        // this._httpUserService.getUserByEmail(this.email);
        this._httpUserService.getUserByEmail(this.email).subscribe((data) => {
            // console.log(data);
            this.user = data;
            console.log(this.user);
        })
    }

    onInit() {
        // this._httpUserService.getUserByEmail(this.email).subscribe((data) => {
        //     console.log(data);
        // })
        // this._httpUserService.getUserByEmail(this.email);
    }
}
