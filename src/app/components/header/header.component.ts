import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search/search.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  

  constructor(private themeService: ThemeService, 
    private searchService: SearchService,
        private router: Router
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

  goToLogin() {
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
