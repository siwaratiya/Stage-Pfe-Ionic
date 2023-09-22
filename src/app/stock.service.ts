import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/stock/stocks';

  constructor(private http: HttpClient) { }

  getStocksList(id: number): Observable<any> {
     return this.http.get(this.baseUrl + '/' + id)
  }
}