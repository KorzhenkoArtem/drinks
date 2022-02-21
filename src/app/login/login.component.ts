import { Component, OnInit } from '@angular/core';
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
})
export class LoginPopup {}
