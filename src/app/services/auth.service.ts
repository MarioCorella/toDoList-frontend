import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUrl = 'http://localhost:3000/api/users';
  loginUrl = 'http://localhost:3000/api/login';


  constructor(private http: HttpClient) { }

  createAccount(userData: IUser) {
    return this.http.post<any>(this.userUrl, userData).subscribe(console.log);
  }

  login(loginData) {
    return this.http.post<any>(this.loginUrl, loginData).subscribe(console.log);
  }
}
