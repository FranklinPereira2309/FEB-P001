import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  private apiUrl='https://www.mediawiki.org/wiki/API:Main_page';
  
  constructor(private http: HttpClient) { }

  consutaltarDados(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
