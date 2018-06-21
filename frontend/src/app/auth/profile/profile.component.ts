import { Component } from '@angular/core';
import { AuthService, UserDetails } from '../auth.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private auth: AuthService) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      console.log('user: ', user);
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
}