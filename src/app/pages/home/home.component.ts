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
import { ProductoService } from '../../services/product/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,ProductsComponent,CarrouselComponent,ResultsComponent,DetailComponent,CarrouselHighlightsComponent,ProductCarrouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = [];
  constructor(private searchService: SearchService, private productoService: ProductoService) {}

  selectedProduct: any = null;
  selectedCategory: any = null;

  onProductSelected(product: any) {
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.searchService.selectedCategory$.subscribe(category => {
      this.selectedCategory = category;
    });
    this.productoService.obtenerProductos().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }


  goBack() {
    this.selectedProduct = null;
  }

}
