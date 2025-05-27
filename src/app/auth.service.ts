import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.userSubject.next(JSON.parse(savedUser));
    }
  }

  login(user: User) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user)); // ✅ Persist user
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user'); // ✅ Clean up on logout
  }
}
