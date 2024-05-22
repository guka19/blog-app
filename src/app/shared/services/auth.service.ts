import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { userLogin } from '../models/userLogin';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  
  regUrl = 'http://localhost:3000/users';
  logUrl = 'http://localhost:3000/login';

  setLoggedIn(): void {
    this.isAuthenticatedSubject.next(true);
  }

  register(user: User) {
    user.role = 'user';
    return this.http.post(this.regUrl, user);
  }

  login(user: userLogin) {
    return this.http.post(this.logUrl, user);
  }

  constructor(private http: HttpClient) { }
}
