import { Component } from '@angular/core';
import { AuthService, TokenPayload } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    }); 
  }
}