import { Component } from '@angular/core';
import { UsersService } from './user.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public enableToSave: boolean = false;
  users;
  alert: any = {};
  id: string;
  user = new FormGroup({
    nome: new FormControl(''),
  });
  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.getUsers();
    this.user.valueChanges.subscribe(() => {
      this.enableToSave = this.user.valid;
    });
  }
  get nome(): any { return this.user.get('nome'); }
  getUsers() {
    this.users = this.usersService.list();
  }
  update(user) {
    this.id = user._id;
    this.user.patchValue(user);
  }
  remove(user) {
    if (confirm('Remover ' + user.nome + '?')) {
      this.usersService.remove(user._id).subscribe(res => {
        this.alert = res;
        this.getUsers();
      })
    }
  }
  submit() {
    console.log(this.user.value);
    if (this.id) {
      this.usersService.update(this.id, this.user.value).subscribe(res => {
        this.alert = res;
        this.getUsers();
      });  
    } else {
      this.usersService.save(this.user.value).subscribe(res => {
        this.alert = res;
        this.getUsers();
      });  
    }
    this.id = null;
    this.user.reset();
  }
}
