import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cocktail {
  strCategory: string;
}

export interface CocktailsResponse {
  drinks: Cocktail[];
}

export interface Beer {
  id: number;
  name: string;
  first_brewed: Date;
}
export interface BeersResponse {
  drinks: Beer[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getData() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getBeersCategories(): Observable<BeersResponse> {
    let url = 'https://api.punkapi.com/v2/beers';
    return this.http.get(url) as Observable<BeersResponse>;
  }

  getCocktailsCategories(): Observable<CocktailsResponse> {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    return this.http.get(url) as Observable<CocktailsResponse>;
  }
}
