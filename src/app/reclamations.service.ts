import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from './Reclamation';

@Injectable({
  providedIn: 'root'
})

export class ReclamationsService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/reclama/reclamations';

  constructor(private http: HttpClient) { }
  test() {
    console.log(this.http.post('http://localhost:8080/springboot-crud-rest/api/reclama/reclamations', "").subscribe());
  }

  createReclamation(reclamation: Object): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post("http://localhost:8080/springboot-crud-rest/api/reclama/addreclamation", reclamation);
    //return this.http.post(`${this.baseUrl}`, reclamation);
  }
  getReclamationsList(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id)
   
  }
  postreclamation = (reclamation: Reclamation): Observable<Reclamation> => {
    console.log(reclamation);
    return this.http.post<Reclamation>("http://localhost:8080/springboot-crud-rest" + '/api/reclama/addreclamation', reclamation);
  }
}


