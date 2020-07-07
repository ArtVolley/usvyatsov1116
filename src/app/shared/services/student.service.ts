import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyStudent } from '../student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseApi = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  groups = 
    [
      { group: '181-324'},
      { group: '181-325'},
      { group: '191-257'},
    ]
  directions = 
    [
      { direction: 'САПР'},
      { direction: 'ВЕБ'},
      { direction: 'ИНБЕЗ'},
    ]

  getStudent(){
    return this.http.get(`${this.baseApi}students`).toPromise();
  }

  addStudent(data: MyStudent){
    return this.http.post(`${this.baseApi}students`, data).toPromise();
  }

  // getStudentById(id: number): Promise<any> {
  //   return this.http.get(`${this.path}/${id}`).toPromise();
  // }

  // postStudent(data: any): Promise<any> {
  //   return this.http.post(`${this.path}`, data).toPromise();
  // }

  // putStudentById(id: number, data: any): Promise<any> {
  //   return this.http.put(`${this.path}/${id}`, data).toPromise();
  // }


  deleteStudent(data) {
    return this.http.delete(`${this.baseApi}students/${data}`).toPromise();
  }

  changeStudent(data: MyStudent) {
    return this.http.put(`${this.baseApi}students/${data.id}`, data).toPromise();
  }

  getGroups(){
    return this.groups;
  }
  
  getDirections(){
    return this.directions;
  }
}