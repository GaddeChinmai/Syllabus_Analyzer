import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // 👈 add this

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignIn = true;

  signInData = {
    username: '',
    password: ''
  };

  signUpData = {
    username: '',
    email: '',
    passwordHash: '',
    role: ''
  };

  constructor(private http: HttpClient, private router: Router) {} // 👈 add Router

  toggleForm(event: Event): void {
    event.preventDefault();
    this.isSignIn = !this.isSignIn;
  }

  onSignUp(): void {
    if (
      this.signUpData.username &&
      this.signUpData.email &&
      this.signUpData.passwordHash &&
      this.signUpData.role
    ) {
      this.http.post('http://localhost:9099/api/users/register', this.signUpData)
        .subscribe({
          next: () => {
            alert('You are successfully Signed up. Now Log In!');
            this.isSignIn = true;
            this.signUpData = { username: '', email: '', passwordHash: '', role: '' };
          },
          error: (error: HttpErrorResponse) => {
            alert('Sign up failed: ' + (error.error || error.message));
          }
        });
    } else {
      alert('Please fill in all sign-up fields.');
    }
  }

  onSignIn(): void {
    if (this.signInData.username && this.signInData.password) {
      const loginPayload = {
        username: this.signInData.username,
        password: this.signInData.password
      };

      this.http.post('http://localhost:9099/api/users/login', loginPayload)
        .subscribe({
          next: (user: any) => {
            alert('Login successful!');
            console.log('Logged in user:', user);
            // Save user in localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            // Redirect to dashboard
            this.router.navigate(['/dashboard']);
          },
          error: (error: HttpErrorResponse) => {
            alert('Login failed: ' + (error.error || error.message));
          }
        });
    } else {
      alert('Please fill in all login fields.');
    }
  }
}
