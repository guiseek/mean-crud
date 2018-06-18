import { SearchComponent } from './../users/search/search.component';
import { ListComponent } from './../users/list/list.component';
import { FormComponent } from './../users/form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    PagesRoutingModule
  ],
  entryComponents: [
    ListComponent,
    FormComponent,
    SearchComponent
  ],
  declarations: [UsersListComponent, UserCreateComponent, UserEditComponent]
})
export class PagesModule { }
