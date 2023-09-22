import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private _http: HttpClient) { }
  public loginUserFromRemote(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.post<any>("http://localhost:8080/springboot-crud-rest/api/resgiser/login", user)
  }
  createUser(user: Object): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.post("http://localhost:8080/springboot-crud-rest/api/resgiser/addregister", user);
  }
    postuser = (User: User): Observable<User> => {
    return this._http.post<User>("http://localhost:8080/springboot-crud-rest" + '/api/resgiser/addregister', User);
}
}
