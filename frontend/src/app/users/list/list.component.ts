import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users;
  @Output() update = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  edit(user) {
    console.log("user: ", user);
    this.update.emit(user);
  }
  delete(user) {
    console.log("user: ", user);
    this.remove.emit({...user});
  }
}
