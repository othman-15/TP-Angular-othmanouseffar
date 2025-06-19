import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRequest } from '../../models/auth/AuthRequest';
import {AuthService} from '../auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const credentials: AuthRequest = {
      email: this.login,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {

        this.errorMessage = '';
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Email ou mot de passe incorrect.';
        console.error('Erreur de connexion', err);
      }
    });
  }
}
