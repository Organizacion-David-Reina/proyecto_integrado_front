import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig, Teacher } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http: HttpClient) { }

  saveTeacher(request: Teacher) {
    return this._http.post<string>(`${AppConfig.apiUrl}save-teacher`, request);
  }

  getAllTeachers() {
    return this._http.get<Teacher[]>(`${AppConfig.apiUrl}teachers-list`);
  }

  updateTeacher(request: Teacher) {
    return this._http.put<void>(`${AppConfig.apiUrl}update-teacher`, request);
  }

  deleteTeacher(teacherId: number) {
    return this._http.delete<void>(`${AppConfig.apiUrl}delete-teacher/${teacherId}`);
  }
}
