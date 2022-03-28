import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'drinks';

  constructor(private user: ApiService) {
    // this.user.getData().subscribe((data) => console.log(data));
  }
}
