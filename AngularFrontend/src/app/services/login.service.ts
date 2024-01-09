import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    URL = 'http://localhost:8080/login';

    constructor(private _http: HttpClient) {}

    login(data: any) {
        // console.log(data);
        return this._http.post(this.URL, data);
        // this._http.post(this.URL, data).subscribe((data) => {
        //     console.log(data)
        // })
    }
}
