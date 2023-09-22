import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/serv/services';

  constructor(private http: HttpClient) { }
  test() {console.log( this.http.post('http://localhost:8080/springboot-crud-rest/api/serv/services', ""));
}
 
  getServiceList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.get("http://localhost:8080/springboot-crud-rest/api/serv/services",httpOptions);
  }
}

