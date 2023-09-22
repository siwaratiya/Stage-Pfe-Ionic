import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/gestClient/clients'

  constructor(private http: HttpClient) { }

  getClient(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
