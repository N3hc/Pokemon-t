import { Component, OnInit } from '@angular/core';
import { CardsApiService } from '../../services/api/cards-api.service';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-carrousel-highlights',
  standalone: true,
  imports: [],
  templateUrl: './carrousel-highlights.component.html',
  styleUrl: './carrousel-highlights.component.css'
})
export class CarrouselHighlightsComponent {

  sets:any [] = [];

    constructor(private cardsApiService: CardsApiService
    ) {}

  loadSets(): void {
    this.cardsApiService.getPokemonAllSets().subscribe({
      next: (sets) => {;
        this.sets = sets.data;
        console.log(sets)
      },
      error: (error) => {
        console.error('Error al cargar los sets:', error);
      }
    });
  }

  ngOnInit(): void {
    this.loadSets();
  }

}
