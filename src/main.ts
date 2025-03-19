// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { CardsApiService } from './app/services/api/cards-api.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; 
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  
    CardsApiService,
    [provideRouter(routes)]
  ]
}).catch(err => console.error(err));
