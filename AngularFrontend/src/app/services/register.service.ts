import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    URL = 'http://localhost:8080/register';

    constructor(private _http: HttpClient) {}

    register(data: any) {
        // console.log(data);
        return this._http.post(this.URL, data);
    }
}
