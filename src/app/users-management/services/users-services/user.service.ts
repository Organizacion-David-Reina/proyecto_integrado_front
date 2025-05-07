import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig, UserRequest, UserResponse } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private _http: HttpClient) { }

  saveUser(request: UserRequest) {
    return this._http.post<string>(`${AppConfig.apiUrl}sign-up`, request);
  }

  getAllUsers() {
    return this._http.get<UserResponse[]>(`${AppConfig.apiUrl}users-list`);
  }

  updateUser(request: UserResponse) {
    return this._http.put<void>(`${AppConfig.apiUrl}update-user`, request);
  }
}
