import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class TableStudentsService {
  private url = 'https://788c-201-179-13-140.ngrok-free.app/student'

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<any> {
    return this.http.get(`${this.url}/getAll`)
  }

  public addStudent(student: Student) {
    return this.http.post(this.url, student)
  }

  public modifyStudent(student: Student) {
    return this.http.post(`${this.url}/${student.id}/update`, student)
  }

  public deleteStudent(id: number) {
    return this.http.post(`${this.url}/${id}/delete`, null)
  }




}
