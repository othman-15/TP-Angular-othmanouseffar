import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from '../models/auth/AuthRequest';
import { AuthResponse } from '../models/auth/AuthResponse';
import { RegisterRequest } from '../models/auth/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8083/api";

  constructor(private http: HttpClient) {}


  register(data: RegisterRequest): Observable<string> {
    return this.http.post(`${this.baseUrl}/auth/register`, data, { responseType: 'text' });
  }
  login(credentials: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }
  logout() {
    localStorage.removeItem('token');

  }
  getFirstName(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = this.decodeToken(token);
      return payload?.firstName || null;  // ici on récupère firstName au lieu de sub
    }
    return null;
  }
  decodeToken(token: string): any {
    if (!token) return null;
    return JSON.parse(atob(token.split('.')[1]));
  }
  getUserName(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = this.decodeToken(token);
      return payload?.sub || null;
    }
    return null;
  }
}
