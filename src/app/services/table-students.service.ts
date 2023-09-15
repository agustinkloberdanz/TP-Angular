import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableStudentsService {
  private url = 'https://91cc-181-231-122-56.ngrok-free.app/student'

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<any> {
    return this.http.get(`${this.url}/getAll`)
  }

  public addStudent(student: any) {
    return this.http.post(this.url, student)
  }

  public modifyStudent(student: any) {
    return this.http.post(`${this.url}/${student.id}/update`, student)
  }

  public deleteStudent(id: number) {
    return this.http.post(`${this.url}/${id}/delete`, null)
  }




}
