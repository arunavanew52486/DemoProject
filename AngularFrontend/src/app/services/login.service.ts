import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    URL = 'http://localhost:3000/users';

    constructor(private _http: HttpClient) {}

    login(data: any) {
        // console.log(data);
        this._http.post(this.URL, data)
    }
}
