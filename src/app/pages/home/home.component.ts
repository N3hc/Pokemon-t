import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductsComponent } from '../items/products/products.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { ResultsComponent } from '../items/results/results.component';
import { DetailComponent } from '../items/detail/detail.component';
import { SearchService } from '../../services/search/search.service';
import { CarrouselHighlightsComponent } from "../../components/carrousel-highlights/carrousel-highlights.component";
import { ProductCarrouselComponent } from '../../components/product-carrousel/product-carrousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, CarrouselComponent, ResultsComponent, CarrouselHighlightsComponent, DetailComponent, ProductCarrouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private searchService: SearchService) {}

  selectedProduct: any = null;
  selectedCategory: any = null;

  onProductSelected(product: any) {
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.searchService.selectedCategory$.subscribe(category => {
      this.selectedCategory = category;
    });
  }

  CardTest = {
    "id": "sv3pt5-3",
    "name": "Venusaur ex",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2",
      "ex"
    ],
    "hp": "340",
    "types": [
      "Grass"
    ],
    "evolvesFrom": "Ivysaur",
    "rules": [
      "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
    ],
    "abilities": [
      {
        "name": "Tranquil Flower",
        "text": "Once during your turn, if this Pokémon is in the Active Spot, you may heal 60 damage from 1 of your Pokémon.",
        "type": "Ability"
      }
    ],
    "attacks": [
      {
        "name": "Dangerous Toxwhip",
        "cost": [
          "Grass",
          "Grass",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "150",
        "text": "Your opponent's Active Pokémon is now Confused and Poisoned."
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 4,
    "set": {
      "id": "sv3pt5",
      "name": "151",
      "series": "Scarlet & Violet",
      "printedTotal": 165,
      "total": 207,
      "legalities": {
        "unlimited": "Legal",
        "standard": "Legal",
        "expanded": "Legal"
      },
      "releaseDate": "2023/09/22",
      "updatedAt": "2023/09/22 15:00:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/sv3pt5/symbol.png",
        "logo": "https://images.pokemontcg.io/sv3pt5/logo.png"
      }
    },
    "number": "3",
    "artist": "5ban Graphics",
    "rarity": "Double Rare",
    "nationalPokedexNumbers": [
      3
    ],
    "legalities": {
      "unlimited": "Legal",
      "standard": "Legal",
      "expanded": "Legal"
    },
    "regulationMark": "G",
    "images": {
      "small": "https://images.pokemontcg.io/sv3pt5/3.png",
      "large": "https://images.pokemontcg.io/sv3pt5/3_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/sv3pt5-3",
      "updatedAt": "2025/02/25",
      "prices": {
        "holofoil": {
          "low": 0.48,
          "mid": 1.49,
          "high": 8.95,
          "market": 1,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/sv3pt5-3",
      "updatedAt": "2025/02/25",
      "prices": {
        "averageSellPrice": 3.32,
        "lowPrice": 1,
        "trendPrice": 3.37,
        "germanProLow": 0,
        "suggestedPrice": 0,
        "reverseHoloSell": 0,
        "reverseHoloLow": 0,
        "reverseHoloTrend": 0,
        "lowPriceExPlus": 1,
        "avg1": 3.03,
        "avg7": 3.43,
        "avg30": 3.34,
        "reverseHoloAvg1": 0,
        "reverseHoloAvg7": 0,
        "reverseHoloAvg30": 0
      }
    }
  };

  goBack() {
    this.selectedProduct = null;
  }

}
