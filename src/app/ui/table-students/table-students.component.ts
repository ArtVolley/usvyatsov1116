import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MyStudent } from 'src/app/shared/student.model';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit{

  directions = this.studentService.getDirections();
  @Input() title: string;
  @Input() students: MyStudent[] = [];
  _students;
  
  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editStudent = new EventEmitter<MyStudent>();
  

  constructor(private studentService: StudentService) { 
    this.getData();
  }
  

  ngOnInit(): void {
  }

  onDeleteStudent(id: number){
    this.deleteWorker.emit(id);
  }

  // getStudentById(id : number){
  //   this.router.navigate([this.router.url, 'edit', id]);
  //   //return this.students.filter((student) => student.id === id);
  // }

  onEditStudent(student : MyStudent)
  {
    // this.router.navigate([this.router.url, 'edit', id]);
    this.editStudent.emit(student);
  }

  async getData() {
    try {
      return this._students = await this.studentService.getStudent();
    } catch (err) {
      console.error(err);
    }
  }
  // async getData() {
    
  //   try {

  //     let students = this.studentService.getAll();
  //     this.students = isNullOrUndefined(await students) ? [] : await students;
  //     // this.userData = new MatTableDataSource(this.users);
  //     // this.userData.sort = this.users.sort();

    
  //     let now = new Date();

  //     for (let i = 0; i < this.students.length; i++) {

  //       let x = (this.students[i].birthdate).split("-");

  //       if ((now.getFullYear() > parseInt(x[0])) && (now.getMonth() + 1 > parseInt(x[1]))) {

  //         this.students[i].birthdate = (now.getFullYear() - parseInt(x[0])).toString();

  //       } else if ((now.getFullYear() > parseInt(x[0])) && (now.getMonth() + 1 == parseInt(x[1]))) {

  //         if (now.getDate() < parseInt(x[2])) {

  //           this.students[i].birthdate = ((now.getFullYear() - parseInt(x[0])) - 1).toString();

  //         } else if (now.getDate() > parseInt(x[2])) {

  //           this.students[i].birthdate = ((now.getFullYear() - parseInt(x[0]))).toString();

  //         } else if (now.getDate() == parseInt(x[2])) {

  //           this.students[i].birthdate = ((now.getFullYear() - parseInt(x[0]))).toString();
  //         }

  //       } else if ((now.getFullYear() > parseInt(x[0])) && (now.getMonth() + 1 < parseInt(x[1]))) {

  //         this.students[i].birthdate = ((now.getFullYear() - parseInt(x[0]) - 1)).toString();

  //       }

  //     }
    
     
  //   } catch (err) {
     
  //     console.error(err);
    
  //   }


  // }


}
