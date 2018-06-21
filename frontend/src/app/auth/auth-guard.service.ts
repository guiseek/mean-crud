import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}
  canActivate() {
    console.log(this.auth);
    // if (!this.auth.isLoggedIn()) {
    //   this.router.navigateByUrl('/');
    //   return false;
    // }
    return true;
  }
}