import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiWikiService {

  urlBase = 'https://en.wikipedia.org/w/api.php';
    
  constructor(private http: HttpClient) { }

  consutaltarDados(value: any): Observable<any> {

    
    return this.http.get(this.urlBase, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        origin: '*',
        srsearch: value
      }
    });     

  }
}
 