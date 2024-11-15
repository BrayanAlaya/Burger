import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    username: '',
    password: '',
    rememberMe: false
  };

  errorMessage = '';

  onSubmit() {
    // Here you would typically make an API call to authenticate the user
    // For demo purposes, we'll just show a mock error message
    if (this.loginData.username !== 'admin' || this.loginData.password !== 'password') {
      this.errorMessage = 'Invalid username or password';
      return;
    }
    
    console.log('Login successful', this.loginData);
    this.errorMessage = '';
  }
}
