import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private myClient: HttpClient) {}

  baseUrl = 'http://localhost:3000/users';

  getAllUsers() {
    return this.myClient.get(this.baseUrl);
  }

  getUserById(id) {
    return this.myClient.get(this.baseUrl + '/' + id);
  }

  AddNewUser(user) {
    return this.myClient.post(this.baseUrl, user);
  }

  DeleteById(id) {
    return this.myClient.delete(this.baseUrl + '/' + id);
  }
}
