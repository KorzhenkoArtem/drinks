import { Injectable } from '@angular/core';
import { User } from '../users/users';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private users: User[] = [];

  private loggedInUser: User | undefined = undefined;
  constructor() {}

  getUsers() {
    return this.users;
  }

  createUser(newUser: User) {
    this.users.push(newUser);
  }
  getLoggedInUser() {
    return this.loggedInUser;
  }
  setLoggedInUser(user: User) {
    this.loggedInUser = user;
  }
}
