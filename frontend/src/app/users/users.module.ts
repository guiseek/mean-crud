import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
// import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // UsersRoutingModule
  ],
  declarations: [ListComponent, FormComponent, SearchComponent],
  exports: [
    ListComponent,
    FormComponent,
    SearchComponent
  ]
})
export class UsersModule { }
