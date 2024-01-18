import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

   
    
  constructor(private http: HttpClient) { }

  consutaltarDados(value: String): Observable<any> {
    
    return this.http.get(`https:/pt.wikipedia.org/w/api.php?action=query&origin=*&prop=revisions&format=json&generator=search&gsrnamespace=0&formatversion=2&gsrlimit=5&gsrsearch=${value}`);
    

    //
    // opensearch https://pt.wikipedia.org/w/api.php?action=query&origin=*&prop=revisions&search=${value}&limit=5&namespace=0&format=json&formatversion=1
  }


}
