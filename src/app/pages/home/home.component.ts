import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
  imports: [RouterOutlet, HeaderComponent],
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


  goBack() {
    this.selectedProduct = null;
  }

}
