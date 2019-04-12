import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post("http://localhost:5000/login",
    {username: username, password: password}, httpOptions);
  }

  signup(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post("http://localhost:5000/register",
    {username: username, password: password}, httpOptions);
  }

  getUsers(): Observable<any> {
    return this.httpClient.get("http://localhost:5000/users");
  }
}
