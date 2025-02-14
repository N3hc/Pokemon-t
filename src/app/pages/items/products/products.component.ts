import { Component, OnInit } from '@angular/core';
import { CardsApiService } from '../../../services/api/cards-api.service';
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  cards: any[] = [];

  constructor(private cardsApiService: CardsApiService,
              private searchService: SearchService
  ) {}
  
  ngOnInit(): void {
    this.searchService.searchTerm$.subscribe((query) => {
      if (query) {
        this.searchCards(query);
      } else {
        this.loadCards();
      }
    });
  }
  

  loadCards(): void {
    this.cardsApiService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards.data;
        console.log(cards);
      },
      error: (error) => {
        console.error('Error al cargar los sets:', error);
      }
    });
  }
  
    searchCards(query: string): void {
    this.cardsApiService.getUniquePokemon(query).subscribe({
      next: (cards) => {
        this.cards = cards.data;
        console.log(cards);
      },
      error: (error) => {
        console.error('Error al buscar cartas:', error);
      }
    });
  }

}
