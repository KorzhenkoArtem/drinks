import { Component, OnInit } from '@angular/core';
import { Cocktail, ApiService } from '../api.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
})
export class CocktailsComponent implements OnInit {
  public data: Cocktail[] = [];
  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCocktails().subscribe((resp) => {
      this.data = resp.drinks;
    });
  }
}
