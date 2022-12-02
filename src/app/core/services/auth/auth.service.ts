import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // login(email: string, password: string): Observable<User> {
  //   return this.http.post<User>('http://localhost:9000/api/login', {
  //     email,
  //     password,
  //   });
  // }

  login(email: string, password: string): Observable<User> {
    console.log('azertyuiopqsdfghjkl wxcvbn,');
    return this.http.post<User>('http://localhost:9000/api/login', {
      email,
      password,
    });
  }
}
