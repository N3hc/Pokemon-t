import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductsComponent } from '../items/products/products.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { SearchService } from '../../services/search/search.service';
import { ResultsComponent} from '../items/results/results.component';
import { CarrouselHighlightsComponent } from "../../components/carrousel-highlights/carrousel-highlights.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, CarrouselComponent, ResultsComponent, CarrouselHighlightsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private searchService: SearchService) {}

  handleSearch(query: string) {
    this.searchService.setSearchTerm(query);
  }

}
