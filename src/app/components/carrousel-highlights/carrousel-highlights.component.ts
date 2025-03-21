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
  setOri: any[] = [];
  sets:any [] = [];
  any = 0;
  series: string[] = [];
  ids: string[] = [];

    constructor(private cardsApiService: CardsApiService
    ) {}

    loadSets(): void {

      this.cardsApiService.getPokemonAllSets().subscribe({
        next: (sets) => {
          const set = sets.data;

          this.sets = set;
          this.setOri = set;

          // Usar un Set para obtener valores únicos
          const seriesSet = new Set<string>();
          const seriesSet2 = new Set<string>();
          this.sets.forEach((set) => seriesSet.add(set.series));
          this.sets.forEach((set) => seriesSet2.add(set.id));

          // Convertir el Set de nuevo a un array
          this.series = Array.from(seriesSet);
          this.ids = Array.from(seriesSet2);

          console.log(sets);
          console.log(this.series);
          console.log(this.ids);
        },
        error: (error) => {
          console.error('Error al cargar los sets:', error);
        }
      });
    }

    ngOnInit(): void {
      this.loadSets();
    }

    SearchTime(): void {
      this.sets = this.sets.sort((a: any, b: any) => a.releaseDate.localeCompare(b.releaseDate));
      this.any = 1;
    }

    totalSearchSets(): void {
      this.sets = this.sets.sort((a: any, b: any) => a.total - b.total);
      this.any = 1;
    }

    originalPos(): void {
      this.sets = this.setOri;
      this.any = 0;
    }

}
