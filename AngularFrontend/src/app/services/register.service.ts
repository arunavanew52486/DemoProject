import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    URL = 'http://localhost:8080/register';

    constructor(private _http: HttpClient) {}

    login(data: any) {
        // console.log(data);
        this._http.post(this.URL, data).subscribe(data => {
            console.log("Registered new User: ", data);
        })
    }
}
