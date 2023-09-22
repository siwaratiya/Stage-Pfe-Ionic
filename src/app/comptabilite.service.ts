import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptabiliteService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/compta/comptabilites';

  constructor(private http: HttpClient) { }
 
getComptabilitesList(id: number): Observable<any> {
 return this.http.get(this.baseUrl + '/' + id)
}
}
