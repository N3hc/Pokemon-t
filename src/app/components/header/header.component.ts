import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {  
    if (this.searchTerm.trim()) {
      this.searchEvent.emit(this.searchTerm);
    }
  }

  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
