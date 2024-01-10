import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    URL = 'http://localhost:8080/getuser';

    constructor(private _http: HttpClient, private _router: Router) {}

    getUserByEmail(email: string|null) {
        return this._http.get(`${this.URL}/${email}`);
    }

    logout() {
        localStorage.clear();
        this._router.navigateByUrl('');
    }
}
