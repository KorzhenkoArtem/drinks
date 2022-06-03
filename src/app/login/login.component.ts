import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(LoginPopup);
  }
}

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginPopup {
  isLoginMode = true;
  router: any;

  constructor(public auth: AuthService) {}

  onSubmit(form: NgForm) {
    if (this.isLoginMode) {
      this.auth.signUp(form.value);
    } else {
      this.auth.signIn(form.value);
    }
    form.reset();
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
