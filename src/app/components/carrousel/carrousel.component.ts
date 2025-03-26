import { Component, HostListener, EventEmitter, OnInit, Output } from '@angular/core';
import { CardsApiService } from '../../services/api/cards-api.service';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit {
  sets: any[] = [];
  currentIndex = 0;
  index = 0;

  constructor(private cardsApiService: CardsApiService,
    private searchService: SearchService
  ) { }

  selectCategory(category: string) {
    this.searchService.setCategory(category);
  }


  ngOnInit(): void {
    this.loadSets();
  }

  loadSets(): void {
    this.cardsApiService.getPokemonAllSets().subscribe({
      next: (sets) => {
        this.sets = sets.data;
        console.log(sets)
      },
      error: (error) => {
        console.error('Error al cargar los sets:', error);
      }
    });
  }


  move(direction: number): void {
    const totalItems = this.sets.length;
    this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
  }

  getVisibleIndices(): number[] {
    const totalItems = this.sets.length;
    const visibleIndices = [];
    for (let i = -2; i <= 2; i++) {
      const index = (this.currentIndex + i + totalItems) % totalItems;
      visibleIndices.push(index);
    }
    return visibleIndices;
  }

  trackByIndex(index: number): number {
    return index;
  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}