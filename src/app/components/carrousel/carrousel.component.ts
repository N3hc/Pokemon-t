import { Component, HostListener, OnInit } from '@angular/core';
import { CardsApiService } from '../../services/api/cards-api.service';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit {
  sets: any[] = [];
  itemWidth: number = 0;
  translateX: number = 0;
  dataItems = [1, 3, 5, 6];

  constructor(private cardsApiService: CardsApiService) {}

  ngOnInit(): void {
    this.loadSets();
    this.updateItemWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemWidth();
  }

  updateItemWidth() {
    const screenWidth = window.innerWidth;
    let itemsPerView = this.dataItems[0];
    if (screenWidth >= 1200) itemsPerView = this.dataItems[3];
    else if (screenWidth >= 992) itemsPerView = this.dataItems[2];
    else if (screenWidth >= 768) itemsPerView = this.dataItems[1];

    this.itemWidth = 100 / itemsPerView;
  }

  move(direction: number) {
    const totalItems = this.sets.length;
    const itemsPerView = 100 / this.itemWidth;
    const maxTranslate = (totalItems * this.itemWidth) - 100;

    this.translateX += direction * this.itemWidth;

    if (this.translateX < 0) {
      this.translateX = maxTranslate;
    } else if (this.translateX > maxTranslate) {
      this.translateX = 0;

    }
  }


  loadSets(): void {
    this.cardsApiService.getPokemonAllSets().subscribe({
      next: (sets) => {
        this.sets = sets.data.slice(0, 10);;
        console.log(this.sets); 
      },
      error: (error) => {
        console.error('Error al cargar los sets:', error);
      }
    });
  }
}