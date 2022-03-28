import { Component, OnInit } from '@angular/core';
import { ApiService, Beer } from '../api.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  public data: Beer[] = [];
  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBeersCategories().subscribe((resp) => {
      this.data = resp.drinks;
    });
  }
}
