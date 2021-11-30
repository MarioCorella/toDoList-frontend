import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  createUserUrl = 'http://localhost:3000/create';


  constructor(private http: HttpClient) { }

  createAccount(userData: IUser) {
    return this.http.post<any>(this.createUserUrl, userData).subscribe(console.log)
  }
}
