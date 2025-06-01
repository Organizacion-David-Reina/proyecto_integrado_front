import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig, Credentials, User, UserResponse } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  authUser(corporateMail: string, password: string) {
    const params = new HttpParams()
      .set('corporateMail', corporateMail)
      .set('password', password);
  
    return this._http.get<UserResponse>(`${AppConfig.apiUrl}login`, { params });
  }
  
}
