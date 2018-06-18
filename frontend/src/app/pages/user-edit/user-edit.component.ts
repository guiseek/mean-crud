import { UsersService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: Observable<any>;
  id: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    })
  }
  getUser(id): void {
    this.id = id;
    this.user = this.usersService.get(id);
  }
  update(user) {
    this.usersService.update(this.id, user).subscribe(res => {
      this.router.navigate(['users-list']);
    });
  }

}
