import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PossService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/poss';
  constructor(private http: HttpClient) { }

getPosssList(id: number): Observable<any> {

  return this.http.get(this.baseUrl + '/' + id)
  }
}
