// json-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class JsonLoaderService {

  private local = 'assets/veiculos.json';  

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any[]> {
    return this.http.get<any[]>(this.local);
  }
  
}
