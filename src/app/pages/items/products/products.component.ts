import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CardsApiService } from '../../../services/api/cards-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cartas: any[] = []; 
  sets: any[] = [];

  constructor(private cardsApiService: CardsApiService) { }

  ngOnInit(): void {
    this.cargarSets();
  }


  cargarSets(): void {
    this.cardsApiService.getPokemonAllSets().subscribe({
      next: (sets) => {
        this.sets = sets.data; 
        console.log(sets.data); 
      },
      error: (error) => {
        console.error('Error al cargar los sets:', error);
      }
    });
  }


}
