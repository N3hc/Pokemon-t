import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search/search.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private themeService: ThemeService, 
    private searchService: SearchService
  ) {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  searchTerm: string = '';

  onSearch() {
    if (this.searchTerm.trim()) {
      this.searchService.setSearchTerm(this.searchTerm);
    } else {
      this.searchService.setSearchTerm('Pikachu');
    }
  }

  isDarkMode: boolean = false;



  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
