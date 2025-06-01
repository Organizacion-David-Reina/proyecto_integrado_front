import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig, Class, ReservationRequest, Room, Style } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private _http: HttpClient) { }

  getClasses() {
    return this._http.get<Class[]>(`${AppConfig.apiUrl}classes-list`);
  }

  getStyles() {
    return this._http.get<Style[]>(`${AppConfig.apiUrl}styles-list`);
  }

  getRooms() {
    return this._http.get<Room[]>(`${AppConfig.apiUrl}rooms-list`);
  }

  saveClass(request: Class) {
    return this._http.post<string>(`${AppConfig.apiUrl}save-class`, request);
  }

  updateClass(request: any) {
    return this._http.put<void>(`${AppConfig.apiUrl}update-class`, request);
  }

  saveReservation(request: ReservationRequest) {
    console.log(request)
    return this._http.post<string>(`${AppConfig.apiUrl}save-reservation`, request);
  }

  deleteClass(classId: number) {
    return this._http.delete<void>(`${AppConfig.apiUrl}delete-class/${classId}`);
  }

  deleteReservation(studentId: number, classId: number) {
    return this._http.delete<void>(`${AppConfig.apiUrl}delete-reservation/${studentId}/${classId}`);
  }
}
