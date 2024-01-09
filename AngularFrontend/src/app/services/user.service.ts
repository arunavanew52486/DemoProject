import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    URL = 'http://localhost:8080/getuser';

    constructor(private _http: HttpClient) {}

    getUserByEmail(email: string) {
        // console.log(email)
        // return this._http.get(`${this.URL}/${email}`).subscribe((data) => {
        //     console.log(data);
        // })
        return this._http.get(`${this.URL}/${email}`);
        // console.log((`${this.URL}/${email}`))
    }
}
