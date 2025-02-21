import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductsComponent } from '../items/products/products.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { ResultsComponent} from '../items/results/results.component';
import { DetailComponent } from '../items/detail/detail.component';
import { CarrouselHighlightsComponent } from "../../components/carrousel-highlights/carrousel-highlights.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, CarrouselComponent, ResultsComponent, CarrouselHighlightsComponent, DetailComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {


  selectedProduct: any = null;

  onProductSelected(product: any) {
    this.selectedProduct = product;
  }

  goBack() {
    this.selectedProduct = null;
  }

}
