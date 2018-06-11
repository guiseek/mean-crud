import { Component } from '@angular/core';
import { UsersService } from './user.service';
interface Alert {
  type?: string;
  message?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users;
  alert: Alert;
  id: string;
  user;
  constructor(private usersService: UsersService) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.users = this.usersService.list();
  }
  update(user) {
    this.id = user._id;
    this.user = user;
  }
  remove(user) {
    if (confirm('Remover ' + user.nome + '?')) {
      this.usersService.remove(user._id).subscribe(res => {
        this.alert = res;
        this.getUsers();
      })
    }
  }
  submit(user) {
    if (this.id) {
      this.usersService.update(this.id, user).subscribe(res => {
        this.alert = res;
        this.alert.type = 'success';
        this.getUsers();
      });  
    } else {
      this.usersService.save(user).subscribe(res => {
        this.alert = res;
        this.alert.type = 'success';
        this.getUsers();
      })
    }
    this.id = null;
  }
}
