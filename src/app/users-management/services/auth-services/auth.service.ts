import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials, User } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/users/administration/';

  constructor(private _http: HttpClient) { }

  getUser(credentials: Credentials) {
    console.log(credentials)
    const params = new HttpParams()
      .set('corporateMail', credentials.corporateMail)
      .set('password', credentials.password);
  
    return this._http.get<User>(`${this.apiUrl}login`, { params });
  }
  
}
