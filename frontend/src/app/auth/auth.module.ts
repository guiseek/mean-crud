import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [RegisterComponent, LoginComponent, ProfileComponent]
})
export class AuthModule { }
