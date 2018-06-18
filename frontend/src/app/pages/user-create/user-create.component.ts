import { UsersService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }
  create(user) {
    this.usersService.save(user).subscribe(res => {
      this.router.navigate(['users-list']);
    });
  }

}
