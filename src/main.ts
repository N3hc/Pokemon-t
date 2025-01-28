// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { CardsApiService } from './app/services/api/cards-api.service';  // Importamos el servicio
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  // Usamos provideHttpClient en lugar de HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Proporcionamos HttpClient globalmente
    CardsApiService,  // Registramos el servicio CardsApiService
  ]
}).catch(err => console.error(err));
