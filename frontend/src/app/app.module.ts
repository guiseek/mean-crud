import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { PagesModule } from './pages/pages.module';
import { UsersService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AuthModule,
    PagesModule,
  ],
  providers: [AuthService, AuthGuardService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
