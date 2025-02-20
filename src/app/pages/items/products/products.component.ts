import { Component, OnInit } from '@angular/core';
import { CardsApiService } from '../../../services/api/cards-api.service';
import { SearchService } from '../../../services/search/search.service';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {

  cards: any[] = [];
  categories: any[] = [];

  constructor(private cardsApiService: CardsApiService,
              private searchService: SearchService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.searchService.searchTerm$,
      this.searchService.selectedCategory$
    ]).subscribe(([query, category]) => {
      if (query) {
        this.searchCards(query);
        console.log("paso 1")
      } else if (category) {
        this.searchCardsFromSet(category);
        console.log("paso 2")
      } else {
        this.loadCards();
        console.log("paso 3")
      }
    });
  }

  loadCards(): void {
    this.cards = [];
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
    this.cards = [];

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

  searchCardsFromSet(query: string): void {
    this.cards = [];

    this.cardsApiService.getPokemonsFromSets(query).subscribe({
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
