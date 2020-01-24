import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credential} from '../models/credential';


@Injectable()
export class AuthenticationService {
    private url = 'http://localhost:1337/user';
    constructor (
        private http: HttpClient
    ) {

    }
    public login(credential: Credential) {
        return this.http.post(`${this.url}/login`, credential);
    }
    public signup(credential: Credential) {
        return this.http.post(`${this.url}/signup`, credential);
    }
}
