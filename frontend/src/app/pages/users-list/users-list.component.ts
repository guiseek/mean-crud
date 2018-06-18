import { Router } from '@angular/router';
import { UsersService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users;
  field: string = 'nome';
  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }
  ngOnInit() {
    this.getUsers();
  }
  search(event) {
    let term = (event.type == 'search') ? event.target.value : event;
    this.users = this.usersService.search({field: this.field, term: term});
  }
  getUsers() {
    this.users = this.usersService.list();
  }
  update(user) {
    this.router.navigate(['user-edit',user._id]);
  }
  remove(user) {
    if (confirm('Remover ' + user.nome + '?')) {
      this.usersService.remove(user._id).subscribe(res => {
        this.getUsers();
      });
    }
  }
}
