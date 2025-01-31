import { Component, OnInit } from '@angular/core';
import { CardsApiService } from '../../../services/api/cards-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  cards: any[] = [];

  constructor(private cardsApiService: CardsApiService) {}
  
  ngOnInit(): void {
    this.loadSets();
  }

  loadSets(): void {
    this.cardsApiService.getBaseSetCards().subscribe({
      next: (cards) => {
        this.cards = cards.data;
        console.log(cards);
      },
      error: (error) => {
        console.error('Error al cargar los sets:', error);
      }
    });
  }

}
