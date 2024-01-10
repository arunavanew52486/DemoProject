import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    URL = 'http://localhost:8080/login';

    constructor(private _http: HttpClient) {}

    login(data: any) {
        return this._http.post(this.URL, data);
    }
}
