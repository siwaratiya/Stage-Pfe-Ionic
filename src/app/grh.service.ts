import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrhService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/grh/grhs';
  constructor(private http: HttpClient) { }
  
  getGrhsList(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id)
  }
}