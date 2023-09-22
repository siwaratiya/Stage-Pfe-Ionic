import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiteeService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/actualitees';

  constructor(private http: HttpClient) { }
  test() {console.log( this.http.post('http://localhost:8080/springboot-crud-rest/api/v1/actualitees', "").subscribe());
}
 
  getActualiteesList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.get("http://localhost:8080/springboot-crud-rest/api/v1/actualitees",httpOptions);
  }
}
