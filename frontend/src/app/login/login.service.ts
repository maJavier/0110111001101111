import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginService {
    constructor() { }
    addHeaders() {
        let headers = new Headers();
        headers.append('', 'application/json');
        return headers;
    }
}
