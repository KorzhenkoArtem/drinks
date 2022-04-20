import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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

  onSubmit(form: NgForm) {
    localStorage.setItem('form-data', JSON.stringify(form.value));
    form.reset();
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
