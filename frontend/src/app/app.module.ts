import { UsersService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListComponent } from './users/list/list.component';
import { UsersModule } from './users/users.module';
import { FormComponent } from './users/form/form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule,
  ],
  entryComponents: [
    ListComponent,
    FormComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
