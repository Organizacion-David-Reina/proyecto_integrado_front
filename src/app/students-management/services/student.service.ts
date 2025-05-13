import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig, Student } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

    saveStudent(request: Student) {
      return this._http.post<string>(`${AppConfig.apiUrl}save-student`, request);
    }

    getAllStudents() {
      return this._http.get<Student[]>(`${AppConfig.apiUrl}students-list`);
    }

    updateStudent(request: Student) {
      return this._http.put<void>(`${AppConfig.apiUrl}update-student`, request);
    }
}
