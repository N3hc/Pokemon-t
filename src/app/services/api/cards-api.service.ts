
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsApiService {

  private apiUrl = 'https://api.pokemontcg.io/v2';

  private apiToken = '0de19d2a-b166-429a-ab0d-a6c0f576d138'; 

  constructor(private http: HttpClient) { }

  getBaseSetCards(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });

    const params = {
      q: 'set.id:sv3pt5',
    };

    return this.http.get(this.apiUrl + '/cards', { headers, params });
  }

  getPokemonAllSets(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });
  
    const params = {
      //q: 'legalities.standard:legal'
    }; 
  
    return this.http.get(this.apiUrl + '/sets', { headers, params });
  }
}

