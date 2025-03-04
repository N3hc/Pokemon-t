import { Component } from '@angular/core';
import { Card } from '../../interfaces/carrousel.interface';

@Component({
  selector: 'app-product-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './product-carrousel.component.html',
  styleUrl: './product-carrousel.component.css'
})
export class ProductCarrouselComponent {
  products: any[] = [];

 Cards: Card[] = [
  {
    id: 'dp5-98',
    name: 'Glaceon',
    image: 'https://images.pokemontcg.io/dp5/98.png',
    setName: 'Majestic Dawn'
  },
  {
    id:'sv2-222',
    name: 'Tyranitar',
    image:"https://images.pokemontcg.io/sv2/222.png",
    setName: 'Paldea Evolved'
  },
  {
    id:'pl2-109',
    name:"Luxray GL",
    image:"https://images.pokemontcg.io/pl2/109.png",
    setName: 'Rising Rivals'
  },
  {
    id:"sm75-78",
    name:"ultra Necrozma GX",
    image:"https://images.pokemontcg.io/sm75/78.png",
    setName:"Dragon Majesty"
  },
  {
    id:"sm12-249",
    name:"Venusaur & Snivy-GX",
    image:"https://images.pokemontcg.io/sm12/249.png",
    setName:"Cosmic Eclipse"
  },
  {
    id:"sm6-146",
    name:"Unit Energy FightingDarknessFairy",
    image:"https://images.pokemontcg.io/sm6/146.png",
    setName:"Forbidden Light"
  }
 ];
}
