import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get('http://localhost:3000/users');
  }
  save(user) {
    return this.http.post('http://localhost:3000/users', user);
  }
  update(id, user) {
    return this.http.put('http://localhost:3000/users/' + id, user);
  }
  remove(id) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }
  get(id) {
    return this.http.get('http://localhost:3000/users/' + id);
  }
  search(term) {
    return this.http.post('http://localhost:3000/users/search', term);
  }
}
