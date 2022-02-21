import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    return this.http.get(url);
  }
}
