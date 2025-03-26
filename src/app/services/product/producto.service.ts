import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  listarusers(): Observable<any> {
    const ext = this.http.get(`${this.apiUrl}/index/user`);
    const message = "No se pudo obtener la lista de usuarios";

    if(ext){
      return ext;
    }else{
      return message;


  }
}

  obtenerProductos(json:any): Observable<any> {
    return this.http.get(`${this.apiUrl}/index/user`, json);
  }
}
