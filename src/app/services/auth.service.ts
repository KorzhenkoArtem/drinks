import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User, UserRole } from '../users/users';
import { StateService } from './state.service';

interface IFormValues {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public state: StateService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  closeModal() {
    this.dialog.closeAll();
    this.router.navigate(['']);
  }

  checkUser() {
    const testUsers = [{ name: 'test', password: 123456 }];
    const result = testUsers.find((user) => user.name === 'test');
    console.log(result);
  }

  signIn(formData: IFormValues) {
    this.closeModal();
  }

  signUp(formData: IFormValues) {
    const userFromState: User[] = this.state.getUsers();
    console.log('UsersFromState', userFromState);

    const alreadyExist: boolean = Boolean(
      userFromState.find((user) => user.email === formData.email)
    );
    if (alreadyExist) {
      alert('Already exist');
    } else {
      const userToCreate: User = {
        email: formData.email,
        password: formData.password,
        role: UserRole.ADMIN,
      };
      this.state.createUser(userToCreate);
      this.state.setLoggedInUser(userToCreate);
      this.closeModal();
    }
  }
}
